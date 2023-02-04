---
layout: page
title: Implementing Outlier Detection
short: Outlier Detection
parent: docs
navigation: 20
---


Implementing a new outlier detection method
===========================================

Version information: Updated for ELKI 0.8.0
{: class="versioninfo" }

In this tutorial, we want to implement a new outlier detection method. The outlier definition used in this example is to use the standard deviation of the distances to the k nearest neighbors. Inliers are expected to have a low standard deviation, outliers to have a higher standard deviation (note: in reality, it probably is not that easy, but this is good enough for this tutorial).

The two key APIs in ELKI are the [Algorithm](/releases/current/javadoc/elki/algorithm/Algorithm.html) interface (and the associated abstract classes and specializations) and the [OutlierResult](/releases/current/javadoc/elki/result/outlier/OutlierResult.html) classes for output.

The auto-generated code
-----------------------

Again we start with a stub class, implementing the interface [OutlierAlgorithm](/releases/current/javadoc/elki/outlier/OutlierAlgorithm.html).
This only creates a single method in the stub, used for an autorun later.
We do not get a predefined `run()` method, because we can choose between different signatures,
called then by introspection.

{% highlight java %}
package tutorial.outlier;

import elki.data.type.TypeInformation;
import elki.outlier.OutlierAlgorithm;

public class DistanceStddevOutlier implements OutlierAlgorithm {
  @Override
  public TypeInformation[] getInputTypeRestriction() {
    // TODO Auto-generated method stub
    return null;
  }
}
{% endhighlight %}

Completing the stub
-------------------

We add a generics in this example, `O` is the object type that we process.
Since this is dependant on the distance function, we do not make many assumptions,
this is simply a placeholder.
We add a public constructor that takes a distance function and the neighborhood parameter `k`.
Note that the distance function may take any supertype of `O`.
For example, `O` might be `DoubleVector`, but our distance function is defined on `NumberVector`.
We fill out the `getInputTypeRestriction` method, to get input data that matches our distance function
(we return an array, because an algorithm could receive more than one input).

{% highlight java %}
package tutorial.outlier;

import elki.data.type.TypeInformation;
import elki.data.type.TypeUtil;
import elki.distance.Distance;
import elki.outlier.OutlierAlgorithm;
import elki.result.outlier.OutlierResult;

public class DistanceStddevOutlier<O> implements OutlierAlgorithm {
  /**
   * Number of neighbors to get.
   */
  protected int k;

  /**
   * Constructor.
   *
   * @param distance Distance function to use
   * @param k Number of neighbors to use
   */
  public DistanceStddevOutlier(Distance<? super O> distance, int k) {
    super();
    this.distance = distance;
    this.k = k;
  }

  @Override
  public TypeInformation[] getInputTypeRestriction() {
    return TypeUtil.array(distance.getInputTypeRestriction());
  }
}
{% endhighlight %}

Implementing the `run` method
-----------------------------

Now we need to implement the main algorithm.
From the [Algorithm](/releases/current/javadoc/elki/algorithm/Algorithm.html) interface,
we inherit a "magic" `autorun` function. This function uses introspection to find a
suitable `run` function. In particular, it will look for one of the following signatures:

{% highlight java %}
  // We retrieve suitable relations all ourselves
  public OutlierResult run(Database database);

  // Long version, auto-discovered by Algorithm#autorun
  public OutlierResult run(Database database, Relation<O> relation);

  // Short version, auto-discovered by Algorithm#autorun
  public OutlierResult run(Relation<O> relation);
{% endhighlight %}

We need to implement only one of these signatures, the choice is up to us.
The version with `relation` will save us some manual work, so we'll use the shortest.
We'll create the following stub first, that outlines the general flow.
First we initialize the kNN query.
Note that the database *may* choose to use an optimized kNN query here,
which is why it needs to know the distance function and value of *k* in advance.
Then we setup a data storage for double values, process the individual elements and finally wrap the result in the expected API. Note that the outlier result API consists of two part: meta data on the score distribution (including minimum and maximum values) and a relation of the actual scores (which essentially is just our data store).

{% highlight java %}
  public OutlierResult run(Relation<O> relation) {
    // Get a nearest neighbor query on the relation.
    KNNSearcher<DBIDRef> knnq = new QueryBuilder<>(relation, distance).kNNByDBID(k);
    // Output data storage
    WritableDoubleDataStore scores = DataStoreUtil.makeDoubleStorage(
        relation.getDBIDs(), DataStoreFactory.HINT_DB);
    // Track minimum and maximum scores
    DoubleMinMax minmax = new DoubleMinMax();
    
    // Iterate over all objects
    for(DBIDIter iter = relation.iterDBIDs(); iter.valid(); iter.advance()) {
      KNNList neighbors = knnq.getKNN(iter, k);
      // TODO: compute actual scores
    }
    
    // Wrap the result in the standard containers
    OutlierScoreMeta meta = new BasicOutlierScoreMeta(
      // Actually observed minimum and maximum values
      minmax.getMin(), minmax.getMax(),
      // Theoretical minimum and maximum: no variance to infinite variance
      0, Double.POSITIVE_INFINITY);
    DoubleRelation rel = new MaterializedDoubleRelation(database, 
      relation.getDBIDs(), "stddev-outlier", scores);
    return new OutlierResult(meta, rel);
  }
{% endhighlight %}

Finally, we fill in the actual outlier detection algorithm:

{% highlight java %}
    // Iterate over all objects
    for(DBIDIter iter = relation.iterDBIDs(); iter.valid(); iter.advance()) {
      KNNList neighbors = knnq.getKNN(iter, k);
      // Aggregate distances
      MeanVariance mv = new MeanVariance();
      for(DoubleDBIDListIter neighbor = neighbors.iter();
                             neighbor.valid(); neighbor.advance()) {
        // Skip the object itself. The 0 is not very informative.
        if(DBIDUtil.equal(iter, neighbor)) {
          continue;
        }
        mv.put(neighbor.doubleValue());
      }
      // Store score
      scores.putDouble(iter, mv.getSampleStddev());
    }
{% endhighlight %}

Adding a parameterizer
----------------------

Right now, we can invoke the algorithm from Java, but we also want to be able to use the GUI and command line interface. For this we need to implement [Parameterization](/dev/parameterization), namely add a [Parameterizer](/releases/current/javadoc/elki/utilities/optionhandling/Parameterizer.html). This is as *public static inner class named `Par`* (otherwise it will not be found!). The stub obtained from extracting the superclass parameterizer is:

{% highlight java %}
  public static class Par<O> implements Parameterizer {
    @Override
    public Object make() {
      // TODO Auto-generated method stub
      return null;
    }
  }
{% endhighlight %}

We again need to customize this stub slightly: restrict the distance function type, change the return type and override the `makeOptions`. The improved stub then is:

{% highlight java %}
  public static class Par<O> implements Parameterizer {
    /** Distance function to use */
    protected Distance<? super O> distance;

    /** Number of neighbors to get */
    protected int k;
    
    @Override
    public DistanceStddevOutlier<O> make() {
      return new DistanceStddevOutlier<>(distance, k);
    }
  }
{% endhighlight %}

There is not much left to do. The distance function is parameterized by the super class. We need to add a parameter for `k`:

{% highlight java %}
  public static class Par<O> implements Parameterizer<O> {
    /**
     * Option ID for parameterization.
     */
    public static final OptionID K_ID = new OptionID("stddevout.k",
        "Number of neighbors to get for stddev based outlier detection.");

    /**
     * The distance function to use.
     */
    protected Distance<? super O> distance;

    /**
     * Number of neighbors to use.
     */
    protected int k;

    @Override
    public void configure(Parameterization config) {
      new ObjectParameter<Distance<? super O>>(Algorithm.Utils.DISTANCE_FUNCTION_ID, Distance.class, EuclideanDistance.class) //
          .grab(config, x -> distance = x);
      new IntParameter(K_ID) //
          .addConstraint(CommonConstraints.GREATER_THAN_ONE_INT) //
          .grab(config, x -> k = x);
    }

    @Override
    public DistanceStddevOutlier<O> make() {
      return new DistanceStddevOutlier<>(distance, k);
    }
  }
{% endhighlight %}

Note that we enforce `k > 1` in the parameterization API, as the 1 nearest neighbor will usually be the object itself. As you can see, the parameterizer has the purpose of providing a common parameterization interface and the produces the actual Java instance. It connects the UIs to the actual Java code.

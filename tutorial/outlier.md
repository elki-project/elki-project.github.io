---
layout: page
title: Implementing Outlier Detection
short: Outlier Detection
parent: docs
navigation: 20
---


Implementing a new outlier detection method
===========================================

Version information: Updated for ELKI 0.6.5~20141030
{: class="versioninfo" }

In this tutorial, we want to implement a new outlier detection method. The outlier definition used in this example is to use the standard deviation of the distances to the k nearest neighbors. Inliers are expected to have a low standard deviation, outliers to have a higher standard deviation (note: in reality, it probably is not that easy, but this is good enough for this tutorial).

The two key APIs in ELKI are the [Algorithm](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/Algorithm.html) interface (and the associated abstract classes and specializations) and the [OutlierResult](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/result/outlier/OutlierResult.html) classes for output.

The auto-generated code
-----------------------

Again we start with a stub class. As base class we chose [AbstractDistanceBasedAlgorithm](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/AbstractDistanceBasedAlgorithm.html), and implementing the [OutlierAlgorithm](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/OutlierAlgorithm.html) interface forces us to use the result type [OutlierResult](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/result/outlier/OutlierResult.html). The full stub looks like this:

{% highlight java %}
package tutorial.outlier;

import de.lmu.ifi.dbs.elki.algorithm.AbstractDistanceBasedAlgorithm;
import de.lmu.ifi.dbs.elki.algorithm.outlier.OutlierAlgorithm;
import de.lmu.ifi.dbs.elki.data.type.TypeInformation;
import de.lmu.ifi.dbs.elki.database.Database;
import de.lmu.ifi.dbs.elki.distance.distancefunction.DistanceFunction;
import de.lmu.ifi.dbs.elki.logging.Logging;
import de.lmu.ifi.dbs.elki.result.outlier.OutlierResult;

public class DistanceStddevOutlier<O>
    extends AbstractDistanceBasedAlgorithm<O, OutlierResult>
    implements OutlierAlgorithm {
  protected DistanceStddevOutlier(DistanceFunction<? super O> distanceFunction) {
    super(distanceFunction);
  }

  @Override
  public OutlierResult run(Database database) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public TypeInformation[] getInputTypeRestriction() {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  protected Logging getLogger() {
    // TODO Auto-generated method stub
    return null;
  }
}
{% endhighlight %}

(Note: you **may** be missing the `run` method. See below.)

Completing the stub
-------------------

We have two generics in this example. `O` is the object type. Since this is dependant on the distance function, we cannot make many assumptions. We just need to have a type variable and use it consistently. We will also add a class logger and fill out the `getInputTypeRestriction` method (which again is determined by the distance function and the `k` parameter, for the number of neighbors. We also made the constructor `public`.

{% highlight java %}
package tutorial.outlier;

import de.lmu.ifi.dbs.elki.algorithm.AbstractDistanceBasedAlgorithm;
import de.lmu.ifi.dbs.elki.algorithm.outlier.OutlierAlgorithm;
import de.lmu.ifi.dbs.elki.data.type.TypeInformation;
import de.lmu.ifi.dbs.elki.data.type.TypeUtil;
import de.lmu.ifi.dbs.elki.distance.distancefunction.DistanceFunction;
import de.lmu.ifi.dbs.elki.logging.Logging;
import de.lmu.ifi.dbs.elki.result.outlier.OutlierResult;

public class DistanceStddevOutlier<O>
    extends AbstractDistanceBasedAlgorithm<O, OutlierResult>
    implements OutlierAlgorithm {
  /**
   * Class logger
   */
  private static final Logging logger = Logging.getLogger(DistanceStddevOutlier.class);

  /**
   * Number of neighbors to get.
   */
  protected int k;

  /**
   * Constructor.
   * 
   * @param distanceFunction Distance function to use
   * @param k Number of neighbors to use
   */
  public DistanceStddevOutlier(DistanceFunction<? super O> distanceFunction, int k) {
    super(distanceFunction);
    this.k = k;
  }

  @Override
  public OutlierResult run(Database database) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public TypeInformation[] getInputTypeRestriction() {
    return TypeUtil.array(getDistanceFunction().getInputTypeRestriction());
  }

  @Override
  protected Logging getLogger() {
    return logger;
  }
}
{% endhighlight %}

Adding the `run` method
-----------------------

Now we need to implement the main method. Since we have extended [AbstractAlgorithm](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/AbstractAlgorithm.html), we actually have three options for this. The exact signature *cannot* be defined in Java:

{% highlight java %}
  // Java interface version, but implemented in AbstractAlgorithm
  public OutlierResult run(Database database);

  // Full version, auto-discovered by AbstractAlgorithm#run
  public OutlierResult run(Database database, Relation<O> relation);

  // Short version, auto-discovered by AbstractAlgorithm#run
  public OutlierResult run(Relation<O> relation);
{% endhighlight %}

We need to implement only one of these signatures, the choice is up to us. The versions with `relation` will save us some manual work, so we'll go with these. We'll create the following stub first, that outlines the general flow. First we initialize the kNN query. Note that the database *may* choose to use an optimized kNN query here; which is why it needs to know the distance function and value of *k* in advance. Then we setup a data storage for double values, process the individual elements and finally wrap the result in the expected API. Note that the outlier result API consists of two part: meta data on the score distribution (including minimum and maximum values) and a relation of the actual scores (which essentially is just our data store).

{% highlight java %}
  public OutlierResult run(Database database, Relation<O> relation) {
    // Get a nearest neighbor query on the relation.
    KNNQuery<O> knnq = QueryUtil.getKNNQuery(relation, getDistanceFunction(), k);
    // Output data storage
    WritableDoubleDataStore scores = DataStoreUtil.makeDoubleStorage(
        relation.getDBIDs(), DataStoreFactory.HINT_DB);
    // Track minimum and maximum scores
    DoubleMinMax minmax = new DoubleMinMax();
    
    // Iterate over all objects
    for(DBIDIter iter = relation.iterDBIDs(); iter.valid(); iter.advance()) {
      DBID id = iter.getDBID();
      KNNList neighbors = knnq.getKNNForDBID(id, k);
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
      DBID id = iter.getDBID();
      KNNList neighbors = knnq.getKNNForDBID(id, k);
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
      scores.putDouble(id, mv.getSampleStddev());
    }
{% endhighlight %}

Adding a parameterizer
----------------------

Right now, we can invoke the algorithm from Java (albeit a bit tricky), but we also want to be able to use the GUI and command line interface. For this we need to implement [Parameterization](/dev/parameterization), namely add an [AbstractParameterizer](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/utilities/optionhandling/AbstractParameterizer.html). This is as *public static inner class named `Parameterizer`* (otherwise it will not be found!). The stub obtained from extracting the superclass parameterizer is:

{% highlight java %}
  public static class Parameterizer<O>
      extends AbstractDistanceBasedAlgorithm.Parameterizer<O> {
    @Override
    protected Object makeInstance() {
      // TODO Auto-generated method stub
      return null;
    }
  }
{% endhighlight %}

We again need to customize this stub slightly: restrict the distance function type, change the return type and override the `makeOptions`. The improved stub then is:

{% highlight java %}
  public static class Parameterizer<O>
        extends AbstractDistanceBasedAlgorithm.Parameterizer<O> {
    /** Number of neighbors to get */
    int k;
    
    @Override
    protected void makeOptions(Parameterization config) {
      super.makeOptions(config);
      // TODO: get parameters
    }

    @Override
    protected DistanceStddevOutlier<O> makeInstance() {
      return new DistanceStddevOutlier<O>(distanceFunction, k);
    }
  }
{% endhighlight %}

There is not much left to do. The distance function is parameterized by the super class. We need to add a parameter for `k`:

{% highlight java %}
  public static class Parameterizer<O>
        extends AbstractDistanceBasedAlgorithm.Parameterizer<O> {
    /**
     * Option ID for parameterization.
     */
    public static final OptionID K_ID = new OptionID("stddevout.k",
        "Number of neighbors to get for stddev based outlier detection.");

    /**
     * Number of neighbors to get
     */
    int k;

    @Override
    protected void makeOptions(Parameterization config) {
      // The super class has the distance function parameter!
      super.makeOptions(config);
      IntParameter kParam = new IntParameter(K_ID);
      kParam.addConstraint(new GreaterConstraint(1));
      if(config.grab(kParam)) {
        k = kParam.getValue();
      }
    }

    @Override
    protected DistanceStddevOutlier<O> makeInstance() {
      return new DistanceStddevOutlier<O>(distanceFunction, k);
    }
  }
{% endhighlight %}

Note that we enforce `k > 1` in the parameterization API, as the 1 nearest neighbor will usually be the object itself. As you can see, the parameterizer has the purpose of providing a common parameterization interface and the produces the actual Java instance. It connects the UIs to the actual Java code.

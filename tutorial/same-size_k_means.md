---
layout: page
title: Same-Size K-Means
parent: docs
navigation: 30
---


Same-size k-Means Variation
===========================

Version information: ELKI 0.8.0
{: class="versioninfo" }

In this tutorial, we will create a **k-means variation** that produces clusters of the same size.

The basic idea of the algorithm is as follows:

Initialization:

1. Compute the desired cluster size, n/k.
2. Initialize means, preferably with k-means++
3. Order points by the distance to their nearest cluster minus distance to the farthest cluster (= biggest benefit of best over worst assignment)
4. Assign points to their preferred cluster until this cluster is full, then resort remaining objects, without taking the full cluster into account anymore

This initialization is not optimal - feel free to contribute an improvement to this tutorial! - in particular for the last cluster. But it will do as an initialization method.

Additional data structure: for every cluster we keep a list of objects willing to leave the cluster. This makes it easier to find transfer candidates. Whenever we have an element that wants to enter a cluster, the top element wanting to leave will be considered for switching. (It may be worth a try to consider more than the top element!)

Iteration:

1. Compute current cluster means
2. For each object, compute the distances to the cluster means
3. Sort elements based on the delta of the current assignment and the best possible alternate assignment.
4. For each element by priority:
   1. For each other cluster, by element gain, unless already moved:
      1. If there is an element wanting to leave the other cluster and this swap yields and improvement, swap the two elements
      2. If the element can be moved without violating size constraints, move it
   2. If the element was not changed, add to outgoing transfer list.
5. If no more transfers were done (or max iteration threshold was reached), terminate

Convergence can be proven the same way as with k-means: any transfer must decrease variance (and would also happen in k-means).

Room for improvement: better logic for finding optimal transfers, e.g., by solving triangles: object 1 from A to B, object 2 from B to C, object 3 from C to A also preserves sizes!

Auto-generated code
-------------------

Since this is a K-means variant, we can use the base class [AbstractKMeans](/releases/current/javadoc/elki/algorithm/clustering/kmeans/AbstractKMeans.html). Generating the standard methods, adding a logger and choosing the generics yields the following code blueprint.

For the generics, we want to allow arbitrary vector types: `V extends NumberVector`.The cluster model will be a simple `MeanModel` (using a `KMeansModel` instead would trigger Voronoi cell visualization, which is no longer appropriate).
The reason why we have to choose these generics is that the abstract class `AbstractKMeans` is also used, e.g., for KMedians and similar algorithms with looser constraints than KMeans or our new variation.

For the constructor, we *narrow down* the distance function to a `NumberVectorDistance<? super V>`. This would only be automatic if we had this yet another generic in `AbstractKMeans`. This narrower distance function has two properties important to us: A) it can be computed on arbitrary number vectors (including the means, we will be computing) and B) they return a double value. In case you are wondering: yes, in ELKI there exist distance functions not defined on number vectors and not having double values.

{% highlight java %}
package tutorial.clustering;

import elki.clustering.kmeans.AbstractKMeans;
import elki.clustering.kmeans.KMeansInitialization;
import elki.data.NumberVector;
import elki.data.model.MeanModel;
import elki.distance.NumberVectorDistance;
import elki.logging.Logging;

public class SameSizeKMeans<V extends NumberVector>
    extends AbstractKMeans<V, MeanModel> {
  /**
   * Class logger
   */
  private static final Logging LOG = Logging.getLogger(SameSizeKMeans.class);

  /**
   * Constructor.
   *
   * @param distance Distance function
   * @param k Number of neighbors
   * @param maxiter Maximum number of iterations
   * @param initializer
   */
  public SameSizeKMeans(
      NumberVectorDistance<? super V> distance,
      int k, int maxiter, KMeansInitialization initializer) {
    super(distance, k, maxiter, initializer);
  }

  @Override
  protected Logging getLogger() {
    return LOG;
  }
}
{% endhighlight %}

The main method stub
--------------------

Note that no `run` method was generated automatically. This is due to a limitation in Java interfaces, and ELKI allowing multi-relational algorithms. Our algorithm, however, is just single relational. So we can use a very simple `run` method:

{% highlight java %}
  /**
   * Run k-means with cluster size constraints.
   *
   * @param relation relation to use
   * @return result
   */
  @Override
  public Clustering<MeanModel> run(Relation<V> relation) {
    // TODO
    return null;
  }
{% endhighlight %}

In contrast to the [outlier tutorial](/tutorial/outlier), we do not have to implement `getInputTypeRestriction()` - we inherit an appropriate implementation from `AbstractKMeans` (which actually uses the restriction given by the distance function).

Object metadata
---------------

To find the optimal assignment and evaluate transfers, we need some data on the objects ready. We will need some extra memory for this, on the order of O(n\*k). In particular, we want to track the distances from each object to each cluster center, but also which cluster the object is the closest to, and which would be a better choice. For this, we need a simple utility inner class, which we call `Meta`:

{% highlight java %}
  private class Meta {
    /**
     * Distance to the cluster centers.
     */
    double[] dists;

    /**
     * Indexes: primary assignment (current or best), secondary assignment
     * (second best or worst). The actual meaning differs from initialization to
     * iteration phase!
     */
    int primary, secondary;

    /**
     * Constructor.
     * 
     * @param k
     */
    protected Meta(int k) {
      dists = new double[k];
      Arrays.fill(dists, Double.POSITIVE_INFINITY);
      primary = 0;
      secondary = 0;
    }
  }
{% endhighlight %}

to make the code more readable, we also add two utility functions to this inner class. The first, `priority` computes the priority we use in the initialization phase: the difference between the worst and the best assignments. The second, `gain` computes the expected gain from moving the object from the current assignment to a different cluster.

{% highlight java %}
    /**
     * Priority / badness: difference between best and worst. (Assuming that
     * "secondary" is the worst).
     * 
     * @return Priority
     */
    protected double priority() {
      return dists[secondary] - dists[primary];
    }

    /**
     * Gain from switching to cluster i.
     * 
     * @param i Target cluster
     * @return Gain
     */
    protected double gain(int i) {
      return dists[primary] - dists[i];
    }
{% endhighlight %}

and of course we need to build an initial data storage. First, we need to cast the distance function (unless we add yet another generics to the parent class!). Then we get a storage from the data storage layer. Depending on the database size and properties, this can be anything like an array (the default case for static data sets), a hash map (the default for dynamic data sets) or a B-tree (in the future, for data sets that don't fit into main memory).

We then iterate over all objects. `for(DBIDIter id = relation.iterDBIDs(); id.valid(); id.advance()) {` is the usual iterator construct in ELKI. This needs less memory than the usual java `Iterator` classes for [reasons outlined here](/dev/dbids). We then compute the distance to each mean, and track the largest (in `c.primary`) and smallest (in `c.secondary`) such distance to be used in the initialization phase.

{% highlight java %}
  protected WritableDataStore<Meta> initializeMeta(Relation<V> relation, double[][] means) {
    NumberVectorDistance<? super V> df = distance; // local variable
    // The actual storage
    final WritableDataStore<Meta> metas = DataStoreUtil.makeStorage(relation.getDBIDs(),
        DataStoreFactory.HINT_HOT | DataStoreFactory.HINT_TEMP, Meta.class);
    // Build the metadata, track the two nearest cluster centers.
    for(DBIDIter id = relation.iterDBIDs(); id.valid(); id.advance()) {
      Meta c = new Meta(k);
      V fv = relation.get(id);
      for(int i = 0; i < k; i++) {
        final double d = c.dists[i] = df.distance(fv, DoubleVector.wrap(means[i]));
        if(i > 0) {
          if(d < c.dists[c.primary]) {
            c.primary = i;
          }
          else if(d > c.dists[c.secondary]) {
            c.secondary = i;
          }
        }
      }
      metas.put(id, c);
    }
    return metas;
  }
{% endhighlight %}

Performing the initial assignment
---------------------------------

For the initial assignment, we first will need to sort the data set. Technically, we are just sorting references to the database, which can conveniently be done in a `ArrayModifiableDBIDs` class. This class is similar to an `ArrayList<DBID>`, but again will use significantly less memory. Plus, it offers additional functionality. For sorting we need a comparator, which will compare objects by the `priority` method we defined above.

{% highlight java %}
  protected ArrayModifiableDBIDs initialAssignment(List<ModifiableDBIDs> clusters,
      final WritableDataStore<Meta> metas, DBIDs ids) {
    // Build a sorted list of objects, by descending distance delta
    ArrayModifiableDBIDs tids = DBIDUtil.newArray(ids);
    // Our desired cluster size:
    final int maxsize = (tids.size() + k - 1) / k; // rounded up
    // Comparator: sort by largest benefit of assigning to preferred cluster.
    final Comparator<DBIDRef> comp = new Comparator<DBIDRef>() {
      @Override
      public int compare(DBIDRef o1, DBIDRef o2) {
        Meta c1 = metas.get(o1), c2 = metas.get(o2);
        return -Double.compare(c1.priority(), c2.priority());
      }
    };
    // We will use this iterator below. It allows seeking!
    DBIDArrayIter id = tids.iter();
{% endhighlight %}

For the actual initialization, we may need to resort multiple times. We use the variable `start` to track which elements we already processed, and only sort the elements after this. This time we need an advanced iterator: `DBIDArrayIter` can not only move forward, but can also move backward and seek to arbitrary positions in the array. We use this to seek to the starting position of the current iteration.

{% highlight java %}
    // Initialization phase:
    for(int start = 0; start < tids.size();) {
      tids.sort(start, tids.size(), comp);
      for(id.seek(start); id.valid(); id.advance()) {
{% endhighlight %}

We now assign the next element to it's preferred cluster. The cluster cannot be full yet, which we will actually ensure *below*. If you feel uncomfortable, you can easily add an assertion.

{% highlight java %}
        Meta c = metas.get(id);
        // Assigning to best cluster - which cannot be full yet!
        ModifiableDBIDs cluster = clusters.get(c.primary);
        cluster.add(id);
        start++;
{% endhighlight %}

However, after adding an element, it might be full now. In this case, we want to prevent any further objects of being assigned to this cluster, and also re-sort the data set.

{% highlight java %}
        // Now the cluster may have become completely filled:
        if(cluster.size() == maxsize) {
          final int full = c.primary;
{% endhighlight %}

As we can seek back to our current position `start`, we can just use this iterator to go through all remaining objects, and update their preferred cluster assignment, removing the references to the now full cluster. The `continue` taking us to the next iteration (and thus updating the sorting and restarting at `start`) is strictly speaking not necessary: the iterator is at the end of the data set now anyway.

{% highlight java %}
          // Refresh the not yet assigned objects where necessary:
          for(id.advance(); id.valid(); id.advance()) {
            Meta ca = metas.get(id);
            if(ca.primary == full) {
              // Update the best index:
              for(int i = 0; i < k; i++) {
                if(i == full || clusters.get(i).size() >= maxsize) {
                  continue;
                }
                if(ca.primary == full || ca.dists[i] < ca.dists[ca.primary]) {
                  ca.primary = i;
                }
              }
              metas.put(id, ca); // Changed.
            }
          }
          // The next iteration will perform the sorting!
          break; // not really necessary - iterator is at end anyway.
        }
      }
      // Note: we expect Candidate.a == cluster the object is assigned to!
    }
    return tids;
  }
{% endhighlight %}

Note that we ensured that `Meta.primary` contains the cluster number the object is currently assigned to. We do not ensure a particular value for `Meta.secondary`. We could also discard the `tids` array at this point, but we can also just re-use it in the next part.

Updating the means
------------------

For updating the means, we are just going to use the method provided by the abstract super class:

{% highlight java %}
    means = means(clusters, means, relation);
{% endhighlight %}

We also need to update the distances from each object to the current (possibly changed!) means. We will do this in a helper function. In addition, we also track which mean would be the best alternate assignment. So after this run, `Meta.primary` still is the cluster the object is currently assigned to, while `Meta.secondary` now is the best other choice.

{% highlight java %}
  protected void updateDistances(Relation<V> relation, double[][] means,
      final WritableDataStore<Meta> metas) {
    for(DBIDIter id = relation.iterDBIDs(); id.valid(); id.advance()) {
      Meta c = metas.get(id);
      V fv = relation.get(id);
      // Update distances to means.
      c.secondary = -1;
      for(int i = 0; i < k; i++) {
        c.dists[i] = distance.distance(fv, DoubleVector.wrap(means[i]));
        if(c.primary != i) {
          if(c.secondary < 0 || c.dists[i] < c.dists[c.secondary]) {
            c.secondary = i;
          }
        }
      }
      metas.put(id, c); // Changed.
    }
  }
{% endhighlight %}

The refinement procedure
------------------------

This brings us finally to the core of our algorithm: the refinement procedure, which performs Lloyd-Forgy-style iterations to improve the result, but in contrast to these ensures that the cluster sizes remain in the given bounds. First of all, we compute these bounds, in the form of an upper and a lower limit, if the number of objects is not divisible by `k`.

{% highlight java %}
  protected double[][] refineResult(Relation<V> relation,
      double[][] means, List<ModifiableDBIDs> clusters,
      final WritableDataStore<Meta> metas, ArrayModifiableDBIDs tids) {
    // Our desired cluster size:
    final int minsize = tids.size() / k; // rounded down
    final int maxsize = (tids.size() + k - 1) / k; // rounded up
{% endhighlight %}

We also need a different comparator than before, which now uses the `Meta.priority` method we wrote earlier.

{% highlight java %}
    // Comparator: sort by largest gain by transfer
    final Comparator<DBIDRef> comp = new Comparator<DBIDRef>() {
      @Override
      public int compare(DBIDRef o1, DBIDRef o2) {
        Meta c1 = metas.get(o1), c2 = metas.get(o2);
        return Double.compare(c1.priority(), c2.priority());
      }
    };
{% endhighlight %}

We also need a second comparator. The code will follow below; it's not particularly tricky, but sorts an `int[]` array of cluster numbers `[0..k-1]` by increasing distance to the cluster means.

{% highlight java %}
    // List for sorting cluster preferences
    int[] preferences = MathUtil.sequence(0, k)
    // Comparator for this list.
    final PreferenceComparator pcomp = new PreferenceComparator();
{% endhighlight %}

In the idea description of the algorithm we already mentioned transfer lists. We also need to initialize these:

{% highlight java %}
    // Initialize transfer lists:
    ArrayModifiableDBIDs[] transfers = new ArrayModifiableDBIDs[k];
    for(int i = 0; i < k; i++) {
      transfers[i] = DBIDUtil.newArray();
    }
{% endhighlight %}

and can now finally start with the main iteration loop. If `maxiter` is set to `-1` we will be performing an infinite number of iterations, otherwise at most `maxiter` iterations. We then call the helper function above to update the distances and sort the objects by their `Meta.priority`. The `active` counter will be used to detect convergence.

{% highlight java %}
    DBIDArrayIter id = tids.iter(); // Will be used below
    for(int iter = 0; maxiter <= 0 || iter < maxiter; iter++) {
      updateDistances(relation, means, metas);
      tids.sort(comp);
      int active = 0; // Track if anything has changed
{% endhighlight %}

We now iterate over the data set and get the metadata. We now use the second comparator to sort the clusters numbers in `preferences` by their distance to the current object and then iterate over each target cluster.

{% highlight java %}
      for(id.seek(0); id.valid(); id.advance()) {
        Meta c = metas.get(id);
        IntegerArrayQuickSort.sort(preferences, pcomp.select(c));
        ModifiableDBIDs source = clusters.get(c.primary);
        tloop: for(int i : preferences) {
          if(i == c.primary) {
            continue; // Already assigned here
          }
          ModifiableDBIDs dest = clusters.get(i);
{% endhighlight %}

First of all we try to find a waiting transfer partner. The actual transfer will be done by the method `transfer` explained below. Also note that we see yet another iterator variant: `DBIDMIter` is a modifiable iterator - it also has a `remove` method, which we need this time.

{% highlight java %}
          // Can we pair this transfer?
          for(DBIDMIter other = transfers[i].iter(); other.valid(); other.advance()) {
            Meta c2 = metas.get(other);
            if(c.gain(i) + c2.gain(c.primary) > 0) {
              transfer(metas, c2, dest, source, other, c.primary);
              transfer(metas, c, source, dest, id, i);
              active += 2;
              other.remove(); // last, as this invalidates the reference!
              source = dest; // We are assigned here now.
              continue tloop; // Can try another transfer, with next cluster.
            }
          }
{% endhighlight %}

Even if we do not have a transfer partner, we might be able to move the object: if the number of elements was not divisible by `k` it may be possible to move single objects instead of swapping two objects.

{% highlight java %}
          // If cluster sizes allow, move a single object.
          if(c.gain(i) > 0 && (dest.size() < maxsize && source.size() > minsize)) {
            transfer(metas, c, source, dest, id, i);
            active += 1;
            source = dest; // We are assigned here now.
            continue tloop;
          }
        }
{% endhighlight %}

Finally, if the object could not be transferred but isn't in the optimal cluster, we store it in the appropriate transfer list:

{% highlight java %}
        // If the object would prefer a different cluster, put in outgoing
        // transfer list.
        if(c.primary != preferences[0] && c.dists[c.primary] > c.dists[preferences[0]]) {
          transfers[c.primary].add(id);
        }
{% endhighlight %}

Someone might come up with a good way of finding additional transfers. But otherwise, we need to clear these lists for the next iteration. We can also log the progress of our algorithm.

{% highlight java %}
      }
      // TODO: try to get more transfers out of the transfer lists done by
      // considering more than one object?
      int pending = 0;
      // Clear transfer lists for next iteration.
      for(int i = 0; i < k; i++) {
        pending += transfers[i].size();
        transfers[i].clear();
      }
      if(LOG.isDebuggingFine()) {
        LOG.debugFine("Iteration #" + iter + ": performed " + active + " transfers skipped " + pending);
      }
{% endhighlight %}

Finally, if no transfers were done we can break the main iteration loop. If however any change was performed, we need to update the means again.

{% highlight java %}
      if(active <= 0) {
        break;
      }
      // Recompute means after reassignment
      means = means(clusters, means, relation);
    }
    return means;
  }
{% endhighlight %}

In the code above two parts were not yet introduced. The first is the comparator for sorting the cluster preferences. This is fairly standard code, except that we are using an `IntegerComparator` instead of a `Comparator<Integer>` from the Java collections framework. By avoiding `Integer` objects and using primitive `int`s instead we reduce memory use and improve performance. This isn't crucial here, but we might as well just use it. The `select` method also serves the purpose that we can use this comparator for different objects instead of creating a fresh one for each `Meta`.

{% highlight java %}
  public class PreferenceComparator implements IntComparator {
    Meta c = null;

    @Override
    public int compare(int o1, int o2) {
      return Double.compare(c.dists[o1], c.dists[o2]);
    }

    /**
     * Set the meta to sort by
     *
     * @param c Meta to sort by
     * @return The comparator
     */
    public IntComparator select(Meta c) {
      this.c = c;
      return this;
    }
  }
{% endhighlight %}

and the second is the `transfer` function to update the data structures:

{% highlight java %}
  protected void transfer(final WritableDataStore<Meta> metas, Meta meta,
        ModifiableDBIDs src, ModifiableDBIDs dst, DBIDRef id, int dstnum) {
    src.remove(id);
    dst.add(id);
    meta.primary = dstnum;
    metas.put(id, meta); // Make sure the storage is up to date.
  }
{% endhighlight %}

Implementing the algorithm outline
----------------------------------

We have now seen all the main parts of the algorithm, and only need to put these pieces together to the final `run` method:

{% highlight java %}
  public Clustering<MeanModel> run(Relation<V> relation) {
    // Database objects to process
    final DBIDs ids = relation.getDBIDs();
    // Choose initial means
    double[][] means = initializer.chooseInitialMeans(relation, k, distance);
    // Setup cluster assignment store
    List<ModifiableDBIDs> clusters = new ArrayList<>();
    for(int i = 0; i < k; i++) {
      clusters.add(DBIDUtil.newHashSet(relation.size() / k + 2));
    }

    // Meta data storage
    final WritableDataStore<Meta> metas = initializeMeta(relation, means);
    // Perform the initial assignment
    ArrayModifiableDBIDs tids = initialAssignment(clusters, metas, ids);
    // Recompute the means after the initial assignment
    means = means(clusters, means, relation);
    // Refine the result via k-means like iterations
    means = refineResult(relation, means, clusters, metas, tids);
{% endhighlight %}

Don't mind the odd signature of `initializer.chooseInitialMeans`. The reason for this is that we want to allow *both* random generated means, samples from the database, optimized means as produced by k-means++ etc. - for now, we will only need them to be "numerical vectors of some kind", which is what this type says.

The main thing we have not seen yet is how to package the final result for the ELKI framework. As we want the visualization and evaluation procedures to be able to use our result, we need to wrap it in the appropriate classes. The outer class is [Clustering](/releases/current/javadoc/elki/data/Clustering.html), and represents the result as a whole. We then need to produce the individual [Cluster](/releases/current/javadoc/elki/data/Cluster.html) objects. In ELKI, each cluster has a [Model](/releases/current/javadoc/elki/data/model/Model.html), in our case the model will store the cluster mean.

{% highlight java %}
    // Wrap result
    Clustering<MeanModel> result = new Clustering<>();
    Metadata.of(result).setLongName("k-means Samesize Clustering");
    for(int i = 0; i < clusters.size(); i++) {
      result.addToplevelCluster(new Cluster<>(clusters.get(i), new MeanModel(means[i])));
    }
    return result;
  }
{% endhighlight %}

Adding a parameterizer
----------------------

Now in order to *run* the algorithm we could call the constructor above, produce a database and so on. Or we can let ELKI handle all the set up, and for example use the MiniGUI or command line. For this, we need to formally specify the parameters. Here, we have four parameters: the desired number of clusters `k`, the maximum number of iterations `maxiter`, the initialization method `initializer` and the distance function `distance`.

{% highlight java %}
  public static class Par<V extends NumberVector> implements Parameterizer {
    /**
     * k Parameter.
     */
    protected int k;

    /**
     * Number of iterations.
     */
    protected int maxiter = -1;

    /**
     * Initialization method.
     */
    protected KMeansInitialization initializer;

    /**
     * Distance function
     */
    protected NumberVectorDistance<? super V> distance;
{% endhighlight %}

To specify parameters, we need to override the method `makeOptions`. First we will get the distance function. While the k-means algorithm is actually only designed for squared Euclidean distance (or Euclidean), some user might want to try different distances (be careful with this though: if the mean is not reducing distances, the algorithm might no longer converge!).

{% highlight java %}
    @Override
    public void configure(Parameterization config) {
      new ObjectParameter<NumberVectorDistance<? super V>>(KMeans.DISTANCE_FUNCTION_ID, NumberVectorDistance.class, SquaredEuclideanDistance.class) //
          .grab(config, x -> {
            distance = x;
            if(!(distance instanceof EuclideanDistance) //
                && !(distance instanceof SquaredEuclideanDistance)) {
              LOG.warning("k-means optimizes the sum of squares - it should be used with squared euclidean distance and may stop converging otherwise!");
            }
          });
{% endhighlight %}

The next parameter is the number of clusters. It must be greater than 1 to make sense, so we add a constraint.

{% highlight java %}
      new IntParameter(K_ID) //
          .addConstraint(CommonConstraints.GREATER_THAN_ONE_INT) //
          .grab(config, x -> k = x);
{% endhighlight %}

Then we need an initialization method. As we rely on the initialization to be good, we set the default to be the k-means++ initialization method.

{% highlight java %}
      new ObjectParameter<KMeansInitialization>(INIT_ID, KMeansInitialization.class, KMeansPlusPlus.class) //
          .grab(config, x -> initializer = x);
{% endhighlight %}

Finally, we have the optional parameter with the maximum number of iterations. As default value we use `-1`, so it iterates until convergence.

{% highlight java %}
      new IntParameter(MAXITER_ID, -1) //
          .addConstraint(CommonConstraints.GREATER_EQUAL_MINUSONE_INT) //
          .grab(config, x -> maxiter = x);
    }
{% endhighlight %}

Now we need to map these parameters to the constructor, which is straightforward:

{% highlight java %}
    @Override
    public SameSizeKMeans<V> make() {
      return new SameSizeKMeans<>(distance, k, maxiter, initializer);
    }
  }
{% endhighlight %}

Putting it all together
-----------------------

The complete source can be found here: [SameSizeKMeans.java](https://github.com/elki-project/elki/blob/master/addons/tutorial/src/main/java/tutorial/clustering/SameSizeKMeans.java)

It is included in the `elki-tutorial` addon module for you to try out.

Running the algorithm
---------------------

We can now launch the MiniGUI and run the algorithm from the user interface:

![](minigui.png)

You can see the paramters we just defined show up: k must be set, while the others have default values.

Running it on the mouse data set with k=3 will produce a result like this:

![](kms1.png)

while setting k=5 gives a more intuitive result, in particular if we merge the inner three clusters.

![](kms2.png)

You can clearly see that we achieved our objective of producing equally sized clusters. And we never promised you that this tutorial algorithm would be useful in practise on a real data set. In reality, clusters will rarely have always the same size. But if you happen to find a situation where this algorithm works well for you, we would be happy to hear!

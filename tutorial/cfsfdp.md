---
layout: page
title: Implementing Clustering by Fast Search and Find of Density Peaks
short: Implementing CFSFDP
parent: docs
navigation: 110
---


Implementing CFSFDP
===================

Version information: New tutorial for ELKI 0.8
{: class="versioninfo" }

In this tutorial, we will implement the CFSFDP clustering algorithm.

> Rodriguez, A., & Laio, A. (2014). Clustering by fast search and find of density peaks. Science, 344(6191), 1492-1496.

The first thing to do is of course to read the article and understand the
algorithm in detail. Since the Science paper is very short on some details,
it may also be necessary to check the supplementary material.

Some key takeaways from the CFSFDP method:

* it is distance-based, estimating density from neighborhood sizes
* while it is titled "fast", it is actually pretty slow: O(n²)
* clusters are modeled by a "mode", the point of highest density

Note: this tutorial uses new class names and new APIs of upcoming ELKI 0.8.
It will not apply to the previous release of ELKI.

Code frame
----------

Because CFSFDP is a clustering algorithm, we implement the
`ClusteringAlgorithm` interface. This interface has a generic,
which is the clustering kind returned.

While in other tools such as scikit-learn, clusterers return arrays of
integers as result, ELKI uses an object oriented approach that is also
able to capture hierarchies of clusters - which we do not need for CFSFDP -
and additional information on each cluster besides the cluster members.
Because CFSFDP uses the most dense points of each clusters, the clustering
model we chose here is a `SimplePrototypeModel`.

ELKI algorithms can be used with many different data types. There is no
reason to restrict our implementation to numeric vectors in Euclidean space.
Instead, we will use a generic `O` (for "Object"). This will commonly be a
vector in an Euclidean vector space, but not necessarily so.

Eclipse now generates the following class for us:

{% highlight java %}
public class CFSFDP<O> implements
    ClusteringAlgorithm<Clustering<SimplePrototypeModel<DBID>>> {
  @Override
  public TypeInformation[] getInputTypeRestriction() {
    // TODO Auto-generated method stub
    return null;
  }
}
{% endhighlight %}

Because the CFSFDP algorithm is distance based, we add a distance function
field to our class. This distance needs to accept data of type `O`, but it
may also be defined on any supertype of this, too:
{% highlight java %}
  /**
   * Distance function used.
   */
  protected Distance<? super O> distance;
{% endhighlight %}

We need our input data to satisfy this type, and we create a "run" method.
For this, we request data that satisfies our input requirements - which happen
to be exactly the input requirements of the distance function. With CFSFDP,
we can cluster any data that our distance function accepts.
Next we need to create (and this cannot be auto-generated by Eclipse,
unfortunately) a `run` method that receives the requested relation.
Either the user can call `run` with a data relation directly, or he can use
`autorun(Database)` and that method will find a suitable relation in the
database, using the information from `getInputTypeRestriction`.
{% highlight java %}
  @Override
  public TypeInformation[] getInputTypeRestriction() {
    return TypeUtil.array(distance.getInputTypeRestriction());
  }
 
  /**
   * Perform CFSFDP clustering.
   * 
   * @param relation data relation
   * @return clustering
   */
  public Clustering<SimplePrototypeModel<DBID>> run(Relation<O> relation) {
    // TODO
  }
{% endhighlight %}

Now we can almost begin implementing CFSFDP, except that we still need
a number of parameters. The obvious parameter is the distance cutoff `dc`.
But this will not yet yield clusters: the authors of CFSFDP require manual
inspection of a bivariate plot to select density peaks. This may be difficult
to use, and users usually want a more automated approach.
At the end of the article, the authors suggest a heuristic, which we will
implement for this tutorial: they select the top k points based on
`gamma=rho*delta`. Therefore, we also add a parameter k.

We now add these fields and a constructor:
{% highlight java %}
  /**
   * Distance cutoff.
   */
  protected double dc;

  /**
   * Number of clusters to find.
   */
  protected int k;

  /**
   * Constructor.
   *
   * @param distance distance function
   * @param dc distance cutoff
   * @param k number of clusters
   */
  protected CFSFDP(Distance<? super O> distance, double dc, int k) {
    super();
    this.distance = distance;
    this.dc = dc;
    this.k = k;
  }
{% endhighlight %}

Density estimation
------------------
For this kind of density estimation, we would usually employ range queries
with a search radius of `dc`. But later CFSFDP will use a different type of
search, and hence we get a new API of ELKI that is called a priority search,
that can be used for both. In some cases, this search can be faster, but in
many cases it will be slightly slower because of the more complex code (that
hence is a bit harder to optimize by the compiler).

To get a priority search, we use the `QueryBuilder` helper. This class will
check for available data indexes to accelerate such a query, and it may
automatically add such an index to the database (or it may decide to compute
a pairwise distance matrix, if memory permits). We leave such decisions to
the query optimizer of ELKI, and we just specify what we need: a priority
search, on our data relation, for our distance query.
{% highlight java %}
    PrioritySearcher<DBIDRef> searcher =
      new QueryBuilder<>(relation, distance).priorityByDBID();
{% endhighlight %}
Densities used by CFSFDP are integer values, namely the number of points
within radius `dc`. To store the densities, we use a
`WritableIntegerDataStore` (in many cases, ELKI will optimize this to be an
`int[]`, but it can also be a map to integers for non-continuous database ids).
While this is "rho" in the original paper, we use the more meaningful name
`density` in our code.
{% highlight java %}
    DBIDs ids = relation.getDBIDs();
    WritableIntegerDataStore density = DataStoreFactory.FACTORY.makeIntegerStorage(
      ids, DataStoreFactory.HINT_HOT | DataStoreFactory.HINT_TEMP);
{% endhighlight %}
Next we iterate over all database objects (from the `ids` collection)
and count matching neighbors. ELKI uses a special kind of iterator,
`DBIDIter` that uses much less memory than a Java `Iterator<DBID>` would use.
{% highlight java %}
    for(DBIDIter it = ids.iter(); it.valid(); it.advance()) {
      int found = 0;
{% endhighlight %}
For each point, we reset our search using `searcher.search(it, dc)`.
We want to select all points with `searcher.computeExactDistance() <= dc`,
but we can perform some optimization here because *we do not need to know
the exact distance here*:
Some indexes have upper bounds on the distance to a point, this may allow us
to identify true positives without computing the exact distances using
`searcher.getUpperBound() <= dc` (if there is no lower bound, the `NaN` value
will make this expression false).
We could also compare the lower bound, but usually this filtering is already
performed by the searcher if we pass a cutoff value to the `search` function.
We then store the resulting density for each point
{% highlight java %}
      for(searcher.search(it, dc); searcher.valid(); searcher.advance()) {
        if(searcher.getUpperBound() <= dc
            || searcher.computeExactDistance() <= dc) {
          found++;
        }
      }
      density.put(it, found);
{% endhighlight %}
For this part, we could have used the simple range search API of ELKI instead
(using `rangeByDBID()` to get a `RangeSearcher`), but we will need the priority
searcher for again in the next step.

Finding the Nearest Denser Point
--------------------------------

Next, we need to compute delta, the distance to the nearest denser point.
Again, there is a subtle detail missing in the paper - since our densities
are integer, we may be seeing duplicates here. The authors assumed there is
a unique maximum, but this is not necessarily so.
We also divert from the original paper by using positive infinity for points
with no denser neighbors, as we do not want to have to find the largest
distance of the entire data set (which could be expensive).

For each point, we will store the distance to the next nearest point,
and the DBID of that point. Hence we create two more data stores,
and a temporary reference `var` and a `heap` we will discuss below.
{% highlight java %}
    WritableDoubleDataStore nextdist = DataStoreFactory.FACTORY.makeDoubleStorage(
      ids, DataStoreFactory.HINT_TEMP);
    WritableDBIDDataStore nextn = DataStoreFactory.FACTORY.makeDBIDStorage(
      ids, DataStoreFactory.HINT_TEMP);
    DBIDVar tmp = DBIDUtil.newVar();
    DoubleMinHeap heap = new DoubleMinHeap(k);
{% endhighlight %}
Now we can iterate over all points again, and search for the next denser point.
This time, we do not pass the `dc` cutoff to the searcher, as we may need to
search outside this radius. Once we have found a more dense point, we will use
`searcher.decreaseCutoff` to reduce the search radius.
{% highlight java %}
    for(DBIDIter it = ids.iter(); it.valid(); it.advance()) {
      final int dens = density.intValue(it);
      double dist = Double.POSITIVE_INFINITY;
      tmp.unset();
      for(searcher.search(it); searcher.valid(); searcher.advance()) {
{% endhighlight %}
For each neighbor, we have to check whether it has a higher density, and
keep the minimum distance each, again we can try to avoid distance computations
by first checking the density.
{% highlight java %}
        if(density.intValue(searcher) > dens) {
          double d = searcher.computeExactDistance();
          if(d < dist) {
            dist = d;
            searcher.decreaseCutoff(d);
            tmp.set(searcher);
          }
        }
{% endhighlight %}
We store the best values in the storages allocated above. To find the k largest
values, we also maintain a heap of the k largest values.
{% highlight java %}
      nextdist.put(it, dist);
      nextn.put(it, tmp);
      heap.add(dist * dens, k); // gamma
{% endhighlight %}

Building the Clusters
---------------------
We can now construct the clusters easily by adopting a top-down approach,
beginning with the most dense point. We first determine the threshold for
gamma to determine the cluster modes, then we process points descending by
density. The motivation for this is that the nearest more dense point must
already have been processed, i.e., must already have a cluster.
{% highlight java %}
    final double gammath = heap.peek();
    ArrayModifiableDBIDs sorted = DBIDUtil.newArray(ids);
    sorted.sort(new DataStoreUtil.DescendingByIntegerDataStore(density));
{% endhighlight %}
To store the resulting clustering, we create a `Clustering` object,
and we use a temporary data store to map objects to clusters.
{% highlight java %}
    WritableDataStore<ArrayModifiableDBIDs> cluster = DataStoreFactory.FACTORY.makeStorage(ids, DataStoreFactory.HINT_TEMP, ArrayModifiableDBIDs.class);
    Clustering<SimplePrototypeModel<DBID>> clustering = new Clustering<>();
{% endhighlight %}
We can now iterate over all objects (descending by density), and either
create a new cluster for them, or add them to the cluster of their nearest
denser neighbor. When creating a new cluster, we use the current object
as cluster prototype:
{% highlight java %}
    for(DBIDIter it = sorted.iter(); it.valid(); it.advance()) {
      double gamma = density.intValue(it) * nextdist.doubleValue(it);
      ArrayModifiableDBIDs c = gamma >= gammath ? null :
          cluster.get(tmp.from(nextn, it));
      if(c == null) {
        c = DBIDUtil.newArray();
        clustering.addToplevelCluster(new Cluster<>(c,
            new SimplePrototypeModel<>(DBIDUtil.deref(it))));
      }
      c.add(it);
      cluster.put(it, c);
    }
    return clustering;
{% endhighlight %}

Adding a Parameterizer
----------------------
In order to make the class usable from the command line and MiniGUI, we need
to add parameter definitions, default values, and constraints. For this we
create an inner class named `Par` that implements the interface
`Parameterizer`:
{% highlight java %}
  public static class Par<O> implements Parameterizer {
    @Override
    public void configure(Parameterization config) {
      // TODO: parameters
    }

    @Override
    public CFSFDP<O> make() {
      // TODO: create CFSFDP instance
    }
  }
{% endhighlight %}

We first define two (public and static) options, for `dc` and `k`
(we are going to reuse and existing parameter name for the distance function).
{% highlight java %}
    public static final OptionID DC_ID = new OptionID("cfsfdp.dc",
        "Distance cutoff for density estimation");
    public static final OptionID K_ID = new OptionID("cfsfdp.k",
        "Extract the top k clusters by gamma (on ties, there may be more).");
{% endhighlight %}

We need three fields to hold the parameter values and implement the
`make` method:
{% highlight java %}
    protected Distance<? super O> distance;
    protected double dc;
    protected int k;

    @Override
    public CFSFDP<O> make() {
      return new CFSFDP<O>(distance, dc, k);
    }
{% endhighlight %}

And now we can get the parameters and map them to these fields:
{% highlight java %}
    public void configure(Parameterization config) {
      new ObjectParameter<Distance<? super O>>(
              Algorithm.Utils.DISTANCE_FUNCTION_ID,
              Distance.class, EuclideanDistance.class) //
          .grab(config, x -> distance = x);
      new DoubleParameter(DC_ID) //
          .addConstraint(CommonConstraints.GREATER_EQUAL_ZERO_DOUBLE) //
          .grab(config, x -> dc = x);
      new IntParameter(K_ID) //
          .addConstraint(CommonConstraints.GREATER_EQUAL_ONE_INT) //
          .grab(config, x -> k = x);
    }
{% endhighlight %}

Now the algorithm should be runnable from the command line and MiniGUI.

It will not yet show up in the drop-down of the packaged version, because it is not included
in the service files. For this, we need to add the class name to the files
`src/main/resources/META-INF/elki/elki.clustering.ClusteringAlgorithm` and
`src/main/resources/META-INF/elki/elki.clustering.Algorithm`, since we implemented these
two interfaces.

[You can browse the full source code online, in the tutorial folder](https://github.com/elki-project/elki/blob/master/addons/tutorial/src/main/java/tutorial/clustering/CFSFDP.java),
or check out the
[full implementation in the clustering package](https://github.com/elki-project/elki/blob/master/elki-clustering/src/main/java/elki/clustering/CFSFDP.java).


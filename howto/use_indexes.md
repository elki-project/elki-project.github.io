---
layout: page
title: How To Use Indexes
short: Using Indexes
parent: howto
navigation: 30
---


Using Indexes for accelerated algorithms
========================================

Many data mining algorithms can be accelerated by using appropriate index structures. Which index is appropriate largely depends on the type of *query* that the algorithm performs against the database.

Common types of queries that can be accelerated include:

- k nearest neighbor queries [KNNQuery](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/database/query/knn/KNNQuery.html)
- range queries [RangeQuery](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/database/query/range/RangeQuery.html)
- reverse k nearest neighbor queries [RKNNQuery](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/database/query/rknn/RKNNQuery.html)
- window queries (currently not yet implemented, similar to range queries)

Not every index can accelerated each query equally well (or at all). In particular reverse kNN queries need highly specialized index structures.

R-Trees
-------

The R-tree family is a very well established index structure. With algorithms such as Sort-Tile-Recursive the tree can very efficiently bulk-loaded, while the R\*-tree tries to keep the tree efficient while performing modifications to it.

R-trees are very flexible, and can accelerate any distance function for wich a reasonable *point to rectangle minimum distance* can be defined. In ELKI, any class implementing the [SpatialPrimitiveDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/SpatialPrimitiveDistanceFunction.html) can be used. This includes in particular Euclidean and other Minkowski norms, but to some extend also cosine distance can be accelerated. In contrast to M-trees below, the index supports *all of these distances at the same time*.

Using R-trees in ELKI is simple, you just need to enable the [RStarTreeFactory](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/rstar/RStarTreeFactory.html) via the parameters:

<pre>
-db.index tree.spatial.rstarvariants.rstar.RStarTreeFactory
-treeindex.pagesize 4096
-spatial.bulkstrategy SortTileRecursiveBulkSplit
</pre>

The optimal page size is data set and use dependant, in particular the dimensionality and the average number of objects to return in each query play an important role. Since most users are using a static data set, using a bulk load such as [SortTileRecursiveBulkSplit](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/SortTileRecursiveBulkSplit.html) is recommended.

M-Trees
-------

M-Trees, also known as Ball-tree, are specialized trees. They can be used with any distance function that is *metrical*, i.e. that satisfies the triangle inequality. Futhermore, *an M-tree needs to know the distance function at construction time*, it cannot be queried with arbitrary distances.

To use an M-Tree, again set the `-db.index` parameter to the appropriate factory class [MTreeFactory](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/index/tree/metrical/mtreevariants/mtree/MTreeFactory.html):

<pre>
-db.index tree.metrical.mtreevariants.mtree.MTreeFactory
-treeindex.pagesize 4096
-mtree.distancefunction EuclideanDistanceFunction
</pre>

Note that you need to set the same distance function that you are using in your algorithm later on, and that the distance function needs to be metrical. The current implementation of M-Trees in ELKI support dynamic insertion, but no deletions. Please contribute!

k-d-Trees
---------

ELKI 0.6.0 will come with a k-d-tree. Note that default k-d-trees are in-memory index structures, and only support very distance functions that have one-dimensional deltas as lower bounds.

VA-File and Partial-VA-File
---------------------------

*TODO:* we will add some information on VA files soon. Basically, they are set up the same way as R- and M-trees. However, VA-Files can only be used with LPNorms as of now. Note that VA files mostly are reasonable for large on-disk indexes.

Compatibility matrix
--------------------

See [DistanceFunctions](/algorithms/distances) for the full list of available distance functions. This table only lists distance functions where the indexing support is somewhat analyzed. Note that the M-tree must be initialized with the distance function.

| Distance Function                                                                                                                                                           | R-Tree | M-Tree | VA-File | k-d-tree | LSH |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------|--|--|--|
|[EuclideanDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/EuclideanDistanceFunction.html) | Y | Y | Y | Y | Y |
|[ManhattanDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/ManhattanDistanceFunction.html)| Y | Y | Y | Y | Y |
|[LPNormDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/LPNormDistanceFunction.html)| Y | \* | Y | Y | \* |
|[MaximumDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/MaximumDistanceFunction.html)| Y | Y | ? | Y | ? |
|[MinimumDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/MinimumDistanceFunction.html)| Y | N | ? | ? | ? |
|[SquaredEuclideanDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SquaredEuclideanDistanceFunction.html)| Y | N | ? | Y | ? |
|[ArcCosineDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/ArcCosineDistanceFunction.html)| Y | \* | ? | ? | ? |
|[CosineDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/CosineDistanceFunction.html)| Y | \* | ? | ? | ? |
|[CanberraDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/CanberraDistanceFunction.html)| Y | Y | ? | ? | ? |
|[LatLngDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LatLngDistanceFunction.html)| Y | Y | ? | ? | ? |
|[LngLatDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LngLatDistanceFunction.html)| Y | Y | ? | ? | ? |
|[HistogramIntersectionDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/HistogramIntersectionDistanceFunction.html)| Y | Y | ? | ? | ? |

| Flag| Meaning|
|-----|--------|
| Y | Supported |
| N | Not possible (e.g. not metric) |
| ? | Unknown or not implemented |
| \* | Only in certain situations (additional constraints, e.g. metric) |

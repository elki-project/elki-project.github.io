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

- k nearest neighbor queries [KNNSearcher](/releases/current/javadoc/elki/database/query/knn/KNNSearcher.html)
- range queries [RangeSearcher](/releases/current/javadoc/elki/database/query/range/RangeSearcher.html)
- reverse k nearest neighbor queries [RKNNSearcher](/releases/current/javadoc/elki/database/query/rknn/RKNNSearcher.html)
- priority search [PrioritySearcher](/releases/current/javadoc/elki/database/query/PrioritySearcher.html)
- similarity range search [SimilarityQuery](/releases/current/javadoc/elki/database/query/similarity/SimilarityQuery.html)
- window queries (currently not yet implemented, similar to range queries)

Not every index can accelerated each query equally well (or at all). In particular reverse kNN queries need highly specialized index structures.

Automatic indexing
------------------

ELKI 0.8.0 will, in many cases, automatically create a suitable index for you.
For low-dimensional data and Minkowski-type distances, it will prefer a k-d-tree.
For other *metrics*, it will usually prefer a vantage point (aka VP-tree, ball tree).

R-Trees
-------

The R-tree family is a very well established index structure. With algorithms such as Sort-Tile-Recursive the tree can very efficiently bulk-loaded, while the R\*-tree tries to keep the tree efficient while performing modifications to it.

R-trees are very flexible, and can accelerate any distance function for wich a reasonable *point to rectangle minimum distance* can be defined. In ELKI, any class implementing the [SpatialPrimitiveDistance](/releases/current/javadoc/elki/distance/SpatialPrimitiveDistance.html) can be used. This includes in particular Euclidean and other Minkowski norms, but to some extend also cosine distance can be accelerated. In contrast to M-trees below, the index supports *all of these distances at the same time*.

Using R-trees in ELKI is simple, you just need to enable the [RStarTreeFactory](/releases/current/javadoc/elki/index/tree/spatial/rstarvariants/rstar/RStarTreeFactory.html) via the parameters:

<pre>
-db.index tree.spatial.rstarvariants.rstar.RStarTreeFactory
-treeindex.pagesize 4096
-spatial.bulkstrategy SortTileRecursiveBulkSplit
</pre>

The optimal page size is data set and use dependant, in particular the dimensionality and the average number of objects to return in each query play an important role. Since most users are using a static data set, using a bulk load such as [SortTileRecursiveBulkSplit](/releases/current/javadoc/elki/index/tree/spatial/rstarvariants/strategies/bulk/SortTileRecursiveBulkSplit.html) is recommended.

M-Trees
-------

M-Trees, also known as Ball-tree, are specialized trees. They can be used with any distance function that is *metrical*, i.e. that satisfies the triangle inequality. Futhermore, *an M-tree needs to know the distance function at construction time*, it cannot be queried with arbitrary distances.

To use an M-Tree, again set the `-db.index` parameter to the appropriate factory class [MTreeFactory](/releases/current/javadoc/elki/index/tree/metrical/mtreevariants/mtree/MTreeFactory.html):

<pre>
-db.index tree.metrical.mtreevariants.mtree.MTreeFactory
-treeindex.pagesize 4096
-mtree.distancefunction EuclideanDistance
</pre>

Note that you need to set the same distance function that you are using in your algorithm later on, and that the distance function needs to be metrical. The current implementation of M-Trees in ELKI support dynamic insertion, but no deletions. Please contribute!

k-d-Trees
---------

ELKI includes lightweight k-d-trees, as in-memory index structures only.
k-d-trees only support few distance functions that have one-dimensional deltas as lower bounds.

Compatibility matrix
--------------------

See [Distances](/algorithms/distances) for the full list of available distance functions. This table only lists distance functions where the indexing support is somewhat analyzed.
Note that metric trees such as the M-tree, cover tree, and vantage point tree (aka Ball tree) must be *built* with this distance function.

| Distance Function                                                                                                                                                           | R-Tree | M-Tree / Covertree / VP-Tree | VA-File | k-d-tree | LSH |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-----------|--|--|--|
|[EuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/EuclideanDistance.html) | Y | Y | Y | Y | Y |
|[ManhattanDistance](/releases/current/javadoc/elki/distance/minkowski/ManhattanDistance.html)| Y | Y | Y | Y | Y |
|[LPNormDistance](/releases/current/javadoc/elki/distance/minkowski/LPNormDistance.html)| Y | \* | Y | Y | \* |
|[MaximumDistance](/releases/current/javadoc/elki/distance/minkowski/MaximumDistance.html)| Y | Y | ? | Y | ? |
|[MinimumDistance](/releases/current/javadoc/elki/distance/minkowski/MinimumDistance.html)| Y | N | ? | ? | ? |
|[SquaredEuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/SquaredEuclideanDistance.html)| Y | N | ? | Y | ? |
|[ArcCosineDistance](/releases/current/javadoc/elki/distance/ArcCosineDistance.html)| Y | Y | ? | ? | ? |
|[CosineDistance](/releases/current/javadoc/elki/distance/CosineDistance.html)| Y | N | ? | ? | ? |
|[SqrtCosineDistance](/releases/current/javadoc/elki/distance/SqrtCosineDistance.html)| Y | Y | ? | ? | ? |
|[CanberraDistance](/releases/current/javadoc/elki/distance/CanberraDistance.html)| Y | Y | ? | ? | ? |
|[LatLngDistance](/releases/current/javadoc/elki/distance/geo/LatLngDistance.html)| Y | Y | ? | ? | ? |
|[LngLatDistance](/releases/current/javadoc/elki/distance/geo/LngLatDistance.html)| Y | Y | ? | ? | ? |
|[HistogramIntersectionDistance](/releases/current/javadoc/elki/distance/colorhistogram/HistogramIntersectionDistance.html)| Y | Y | ? | ? | ? |

| Flag| Meaning|
|-----|--------|
| Y | Supported |
| N | Not possible (e.g. not metric) |
| ? | Unknown or not implemented |
| \* | Only in certain situations (additional constraints, e.g. metric) |

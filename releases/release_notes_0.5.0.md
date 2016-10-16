---
layout: page
title: Releases%2FReleaseNotes0.5.0
---


ELKI 0.5.0 release notes
========================

Primary release goals
---------------------

-   Cluster evaluation: metrics and circle-segment-visualization (ICDE 2012, see Examples/ClusterEvaluation)
-   Outlier detection ensembles (SDM 2011, 2012, see Examples/GreedyEnsemble)
-   Usability improvements, for example by adding an automatic evaluation helper
-   Performance improvements by reducing boxing of primitive types (see [DBID API](./Development/DBIDs) for details)
-   Parallel coordinates visualizations added for high-dimensional data

Additional improvements
-----------------------

### Algorithms

-   [K-means](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans.html) variants, including: [Lloyd](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansLloyd.html) and [MacQueen](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansMacQueen.html) iteration, [k-Medians](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMediansLloyd.html) and [k-medoids (PAM)](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsPAM.html)
-   Various k-means/k-medians initializations, including [k-means++](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/kmeans/KMeansPlusPlusInitialMeans.html)
-   [aLOCI](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/ALOCI.html) (fast approximation of [LOCI](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/LOCI.html))
-   [HilOut](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/HilOut.html) (fast approximation of [KNNWeightOutlier](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/KNNWeightOutlier.html))
-   [OUTRES](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OUTRES.html) outlier detection
-   [OutRank](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OutRankS1.html) outlier detection
-   [HiCS](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/HiCS.html): high-contrast subspaces for outlier detection (ICDE 2012)
-   [Generalized DBSCAN](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/GeneralizedDBSCAN.html)

### Distance functions

-   Add [Canberra distance](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/CanberraDistanceFunction.html)
-   Add [Jeffrey divergence distance](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/JeffreyDivergenceDistanceFunction.html)
-   More distance functions implement the [spatial distance function API](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SpatialPrimitiveDistanceFunction.html), and can thus use R-Trees for accelerated queries.

### Index layer

-   additional [split strategies](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/SplitStrategy.html) for [RStarTree](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/rstar/RStarTree.html)
-   [Ang-Tan linear split](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/AngTanLinearSplit.html)
-   [Greene's split](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/GreeneSplit.html)
-   Guttman [linear](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/RTreeLinearSplit.html) and [quadratic](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/RTreeQuadraticSplit.html) splits
-   additional bulk loading strategies
-   [Sort-Tile-Recursive](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/SortTileRecursiveBulkSplit.html)
-   [Sort by X](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/OneDimSortBulkSplit.html)
-   [Native file order](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/FileOrderBulkSplit.html)
-   [Space filling curve bulk splits](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/SpatialSortBulkSplit.html): Z-Curve, Peano Curve and Hilbert curve and KD-Tree style binary splits
-   optional: [no reinsertions](./releases/current/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/overflow/SplitOnlyOverflowTreatment.html) (so you get a regular RTree instead of an R\*-Tree)
-   [VAFile](./releases/current/doc/de/lmu/ifi/dbs/elki/index/vafile/VAFile.html) and [partial VA file](./releases/current/doc/de/lmu/ifi/dbs/elki/index/vafile/PartialVAFile.html) (both in-memory only for now)

### Evaluation

-   Most [clustering similarity measures](./releases/current/doc/de/lmu/ifi/dbs/elki/evaluation/clustering/ClusterContingencyTable.html) (BCubed, Rand, ARI, Mutual Information, Entropy, Edit, ...)
-   More [outlier evaluation measures](./releases/current/doc/de/lmu/ifi/dbs/elki/evaluation/outlier.html) (ROC, P/R curves, Average-Precision curves, [SmROC](./SmROC) curves)
-   [Automatic Evaluation](./releases/current/doc/de/lmu/ifi/dbs/elki/evaluation/AutomaticEvaluation.html), disable via `-evaluator NoAutomaticEvaluation`.

### Visualizations

-   Alpha shapes
-   Voronoi cells for 2D K-means
-   Cluster stars for mean-models (k-means, EM)
-   Parallel coordinates

### Applications

-   Cluster similarity visualization, from ICDE 2012 (see Examples/ClusterEvaluation)
-   Greedy Ensemble for Outlier Detection, from SDM 2012 (see Examples/GreedyEnsemble)

### Other

-   Improved support for sparse vectors. Note the need to apply the [SparseVectorFieldFilter](./releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/SparseVectorFieldFilter.html) for many algorithms (that assume a fixed dimensionality vector field! For more details, see HowTo/SparseData
-   Improved error logging (less exceptions lost, shorter stacktraces)
-   Robustness improvements
-   Use GNU Trove primitive collections for further speedups.
-   [DBID](.//Development/DBIDs) API changes, for performance improvements.
-   No longer include PDF/PS/EPS support in `elki.jar` (add Apache FOP to your classpath to enable!)


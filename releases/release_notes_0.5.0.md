---
layout: page
title: Release Notes 0.5.0
parent: releases
navigation: -50
---


ELKI 0.5.0 release notes
========================

Primary release goals
---------------------

-  Cluster evaluation: metrics and circle-segment-visualization (ICDE 2012, see Examples/ClusterEvaluation)
-  Outlier detection ensembles (SDM 2011, 2012, see Examples/GreedyEnsemble)
-  Usability improvements, for example by adding an automatic evaluation helper
-  Performance improvements by reducing boxing of primitive types (see [DBID API](/dev/dbids) for details)
-  Parallel coordinates visualizations added for high-dimensional data

Additional improvements
-----------------------

### Algorithms

-  [K-means](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans.html) variants, including: [Lloyd](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansLloyd.html) and [MacQueen](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansMacQueen.html) iteration, [k-Medians](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMediansLloyd.html) and [k-medoids (PAM)](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsPAM.html)
-  Various k-means/k-medians initializations, including [k-means++](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/kmeans/KMeansPlusPlusInitialMeans.html)
-  [aLOCI](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/ALOCI.html) (fast approximation of [LOCI](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/LOCI.html))
-  [HilOut](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/HilOut.html) (fast approximation of [KNNWeightOutlier](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/KNNWeightOutlier.html))
-  [OUTRES](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OUTRES.html) outlier detection
-  [OutRank](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OutRankS1.html) outlier detection
-  [HiCS](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/HiCS.html): high-contrast subspaces for outlier detection (ICDE 2012)
-  [Generalized DBSCAN](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/GeneralizedDBSCAN.html)

### Distance functions

-  Add [Canberra distance](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/CanberraDistanceFunction.html)
-  Add [Jeffrey divergence distance](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/JeffreyDivergenceDistanceFunction.html)
-  More distance functions implement the [spatial distance function API](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SpatialPrimitiveDistanceFunction.html), and can thus use R-Trees for accelerated queries.

### Index layer

-  additional [split strategies](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/SplitStrategy.html) for [RStarTree](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/rstar/RStarTree.html)
-  [Ang-Tan linear split](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/AngTanLinearSplit.html)
-  [Greene's split](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/GreeneSplit.html)
-  Guttman [linear](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/RTreeLinearSplit.html) and [quadratic](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/split/RTreeQuadraticSplit.html) splits
-  additional bulk loading strategies
-  [Sort-Tile-Recursive](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/SortTileRecursiveBulkSplit.html)
-  [Sort by X](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/OneDimSortBulkSplit.html)
-  [Native file order](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/FileOrderBulkSplit.html)
-  [Space filling curve bulk splits](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/bulk/SpatialSortBulkSplit.html): Z-Curve, Peano Curve and Hilbert curve and KD-Tree style binary splits
-  optional: [no reinsertions](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/tree/spatial/rstarvariants/strategies/overflow/SplitOnlyOverflowTreatment.html) (so you get a regular RTree instead of an R\*-Tree)
-  [VAFile](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/vafile/VAFile.html) and [partial VA file](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/index/vafile/PartialVAFile.html) (both in-memory only for now)

### Evaluation

-  Most [clustering similarity measures](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/evaluation/clustering/ClusterContingencyTable.html) (BCubed, Rand, ARI, Mutual Information, Entropy, Edit, ...)
-  More [outlier evaluation measures](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/evaluation/outlier.html) (ROC, P/R curves, Average-Precision curves, SmROC curves)
-  [Automatic Evaluation](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/evaluation/AutomaticEvaluation.html), disable via `-evaluator NoAutomaticEvaluation`.

### Visualizations

-  Alpha shapes
-  Voronoi cells for 2D K-means
-  Cluster stars for mean-models (k-means, EM)
-  Parallel coordinates

### Applications

-  Cluster similarity visualization, from ICDE 2012 (see Examples/ClusterEvaluation)
-  Greedy Ensemble for Outlier Detection, from SDM 2012 (see Examples/GreedyEnsemble)

### Other

-  Improved support for sparse vectors. Note the need to apply the [SparseVectorFieldFilter](http://elki.dbs.ifi.lmu.de/releases/release0.5.0/doc/de/lmu/ifi/dbs/elki/datasource/filter/SparseVectorFieldFilter.html) for many algorithms (that assume a fixed dimensionality vector field! For more details, see HowTo/SparseData
-  Improved error logging (less exceptions lost, shorter stacktraces)
-  Robustness improvements
-  Use GNU Trove primitive collections for further speedups.
-  [DBID](/dev/dbids) API changes, for performance improvements.
-  No longer include PDF/PS/EPS support in `elki.jar` (add Apache FOP to your classpath to enable!)


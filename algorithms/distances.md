---
layout: page
title: Distance Functions
parent: algorithms
---


Distance Functions
==================

ELKI release 0.6.0~20141030 includes the following distance functions

- Minkowski family:
  - [EuclideanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/EuclideanDistanceFunction.html)
  - [ManhattanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/ManhattanDistanceFunction.html)
  - [LPNormDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/LPNormDistanceFunction.html)
  - [MaximumDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/MaximumDistanceFunction.html)
  - [MinimumDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/MinimumDistanceFunction.html)
  - [SquaredEuclideanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SquaredEuclideanDistanceFunction.html)
  - [WeightedLPNormDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedLPNormDistanceFunction.html)
  - [WeightedEuclideanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedEuclideanDistanceFunction.html)
  - [WeightedManhattanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedManhattanDistanceFunction.html)
  - [WeightedMaximumDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedMaximumDistanceFunction.html)
  - [WeightedSquaredEuclideanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedSquaredEuclideanDistanceFunction.html)
  - [ArcCosineDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/ArcCosineDistanceFunction.html)
  - [CosineDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/CosineDistanceFunction.html)
  - [RandomStableDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/RandomStableDistanceFunction.html)
  - [BrayCurtisDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/BrayCurtisDistanceFunction.html)
  - [CanberraDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/CanberraDistanceFunction.html)
  - [WeightedCanberraDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/WeightedCanberraDistanceFunction.html)
  - [ClarkDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/ClarkDistanceFunction.html)
  - [Kulczynski1DistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/Kulczynski1DistanceFunction.html)
  - [LorentzianDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/LorentzianDistanceFunction.html)
  - [SharedNearestNeighborJaccardDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/SharedNearestNeighborJaccardDistanceFunction.html)
  - [LocallyWeightedDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/LocallyWeightedDistanceFunction.html)
- Optimized implementations for sparse vectors:
  - [SparseEuclideanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SparseEuclideanDistanceFunction.html)
  - [SparseManhattanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SparseManhattanDistanceFunction.html)
  - [SparseLPNormDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SparseLPNormDistanceFunction.html)
  - [SparseMaximumDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SparseMaximumDistanceFunction.html)
- Adapters for similarity functions:
  - [ArccosSimilarityAdapter](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/adapter/ArccosSimilarityAdapter.html)
  - [LnSimilarityAdapter](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/adapter/LnSimilarityAdapter.html)
  - [LinearSimilarityAdapter](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/adapter/LinearSimilarityAdapter.html)
- Distances for probability distributions:
  - [JeffreyDivergenceDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/JeffreyDivergenceDistanceFunction.html)
  - [ChiSquaredDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/ChiSquaredDistanceFunction.html)
  - [HellingerDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/HellingerDistanceFunction.html)
  - [JensenShannonDivergenceDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/JensenShannonDivergenceDistanceFunction.html)
  - [KullbackLeiblerDivergenceAsymmetricDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/KullbackLeiblerDivergenceAsymmetricDistanceFunction.html)
  - [KullbackLeiblerDivergenceReverseAsymmetricDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/KullbackLeiblerDivergenceReverseAsymmetricDistanceFunction.html)
  - [SqrtJensenShannonDivergenceDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/SqrtJensenShannonDivergenceDistanceFunction.html)
- Distance functions for 1-dimensional histograms:
  - [HistogramMatchDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/histogram/HistogramMatchDistanceFunction.html)
  - [KolmogorovSmirnovDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/histogram/KolmogorovSmirnovDistanceFunction.html)
- Color histogram distance functions:
  - [HSBHistogramQuadraticDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/HSBHistogramQuadraticDistanceFunction.html)
  - [HistogramIntersectionDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/HistogramIntersectionDistanceFunction.html)
  - [RGBHistogramQuadraticDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/RGBHistogramQuadraticDistanceFunction.html)
- Correlation distance functions:
  - [PearsonCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/PearsonCorrelationDistanceFunction.html)
  - [SquaredPearsonCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/SquaredPearsonCorrelationDistanceFunction.html)
  - [AbsolutePearsonCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/AbsolutePearsonCorrelationDistanceFunction.html)
  - [UncenteredCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/UncenteredCorrelationDistanceFunction.html)
  - [SquaredUncenteredCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/SquaredUncenteredCorrelationDistanceFunction.html)
  - [AbsoluteUncenteredCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/AbsoluteUncenteredCorrelationDistanceFunction.html)
  - [WeightedPearsonCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/WeightedPearsonCorrelationDistanceFunction.html)
  - [WeightedSquaredPearsonCorrelationDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/WeightedSquaredPearsonCorrelationDistanceFunction.html)
- Set-based distance functions (for binary data):
  - [HammingDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/set/HammingDistanceFunction.html)
  - [JaccardSimilarityDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/set/JaccardSimilarityDistanceFunction.html)
- String distance functions:
  - [LevenshteinDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/strings/LevenshteinDistanceFunction.html)
  - [NormalizedLevenshteinDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/strings/NormalizedLevenshteinDistanceFunction.html)
- Spatial distance functions (for geo data mining):
  - [DimensionSelectingLatLngDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/DimensionSelectingLatLngDistanceFunction.html)
  - [LatLngDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LatLngDistanceFunction.html)
  - [LngLatDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LngLatDistanceFunction.html)
- External distance adapters (to access precomputed and externally computed distances):
  - [DiskCacheBasedDoubleDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DiskCacheBasedDoubleDistanceFunction.html)
  - [DiskCacheBasedFloatDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DiskCacheBasedFloatDistanceFunction.html)
  - [FileBasedDoubleDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedDoubleDistanceFunction.html)
  - [FileBasedFloatDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedFloatDistanceFunction.html)
- Subspace distance functions:
  - [SubspaceEuclideanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceEuclideanDistanceFunction.html)
  - [SubspaceManhattanDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceManhattanDistanceFunction.html)
  - [SubspaceLPNormDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceLPNormDistanceFunction.html)
  - [SubspaceMaximumDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceMaximumDistanceFunction.html)
  - [OnedimensionalDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/OnedimensionalDistanceFunction.html)
- Time series distance functions:
  - [DTWDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/DTWDistanceFunction.html)
  - [EDRDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/EDRDistanceFunction.html)
  - [ERPDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/ERPDistanceFunction.html)
  - [LCSSDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/LCSSDistanceFunction.html)
  - [DerivativeDTWDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/DerivativeDTWDistanceFunction.html)
- Distance functions for comparing clusters:
  - [ClusterIntersectionSimilarityFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/similarityfunction/cluster/ClusterIntersectionSimilarityFunction.html)
  - [ClusterJaccardSimilarityFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/similarityfunction/cluster/ClusterJaccardSimilarityFunction.html)
  - [ClusteringAdjustedRandIndexSimilarityFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/similarityfunction/cluster/ClusteringAdjustedRandIndexSimilarityFunction.html)

Similarity Functions
--------------------

Similarity functions usable through the adapter classes above are:

- [FractionalSharedNearestNeighborSimilarityFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/similarityfunction/FractionalSharedNearestNeighborSimilarityFunction.html)
- [SharedNearestNeighborSimilarityFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/similarityfunction/SharedNearestNeighborSimilarityFunction.html)

Implementing custom distance funtions
-------------------------------------

When implementing custom distance functions, ask yourself the following questions first:

- Is it defined on the data itself (like euclidean distance) or on the instances (precomputed, external, second order distances)?
- What requirements does it have on the input data?
- What is the output data type?

Most likely, you will be implementing a [PrimitiveDistanceFunction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/PrimitiveDistanceFunction.html) and can save yourself some work by deriving from [AbstractPrimitiveDistanceFunction](./releases/current/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/AbstractPrimitiveDistanceFunction.html), for example for distances defined in coordinate vectors.

The [Tutorial on writing a custom distance function](/tutorial/distance_functions) takes you through all the steps needed for implementing a custom distance function.

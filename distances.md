---
layout: page
title: Distance Functions
parent: algorithms
---


Distance Functions
==================

ELKI release 0.6.0~20141030 includes the following distance functions

- Minkowski family:
  - [EuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/EuclideanDistanceFunction.html)
  - [ManhattanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/ManhattanDistanceFunction.html)
  - [LPNormDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/LPNormDistanceFunction.html)
  - [MaximumDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/MaximumDistanceFunction.html)
  - [MinimumDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/MinimumDistanceFunction.html)
  - [SquaredEuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/SquaredEuclideanDistanceFunction.html)
  - [WeightedLPNormDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedLPNormDistanceFunction.html)
  - [WeightedEuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedEuclideanDistanceFunction.html)
  - [WeightedManhattanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedManhattanDistanceFunction.html)
  - [WeightedMaximumDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedMaximumDistanceFunction.html)
  - [WeightedSquaredEuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/minkowski/WeightedSquaredEuclideanDistanceFunction.html)
  - [ArcCosineDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/ArcCosineDistanceFunction.html)
  - [CosineDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/CosineDistanceFunction.html)
  - [RandomStableDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/RandomStableDistanceFunction.html)
  - [BrayCurtisDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/BrayCurtisDistanceFunction.html)
  - [CanberraDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/CanberraDistanceFunction.html)
  - [WeightedCanberraDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/WeightedCanberraDistanceFunction.html)
  - [ClarkDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/ClarkDistanceFunction.html)
  - [Kulczynski1DistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/Kulczynski1DistanceFunction.html)
  - [LorentzianDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/LorentzianDistanceFunction.html)
  - [SharedNearestNeighborJaccardDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SharedNearestNeighborJaccardDistanceFunction.html)
  - [LocallyWeightedDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/LocallyWeightedDistanceFunction.html)
- Optimized implementations for sparse vectors:
  - [SparseEuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SparseEuclideanDistanceFunction.html)
  - [SparseManhattanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SparseManhattanDistanceFunction.html)
  - [SparseLPNormDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SparseLPNormDistanceFunction.html)
  - [SparseMaximumDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SparseMaximumDistanceFunction.html)
- Adapters for similarity functions:
  - [SimilarityAdapterArccos](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/adapter/SimilarityAdapterArccos.html)
  - [SimilarityAdapterLn](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/adapter/SimilarityAdapterLn.html)
  - [SimilarityAdapterLinear](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/adapter/SimilarityAdapterLinear.html)
- Distances for probability distributions:
  - [JeffreyDivergenceDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/JeffreyDivergenceDistanceFunction.html)
  - [ChiSquaredDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/ChiSquaredDistanceFunction.html)
  - [HellingerDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/HellingerDistanceFunction.html)
  - [JensenShannonDivergenceDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/JensenShannonDivergenceDistanceFunction.html)
  - [KullbackLeiblerDivergenceAsymmetricDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/KullbackLeiblerDivergenceAsymmetricDistanceFunction.html)
  - [KullbackLeiblerDivergenceReverseAsymmetricDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/KullbackLeiblerDivergenceReverseAsymmetricDistanceFunction.html)
  - [SqrtJensenShannonDivergenceDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/probabilistic/SqrtJensenShannonDivergenceDistanceFunction.html)
- Distance functions for 1-dimensional histograms:
  - [HistogramMatchDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/histogram/HistogramMatchDistanceFunction.html)
  - [KolmogorovSmirnovDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/histogram/KolmogorovSmirnovDistanceFunction.html)
- Color histogram distance functions:
  - [HSBHistogramQuadraticDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/HSBHistogramQuadraticDistanceFunction.html)
  - [HistogramIntersectionDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/HistogramIntersectionDistanceFunction.html)
  - [RGBHistogramQuadraticDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/RGBHistogramQuadraticDistanceFunction.html)
- Correlation distance functions:
  - [PearsonCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/PearsonCorrelationDistanceFunction.html)
  - [SquaredPearsonCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/SquaredPearsonCorrelationDistanceFunction.html)
  - [AbsolutePearsonCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/AbsolutePearsonCorrelationDistanceFunction.html)
  - [UncenteredCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/UncenteredCorrelationDistanceFunction.html)
  - [SquaredUncenteredCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/SquaredUncenteredCorrelationDistanceFunction.html)
  - [AbsoluteUncenteredCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/AbsoluteUncenteredCorrelationDistanceFunction.html)
  - [WeightedPearsonCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/WeightedPearsonCorrelationDistanceFunction.html)
  - [WeightedSquaredPearsonCorrelationDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/correlation/WeightedSquaredPearsonCorrelationDistanceFunction.html)
- Set-based distance functions (for binary data):
  - [HammingDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/set/HammingDistanceFunction.html)
  - [JaccardSimilarityDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/set/JaccardSimilarityDistanceFunction.html)
- String distance functions:
  - [LevenshteinDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/strings/LevenshteinDistanceFunction.html)
  - [NormalizedLevenshteinDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/strings/NormalizedLevenshteinDistanceFunction.html)
- Spatial distance functions (for geo data mining):
  - [DimensionSelectingLatLngDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/DimensionSelectingLatLngDistanceFunction.html)
  - [LatLngDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LatLngDistanceFunction.html)
  - [LngLatDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LngLatDistanceFunction.html)
- External distance adapters (to access precomputed and externally computed distances):
  - [DiskCacheBasedDoubleDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DiskCacheBasedDoubleDistanceFunction.html)
  - [DiskCacheBasedFloatDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DiskCacheBasedFloatDistanceFunction.html)
  - [FileBasedDoubleDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedDoubleDistanceFunction.html)
  - [FileBasedFloatDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedFloatDistanceFunction.html)
- Subspace distance functions:
  - [SubspaceEuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceEuclideanDistanceFunction.html)
  - [SubspaceManhattanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceManhattanDistanceFunction.html)
  - [SubspaceLPNormDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceLPNormDistanceFunction.html)
  - [SubspaceMaximumDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/SubspaceMaximumDistanceFunction.html)
  - [OnedimensionalDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/subspace/OnedimensionalDistanceFunction.html)
- Time series distance functions:
  - [DTWDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/DTWDistanceFunction.html)
  - [EDRDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/EDRDistanceFunction.html)
  - [ERPDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/ERPDistanceFunction.html)
  - [LCSSDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/LCSSDistanceFunction.html)
  - [DerivativeDTWDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/DerivativeDTWDistanceFunction.html)
- Distance functions for comparing clusters:
  - [ClusterIntersectionSimilarityFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/similarityfunction/cluster/ClusterIntersectionSimilarityFunction.html)
  - [ClusterJaccardSimilarityFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/similarityfunction/cluster/ClusterJaccardSimilarityFunction.html)
  - [ClusteringAdjustedRandIndexSimilarityFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/similarityfunction/cluster/ClusteringAdjustedRandIndexSimilarityFunction.html)

Similarity Functions
--------------------

Similarity functions usable through the adapter classes above are:

- [FractionalSharedNearestNeighborSimilarityFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/similarityfunction/FractionalSharedNearestNeighborSimilarityFunction.html)
- [SharedNearestNeighborSimilarityFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/similarityfunction/SharedNearestNeighborSimilarityFunction.html)

Implementing custom distance funtions
-------------------------------------

When implementing custom distance functions, ask yourself the following questions first:

- Is it defined on the data itself (like euclidean distance) or on the instances (precomputed, external, second order distances)?
- What requirements does it have on the input data?
- What is the output data type?

Most likely, you will be implementing a [PrimitiveDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/PrimitiveDistanceFunction.html) and can save yourself some work by deriving from [AbstractVectorDoublePrimitiveDistanceFunction](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/AbstractVectorDoublePrimitiveDistanceFunction.html), for example (= input are arbitrary number vectors of equal dimensionality, the distance is defined on the data itself, and the output type are double values).

Tutorial/DistanceFunctions takes you through all the steps needed for implementing a custom distance function.

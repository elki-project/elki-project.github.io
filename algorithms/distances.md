---
layout: page
title: Distance Functions
parent: algorithms
---


Distance Functions
==================

ELKI release 0.8.0 includes the following distance functions

- Minkowski family:
  - [EuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/EuclideanDistance.html)
  - [ManhattanDistance](/releases/current/javadoc/elki/distance/minkowski/ManhattanDistance.html)
  - [LPNormDistance](/releases/current/javadoc/elki/distance/minkowski/LPNormDistance.html)
  - [LPIntegerNormDistance](/releases/current/javadoc/elki/distance/minkowski/LPIntegerNormDistance.html) (optimized for integer p)
  - [MaximumDistance](/releases/current/javadoc/elki/distance/minkowski/MaximumDistance.html)
  - [MinimumDistance](/releases/current/javadoc/elki/distance/minkowski/MinimumDistance.html)
  - [SquaredEuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/SquaredEuclideanDistance.html)
- Sparse optimized versions of Minkowski distances:
  - [SparseEuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/SparseEuclideanDistance.html)
  - [SparseManhattanDistance](/releases/current/javadoc/elki/distance/minkowski/SparseManhattanDistance.html)
  - [SparseLPNormDistance](/releases/current/javadoc/elki/distance/minkowski/SparseLPNormDistance.html)
  - [SparseMaximumDistance](/releases/current/javadoc/elki/distance/minkowski/SparseMaximumDistance.html)
  - [SparseSquaredEuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/SparseSquaredEuclideanDistance.html)
- Weighted versions of Minkowski distances:
  - [WeightedLPNormDistance](/releases/current/javadoc/elki/distance/minkowski/WeightedLPNormDistance.html)
  - [WeightedEuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/WeightedEuclideanDistance.html)
  - [WeightedManhattanDistance](/releases/current/javadoc/elki/distance/minkowski/WeightedManhattanDistance.html)
  - [WeightedMaximumDistance](/releases/current/javadoc/elki/distance/minkowski/WeightedMaximumDistance.html)
  - [WeightedSquaredEuclideanDistance](/releases/current/javadoc/elki/distance/minkowski/WeightedSquaredEuclideanDistance.html)
- Angular distances:
  - [ArcCosineDistance](/releases/current/javadoc/elki/distance/ArcCosineDistance.html) -- metric, expensive
  - [CosineDistance](/releases/current/javadoc/elki/distance/CosineDistance.html) -- not metric, cheapest
  - [SqrtCosineDistance](/releases/current/javadoc/elki/distance/SqrtCosineDistance.html) -- metric
  - [ArcCosineUnitlengthDistance](/releases/current/javadoc/elki/distance/ArcCosineUnitlengthDistance.html) (optimized for data with ||x||=1)
  - [CosineUnitlengthDistance](/releases/current/javadoc/elki/distance/CosineUnitlengthDistance.html) (optimized for data with ||x||=1)
  - [SqrtCosineUnitlengthDistance](/releases/current/javadoc/elki/distance/SqrtCosineUnitlengthDistance.html) (optimized for data with ||x||=1)
- [BrayCurtisDistance](/releases/current/javadoc/elki/distance/BrayCurtisDistance.html)
- [CanberraDistance](/releases/current/javadoc/elki/distance/CanberraDistance.html)
- [WeightedCanberraDistance](/releases/current/javadoc/elki/distance/WeightedCanberraDistance.html)
- [ClarkDistance](/releases/current/javadoc/elki/distance/ClarkDistance.html)
- [RandomStableDistance](/releases/current/javadoc/elki/distance/RandomStableDistance.html) (pseudo-random distance)
- [MahalanobisDistance](/releases/current/javadoc/elki/distance/MahalanobisDistance.html) (not via GUI/command line, needs a weight matrix)
- [MatrixWeightedQuadraticDistance](/releases/current/javadoc/elki/distance/MatrixWeightedQuadraticDistance.html) (not via GUI/command line, see color histogram distances)
- Adapters for similarity functions:
  - [ArccosSimilarityAdapter](/releases/current/javadoc/elki/distance/adapter/ArccosSimilarityAdapter.html)
  - [LinearSimilarityAdapter](/releases/current/javadoc/elki/distance/adapter/LinearSimilarityAdapter.html)
  - [LnSimilarityAdapter](/releases/current/javadoc/elki/distance/adapter/LnSimilarityAdapter.html)
- Distances for probability distributions:
  - [ChiDistance](/releases/current/javadoc/elki/distance/probabilistic/ChiDistance.html)
  - [ChiSquaredDistance](/releases/current/javadoc/elki/distance/probabilistic/ChiSquaredDistance.html)
  - [FisherRaoDistance](/releases/current/javadoc/elki/distance/probabilistic/FisherRaoDistance.html)
  - [HellingerDistance](/releases/current/javadoc/elki/distance/probabilistic/HellingerDistance.html)
  - [JeffreyDivergenceDistance](/releases/current/javadoc/elki/distance/probabilistic/JeffreyDivergenceDistance.html)
  - [JensenShannonDivergenceDistance](/releases/current/javadoc/elki/distance/probabilistic/JensenShannonDivergenceDistance.html)
  - [KullbackLeiblerDivergenceAsymmetricDistance](/releases/current/javadoc/elki/distance/probabilistic/KullbackLeiblerDivergenceAsymmetricDistance.html)
  - [KullbackLeiblerDivergenceReverseAsymmetricDistance](/releases/current/javadoc/elki/distance/probabilistic/KullbackLeiblerDivergenceReverseAsymmetricDistance.html)
  - [SqrtJensenShannonDivergenceDistance](/releases/current/javadoc/elki/distance/probabilistic/SqrtJensenShannonDivergenceDistance.html)
  - [TriangularDiscriminationDistance](/releases/current/javadoc/elki/distance/probabilistic/TriangularDiscriminationDistance.html)
  - [TriangularDistance](/releases/current/javadoc/elki/distance/probabilistic/TriangularDistance.html)
- Distance functions for 1-dimensional histograms:
  - [HistogramMatchDistance](/releases/current/javadoc/elki/distance/histogram/HistogramMatchDistance.html)
  - [KolmogorovSmirnovDistance](/releases/current/javadoc/elki/distance/histogram/KolmogorovSmirnovDistance.html)
- Color histogram distance functions:
  - [HSBHistogramQuadraticDistance](/releases/current/javadoc/elki/distance/colorhistogram/HSBHistogramQuadraticDistance.html)
  - [HistogramIntersectionDistance](/releases/current/javadoc/elki/distance/colorhistogram/HistogramIntersectionDistance.html)
  - [RGBHistogramQuadraticDistance](/releases/current/javadoc/elki/distance/colorhistogram/RGBHistogramQuadraticDistance.html)
- Correlation distance functions:
  - [PearsonCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/PearsonCorrelationDistance.html)
  - [SquaredPearsonCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/SquaredPearsonCorrelationDistance.html)
  - [AbsolutePearsonCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/AbsolutePearsonCorrelationDistance.html)
  - [UncenteredCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/UncenteredCorrelationDistance.html)
  - [SquaredUncenteredCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/SquaredUncenteredCorrelationDistance.html)
  - [AbsoluteUncenteredCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/AbsoluteUncenteredCorrelationDistance.html)
  - [WeightedPearsonCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/WeightedPearsonCorrelationDistance.html)
  - [WeightedSquaredPearsonCorrelationDistance](/releases/current/javadoc/elki/distance/correlation/WeightedSquaredPearsonCorrelationDistance.html)
- Set-based distance functions (for binary data):
  - [HammingDistance](/releases/current/javadoc/elki/distance/set/HammingDistance.html)
  - [JaccardSimilarityDistance](/releases/current/javadoc/elki/distance/set/JaccardSimilarityDistance.html)
- String distance functions:
  - [LevenshteinDistance](/releases/current/javadoc/elki/distance/strings/LevenshteinDistance.html)
  - [NormalizedLevenshteinDistance](/releases/current/javadoc/elki/distance/strings/NormalizedLevenshteinDistance.html)
- Spatial distance functions (for geo data mining):
  - [DimensionSelectingLatLngDistance](/releases/current/javadoc/elki/distance/geo/DimensionSelectingLatLngDistance.html)
  - [LatLngDistance](/releases/current/javadoc/elki/distance/geo/LatLngDistance.html)
  - [LngLatDistance](/releases/current/javadoc/elki/distance/geo/LngLatDistance.html)
- External distance adapters (to access precomputed and externally computed distances):
  - [DiskCacheBasedDoubleDistance](/releases/current/javadoc/elki/distance/external/DiskCacheBasedDoubleDistance.html) - binary cache
  - [DiskCacheBasedFloatDistance](/releases/current/javadoc/elki/distance/external/DiskCacheBasedFloatDistance.html) - binary cache
  - [FileBasedSparseDoubleDistance](/releases/current/javadoc/elki/distance/external/FileBasedSparseDoubleDistance.html) - ascii cache
  - [FileBasedSparseFloatDistance](/releases/current/javadoc/elki/distance/external/FileBasedSparseFloatDistance.html) - ascii cache
- Subspace distance functions:
  - [SubspaceEuclideanDistance](/releases/current/javadoc/elki/distance/subspace/SubspaceEuclideanDistance.html)
  - [SubspaceManhattanDistance](/releases/current/javadoc/elki/distance/subspace/SubspaceManhattanDistance.html)
  - [SubspaceLPNormDistance](/releases/current/javadoc/elki/distance/subspace/SubspaceLPNormDistance.html)
  - [SubspaceMaximumDistance](/releases/current/javadoc/elki/distance/subspace/SubspaceMaximumDistance.html)
  - [OnedimensionalDistance](/releases/current/javadoc/elki/distance/subspace/OnedimensionalDistance.html)
- Time series distance functions:
  - [DTWDistance](/releases/current/javadoc/elki/distance/timeseries/DTWDistance.html)
  - [EDRDistance](/releases/current/javadoc/elki/distance/timeseries/EDRDistance.html)
  - [ERPDistance](/releases/current/javadoc/elki/distance/timeseries/ERPDistance.html)
  - [LCSSDistance](/releases/current/javadoc/elki/distance/timeseries/LCSSDistance.html)
  - [DerivativeDTWDistance](/releases/current/javadoc/elki/distance/timeseries/DerivativeDTWDistance.html)
- Neighbor based distances:
  - [SharedNearestNeighborJaccardDistance](/releases/current/javadoc/elki/distance/SharedNearestNeighborJaccardDistance.html)
- Distance functions for comparing clusters and clusterings:
  - [ClusterIntersectionSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusterIntersectionSimilarity.html)
  - [ClusterJaccardSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusterJaccardSimilarity.html)
  - [ClusteringAdjustedRandIndexSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringAdjustedRandIndexSimilarity.html)
  - [ClusteringRandIndexSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringRandIndexSimilarity.html)
  - [ClusteringBCubedF1Similarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringBCubedF1Similarity.html)
  - [ClusteringFowlkesMallowsSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringFowlkesMallowsSimilarity.html)


Similarity Functions as Distances
---------------------------------

Similarity functions usable through the adapter classes above include:

- [FractionalSharedNearestNeighborSimilarity](/releases/current/javadoc/elki/similarity/FractionalSharedNearestNeighborSimilarity.html)
- [SharedNearestNeighborSimilarity](/releases/current/javadoc/elki/similarity/SharedNearestNeighborSimilarity.html)
- [Kulczynski1Similarity](/releases/current/javadoc/elki/similarity/Kulczynski1Similarity.html)
- [Kulczynski2Similarity](/releases/current/javadoc/elki/similarity/Kulczynski2Similarity.html)
- Kernel functions
  - [LinearKernel](/releases/current/javadoc/elki/similarity/kernel/LinearKernel.html)
  - [PolynomialKernel](/releases/current/javadoc/elki/similarity/kernel/PolynomialKernel.html)
  - [RadialBasisFunctionKernel](/releases/current/javadoc/elki/similarity/kernel/RadialBasisFunctionKernel.html)
  - [SigmoidKernel](/releases/current/javadoc/elki/similarity/kernel/SigmoidKernel.html)
  - [LaplaceKernel](/releases/current/javadoc/elki/similarity/kernel/LaplaceKernel.html)
  - [RationalQuadraticKernel](/releases/current/javadoc/elki/similarity/kernel/RationalQuadraticKernel.html)
- Similarity functions for clusters and clusterings:
  - [ClusterIntersectionSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusterIntersectionSimilarity.html)
  - [ClusterJaccardSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusterJaccardSimilarity.html)
  - [ClusteringAdjustedRandIndexSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringAdjustedRandIndexSimilarity.html)
  - [ClusteringRandIndexSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringRandIndexSimilarity.html)
  - [ClusteringBCubedF1Similarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringBCubedF1Similarity.html)
  - [ClusteringFowlkesMallowsSimilarity](/releases/current/javadoc/elki/similarity/cluster/ClusteringFowlkesMallowsSimilarity.html)
- Adapter for using distances as similarity functions:
  - [InvertedDistanceSimilarity](/releases/current/javadoc/elki/similarity/InvertedDistanceSimilarity.html)
- Distances also available as similarities:
  - [HellingerDistance](/releases/current/javadoc/elki/distance/probabilistic/HellingerDistance.html)
  - [JaccardSimilarityDistance](/releases/current/javadoc/elki/distance/set/JaccardSimilarityDistance.html)


Implementing custom distance funtions
-------------------------------------

When implementing custom distance functions, ask yourself the following questions first:

- Is it defined on the data itself (like euclidean distance) or on the instances (precomputed, external, second order distances)?
- What requirements does it have on the input data?
- What is the output data type?

Most likely, you will be implementing a
[NumberVectorDistance](/releases/current/javadoc/elki/distance/NumberVectorDistance.html)
and can save yourself some work by deriving from
[AbstractNumberVectorDistance](/releases/current/javadoc/elki/distance/AbstractNumberVectorDistance.html),
for example for distances defined in coordinate vectors.

The [Tutorial on writing a custom distance function](/tutorial/distance_functions) takes you through all the steps needed for implementing a custom distance function.

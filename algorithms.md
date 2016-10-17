---
layout: page
title: Data Mining Algorithms in ELKI
short: Algorithms
navigation: 9
section: algorithms
---

Data Mining Algorithms in ELKI
==============================

The following data-mining algorithms are included in the ELKI 0.7.1 release.
For literature references, click on the individual algorithms or the references overview in the [JavaDoc](/javadoc) documentation. See also [RelatedPublications](/related)

Clustering Algorithms:

- [AffinityPropagationClusteringAlgorithm](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/affinitypropagation/AffinityPropagationClusteringAlgorithm.html)
- [CanopyPreClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/CanopyPreClustering.html)
- Density-based clustering:
  - [DBSCAN](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/DBSCAN.html)
  - [GeneralizedDBSCAN](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/GeneralizedDBSCAN.html)
  - [LSDBC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/LSDBC.html)
  - [GriDBSCAN](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/GriDBSCAN.html)
  - [OPTICSXi](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/OPTICSXi.html)
  - [OPTICSHeap](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/OPTICSHeap.html)
  - [OPTICSList](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/OPTICSList.html)
  - [DeLiClu](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/DeLiClu.html)
  - [FastOPTICS](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/FastOPTICS.html)
  - [NaiveMeanShiftClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/NaiveMeanShiftClustering.html)
- [EM](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/em/EM.html)
- Hierarchical clustering family:
  - [AGNES](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/AGNES.html)
  - [SLINK](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/SLINK.html)
  - [CLINK](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/CLINK.html)
  - [AnderbergHierarchicalClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/AnderbergHierarchicalClustering.html)
  - [SLINKHDBSCANLinearMemory](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/SLINKHDBSCANLinearMemory.html)
  - [HDBSCANLinearMemory](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/HDBSCANLinearMemory.html)
  - Cluster extraction:
  - [HDBSCANHierarchyExtraction](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/HDBSCANHierarchyExtraction.html)
  - [SimplifiedHierarchyExtraction](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/SimplifiedHierarchyExtraction.html)
  - [ExtractFlatClusteringFromHierarchy](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/ExtractFlatClusteringFromHierarchy.html)
- K-Means family:
  - [KMeansSort](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansSort.html)
  - [KMeansCompare](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansCompare.html)
  - [KMeansHamerly](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansHamerly.html)
  - [KMeansElkan](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansElkan.html)
  - [KMeansLloyd](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansLloyd.html)
  - [ParallelLloydKMeans](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/parallel/ParallelLloydKMeans.html)
  - [KMeansMacQueen](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansMacQueen.html)
  - [KMediansLloyd](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMediansLloyd.html)
  - [KMedoidsPAM](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsPAM.html)
  - [KMedoidsEM](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsEM.html)
  - [CLARA](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/CLARA.html)
  - [BestOfMultipleKMeans](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/BestOfMultipleKMeans.html)
  - [KMeansBisecting](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansBisecting.html)
  - [KMeansBatchedLloyd](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansBatchedLloyd.html)
  - [KMeansHybridLloydMacQueen](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansHybridLloydMacQueen.html)
  - [SingleAssignmentKMeans](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/SingleAssignmentKMeans.html)
  - [XMeans](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/XMeans.html)
- [SNNClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/SNNClustering.html)
- Correlation clustering algorithms:
  - [CASH](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/CASH.html)
  - [COPAC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/COPAC.html)
  - [ERiC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/ERiC.html)
  - [FourC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/FourC.html)
  - [HiCO](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/HiCO.html)
  - [LMCLUS](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/LMCLUS.html)
  - [ORCLUS](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/ORCLUS.html)
- Subspace (axis-parallel) clustering algorithms:
  - [CLIQUE](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/CLIQUE.html)
  - [DiSH](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/DiSH.html)
  - [DOC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/DOC.html)
  - [HiSC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/HiSC.html)
  - [P3C](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/P3C.html)
  - [PreDeCon](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/PreDeCon.html)
  - [PROCLUS](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/PROCLUS.html)
  - [SUBCLU](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/SUBCLU.html)
- Biclustering algorithms:
  - [ChengAndChurch](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/biclustering/ChengAndChurch.html)
- Clustering algorithms for 1-dimensional data only:
  - [KNNKernelDensityMinimaClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/onedimensional/KNNKernelDensityMinimaClustering.html)
- Trivial clustering algorithms (for reference and evaluation):
  - [ExternalClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/meta/ExternalClustering.html)
  - [ByLabelClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByLabelClustering.html)
  - [ByLabelHierarchicalClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByLabelHierarchicalClustering.html)
  - [ByModelClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByModelClustering.html)
  - [TrivialAllInOne](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/TrivialAllInOne.html)
  - [TrivialAllNoise](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/TrivialAllNoise.html)
  - [ByLabelOrAllInOneClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByLabelOrAllInOneClustering.html)
- Uncertain clustering algorithms:
  - [FDBSCAN](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/FDBSCAN.html)
  - [CKMeans](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/CKMeans.html)
  - [UKMeans](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/UKMeans.html)
  - [RepresentativeUncertainClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/RepresentativeUncertainClustering.html)
  - [CenterOfMassMetaClustering](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/CenterOfMassMetaClustering.html)

Outlier Detection

- Distance-based outlier detection:
  - [DBOutlierDetection](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/DBOutlierDetection.html)
  - [DBOutlierScore](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/DBOutlierScore.html)
  - [HilOut](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/HilOut.html)
  - [KNNOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/KNNOutlier.html)
  - [KNNWeightOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/KNNWeightOutlier.html)
  - [ODIN](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/ODIN.html)
  - [ParallelKNNOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/parallel/ParallelKNNOutlier.html)
  - [ParallelKNNWeightOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/parallel/ParallelKNNWeightOutlier.html)
  - [ReferenceBasedOutlierDetection](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/ReferenceBasedOutlierDetection.html)
- LOF family of methods:
  - [LOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LOF.html)
  - [ParallelLOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/parallel/ParallelLOF.html)
  - [ALOCI](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/ALOCI.html)
  - [COF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/COF.html)
  - [FlexibleLOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/FlexibleLOF.html)
  - [INFLO](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/INFLO.html)
  - [KDEOS](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/KDEOS.html)
  - [LDF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LDF.html)
  - [LDOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LDOF.html)
  - [LOCI](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LOCI.html)
  - [LoOP](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LoOP.html)
  - [OnlineLOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/OnlineLOF.html)
  - [SimplifiedLOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/SimplifiedLOF.html)
  - [ParallelSimplifiedLOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/ParallelSimplifiedLOF.html)
  - [SimpleKernelDensityLOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/SimpleKernelDensityLOF.html)
- Angle-based outlier detection:
  - [ABOD](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/anglebased/ABOD.html)
  - [FastABOD](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/anglebased/FastABOD.html)
  - [LBABOD](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/anglebased/LBABOD.html)
- Clustering based outlier detection:
  - [EMOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/clustering/EMOutlier.html)
  - [KMeansOutlierDetection](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/clustering/KMeansOutlierDetection.html)
  - [SilhouetteOutlierDetection](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/clustering/SilhouetteOutlierDetection.html)
- [COP](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/COP.html)
- [DWOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/DWOF.html)
- [GaussianModel](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/GaussianModel.html)
- [GaussianUniformMixture](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/GaussianUniformMixture.html)
- [OPTICSOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/OPTICSOF.html)
- [SimpleCOP](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/SimpleCOP.html)
- Subspace outlier detection:
  - [AggarwalYuEvolutionary](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/AggarwalYuEvolutionary.html)
  - [AggarwalYuNaive](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/AggarwalYuNaive.html)
  - [OUTRES](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OUTRES.html)
  - [OutRankS1](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OutRankS1.html)
  - [SOD](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/SOD.html)
- Spatial outlier detection:
  - [CTLuGLSBackwardSearchAlgorithm](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuGLSBackwardSearchAlgorithm.html)
  - [CTLuMeanMultipleAttributes](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMeanMultipleAttributes.html)
  - [CTLuMedianAlgorithm](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianAlgorithm.html)
  - [CTLuMedianMultipleAttributes](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianMultipleAttributes.html)
  - [CTLuMoranScatterplotOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMoranScatterplotOutlier.html)
  - [CTLuRandomWalkEC](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuRandomWalkEC.html)
  - [CTLuScatterplotOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuScatterplotOutlier.html)
  - [CTLuZTestOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuZTestOutlier.html)
  - [SLOM](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SLOM.html)
  - [SOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SOF.html)
  - [TrimmedMeanApproach](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/TrimmedMeanApproach.html)
- Meta outlier methods:
  - [ExternalDoubleOutlierScore](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/ExternalDoubleOutlierScore.html)
  - [FeatureBagging](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/FeatureBagging.html)
  - [HiCS](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/HiCS.html)
  - [RescaleMetaOutlierAlgorithm](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/RescaleMetaOutlierAlgorithm.html)
  - [SimpleOutlierEnsemble](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/SimpleOutlierEnsemble.html)
- Trivial outlier methods (for reference and evaluation):
  - [ByLabelOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/ByLabelOutlier.html)
  - [TrivialAllOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialAllOutlier.html)
  - [TrivialNoOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialNoOutlier.html)
  - [TrivialGeneratedOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialGeneratedOutlier.html)
  - [TrivialAverageCoordinateOutlier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialAverageCoordinateOutlier.html)
  
Classification algorithms (for use with [ClassifierHoldoutEvaluationTask](/releases/current/doc/de/lmu/ifi/dbs/elki/application/ClassifierHoldoutEvaluationTask.html))

- [KNNClassifier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/classification/KNNClassifier.html)
- [PriorProbabilityClassifier](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/classification/PriorProbabilityClassifier.html)

Frequent Itemset Mining:

- [APRIORI](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/itemsetmining/APRIORI.html)
- [Eclat](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/itemsetmining/Eclat.html)
- [FPGrowth](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/itemsetmining/FPGrowth.html)
- [DependencyDerivator](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/DependencyDerivator.html)
- [KNNDistanceOrder](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/KNNDistanceOrder.html)
- [KNNJoin](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/KNNJoin.html)
- [MaterializeDistances](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/MaterializeDistances.html)

Benchmarking algorithms:

- [KNNBenchmarkAlgorithm](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/benchmark/KNNBenchmarkAlgorithm.html)
- [RangeQueryBenchmarkAlgorithm](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/benchmark/RangeQueryBenchmarkAlgorithm.html)
- [ValidateApproximativeKNNIndex](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/benchmark/ValidateApproximativeKNNIndex.html)

Data set statistics:

- [AveragePrecisionAtK](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/AveragePrecisionAtK.html)
- [DistanceStatisticsWithClasses](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/DistanceStatisticsWithClasses.html)
- [EstimateIntrinsicDimensionality](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/EstimateIntrinsicDimensionality.html)
- [EvaluateRankingQuality](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/EvaluateRankingQuality.html)
- [EvaluateRetrievalPerformance](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/EvaluateRetrievalPerformance.html)
- [HopkinsStatisticClusteringTendency](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/HopkinsStatisticClusteringTendency.html)
- [RankingQualityHistogram](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/statistics/RankingQualityHistogram.html)


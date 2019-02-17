---
layout: page
title: Data Mining Algorithms in ELKI
short: Algorithms
navigation: 9
section: algorithms
---

Data Mining Algorithms in ELKI
==============================

The following data-mining algorithms are included in the ELKI 0.7.5 release.
For literature references, click on the individual algorithms or the references overview in the [JavaDoc](/dev/javadoc) documentation. See also [RelatedPublications](/related)

Clustering Algorithms:

- [AffinityPropagationClusteringAlgorithm](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/affinitypropagation/AffinityPropagationClusteringAlgorithm.html)
- [CanopyPreClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/CanopyPreClustering.html)
- [Leader](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/Leader.html)
- Density-based clustering:
  - [DBSCAN](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/DBSCAN.html)
  - [GeneralizedDBSCAN](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/GeneralizedDBSCAN.html)
  - [ParalleGeneralizedDBSCAN](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/parallel/ParallelGeneralizedDBSCAN.html)
  - [LSDBC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/gdbscan/LSDBC.html)
  - [GriDBSCAN](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/GriDBSCAN.html)
  - [OPTICSXi](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/OPTICSXi.html)
  - [OPTICSHeap](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/OPTICSHeap.html)
  - [OPTICSList](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/OPTICSList.html)
  - [DeLiClu](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/DeLiClu.html)
  - [FastOPTICS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/optics/FastOPTICS.html)
  - [NaiveMeanShiftClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/NaiveMeanShiftClustering.html)
- [EM](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/em/EM.html)
- Hierarchical clustering family:
  - [AGNES](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/AGNES.html)
  - [AnderbergHierarchicalClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/AnderbergHierarchicalClustering.html)
  - [CLINK](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/CLINK.html)
  - [HDBSCANLinearMemory](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/HDBSCANLinearMemory.html)
  - [MiniMax](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/MiniMax.html)
  - [MiniMaxAnderberg](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/MiniMaxAnderberg.html)
  - [MiniMaxNNChain](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/MiniMaxNNChain.html)
  - [NNChain](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/NNChain.html)
  - [SLINK](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/SLINK.html)
  - [SLINKHDBSCANLinearMemory](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/SLINKHDBSCANLinearMemory.html)
  - [BIRCHLeafClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/birch/BIRCHLeafClustering.html)
  - Cluster extraction:
    - [ClustersWithNoiseExtraction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/ClustersWithNoiseExtraction.html)
    - [CutDendrogramByHeight](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/CutDendrogramByHeight.html)
    - [CutDendrogramByNumberOfClusters](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/CutDendrogramByNumberOfClusters.html)
    - [HDBSCANHierarchyExtraction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/HDBSCANHierarchyExtraction.html)
    - [SimplifiedHierarchyExtraction](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/hierarchical/extraction/SimplifiedHierarchyExtraction.html)
- K-Means family:
  - [KMeansAnnulus](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansAnnulus.html)
  - [KMeansBisecting](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansBisecting.html)
  - [KMeansCompare](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansCompare.html)
  - [KMeansElkan](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansElkan.html)
  - [KMeansExponion](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansExponion.html)
  - [KMeansHamerly](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansHamerly.html)
  - [KMeansLloyd](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansLloyd.html)
  - [ParallelLloydKMeans](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/parallel/ParallelLloydKMeans.html)
  - [KMeansMacQueen](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansMacQueen.html)
  - [KMeansMinusMinus](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansMinusMinus.html)
  - [KMeansSimplifiedElkan](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansSimplifiedElkan.html)
  - [KMeansSort](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMeansSort.html)
  - [KMediansLloyd](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMediansLloyd.html)
  - [KMedoidsFastPAM](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsFastPAM.html)
  - [KMedoidsFastPAM1](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsFastPAM1.html)
  - [KMedoidsPAM](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsPAM.html)
  - [KMedoidsPAMReynolds](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsPAMReynolds.html)
  - [KMedoidsPark](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/KMedoidsPark.html)
  - [CLARA](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/CLARA.html)
  - [CLARANS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/CLARANS.html)
  - [FastCLARA](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/FastCLARA.html)
  - [FastCLARANS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/FastCLARANS.html)
  - [BestOfMultipleKMeans](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/BestOfMultipleKMeans.html)
  - [SingleAssignmentKMeans](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/SingleAssignmentKMeans.html)
  - [XMeans](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/kmeans/XMeans.html)
- [SNNClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/SNNClustering.html)
- Correlation clustering algorithms:
  - [CASH](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/CASH.html)
  - [COPAC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/COPAC.html)
  - [ERiC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/ERiC.html)
  - [FourC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/FourC.html)
  - [HiCO](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/HiCO.html)
  - [LMCLUS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/LMCLUS.html)
  - [ORCLUS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/correlation/ORCLUS.html)
- Subspace (axis-parallel) clustering algorithms:
  - [CLIQUE](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/CLIQUE.html)
  - [DiSH](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/DiSH.html)
  - [DOC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/DOC.html)
  - [HiSC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/HiSC.html)
  - [P3C](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/P3C.html)
  - [PreDeCon](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/PreDeCon.html)
  - [PROCLUS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/PROCLUS.html)
  - [SUBCLU](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/subspace/SUBCLU.html)
- Biclustering algorithms:
  - [ChengAndChurch](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/biclustering/ChengAndChurch.html)
- Clustering algorithms for 1-dimensional data only:
  - [KNNKernelDensityMinimaClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/onedimensional/KNNKernelDensityMinimaClustering.html)
- Trivial clustering algorithms (for reference and evaluation):
  - [ExternalClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/meta/ExternalClustering.html)
  - [ByLabelClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByLabelClustering.html)
  - [ByLabelHierarchicalClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByLabelHierarchicalClustering.html)
  - [ByModelClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByModelClustering.html)
  - [TrivialAllInOne](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/TrivialAllInOne.html)
  - [TrivialAllNoise](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/TrivialAllNoise.html)
  - [ByLabelOrAllInOneClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/trivial/ByLabelOrAllInOneClustering.html)
- Uncertain clustering algorithms:
  - [FDBSCAN](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/FDBSCAN.html)
  - [CKMeans](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/CKMeans.html)
  - [UKMeans](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/UKMeans.html)
  - [RepresentativeUncertainClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/RepresentativeUncertainClustering.html)
  - [CenterOfMassMetaClustering](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/clustering/uncertain/CenterOfMassMetaClustering.html)

Outlier Detection

- Distance-based outlier detection:
  - [DBOutlierDetection](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/DBOutlierDetection.html)
  - [DBOutlierScore](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/DBOutlierScore.html)
  - [HilOut](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/HilOut.html)
  - [KNNDD](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/KNNDD.html)
  - [KNNOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/KNNOutlier.html)
  - [KNNSOS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/KNNSOS.html)
  - [KNNWeightOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/KNNWeightOutlier.html)
  - [LocalIsolationCoefficient](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/LocalIsolationCoefficient.html)
  - [ODIN](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/ODIN.html)
  - [ParallelKNNOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/parallel/ParallelKNNOutlier.html)
  - [ParallelKNNWeightOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/parallel/ParallelKNNWeightOutlier.html)
  - [ReferenceBasedOutlierDetection](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/ReferenceBasedOutlierDetection.html)
  - [SOS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/distance/SOS.html)
- LOF family of methods:
  - [LOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LOF.html)
  - [ParallelLOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/parallel/ParallelLOF.html)
  - [ALOCI](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/ALOCI.html)
  - [COF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/COF.html)
  - [FlexibleLOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/FlexibleLOF.html)
  - [INFLO](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/INFLO.html)
  - [KDEOS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/KDEOS.html)
  - [LDF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LDF.html)
  - [LDOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LDOF.html)
  - [LOCI](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LOCI.html)
  - [LoOP](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LoOP.html)
  - [OnlineLOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/OnlineLOF.html)
  - [SimplifiedLOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/SimplifiedLOF.html)
  - [ParallelSimplifiedLOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/parallel/ParallelSimplifiedLOF.html)
  - [SimpleKernelDensityLOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/SimpleKernelDensityLOF.html)
  - [VarianceOfVolume](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/VarianceOfVolume.html)
- Angle-based outlier detection:
  - [ABOD](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/anglebased/ABOD.html)
  - [FastABOD](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/anglebased/FastABOD.html)
  - [LBABOD](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/anglebased/LBABOD.html)
- Intrinsic dimensionality based:
  - [IDOS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/intrinsic/IDOS.html)
  - [ISOS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/intrinsic/ISOS.html)
  - [IntrinsicDimensionalityOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/intrinsic/IntrinsicDimensionalityOutlier.html)
- Clustering based outlier detection:
  - [EMOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/clustering/EMOutlier.html)
  - [KMeansOutlierDetection](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/clustering/KMeansOutlierDetection.html)
  - [SilhouetteOutlierDetection](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/clustering/SilhouetteOutlierDetection.html)
- [COP](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/COP.html)
- [DWOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/DWOF.html)
- [GaussianModel](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/GaussianModel.html)
- [GaussianUniformMixture](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/GaussianUniformMixture.html)
- [OPTICSOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/OPTICSOF.html)
- [SimpleCOP](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/SimpleCOP.html)
- Subspace outlier detection:
  - [AggarwalYuEvolutionary](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/AggarwalYuEvolutionary.html)
  - [AggarwalYuNaive](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/AggarwalYuNaive.html)
  - [OUTRES](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OUTRES.html)
  - [OutRankS1](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/OutRankS1.html)
  - [SOD](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/subspace/SOD.html)
- Spatial outlier detection:
  - [CTLuGLSBackwardSearchAlgorithm](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuGLSBackwardSearchAlgorithm.html)
  - [CTLuMeanMultipleAttributes](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMeanMultipleAttributes.html)
  - [CTLuMedianAlgorithm](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianAlgorithm.html)
  - [CTLuMedianMultipleAttributes](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianMultipleAttributes.html)
  - [CTLuMoranScatterplotOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMoranScatterplotOutlier.html)
  - [CTLuRandomWalkEC](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuRandomWalkEC.html)
  - [CTLuScatterplotOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuScatterplotOutlier.html)
  - [CTLuZTestOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuZTestOutlier.html)
  - [SLOM](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SLOM.html)
  - [SOF](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SOF.html)
  - [TrimmedMeanApproach](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/TrimmedMeanApproach.html)
- Meta outlier methods:
  - [ExternalDoubleOutlierScore](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/ExternalDoubleOutlierScore.html)
  - [FeatureBagging](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/FeatureBagging.html)
  - [HiCS](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/HiCS.html)
  - [RescaleMetaOutlierAlgorithm](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/RescaleMetaOutlierAlgorithm.html)
  - [SimpleOutlierEnsemble](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/meta/SimpleOutlierEnsemble.html)
- Trivial outlier methods (for reference and evaluation):
  - [ByLabelOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/ByLabelOutlier.html)
  - [TrivialAllOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialAllOutlier.html)
  - [TrivialNoOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialNoOutlier.html)
  - [TrivialGeneratedOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialGeneratedOutlier.html)
  - [TrivialAverageCoordinateOutlier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/trivial/TrivialAverageCoordinateOutlier.html)
  
Classification algorithms (for use with [ClassifierHoldoutEvaluationTask](/releases/current/javadoc/de/lmu/ifi/dbs/elki/application/ClassifierHoldoutEvaluationTask.html))

- [KNNClassifier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/classification/KNNClassifier.html)
- [PriorProbabilityClassifier](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/classification/PriorProbabilityClassifier.html)

Frequent Itemset Mining:

- [APRIORI](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/itemsetmining/APRIORI.html)
- [Eclat](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/itemsetmining/Eclat.html)
- [FPGrowth](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/itemsetmining/FPGrowth.html)

Projection:

- [BarnesHutTSNE](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/projection/BarnesHutTSNE.html)
- [SNE](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/projection/SNE.html)
- [TSNE](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/projection/TSNE.html)
- itSNE, via the TSNE class

Other:

- [DependencyDerivator](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/DependencyDerivator.html)
- [KNNDistancesSampler](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/KNNDistancesSampler.html)
- [KNNJoin](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/KNNJoin.html)

Benchmarking algorithms:

- [KNNBenchmarkAlgorithm](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/benchmark/KNNBenchmarkAlgorithm.html)
- [RangeQueryBenchmarkAlgorithm](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/benchmark/RangeQueryBenchmarkAlgorithm.html)
- [ValidateApproximativeKNNIndex](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/benchmark/ValidateApproximativeKNNIndex.html)

Data set statistics:

- [AveragePrecisionAtK](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/AveragePrecisionAtK.html)
- [DistanceStatisticsWithClasses](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/DistanceStatisticsWithClasses.html)
- [EstimateIntrinsicDimensionality](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/EstimateIntrinsicDimensionality.html)
- [EvaluateRankingQuality](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/EvaluateRankingQuality.html)
- [EvaluateRetrievalPerformance](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/EvaluateRetrievalPerformance.html)
- [HopkinsStatisticClusteringTendency](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/HopkinsStatisticClusteringTendency.html)
- [RankingQualityHistogram](/releases/current/javadoc/de/lmu/ifi/dbs/elki/algorithm/statistics/RankingQualityHistogram.html)


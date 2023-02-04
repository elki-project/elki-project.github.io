---
layout: page
title: Data Mining Algorithms in ELKI
short: Algorithms
navigation: 9
section: algorithms
---

Data Mining Algorithms in ELKI
==============================

The following data-mining algorithms are included in the ELKI 0.8.0 release.
For literature references, click on the individual algorithms or the references overview in the [JavaDoc](/dev/javadoc) documentation. See also [RelatedPublications](/related)

Clustering Algorithms:

- [Affinity Propagation](/releases/current/javadoc/elki/algorithm/clustering/affinitypropagation/AffinityPropagation.html)
- [CFSFDP Density-Peak Clustering](/releases/current/javadoc/elki/algorithm/clustering/CFSFDP.html)
- [Canopy Pre-Clustering](/releases/current/javadoc/elki/algorithm/clustering/CanopyPreClustering.html)
- [Leader Clustering](/releases/current/javadoc/elki/algorithm/clustering/Leader.html)
- Density-based clustering:
  - [DBSCAN](/releases/current/javadoc/elki/algorithm/clustering/DBSCAN.html)
  - [GeneralizedDBSCAN](/releases/current/javadoc/elki/algorithm/clustering/gdbscan/GeneralizedDBSCAN.html)
  - [ParalleGeneralizedDBSCAN](/releases/current/javadoc/elki/algorithm/clustering/gdbscan/parallel/ParallelGeneralizedDBSCAN.html)
  - [GriDBSCAN](/releases/current/javadoc/elki/algorithm/clustering/GriDBSCAN.html)
  - [LSDBC](/releases/current/javadoc/elki/algorithm/clustering/gdbscan/LSDBC.html)
  - [OPTICS Xi Cluster Extraction](/releases/current/javadoc/elki/algorithm/clustering/optics/OPTICSXi.html)
  - [OPTICS with Heap](/releases/current/javadoc/elki/algorithm/clustering/optics/OPTICSHeap.html)
  - [OPTICS with List](/releases/current/javadoc/elki/algorithm/clustering/optics/OPTICSList.html)
  - [DeLiClu Density-Link Clustering](/releases/current/javadoc/elki/algorithm/clustering/optics/DeLiClu.html)
  - [FastOPTICS](/releases/current/javadoc/elki/algorithm/clustering/optics/FastOPTICS.html)
- [Naive Mean-Shift Clustering](/releases/current/javadoc/elki/algorithm/clustering/NaiveMeanShiftClustering.html)
- [Gaussian Mixture Modeling with EM](/releases/current/javadoc/elki/algorithm/clustering/em/EM.html)
- Hierarchical clustering:
  - [AGNES](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/AGNES.html)
  - [Anderberg](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/Anderberg.html)
  - [CLINK](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/CLINK.html)
  - [HACAM: Hierarchical Clustering Around Medoids](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/HACAM.html)
  - [HDBSCAN\* with linear memory consumption](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/HDBSCANLinearMemory.html)
  - [Linear Memory NN-Chain](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/LinearMemoryNNChain.html)
  - [Medoid Linkage Clustering](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/MedoidLinkage.html)
  - [MiniMax Clustering](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/MiniMax.html)
  - [MiniMax with Anderberg acceleration](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/MiniMaxAnderberg.html)
  - [MiniMax with NN-Chain](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/MiniMaxNNChain.html)
  - [NN-Chain](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/NNChain.html)
  - [SLINK](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/SLINK.html)
  - [SLINK-based HDBSCAN\* with linear memory consumption](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/SLINKHDBSCANLinearMemory.html)
  - [BIRCH Leaf Clustering](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/birch/BIRCHLeafClustering.html)
  - Cluster extraction:
    - [Clusters Extraction with Noise](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/extraction/ClustersWithNoiseExtraction.html)
    - [Cut Dendrogram By Height](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/extraction/CutDendrogramByHeight.html)
    - [Cut Dendrogram By Number Of Clusters](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/extraction/CutDendrogramByNumberOfClusters.html)
    - [HDBSCAN\* Hierarchy Extraction](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/extraction/HDBSCANHierarchyExtraction.html)
    - [Simplified Hierarchy Extraction](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/extraction/SimplifiedHierarchyExtraction.html)
- k-means family:
  - [Annulus](/releases/current/javadoc/elki/algorithm/clustering/kmeans/AnnulusKMeans.html)
  - [Best Of Multiple k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/BestOfMultipleKMeans.html)
  - [Bisecting](/releases/current/javadoc/elki/algorithm/clustering/kmeans/BisectingKMeans.html)
  - [CompareMeans](/releases/current/javadoc/elki/algorithm/clustering/kmeans/CompareMeans.html)
  - [KMeansElkan](/releases/current/javadoc/elki/algorithm/clustering/kmeans/Elkan.html)
  - [Exponion](/releases/current/javadoc/elki/algorithm/clustering/kmeans/ExponionKMeans.html)
  - [FuzzyCMeans](/releases/current/javadoc/elki/algorithm/clustering/kmeans/FuzzyCMeans.html)
  - [GMeans](/releases/current/javadoc/elki/algorithm/clustering/kmeans/GMeans.html)
  - [Hartigan and Wong](/releases/current/javadoc/elki/algorithm/clustering/kmeans/HartiganWongKMeans.html)
  - [Hamerly](/releases/current/javadoc/elki/algorithm/clustering/kmeans/HamerlyKMeans.html)
  - [Lloyd k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/LloydKMeans.html)
  - [Lloyd k-medians](/releases/current/javadoc/elki/algorithm/clustering/kmeans/LloydKMedians.html)
  - [MacQueen](/releases/current/javadoc/elki/algorithm/clustering/kmeans/MacQueenKMeans.html)
  - [k-d-tree Filtering](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/KDTreeFilteringKMeans.html)
  - [k-d-tree Pruning](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/KDTreePruningKMeans.html)
  - [KMeans--](/releases/current/javadoc/elki/algorithm/clustering/kmeans/KMeansMinusMinus.html)
  - [Shallot](/releases/current/javadoc/elki/algorithm/clustering/kmeans/ShallotKMeans.html)
  - [Simplified Elkan](/releases/current/javadoc/elki/algorithm/clustering/kmeans/SimplifiedElkanKMeans.html)
  - [SortMeans](/releases/current/javadoc/elki/algorithm/clustering/kmeans/SortMeans.html)
  - [Yin-Yang](/releases/current/javadoc/elki/algorithm/clustering/kmeans/YinYangKMeans.html)
  - [Parallel Lloyd](/releases/current/javadoc/elki/algorithm/clustering/kmeans/parallel/ParallelLloydKMeans.html)
  - [BIRCH k-Means](/releases/current/javadoc/elki/algorithm/clustering/hierarchical/birch/BIRCHLloydKMeans.html)
  - [BETULA k-Means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/BetulaLloydKMeans.html)
  - [Single assignment k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/SingleAssignmentKMeans.html)
  - [X-Means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/XMeans.html)
- Spherical k-means 
  - [Spherical Elkan k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/spherical/SphericalElkanKMeans.html)
  - [Spherical Hamerly k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/spherical/SphericalHamerlyKMeans.html)
  - [Spherical Lloyd k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/spherical/SphericalKMeans.html)
  - [Spherical simplified Elkan k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/spherical/SphericalSimplifiedElkanKMeans.html)
  - [Spherical simplified Hamerly k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/spherical/SphericalSimplifiedHamerlyKMeans.html)
  - [Spherical single assignment k-means](/releases/current/javadoc/elki/algorithm/clustering/kmeans/spherical/SphericalSingleAssignmentKMeans.html)
- K-Medoids
  - [Alternating k-medoids](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/Alternating.html)
  - [EagerPAM](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/EagerPAM.html)
  - [FastPAM](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/FastPAM.html)
  - [FastPAM1](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/FastPAM1.html)
  - [FasterPAM](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/FasterPAM.html)
  - [PAM](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/PAM.html)
  - [Reynolds' PAM](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/ReynoldsPAM.html)
  - [CLARA](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/CLARA.html)
  - [CLARANS](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/CLARANS.html)
  - [FastCLARA](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/FastCLARA.html)
  - [FasterCLARA](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/FasterCLARA.html)
  - [FastCLARANS](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/FastCLARANS.html)
  - [Single assignment k-medoids](/releases/current/javadoc/elki/algorithm/clustering/kmedoids/SingleAssignmentKMedoids.html)
- Silhouette clustering:
  - [PAMSIL](/releases/current/javadoc/elki/algorithm/clustering/silhouette/PAMSIL.html)
  - [PAMMEDSIL](/releases/current/javadoc/elki/algorithm/clustering/silhouette/PAMMEDSIL.html)
  - [FastMSC](/releases/current/javadoc/elki/algorithm/clustering/silhouette/FastMSC.html)
  - [FasterMSC](/releases/current/javadoc/elki/algorithm/clustering/silhouette/FasterMSC.html)
- [SNNClustering](/releases/current/javadoc/elki/algorithm/clustering/SNNClustering.html)
- [Support Vector Clustering](/releases/current/javadoc/elki/algorithm/clustering/svm/SupportVectorClustering.html)
- Correlation clustering algorithms:
  - [CASH](/releases/current/javadoc/elki/algorithm/clustering/correlation/CASH.html)
  - [COPAC](/releases/current/javadoc/elki/algorithm/clustering/correlation/COPAC.html)
  - [ERiC](/releases/current/javadoc/elki/algorithm/clustering/correlation/ERiC.html)
  - [FourC](/releases/current/javadoc/elki/algorithm/clustering/correlation/FourC.html)
  - [HiCO](/releases/current/javadoc/elki/algorithm/clustering/correlation/HiCO.html)
  - [LMCLUS](/releases/current/javadoc/elki/algorithm/clustering/correlation/LMCLUS.html)
  - [ORCLUS](/releases/current/javadoc/elki/algorithm/clustering/correlation/ORCLUS.html)
- Subspace (axis-parallel) clustering algorithms:
  - [CLIQUE](/releases/current/javadoc/elki/algorithm/clustering/subspace/CLIQUE.html)
  - [DiSH](/releases/current/javadoc/elki/algorithm/clustering/subspace/DiSH.html)
  - [DOC](/releases/current/javadoc/elki/algorithm/clustering/subspace/DOC.html)
  - [FastDOC](/releases/current/javadoc/elki/algorithm/clustering/subspace/FastDOC.html)
  - [HiSC](/releases/current/javadoc/elki/algorithm/clustering/subspace/HiSC.html)
  - [P3C](/releases/current/javadoc/elki/algorithm/clustering/subspace/P3C.html)
  - [PreDeCon](/releases/current/javadoc/elki/algorithm/clustering/subspace/PreDeCon.html)
  - [PROCLUS](/releases/current/javadoc/elki/algorithm/clustering/subspace/PROCLUS.html)
  - [SUBCLU](/releases/current/javadoc/elki/algorithm/clustering/subspace/SUBCLU.html)
- Biclustering algorithms:
  - [ChengAndChurch](/releases/current/javadoc/elki/algorithm/clustering/biclustering/ChengAndChurch.html)
- Clustering algorithms for 1-dimensional data only:
  - [KNNKernelDensityMinimaClustering](/releases/current/javadoc/elki/algorithm/clustering/onedimensional/KNNKernelDensityMinimaClustering.html)
- Trivial clustering algorithms (for reference and evaluation):
  - [ExternalClustering](/releases/current/javadoc/elki/algorithm/clustering/meta/ExternalClustering.html)
  - [ByLabelClustering](/releases/current/javadoc/elki/algorithm/clustering/trivial/ByLabelClustering.html)
  - [ByLabelHierarchicalClustering](/releases/current/javadoc/elki/algorithm/clustering/trivial/ByLabelHierarchicalClustering.html)
  - [ByModelClustering](/releases/current/javadoc/elki/algorithm/clustering/trivial/ByModelClustering.html)
  - [TrivialAllInOne](/releases/current/javadoc/elki/algorithm/clustering/trivial/TrivialAllInOne.html)
  - [TrivialAllNoise](/releases/current/javadoc/elki/algorithm/clustering/trivial/TrivialAllNoise.html)
  - [ByLabelOrAllInOneClustering](/releases/current/javadoc/elki/algorithm/clustering/trivial/ByLabelOrAllInOneClustering.html)
- Uncertain clustering algorithms:
  - [FDBSCAN](/releases/current/javadoc/elki/algorithm/clustering/uncertain/FDBSCAN.html)
  - [CKMeans](/releases/current/javadoc/elki/algorithm/clustering/uncertain/CKMeans.html)
  - [UKMeans](/releases/current/javadoc/elki/algorithm/clustering/uncertain/UKMeans.html)
  - [RepresentativeUncertainClustering](/releases/current/javadoc/elki/algorithm/clustering/uncertain/RepresentativeUncertainClustering.html)
  - [CenterOfMassMetaClustering](/releases/current/javadoc/elki/algorithm/clustering/uncertain/CenterOfMassMetaClustering.html)

Outlier Detection

- Distance-based outlier detection:
  - [DB Outlier Detection](/releases/current/javadoc/elki/algorithm/outlier/distance/DBOutlierDetection.html)
  - [DB Outlier Score](/releases/current/javadoc/elki/algorithm/outlier/distance/DBOutlierScore.html)
  - [HilOut](/releases/current/javadoc/elki/algorithm/outlier/distance/HilOut.html)
  - [KNNDD](/releases/current/javadoc/elki/algorithm/outlier/distance/KNNDD.html)
  - [KNN Outlier](/releases/current/javadoc/elki/algorithm/outlier/distance/KNNOutlier.html)
  - [KNNSOS](/releases/current/javadoc/elki/algorithm/outlier/distance/KNNSOS.html)
  - [KNNWeight Outlier](/releases/current/javadoc/elki/algorithm/outlier/distance/KNNWeightOutlier.html)
  - [Local Isolation Coefficient](/releases/current/javadoc/elki/algorithm/outlier/distance/LocalIsolationCoefficient.html)
  - [ODIN](/releases/current/javadoc/elki/algorithm/outlier/distance/ODIN.html)
  - [ParallelKNNOutlier](/releases/current/javadoc/elki/algorithm/outlier/distance/parallel/ParallelKNNOutlier.html)
  - [ParallelKNNWeightOutlier](/releases/current/javadoc/elki/algorithm/outlier/distance/parallel/ParallelKNNWeightOutlier.html)
  - [ReferenceBasedOutlierDetection](/releases/current/javadoc/elki/algorithm/outlier/distance/ReferenceBasedOutlierDetection.html)
  - [SOS](/releases/current/javadoc/elki/algorithm/outlier/distance/SOS.html)
- Density based:
  - [HySort OD](/releases/current/javadoc/elki/algorithm/outlier/density/HySortOD.html)
  - [Isolation Forest](/releases/current/javadoc/elki/algorithm/outlier/density/IsolationForest.html)
- LOF family of methods:
  - [LOF](/releases/current/javadoc/elki/algorithm/outlier/lof/LOF.html)
  - [ParallelLOF](/releases/current/javadoc/elki/algorithm/outlier/lof/parallel/ParallelLOF.html)
  - [ALOCI](/releases/current/javadoc/elki/algorithm/outlier/lof/ALOCI.html)
  - [COF](/releases/current/javadoc/elki/algorithm/outlier/lof/COF.html)
  - [FlexibleLOF](/releases/current/javadoc/elki/algorithm/outlier/lof/FlexibleLOF.html)
  - [INFLO](/releases/current/javadoc/elki/algorithm/outlier/lof/INFLO.html)
  - [KDEOS](/releases/current/javadoc/elki/algorithm/outlier/lof/KDEOS.html)
  - [LDF](/releases/current/javadoc/elki/algorithm/outlier/lof/LDF.html)
  - [LDOF](/releases/current/javadoc/elki/algorithm/outlier/lof/LDOF.html)
  - [LOCI](/releases/current/javadoc/elki/algorithm/outlier/lof/LOCI.html)
  - [LoOP](/releases/current/javadoc/elki/algorithm/outlier/lof/LoOP.html)
  - [OnlineLOF](/releases/current/javadoc/elki/algorithm/outlier/lof/OnlineLOF.html)
  - [SimplifiedLOF](/releases/current/javadoc/elki/algorithm/outlier/lof/SimplifiedLOF.html)
  - [ParallelSimplifiedLOF](/releases/current/javadoc/elki/algorithm/outlier/lof/parallel/ParallelSimplifiedLOF.html)
  - [SimpleKernelDensityLOF](/releases/current/javadoc/elki/algorithm/outlier/lof/SimpleKernelDensityLOF.html)
  - [VarianceOfVolume](/releases/current/javadoc/elki/algorithm/outlier/lof/VarianceOfVolume.html)
- Angle-based outlier detection:
  - [ABOD](/releases/current/javadoc/elki/algorithm/outlier/anglebased/ABOD.html)
  - [FastABOD](/releases/current/javadoc/elki/algorithm/outlier/anglebased/FastABOD.html)
  - [LBABOD](/releases/current/javadoc/elki/algorithm/outlier/anglebased/LBABOD.html)
- Intrinsic dimensionality based:
  - [IDOS](/releases/current/javadoc/elki/algorithm/outlier/intrinsic/IDOS.html)
  - [ISOS](/releases/current/javadoc/elki/algorithm/outlier/intrinsic/ISOS.html)
  - [LID](/releases/current/javadoc/elki/algorithm/outlier/intrinsic/LID.html)
- Clustering based outlier detection:
  - [CBLOF](/releases/current/javadoc/elki/algorithm/outlier/clustering/CBLOF.html)
  - [DBSCAN outlier detection](/releases/current/javadoc/elki/algorithm/outlier/clustering/DBSCANOutlierDetection.html)
  - [EMOutlier](/releases/current/javadoc/elki/algorithm/outlier/clustering/EMOutlier.html)
  - [GLOSH for HDBSCAN\*](/releases/current/javadoc/elki/algorithm/outlier/clustering/GLOSH.html)
  - [KMeans Outlier Detection](/releases/current/javadoc/elki/algorithm/outlier/clustering/KMeansOutlierDetection.html)
  - [KMeans-- Outlier Detection](/releases/current/javadoc/elki/algorithm/outlier/clustering/KMeansMinusMinusOutlierDetection.html)
  - [Noise as Outliers](/releases/current/javadoc/elki/algorithm/outlier/clustering/NoiseAsOutliers.html)
  - [Silhouette Outlier Detection](/releases/current/javadoc/elki/algorithm/outlier/clustering/SilhouetteOutlierDetection.html)
- [COP](/releases/current/javadoc/elki/algorithm/outlier/COP.html)
- [DWOF](/releases/current/javadoc/elki/algorithm/outlier/DWOF.html)
- [GaussianModel](/releases/current/javadoc/elki/algorithm/outlier/GaussianModel.html)
- [GaussianUniformMixture](/releases/current/javadoc/elki/algorithm/outlier/GaussianUniformMixture.html)
- [OPTICSOF](/releases/current/javadoc/elki/algorithm/outlier/OPTICSOF.html)
- [SimpleCOP](/releases/current/javadoc/elki/algorithm/outlier/SimpleCOP.html)
- Support Vector Machine based:
  - [LibSVM wrapper for One-Class SVMs](/releases/current/javadoc/elki/algorithm/outlier/svm/LibSVMOneClassOutlierDetection.html)
  - [OCSVM](/releases/current/javadoc/elki/algorithm/outlier/svm/OCSVM.html)
  - [SVDD](/releases/current/javadoc/elki/algorithm/outlier/svm/SVDD.html)
- Subspace outlier detection:
  - [AggarwalYuEvolutionary](/releases/current/javadoc/elki/algorithm/outlier/subspace/AggarwalYuEvolutionary.html)
  - [AggarwalYuNaive](/releases/current/javadoc/elki/algorithm/outlier/subspace/AggarwalYuNaive.html)
  - [OUTRES](/releases/current/javadoc/elki/algorithm/outlier/subspace/OUTRES.html)
  - [OutRankS1](/releases/current/javadoc/elki/algorithm/outlier/subspace/OutRankS1.html)
  - [SOD](/releases/current/javadoc/elki/algorithm/outlier/subspace/SOD.html)
- Spatial outlier detection:
  - [CTLuGLSBackwardSearchAlgorithm](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuGLSBackwardSearchAlgorithm.html)
  - [CTLuMeanMultipleAttributes](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMeanMultipleAttributes.html)
  - [CTLuMedianAlgorithm](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMedianAlgorithm.html)
  - [CTLuMedianMultipleAttributes](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMedianMultipleAttributes.html)
  - [CTLuMoranScatterplotOutlier](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMoranScatterplotOutlier.html)
  - [CTLuRandomWalkEC](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuRandomWalkEC.html)
  - [CTLuScatterplotOutlier](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuScatterplotOutlier.html)
  - [CTLuZTestOutlier](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuZTestOutlier.html)
  - [SLOM](/releases/current/javadoc/elki/algorithm/outlier/spatial/SLOM.html)
  - [SOF](/releases/current/javadoc/elki/algorithm/outlier/spatial/SOF.html)
  - [TrimmedMeanApproach](/releases/current/javadoc/elki/algorithm/outlier/spatial/TrimmedMeanApproach.html)
- Meta outlier methods:
  - [ExternalDoubleOutlierScore](/releases/current/javadoc/elki/algorithm/outlier/meta/ExternalDoubleOutlierScore.html)
  - [FeatureBagging](/releases/current/javadoc/elki/algorithm/outlier/meta/FeatureBagging.html)
  - [HiCS](/releases/current/javadoc/elki/algorithm/outlier/meta/HiCS.html)
  - [RescaleMetaOutlierAlgorithm](/releases/current/javadoc/elki/algorithm/outlier/meta/RescaleMetaOutlierAlgorithm.html)
  - [SimpleOutlierEnsemble](/releases/current/javadoc/elki/algorithm/outlier/meta/SimpleOutlierEnsemble.html)
- Trivial outlier methods (for reference and evaluation):
  - [ByLabelOutlier](/releases/current/javadoc/elki/algorithm/outlier/trivial/ByLabelOutlier.html)
  - [TrivialAllOutlier](/releases/current/javadoc/elki/algorithm/outlier/trivial/TrivialAllOutlier.html)
  - [TrivialNoOutlier](/releases/current/javadoc/elki/algorithm/outlier/trivial/TrivialNoOutlier.html)
  - [TrivialGeneratedOutlier](/releases/current/javadoc/elki/algorithm/outlier/trivial/TrivialGeneratedOutlier.html)
  - [TrivialAverageCoordinateOutlier](/releases/current/javadoc/elki/algorithm/outlier/trivial/TrivialAverageCoordinateOutlier.html)
  
Classification algorithms (for use with [ClassifierHoldoutEvaluationTask](/releases/current/javadoc/elki/application/ClassifierHoldoutEvaluationTask.html))

- [KNNClassifier](/releases/current/javadoc/elki/algorithm/classification/KNNClassifier.html)
- [PriorProbabilityClassifier](/releases/current/javadoc/elki/algorithm/classification/PriorProbabilityClassifier.html)

Frequent Itemset Mining:

- [APRIORI](/releases/current/javadoc/elki/algorithm/itemsetmining/APRIORI.html)
- [Eclat](/releases/current/javadoc/elki/algorithm/itemsetmining/Eclat.html)
- [FPGrowth](/releases/current/javadoc/elki/algorithm/itemsetmining/FPGrowth.html)

Time Series Analysis:
- [Offline Change Point Detection](/releases/current/javadoc/elki/algorithm/timeseries/OfflineChangePointDetectionAlgorithm.html)
- [SigniTrend Change Detection](/releases/current/javadoc/elki/algorithm/timeseries/SigniTrendChangeDetection.html)

Projection:

- [BarnesHutTSNE](/releases/current/doc/elki/algorithm/projection/BarnesHutTSNE.html)
- [SNE](/releases/current/doc/elki/algorithm/projection/SNE.html)
- [TSNE](/releases/current/doc/elki/algorithm/projection/TSNE.html)
- itSNE, via the TSNE class

Other:

- [DependencyDerivator](/releases/current/javadoc/elki/algorithm/DependencyDerivator.html)
- [KNNDistancesSampler](/releases/current/javadoc/elki/algorithm/KNNDistancesSampler.html)
- [KNNJoin](/releases/current/javadoc/elki/algorithm/KNNJoin.html)

Benchmarking algorithms:

- [KNNBenchmarkAlgorithm](/releases/current/javadoc/elki/algorithm/benchmark/KNNBenchmarkAlgorithm.html)
- [RangeQueryBenchmarkAlgorithm](/releases/current/javadoc/elki/algorithm/benchmark/RangeQueryBenchmarkAlgorithm.html)
- [ValidateApproximativeKNNIndex](/releases/current/javadoc/elki/algorithm/benchmark/ValidateApproximativeKNNIndex.html)

Data set statistics:

- [AveragePrecisionAtK](/releases/current/javadoc/elki/algorithm/statistics/AveragePrecisionAtK.html)
- [DistanceStatisticsWithClasses](/releases/current/javadoc/elki/algorithm/statistics/DistanceStatisticsWithClasses.html)
- [EstimateIntrinsicDimensionality](/releases/current/javadoc/elki/algorithm/statistics/EstimateIntrinsicDimensionality.html)
- [EvaluateRankingQuality](/releases/current/javadoc/elki/algorithm/statistics/EvaluateRankingQuality.html)
- [EvaluateRetrievalPerformance](/releases/current/javadoc/elki/algorithm/statistics/EvaluateRetrievalPerformance.html)
- [HopkinsStatisticClusteringTendency](/releases/current/javadoc/elki/algorithm/statistics/HopkinsStatisticClusteringTendency.html)
- [RankingQualityHistogram](/releases/current/javadoc/elki/algorithm/statistics/RankingQualityHistogram.html)


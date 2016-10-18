---
layout: page
title: Release Notes 0.6.0
parent: releases
---


Release Notes 0.6.0
===================

Algorithms
----------

-  Clustering:
  -  Hierarchical Clustering - the slower naive variants were added, and the code was refactored
  -  Partition extraction from hierarchical clusterings - different linkage strategies (e.g. Ward)
  -  Canopy pre-Clustering
  -  Naive Mean-Shift Clustering
  -  Affinity propagation clustering (both with distances and similarities / kernel functions)
  -  K-means variations: Best-of-multiple-runs, bisecting k-means
  -  New k-means initialization: farthest points, sample initialization
  -  Cheng and Church Biclustering
  -  P3C Subspace Clustering
  -  One-dimensional clustering algorithm based on kernel density estimation
-  Outlier detection
  -  COP - correlation outlier probabilities
  -  LDF - a kernel density based LOF variant
  -  Simplified LOF - a simpler version of LOF (not using reachability distance)
  -  Simple Kernel Density LOF - a simple LOF using kernel density (more consistent than LDF)
  -  Simple outlier ensemble algorithm
  -  PINN - projection indexed nearest neighbors, via projected indexes.
  -  ODIN - kNN graph based outlier detection
  -  DWOF - Dynamic-Window Outlier Factor (contributed by Omar Yousry)
  -  ABOD refactored, into ABOD, FastABOD and LBABOD

Distances
---------

-  Geodetic distances now support different world models (WGS84 etc.) and are subtantially faster.
-  Levenshtein distances for processing strings, e.g. for analyzing phonemes (contributed code, see "Word segmentation through cross-lingual word-to-phoneme alignment", SLT2013, Stahlberg et al.)
-  Bray-Curtis, Clark, Kulczynski1 and Lorentzian distances with R-tree indexing support
-  Histogram matching distances
-  Probabilistic divergence distances (Jeffrey, Jensen-Shannon, Chi<sup>2</sup>, Kullback-Leibler)
-  Kulczynski2 similarity
-  Kernel similarity code has been refactored, and additional kernel functions have been added

Database Layer and Data Types
-----------------------------

-  Projection layer
-  Parser for simple textual data (for use with Levenshtein distance)
-  Various random projection families (including Feature Bagging, Achlioptas, and p-stable)
-  Latitude+Longitude to ECEF
-  Sparse vector improvements and bug fixes
-  New filter: remove NaN values and missing values
-  New filter: add histogram-based jitter
-  New filter: normalize using statistical distributions
-  New filter: robust standardization using Median and MAD
-  New filter: Linear discriminant analysis (LDA)

Index Layer
-----------

-  Another speed up in R-trees
-  Refactoring of M- and R-trees:
  -  Support for different strategies in M-tree
  -  New strategies for M-tree splits
  -  Speedups in M-tree
-  New index structure: in-memory k-d-tree
-  New index structure: in-memory Locality Sensitive Hashing (LSH)
-  New index structure: approximate projected indexes, such as PINN
-  Index support for geodetic data - (Details: Geodetic Distance Queries on R-Trees for Indexing Geographic Data, SSTD13)
-  Sampled k nearest neighbors: reference KDD13 "Subsampling for Efficient and Effective Unsupervised Outlier Detection Ensembles"
-  Cached (precomputed) k-nearest neighbors to share across multiple runs
-  Benchmarking "algorithms" for indexes

Mathematics and Statistics
--------------------------

-  Many new distributions have been added, now 28 different distributions are supported
-  Additional estimation methods (using advanced statistics such as L-Moments), now 44 estimators are available
-  Trimming and Winsorizing
-  Automatic best-fit distribution estimation
-  Preprocessor using these distributions for rescaling data sets
-  API changes related to the new distributions support
-  More kernel density functions
-  RANSAC covariance matrix builder (unfortunately rather slow)

Visualization
-------------

-  3D projected coordinates (Details: [Interactive Data Mining with 3D-Parallel-Coordinate-Trees, SIGMOD2013](/publications#release0.6))
-  Convex hulls now also include nested hierarchical clusters

Other
-----

-  Parser speedups
-  Sparse vector bug fixes and improvements
-  Various bug fixes
-  PCA, MDS and LDA filters
-  Text output was slightly improved (but still needs to be redesigned from scratch - please contribute!)
-  Refactoring of hierarchy classes
-  New heap classes and infrastructure enhancements
-  Classes can have aliases, e.g. "l2" for euclidean distance.
-  Some error messages were made more informative.
-  Benchmarking classes, also for approximate nearest neighbor search.


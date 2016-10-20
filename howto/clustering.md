---
layout: page
title: Clustering
parent: howto
navigation: 40
---


Cluster Analysis in ELKI
========================

Version information: Updated for ELKI 0.7.0
{: class="compact" style="font-size: x-small; text-align:right" }

Overview
--------

ELKI contains a wide variety of clustering algorithms. These can be roughly divided into the following families:

-   Hierarchical agglomerative clustering (e.g. HAC, AGNES, SLINK)
-   K-means clustering family (e.g. Lloyd, Forgy, MacQueen, Elkan, Hamerly, Philips, PAM, KMedians)
-   Mixture modeling family (Gaussian Mixture Modeling GMM, EM with different models)
-   Density based clustering (e.g. DBSCAN, OPTICS, HDBSCAN\*, MeanShift)
-   Matrix-optimization algorithms (Affinity Propagation)
-   Subspace clustering algorithms (axis-parallel subspaces only, e.g. PROCLUS, SUBCLU, P3C)
-   Correlation clustering algorithms (arbitrarily oriented, e.g. CASH, 4C, LMCLUS, ORCLUS)
-   Uncertain data clustering (e.g. UKMeans, FDBSCAN, Consensus)
-   Biclustering algorithms (Cheng and Church)

Recommendations
---------------

### Hierarchical clustering

For single-linkage, SLINK is the fastest algorithm (Quadratic runtime with small constant factors, linear memory).

For complete-linkage, CLINK is fast but appears to give worse results than the others.

For other linkages, the Anderberg is usually the best choice we currently offer.

### K-means

The classic Lloyd k-means is not worth trying. The Hamerly, Elkan, and MacQueen (0.7.1: Compare and Sort) algorithms appear to always outperform the textbook algorithm.

X-means can be useful to choose the parameter k.

### DBSCAN and OPTICS

Always use an index with DBSCAN. Recommeded is to use the SimpleCoverTree index, which works for most data sets and requires no other parameters except the distance function.

MinPts should be chosen larger than the data set dimensionality (e.g. 2\*dim). For 2-dimensional data, the absolute minimum to use is 4, but values such as 10 or 20 may be appropriate for noisy data.

If you do now have prior knowledge about a good value for Epsilon, you can try the following:

-   try OPTICS, with epsilon set to an upper bound (lower = faster) and look for a height where there are nice valleys visible

-   try OPTICSXi, with xi set to e.g. 0.01 (1% decrease)

-   use KNNDistancesSampler with k = MinPts - 1. Look in the bottom left area of the resulting plot, for a "knee". As a rule of thumb, 10% of core points may be enough, unless you see a clear knee further to the right.



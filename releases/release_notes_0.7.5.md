---
layout: page
title: Release Notes 0.7.5
parent: releases
navigation: -75
---


ELKI 0.7.5 release notes
========================

ELKI 0.7.5 "Heidelberg" is available on Maven and on our [releases web page](/releases):

Gradle:
{% highlight gradle %}
dependencies {
    // All the core parts, without visualization:
    compile group: 'de.lmu.ifi.dbs.elki', name: 'elki', version:'0.7.5'
    // If you want to use visualization:
    compile group: 'de.lmu.ifi.dbs.elki', name: 'elki-batik-visualization', version:'0.7.5'
}
{% endhighlight %}

Maven:
{% highlight xml %}
<!-- ELKI core, without visualization -->
<dependency>
    <groupId>de.lmu.ifi.dbs.elki</groupId>
    <artifactId>elki</artifactId>
    <version>0.7.5</version>
</dependency>
<!-- You only need this dependency if you need visualization -->
<dependency>
    <groupId>de.lmu.ifi.dbs.elki</groupId>
    <artifactId>elki-batik-visualization</artifactId>
    <version>0.7.5</version>
</dependency>
{% endhighlight %}

Please clone <https://github.com/elki-project/example-elki-project>
for a minimal project example.

Upcoming major changes
----------------------

The next ELKI release will shorten all package names.
We will also change the group ID to reflect that the project moved
to <https://elki-project.github.io/>.

Since we will rename all packages, we will also use this opportunity to
simplify other class names, such as "DistanceFunction" to "Distance".

Futher breaking changes include changes to the result hierarchy and
metadata management. These are necessary for important new functionality
(such as automatic indexing, and garbage collection).

For ELKI 0.8.0, we will likely target Java 11 or 12,
so 0.7.5 is supposedly the last version to support Java 8.
We may begin using the `var` feature of Java 9 in cases where it
makes the code more readable.

Thus the next 0.8.0 release will not be backwards compatible at all.

New functionality
-----------------

### Clustering
* Gaussian Mixture Modeling Improvements:
  * Additional models 
  * Improved numerical stability 
  * MAP for robustness 
  * Better initialization
* DBSCAN Improvements:
  * GDBSCAN with similarity functions 
  * Parallel Generalized DBSCAN related to
* Hierarchical clustering additions:
  * NN-Chain algorithm
  * MiniMax clustering
  * Flexible Beta Linkage
  * Minimum Variance Linkage
* Cluster extraction from dendrograms with handling of noise points and minimum cluster size
* Basic BIRCH: clustering into leaves, with support for:

  Distances:
  * Average Intercluster Distance 
  * Average Intracluster Distance 
  * Centroid Euclidean Distance
  * Centroid Manhattan Distance 
  * Variance Increase Distance

  Merge Criterions: 
  * Diameter Criterion 
  * Euclidean Distance Criterion 
  * Radius Criterion
* PAM clustering additions:
  * Reynolds’ PAM and FastPAM
  * Improvements to CLARA and FastCLARA
  * CLARANS and FastCLARANS
* k-Means clustering additions:
  * Annulus algorithm
  * Exponion algorithm
  * Simplified Elkan’s algorithm
  * k-Means-- (more robust to noise)
* k-Means and PAM initialization additions:
  * Linear Approximative BUILD (LAB)
  * Ostrovsky’s initial means
  * Park’s initial medoids
  * Generated from a normal distribution
* Leader Clustering
* FastDOC subspace clustering

### Association Rule Mining
* Association Rule Generation
* Interestingness Measures: 
  * Added Value 
  * Certainty Factor 
  * Confidence
  * Conviction 
  * Cosine 
  * Gini Index 
  * J Measure 
  * Jaccard
  * Klosgen 
  * Leverage 
  * Lift

### Outlier Detection
* Cluster-Based Local Outlier Factor (CBLOF)
* KNN Data Descriptor (KNNDD)
* Stochastic Outlier Selection (SOS), with kNN approximation (KNNSOS),
and intrinsic dimensionality (ISOS)

### Projections and Embeddings
* Stochastic Neighbor Embedding (SNE)
* t-Stochastic Neighbor Embedding (t-SNE)
* Barnes Hut approximation for tSNE
* Intrinsic t-SNE

### Change Point Detection in Time Series
* Offline Change Point Detection
* Signi-Trend-based Change Detection

### Distance and Similarity Functions
* Cosine distances optimized for unit-length vectors
* Mahalanobis
* Chi Distance
* Fisher Rao Distance
* Triangular Discrimination
* Triangular Distance

### Evaluation
* Density-Based Cluster Validation (DBCV)
* Discounted Cumulative Gain (DCG)
* Normalized Discounted Cumulative Gain (NDCG)

### Indexing Additions
* Basic index support for similarities
* NN Descent
* M-Tree enhancements:
  * Farthest Points Split 
  * MST Split 
  * Balanced Distribution 
  * Farthest Balanced Distribution 
  * Generalized Hyperplane Distribution
* X-Tree (non-reviewed code)

### Statistics Layer
* Exp-Gamma distribution parameters using the method of moments
* Log-Gamma distribution parameters using the method of moments
* ALID estimator of intrinsic dimensionality

### Other Improvements
* ELKI Builder API (see Section 5)
* Integer range parameters (e.g., `1,2,..,10,20,..,100,200,..,1000`)
* Xoroshiro 128 fast random generator
* Dendrogram visualization for hierarchical clusterings
* Numerous unit tests
* Many bug fixes found in testing and reported by users

See also [release notes 0.7](release_notes_0.7)
and [release notes 0.7.1](release_notes_0.7.1)
for additional release notes of ELKI 0.7.0 and 0.7.1

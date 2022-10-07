---
layout: page
title: Release Notes 0.8.0
parent: releases
navigation: -80
---


ELKI 0.8.0 release notes
========================

<span style="color:red">Version 0.8.0 is currently not yet available via Maven, because of the group name change.</span>

ELKI 0.8.0 is available on Maven and on our [releases web page](/releases):

Gradle:
{% highlight gradle %}
dependencies {
    // All the core parts, without visualization:
    compile group: 'io.github.elki-project', name: 'elki', version:'0.8.0'
    // If you want to use visualization:
    compile group: 'io.github.elki-project', name: 'elki-batik-visualization', version:'0.8.0'
}
{% endhighlight %}

Maven:
{% highlight xml %}
<!-- ELKI core, without visualization -->
<dependency>
    <groupId>io.github.elki-project</groupId>
    <artifactId>elki</artifactId>
    <version>0.8.0</version>
</dependency>
<!-- You only need this dependency if you need visualization -->
<dependency>
    <groupId>io.github.elki-project</groupId>
    <artifactId>elki-batik-visualization</artifactId>
    <version>0.8.0</version>
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

For ELKI 0.9.0, we will likely target Java 17 or 21,
so 0.8.0 is supposedly the last version to support Java 8.
We may begin using the `var` feature of Java 9 in cases where it
makes the code more readable.

Thus the next 0.9.0 release will not be backwards compatible at all.

Contributors
------------
This release is brought to you by:

* Erich Schubert
* Robert Gehde
* Andreas Lang (BIRCH and BETULA)
* Erik Thordsen (Intrinsic dimensionality)
* Lars Lenssen (Silhouette clustering)
* Braulio Sanchez (HySortOD, clustering-based outlier detection)
* Alan Mazankiewicz (MCDE and MWP tests)
* Abhishek Sharma (Interestingness measures)

New functionality
-----------------

### Indexing
* **Automatic Indexing**. If possible, ELKI will automatically add a suitable index to accelerate algorithms.
* **Automatic Garbage Collection** of unused indexes
* Priority search API
* much improved k-d-tree with additional split heuristics
* Linear AESA (LAESA)
* Vantage point trees (VP-tree)
* Geometric Near-neighbor Access Tree (GNAT, MVP-tree)

### Clustering
* Hierarchical clustering additions:
  * Rewrite of internal data structures to use merge histories instead of the pointer model of SLINK
  * Hierarchial Clustering Around Medoids (HACAM)
  * Medoid Linkage
  * linear-memory implementation of NN-Chain
  * Acceleration with BIRCH
  * Acceleration with BETULA
  * Conversion of OPTICS results to hierarchical clustering
* K-Means Clustering improvements and additions:
  * Hartigan and Wong's method
  * Shallot algorithm
  * Yin-Yang algorithm
  * k-d-tree filtering k-means
  * k-d-tree pruning k-means
  * BIRCH acceleration
  * BETULA acceleration
  * G-Means for selecting the number of clusters
  * KMC2 and AFKMC2 initialization
  * Spherical k-means
  * Accelerated spherical k-means
* Greedy k-center Clustering
* K-Medoids clustering additions:
  * EagerPAM
  * FasterPAM 
  * GreedyG initialization
* Gaussian Mixture Modeling improvements:
  * Improved extensibility of codebase
  * KD-Tree acceleration
  * BIRCH acceleration
  * BETULA acceleration
* Silhouette clustering:
  * PAMSIL algorithm
  * PAMMEDSIL algorithm
  * FastMSC algorithm
  * FasterMSC algorithm
* Cluster evaluation:
  * Maximum matching accuracy
* Density-peak Clustering
* Support Vector Clustering

### Association Rule Mining
* Improved ECLAT implementation
* Interestingness measures:
  * Laplace corrected confidence
  * Odds ratio
  * Phi Correlation Coefficient
  * Sebag-Schonauer
  * Yules Q
  * Yules Y

### Outlier Detection
* Isolation Forest
* HySort outlier detection
* DBSCAN outlier detection (noise points as outliers)
* k-means-- outlier detection
* GLOSH outlier scoring
* improved one-class support vector machines
* Support Vector Data Description (SVDD)

### Classification
* Much improved support vector machines

### Distance and Similarity Functions
* Sqrt-Cosine distance (metric)

### Statistics
* MCDE and MWP dependence measures
* ABID: Angle-based intrinsic dimensionality estimation
* Local-PCA intrinsic dimensionality estimation
* TightLID intrinsic dimensionality estimation

### Evaluation
* Maximum matching accuracy
* Precision-recall curves (AU-PRC)
* Precision-recall-gain curves (PRGC)

### Other Improvements
* Silhouette visualuation
* Kuhn-Munkres and improved versions, for maximum matching
* Numerous unit tests
* Many bug fixes found in testing and reported by users

See also [release notes 0.7](release_notes_0.7),
[release notes 0.7.1](release_notes_0.7.1),
and [release notes 0.7.5](release_notes_0.7.5)
for additional release notes of ELKI 0.7.0 to 0.7.5

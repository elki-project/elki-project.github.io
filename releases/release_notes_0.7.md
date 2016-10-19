---
layout: page
title: Release Notes 0.7
parent: releases
---


ELKI 0.7.0 release notes
========================

- ELKI is now available on Maven.

{% highlight xml %}
<!-- ELKI core, without visualization -->
<dependency>
    <groupId>de.lmu.ifi.dbs.elki</groupId>
    <artifactId>elki</artifactId>
    <version>0.7.0</version>
</dependency>
<!-- You only need this dependency if you need visualization -->
<dependency>
    <groupId>de.lmu.ifi.dbs.elki</groupId>
    <artifactId>elki-batik-visualization</artifactId>
    <version>0.7.0</version>
</dependency>
{% endhighlight %}

Please clone https://github.com/elki-project/example-elki-project for a minimal project example.

- Uncertain data types, and clustering algorithms for uncertain data.

- Major refactoring of distances - removal of `Distance` values and removed support for non-`double`-valued distance functions (in particular `DoubleDistance` was removed). While this reduces the generality of ELKI, we could remove about 2.5% of the codebase by not having to have optimized codepaths for double-distance anymore. Generics for distances were present in almost any distance-based algorithm, and we were also happy to reduce the use of generics this way. Support for non-double-valued distances can trivially be added again, e.g. by adding the specialization one level higher: at the query instead of the distance level, for example.
- In this process, we also removed the Generics from `NumberVector`. The object-based `get` was deprecated for a good reason long ago, and e.g. `doubleValue` are more efficient (even for non-`DoubleVector`s).

- Dropped some long-deprecated classes.

K-means:

- speedups for some initialization heuristics.
- K-means++ initialization no longer squares distances (again).
- farthest-point heuristics now uses minimum instead of sum (renamed).
- additional evaluation criteria.
- Elkan's and Hamerly's faster k-means variants.
- CLARA clustering.
- X-means.

Hierarchical clustering:

- Renamed naive algorithm to AGNES.
- Anderbergs algorithm (faster than AGNES, slower than SLINK).
- CLINK for complete linkage clustering in O(n²) time, O(n) memory.
- Simple extraction from HDBSCAN.
- "Optimal" extraction from HDBSCAN.
- HDBSCAN, in two variants.
- LSDBC clustering.
- EM clustering was refactored and moved into its own package. The new version is much more extensible.

OPTICS clustering:

- Added a list-based variant of OPTICS to our heap-based.
- FastOPTICS (contributed by Johannes Schneider).
- Improved OPTICS Xi cluster extraction.

Outlier detection:

- KDEOS outlier detection (SDM14).
- k-means based outlier detection (distance to centroid) and Silhouette coefficient based approach (which does not work too well on the toy data sets - the lowest silhouette are usually where two clusters touch).
- bug fix in kNN weight, when distances are tied and kNN yields more than k results.
- kNN and kNN weight outlier have their k parameter changed: old 2NN outlier is now 1NN outlier, as commonly understood in classification literature (1 nearest neighbor *other than the query object*; whereas in database literature the 1NN is usually the query object itself). You can get the old result back by decreasing `k` by one easily.
- LOCI implementation is now only O(n<sup>3</sup> log n) instead of O(n<sup>4</sup>).
- Local Isolation Coefficient (LIC).
- IDOS outlier detection with intrinsic dimensionality.
- Baseline intrinsic dimensionality outlier detection.
- Variance-of-Volumes outlier detection (VOV).

- Parallel computation framework, and some parallelized algorithms
- Parallel k-means.
- Parallel LOF and variants.

- LibSVM format parser.

- kNN classification (with index acceleration).

Internal cluster evaluation:
- Silhouette index.
- Simplified Silhouette index (faster).
- Davis-Bouldin index.
- PBM index.
- Variance-Ratio-Criteria.
- Sum of squared errors.
- C-Index.
- Concordant pair indexes (Gamma, Tau).
- Different noise handling strategies for internal indexes.

Statistical dependence measures:
- Distance correlation dCor.
- Hoeffings D.
- Some divergence / mutual information measures.

Distance functions:
- Big refactoring.
- Time series distances refactored, allow variable length series now.
- Hellinger distance and kernel function.

Preprocessing:
- Faster MDS implementation using power iterations.

Indexing improvements:
- Precomputed distance matrix "index".
- iDistance index (static only).
- Inverted-list index for sparse data and cosine/arccosine distance.
- Cover tree index (static only).
- Additional LSH hash functions.

Frequent Itemset Mining:
- Improved APRIORI implementation.
- FP-Growth added.
- Eclat (basic version only) added.

Uncertain clustering:
- Discrete and continuous data models.
- FDBSCAN clustering.
- UKMeans clustering.
- CKMeans clustering.
- Representative Uncertain Clustering (Meta-algorithm).
- Center-of-mass meta Clustering (allows using other clustering algorithms on uncertain objects).

Mathematics:
- Several estimators for intrinsic dimensionality.

- MiniGUI has two "secret" new options: `-minigui.last -minigui.autorun` to load the last saved configuration and run it, for convenience.

- Logging API has been extended, to make logging more convenient in a number of places (saving some lines for progress logging and timing).



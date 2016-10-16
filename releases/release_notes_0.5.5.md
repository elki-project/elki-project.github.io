---
layout: page
title: Releases%2FReleaseNotes0.5.5
---


Release Notes ELKI 0.5.5
========================

This is mostly a **bug fix** release. A lot of small issues have been fixed that improve performance, make error reporting a lot better, ease the use of sparse vectors and external precomputed distances, for example.

This will be the last ELKI release to support Java 6. The next ELKI release will require Java 7.

Algorithms
----------

-   Some new LOF variants (LDF, [SimpleLOF](./SimpleLOF), [SimpleKernelDensityLOF](./SimpleKernelDensityLOF))
-   Correlation Outlier Probabilities (ICDM 2012)
-   A naive mean-shift clustering
-   Single-link clustering (SLINK algorithm) should be significantly faster due to optimized data structures
-   "Benchmarking" algorithms for measuring the performance of index structures

Index layer
-----------

-   Bulk loading R-Trees should be faster - in particular Sort Tile Recursive can work very well.
-   M-Trees have been refactored and optimized for double distances

Database layer
--------------

-   Bundle format (work in progress): low-level binary format for fast data exchange
-   DBID and [DataStore](./DataStore) layer received some additional classes for further performance improvements
-   KNN heap structures were revisited. The code is less clean now, but performs better in benchmarks.

Visualizations
--------------

-   General clean up and API simplifications
-   Some additional modules and improvements

Various
-------

-   There is a new parameter class, [RandomParameter](./RandomParameter)
-   Some new distributions were added, also to the data set generator.

Tutorials
---------

-   The website has new tutorials, including one on a k-means variation that produces equal sized clusters.


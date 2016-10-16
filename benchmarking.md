---
layout: page
title: Benchmarking
---


Benchmarking with ELKI
======================

Setup
-----

For benchmarking, *do NOT set `-verbose`* as the verbose output will often come at cost in computation time, and verbosity varies a lot from algorithm to algorithm. Instead use `-time` to get timing information of the actual algorithms. To disable automatic evaluation, use `-evaluator NoAutomaticEvaluation`.

Fair benchmarking
-----------------

ELKI much like any other system (in particular Java based systems) comes with a certain performance cost compared to highly optimized code. An optimized C implementation should be able beat any ELKI algorithm easily. Results based on highly independent implementations must be considered *misleading*.

When comparing different algorithms you **must** therefore

 * ensure they are implemented in the same **language** and level of **optimization**
 * they use the same **backing features** (database layer, data structures etc.)
 * use the same **level of abstraction/modularization** (e.g. modular distance functions as opposed to hard-coded euclidean distance)
 * are properly setup within the framework (e.g. try different **index structures**, use the best each)

Many "reference" algorithms such as DBSCAN benefit immensely of index structures in low dimensional spaces and large data sets!

Therefore, **we strongly encourage you to implement all comparison methods in ELKI, too**. This is essentially the only way to ensure fair comparisons. If you have found a bottleneck, send us a Patch to improve it for everyone!

Of course we try to make ELKI as fast as possible (but we will not sacrifice extendability or code readability for this).

We also strongly encourage reviewers to pay attention to fair benchmarks, and outright reject papers when these are not done in a sound way. Unfortunately, many articles do lack when it comes to fair experiments.
{: style="margin:1ex; padding:1ex; border: solid 2px DarkGreen" }

Performance of ELKI versions
----------------------------

If you are not convinced, here is an empiric example of how huge implementation differences are.

For this, we will compare ELKI with ELKI, just using different versions.

For this benchmark we use the ALOI image data set, which has 110.250 objects, with just 8 dimensions (so the algorithms, distance functions and index structures are supposed okay). We tested four workloads, each with and without an R\*-Tree index. For this experiment, all R\*-Trees were incrementally loaded (bulk loading is faster, but was not yet available in all versions)

The test system is a 2.67 GHz Intel Xenon X5650 (single-threaded, memory limit 32 GB)

| **Task**  | **ELKI 0.1** | **ELKI 0.2** |  **ELKI 0.3** | **ELKI 0.4** | **ELKI 0.5.0** | **ELKI 0.5.5** | **ELKI 0.6.0** | **ELKI 0.6.5** |
|-----------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
| Load only | n/a          | 13.0         | 15.4 | 3.2 | 4.0 | 4.0 | 2.7 | 2.3 |
| Load into R\*-Tree | n/a | 21.9 | 22.0 | 9.5 | 8.6 | 8.6 | 3.3 | 2.7 |
| 10NN queries each | n/a | 2077.2 | 1579.2 | 657.5 | 656.2 | 584.9 | 546.3 | 443.0 |
| 10NN with R\*-Tree | n/a | 290.9 | 126.0 | 111.0 | 72.2 | 71.5 | 22.0 | 20.0 |
| Single-Link clustering| n/a | 5099.3 | 4662.1 |1353.7 |1383.3 | 875.4 | 621.8 | 613.3 |
| DBSCAN clustering | 3140.8 | 2368.4 | 1651.6 | 669.1 | 610.6 | 603.2 | 478.3 | 443.3 |
| DBSCAN with R\*-Tree | n/a | 303.4 | 116.7 | 111.4 | 87.7 | 91.3 | 35.0 | 33.7 |
| OPTICS clustering | 3133.1 | 2395.3 | 1884.8 | 704.5 | 586.4 | 546.4 | 511.4 | 445.3 |
| OPTICS with R\*-Tree | n/a | 448.6 | 235.4 | 179.9 | 142.3 | 141.5 | 69.0 | 56.8 |
| Local Outlier Factor | n/a | 2189.0 | 1643.6 | 710.8 | 570.9 | 605.2 | 545.0 | 442.5 |
| LOF with R\*-Tree | n/a | 321.4 | 146.4 | 135.8 | 93.0 | 90.8 | 38.4 | 35.7 |
| k-means lloyd k=100 | 249.7 | 125.6 | 81.2 | 77.4 | 60.2 | 57.3 | 76.7 | 86.5

As you can see, ELKI 0.3 had a slightly more expensive parser, but was already slightly faster than ELKI 0.2. In ELKI 0.4 we see major performance gains, which we attribute to ''removing Java's auto-boxing and unboxing\_ in various places. ELKI 0.5 and 0.6 used improved data structures. For ELKI 0.6.5 many optimizations were low level, at the parser, and with specialized optimizations for Euclidean distance only. Note that k-means is randomized, and we observe a standard deviation of +-20. We did not enabled improved seeding methods available in later versions.

However, we cannot remove all boxing/unboxing in Java without losing much of the generality of ELKI. **We expect significant performance gains to be possible with a low-level C implementation.** (Which are, however, not of scientific interest to us.) Therefore, benchmarking ELKI against implementations in C (or R or Matlab, or any other language that has high-performant mathematical libraries embedded) is not sound!

ELKI in comparison to other software
------------------------------------

As mentioned above, we advocate _not_ comparing algorithms from different frameworks with each other. Implementation details can make a huge difference. For example k-means from the R "flexclus" package seems to be about half as fast as the R native kmeans. In the most extreme example of this benchmark, **the same algorithm is 280x faster in one implementation than the other** (LOF in ELKI vs. LOF in "Data mining with R"). So from a scientific point of view, **even a performance difference of three orders of magnitude can be explained with implementation differences**.

2.67 GHz Intel Xenon X5650 (single-threaded, memory limit 32 GB)

| **Task**               | **ELKI 0.6.0** | **WEKA 3.7.5**        |
|------------------------|----------------|-----------------------|
| Load only              | 2.74           | 3.6 (filter)          |
| Load into R\*-Tree     | 3.33           | n/a                   |
| 10NN queries each      | 546.32         | n/a                   |
| 10NN with R\*-Tree     | 21.96          | n/a                   |
| Single-Link clustering | 621.80         | (too large)           |
| DBSCAN clustering      | 478.28         | 5090.19               |
| DBSCAN with R\*-Tree   | 35.02          | n/a                   |
| OPTICS clustering      | 511.43         | 4667.42 (incomplete)  |
| OPTICS with R\*-Tree   | 69.01          | n/a                   |
| EM clustering          | 84.65          | 835.56                |
| Local Outlier Factor   | 545.02         | 2611.60               |
| LOF with R\*-Tree      | 38.39          | n/a                   |
| k-means lloyd k=100    | 76.70          | 372.49 (with "-fast") |

Single-Link clustering could not be run in Weka or R. Weka crashes with an IllegalArgumentException, due to an integer overflow. R detects the overflow, and fails with "vector size specified is too large". This is not surprising, as both use an implementation that needs quadratic memory and cubic time. The implementation in ELKI is the SLINK algorithm, which needs linear memory and quadratic time only, and is thus expected to be significantly faster on a large data set such as this. But hierarchical clustering is not sensible for large data sets anyway. R also fails with the same error on EM (because it pre-clusters the data with hierarchical clustering), and OPTICS in Weka is an incomplete implementation only and does not extract clusters from the plot. k-means results have a high variance, with a standard deviation of more than 15 seconds for ELKI - depending on the random seed, it may converge quickly.

Weka DBSCAN and OPTICS runtime has decreased 8x with extension version 1.0.3, by removing unnecessary safety checks. ELKI's DBSCAN has become 5x faster across versions. **Do not do runtime benchmarking on code that you did not profile and optimize to the same extent - the result will be meaningless!**

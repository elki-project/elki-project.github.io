---
layout: page
title: Outlier Algorithms with k-Nearest-Neighbors
short: kNN-based Outlier
parent: algorithms
---


> Important note: this information is for ELKI 0.7.
>
> Progress to unify these parameters is still underway!

Overview of kNN interpretation across algorithms
================================================

This page aims at documentating difference in the interpretation of "k nearest neighbor" in different algorithms as published in literature and as implemented in ELKI.

Be aware that these parameters *cannot* be fully comparable across different methods.

The columns for each indicate:

* whether the current point is part of its kNN (i.e. 1NN distance is always 0, "p kNN(p)" - partial: included, but not counted)
* whether the kNN may have more than k members (on tied distances)
* suggested values of k to use/try (if your data set has duplicates, you may need to increase k)

Additionally, we give the minimum value of k that may be used.

| =Algorithm=          |              |     |
|----------------------|--------------|-----|
| =kNN Outlier=        | included     | n/a |
| =kNN Weight Outlier= | not included | no  |
| =LOF=                | not included | yes |
| =LDOF=               | not included | no  |
| =LoOP=               | not included | no  |
| =LDF=                | probably not | no  |
| =COF=                |              |     |
| =INFLO=              | not included | yes |
| =KDEOS=              | included     | yes |

Detailed notes
--------------

### kNN outlier

The provided kNN query algorithm (Figure 2, Procedure getKthNeighborDist) for the R-tree does clearly not skip the current point, but includes it in the heap.

### kNN weight

The example figures indicate that the authors do not consider the current point part of the kNN

### Local Outlier Factor

While Figure 2 seems to include the query point, Definition 3 explicitly uses the database minus the current point.

### LDOF

Query point explicitly not included; but no explicit tie handling given. Normalization by 1/(k\*(k-1)) indicates that exactly k neighbors are expected.

### LoOP

Original code used k, and then removed the query point, usually yielding k-1 neighbors. (Changed in 0.7.0). When tied, the first objecst returned are used only.

### LDF

Exactly m neighbors assumed. It is to be assumed it follows the LOF definition for k-distance.

Note: LDF has two neighborhood sizes, m and k.

### COF

Implementation: the first k returned objects are being used.

### INFLO

kNN defined as in LOF

### KDEOS

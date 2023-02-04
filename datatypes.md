---
layout: page
title: Data Types Supported by ELKI
short: Data Types
parent: howto
navigation: 15
---

Data Types Supported by ELKI
============================

See package [elki.data](/releases/current/javadoc/data/package-summary.html) for examples.

Included in ELKI 0.8.0 are implementations for the following "raw" data types:

- [Number vectors](/releases/current/javadoc/elki/data/NumberVector.html):
- [Double vectors](/releases/current/javadoc/elki/data/DoubleVector.html)
- [Float vectors](/releases/current/javadoc/elki/data/FloatVector.html)
- [Integer vectors](/releases/current/javadoc/elki/data/IntegerVector.html)
- [Bit vectors](/releases/current/javadoc/elki/data/BitVector.html)
- [Sparse float vectors](/releases/current/javadoc/elki/data/SparseFloatVector.html)
- [Class labels](/releases/current/javadoc/elki/data/ClassLabel.html)
- [Object labels](/releases/current/javadoc/elki/data/LabelList.html)
- [External IDs](/releases/current/javadoc/elki/data/ExternalID.html)
- Geo-data:
  - [Multi-Polygons](/releases/current/javadoc/elki/data/spatial/PolygonsObject.html)
  - [Internal DBIDs](/releases/current/javadoc/elki/database/ids/DBID.html)

As important as data types are the [Distances](/algorithms/distances). For example, **time series are supported by ELKI as regular number vectors**, by just using a specialized time series distance such as [DTWDistance](/releases/current/javadoc/elki/distance/timeseries/DTWDistance.html) on them, for **color histograms** you can use for example [HSBHistogramQuadraticDistance](/releases/current/javadoc/elki/distance/colorhistogram/HSBHistogramQuadraticDistance.html).

In addition, you will find classes capable of extracting features from data types such as images to obtain supported number vectors. In order to plug in custom data types, you need to implement the following:

 * The data type, e.g. derived from [FeatureVector](/releases/current/javadoc/elki/data/FeatureVector.html)
 * A parser for the input type to produce instances
 * Algorithms or distance functions that can process these data types. Note: many algorithms in ELKI are data type agnostic, they only need to be given an appropriate [Distance](/algorithms/distances). Others such as k-Means and EM clustering require the [NumberVector](/releases/current/javadoc/elki/data/NumberVector.html) interface that allows them to compute centroids. This is a restriction of the algorithm, not of ELKI.

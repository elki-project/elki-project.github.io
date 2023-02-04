---
layout: page
title: Data Types Supported by ELKI
short: Data Types
parent: howto
navigation: 15
---

Data Types Supported by ELKI
============================

See package [de.lmu.ifi.dbs.elki.data](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/package-summary.html) for a class hierarchy diagram.

Included in ELKI 0.4 are implementations for the following "raw" data types:

- [Number vectors](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/NumberVector.html):
- [Double vectors](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/DoubleVector.html)
- [Float vectors](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/FloatVector.html)
- [Integer vectors](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/IntegerVector.html)
- [Bit vectors](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/BitVector.html)
- [Sparse float vectors](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/SparseFloatVector.html)
- [Class labels](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/ClassLabel.html)
- [Object labels](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/LabelList.html)
- [External IDs](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/ExternalID.html)
- Geo-data:
  - [Multi-Polygons](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/spatial/PolygonsObject.html)
  - [Internal DBIDs](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/database/ids/DBID.html)

As important as data types are the [DistanceFunctions](/algorithms/distances). For example, **time series are supported by ELKI as regular number vectors**, by just using a specialized time series distance such as [DTWDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/timeseries/DTWDistanceFunction.html) on them, for **color histograms** you can use for example [HSBHistogramQuadraticDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/colorhistogram/HSBHistogramQuadraticDistanceFunction.html).

In addition, you will find classes capable of extracting features from data types such as images to obtain supported number vectors. In order to plug in custom data types, you need to implement the following:

 * The data type, e.g. derived from [FeatureVector](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/FeatureVector.html)
 * A parser for the input type to produce instances
 * Algorithms or distance functions that can process these data types. Note: many algorithms in ELKI are data type agnostic, they only need to be given an appropriate [DistanceFunctions](/algorithms/distances). Others such as k-Means and EM clustering require the [NumberVector](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/NumberVector.html) interface that allows them to compute centroids. This is a restriction of the algorithm, not of ELKI.

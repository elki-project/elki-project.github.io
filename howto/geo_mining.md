---
layout: page
title: Geo Mining in ELKI
parent: howto
navigation: 40
---


Geo Mining in ELKI
==================

Spatial data mining in ELKI is supported at various places.

Specialized Geo data mining algorithms
--------------------------------------

Outlier detection:
- [CTLuGLSBackwardSearchAlgorithm](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuGLSBackwardSearchAlgorithm.html)
- [CTLuMeanMultipleAttributes](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMeanMultipleAttributes.html)
- [CTLuMedianAlgorithm](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianAlgorithm.html)
- [CTLuMedianMultipleAttributes](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianMultipleAttributes.html)
- [CTLuMoranScatterplotOutlier](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMoranScatterplotOutlier.html)
- [CTLuRandomWalkEC](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuRandomWalkEC.html)
- [CTLuScatterplotOutlier](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuScatterplotOutlier.html)
- [CTLuZTestOutlier](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuZTestOutlier.html)
- [SLOM](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SLOM.html)
- [SOF](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SOF.html)
- [TrimmedMeanApproach](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/TrimmedMeanApproach.html)

Additionally, you can use existing data mining [Algorithms](/algorithms) via specialized [DistanceFunctions](/algorithms/distances).

Geo distance functions
----------------------

Defined for latitude-longitude pairs:

- [DimensionSelectingLatLngDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/DimensionSelectingLatLngDistanceFunction.html)
- [LatLngDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LatLngDistanceFunction.html)
- [LngLatDistanceFunction](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LngLatDistanceFunction.html)

See [DistanceFunctions](/algorithms/distances) for other distance functions.

Geo data types
--------------

- Regular number vectors (e.g. 2-d with longitude and latitude meaning)
- [Multi-Polygons](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/data/spatial/PolygonsObject.html)

See [DataTypes](/datatypes) for a complete overview.

Index support
-------------

Metrical [Index Structures](use_indexes) have support for geo data by using geographic distance functions.

Support in R-Trees is not yet complete, as we do not yet have an implementation of a valid min-dist for spatial rectangles on the earth sphere.

Output support
--------------

ELKI has specialized output support for geo data:

- [de.lmu.ifi.dbs.elki.result.KMLOutputHandler](/releases/release0.7.5/javadoc/de/lmu/ifi/dbs/elki/result/KMLOutputHandler.html) for producing KML output files


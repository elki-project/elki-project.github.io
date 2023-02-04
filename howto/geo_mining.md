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
- [CTLuGLSBackwardSearchAlgorithm](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuGLSBackwardSearchAlgorithm.html)
- [CTLuMeanMultipleAttributes](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMeanMultipleAttributes.html)
- [CTLuMedianAlgorithm](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMedianAlgorithm.html)
- [CTLuMedianMultipleAttributes](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMedianMultipleAttributes.html)
- [CTLuMoranScatterplotOutlier](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuMoranScatterplotOutlier.html)
- [CTLuRandomWalkEC](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuRandomWalkEC.html)
- [CTLuScatterplotOutlier](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuScatterplotOutlier.html)
- [CTLuZTestOutlier](/releases/current/javadoc/elki/algorithm/outlier/spatial/CTLuZTestOutlier.html)
- [SLOM](/releases/current/javadoc/elki/algorithm/outlier/spatial/SLOM.html)
- [SOF](/releases/current/javadoc/elki/algorithm/outlier/spatial/SOF.html)
- [TrimmedMeanApproach](/releases/current/javadoc/elki/algorithm/outlier/spatial/TrimmedMeanApproach.html)

Additionally, you can use existing data mining [Algorithms](/algorithms) via specialized [Distances](/algorithms/distances).

Geo distance functions
----------------------

Defined for latitude-longitude pairs:

- [DimensionSelectingLatLngDistance](/releases/current/javadoc/elki/distance/geo/DimensionSelectingLatLngDistance.html)
- [LatLngDistance](/releases/current/javadoc/elki/distance/geo/LatLngDistance.html)
- [LngLatDistance](/releases/current/javadoc/elki/distance/geo/LngLatDistance.html)

See [Distances](/algorithms/distances) for other distance functions.

Geo data types
--------------

- Regular number vectors (e.g., 2-d with longitude and latitude meaning)
- [Multi-Polygons](/releases/current/javadoc/elki/data/spatial/PolygonsObject.html)

See [DataTypes](/datatypes) for a complete overview.

Index support
-------------

Metrical [Index Structures](use_indexes) have support for geo data by using geographic distance functions.

Support in R-Trees is not yet complete, as we do not yet have an implementation of a valid min-dist for spatial rectangles on the earth sphere.

Output support
--------------

ELKI has specialized output support for geo data:

- [elki.result.KMLOutputHandler](/releases/current/javadoc/elki/result/KMLOutputHandler.html) for producing KML output files


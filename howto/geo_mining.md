---
layout: page
title: HowTo%2FGeoMining
---


Geo Mining in ELKI
==================

Spatial data mining in ELKI is supported at various places.

Specialized Geo data mining algorithms
--------------------------------------

-   Outlier detection:
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuGLSBackwardSearchAlgorithm](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuGLSBackwardSearchAlgorithm.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuMeanMultipleAttributes](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMeanMultipleAttributes.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuMedianAlgorithm](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianAlgorithm.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuMedianMultipleAttributes](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMedianMultipleAttributes.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuMoranScatterplotOutlier](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuMoranScatterplotOutlier.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuRandomWalkEC](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuRandomWalkEC.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuScatterplotOutlier](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuScatterplotOutlier.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.CTLuZTestOutlier](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/CTLuZTestOutlier.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.SLOM](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SLOM.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.SOF](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/SOF.html)
-   [de.lmu.ifi.dbs.elki.algorithm.outlier.spatial.TrimmedMeanApproach](./releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/spatial/TrimmedMeanApproach.html)

Additionally, you can use existing data mining [Algorithms](./Algorithms) via specialized [DistanceFunctions](./DistanceFunctions).

Geo distance functions
----------------------

Defined for latitude-longitude pairs:

-   [de.lmu.ifi.dbs.elki.distance.distancefunction.geo.DimensionSelectingLatLngDistanceFunction](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/DimensionSelectingLatLngDistanceFunction.html)
-   [de.lmu.ifi.dbs.elki.distance.distancefunction.geo.LatLngDistanceFunction](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LatLngDistanceFunction.html)
-   [de.lmu.ifi.dbs.elki.distance.distancefunction.geo.LngLatDistanceFunction](./releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/geo/LngLatDistanceFunction.html)

See [DistanceFunctions](./DistanceFunctions) for other distance functions.

Geo data types
--------------

-   Regular number vectors (e.g. 2-d with longitude and latitude meaning)
-   [Multi-Polygons](./releases/current/doc/de/lmu/ifi/dbs/elki/data/spatial/PolygonsObject.html)

See [DataTypes](./DataTypes) for a complete overview.

Index support
-------------

Metrical [IndexStructures](./IndexStructures) have support for geo data by using geographic distance functions.

Support in R-Trees is not yet complete, as we do not yet have an implementation of a valid min-dist for spatial rectangles on the earth sphere.

Output support
--------------

ELKI has some specialized output support for geo data:

-   [de.lmu.ifi.dbs.elki.result.KMLOutputHandler](./releases/current/doc/de/lmu/ifi/dbs/elki/result/KMLOutputHandler.html) for producing KML output files
-   [de.lmu.ifi.dbs.elki.application.jsmap.JSONResultHandler](./releases/current/doc/de/lmu/ifi/dbs/elki/application/jsmap/JSONResultHandler.html) for using a web browser interface


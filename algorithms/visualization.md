---
layout: page
title: Visualization in ELKI
parent: algorithms
---


Visualization in ELKI
=====================

Usage
-----

To use the ELKI visualizer, set `-resulthandler` to [de.lmu.ifi.dbs.elki.result.AutomaticVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/result/AutomaticVisualization.html). This class will inspect the algorithm output, invoke appropriate visualization modules and arrange them on the screen. The menu allows export to [SVG](/dev/svg), PNG, JPG, PDF, PostScript and other formats.

Technology
----------

ELKI uses [SVG](/dev/svg) for visualization (which has benefits for print export), and Apache [Batik](/dev/batik) for screen rendering. While this is not the fastest solution, the export benefits are good and we don't re-write pixel-rendering code ourselves.

See [Batik](/dev/batik) for documentation pointers.

Visualization modules
---------------------

Visualizers included in ELKI 0.6.0:

 - Histogram visualizations:
   - [histogram.ColoredHistogramVisualizer](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/histogram/ColoredHistogramVisualizer.html) (data histograms)
   - [visunproj.HistogramVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/HistogramVisualization.html) (histogram results)
 - Scatterplots:
 - Basic:
   - [scatterplot.AxisVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/AxisVisualization.html)
   - [scatterplot.TooltipStringVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/TooltipStringVisualization.html)
 - Object Selection:
   - [scatterplot.selection.SelectionDotVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/SelectionDotVisualization.html)
   - [scatterplot.selection.SelectionCubeVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/SelectionCubeVisualization.html)
   - [scatterplot.selection.SelectionConvexHullVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/SelectionConvexHullVisualization.html)
 - Clustering:
   - [scatterplot.cluster.ClusterHullVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/ClusterHullVisualization.html)
   - [scatterplot.cluster.ClusterMeanVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/ClusterMeanVisualization.html)
   - [scatterplot.cluster.EMClusterVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/EMClusterVisualization.html)
 - Outlier detection:
   - [scatterplot.TooltipScoreVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/TooltipScoreVisualization.html)
   - [scatterplot.outlier.BubbleVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/outlier/BubbleVisualization.html)
   - [scatterplot.outlier.COPVectorVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/outlier/COPVectorVisualization.html)
 - Geo data:
   - [scatterplot.PolygonVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/PolygonVisualization.html)
 - Specialized:
   - [scatterplot.density.DensityEstimationOverlay](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/density/DensityEstimationOverlay.html)
   - [scatterplot.selection.DistanceFunctionVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/DistanceFunctionVisualization.html) (visualize kNN of selection)
   - [scatterplot.cluster.VoronoiVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/VoronoiVisualization.html) (for K-Means)
   - [scatterplot.cluster.ClusterOrderVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/ClusterOrderVisualization.html) (for OPTICS)
   - [scatterplot.ReferencePointsVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/ReferencePointsVisualization.html) (Algorithm reference points used)
   - [scatterplot.index.TreeMBRVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/index/TreeMBRVisualization.html) (visualize R-Trees)
   - [scatterplot.index.TreeSphereVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/index/TreeSphereVisualization.html) (visualize M-Trees)
 - Parallel coordinates:
   - [parallel.LineVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/LineVisualization.html)
   - [parallel.cluster.ClusterParallelMeanVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/cluster/ClusterParallelMeanVisualization.html)
   - [parallel.cluster.ClusterOutlineVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/cluster/ClusterOutlineVisualization.html)
   - [parallel.index.RTreeParallelVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/index/RTreeParallelVisualization.html)
   - [parallel.ParallelAxisVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/ParallelAxisVisualization.html) (axis rendering)
   - [parallel.selection.SelectionLineVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/selection/SelectionLineVisualization.html)
   - [parallel.selection.SelectionAxisRangeVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/selection/SelectionAxisRangeVisualization.html)
 - OPTICS:
   - [optics.OPTICSPlotVisualizer](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotVisualizer.html)
   - [optics.OPTICSClusterVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSClusterVisualization.html)
   - [optics.OPTICSPlotCutVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotCutVisualization.html) (for epsilon cuts)
   - [optics.OPTICSPlotSelectionVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotSelectionVisualization.html)
   - [optics.OPTICSPlotSteepAreaVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotSteepAreaVisualization.html) (for OPTICS Xi method)
 - Pair segments visualization:
   - [pairsegments.CircleSegmentsVisualizer](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/pairsegments/CircleSegmentsVisualizer.html)
 - Generic:
   - [visunproj.XYCurveVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/XYCurveVisualization.html) (e.g. ROC curves)
   - [visunproj.PixmapVisualizer](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/PixmapVisualizer.html)
   - [visunproj.SimilarityMatrixVisualizer](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/SimilarityMatrixVisualizer.html)
 - Textual:
   - [visunproj.ClusterEvaluationVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/ClusterEvaluationVisualization.html)
   - [visunproj.KeyVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/KeyVisualization.html)
   - [visunproj.SettingsVisualization](/releases/current/javadoc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/SettingsVisualization.html)


---
layout: page
title: Visualization in ELKI
parent: algorithms
---


Visualization in ELKI
=====================

Usage
-----

To use the ELKI visualizer, set `-resulthandler` to [de.lmu.ifi.dbs.elki.visualization.gui.ResultVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/gui/ResultVisualizer.html). This class will inspect the algorithm output, invoke appropriate visualization modules and arrange them on the screen. The menu allows export to [SVG](/svg), PNG, JPG, PDF, PostScript and other formats.

Technology
----------

ELKI uses [SVG](/svg) for visualization (which has benefits for print export), and Apache [Batik](/batik) for screen rendering. While this is not the fastest solution, the export benefits are good and we don't re-write pixel-rendering code ourselves.

See [Batik](/batik) for documentation pointers.

Visualization modules
---------------------

Visualizers included in ELKI 0.6.0:

 - Histogram visualizations:
   - [histogram.ColoredHistogramVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/histogram/ColoredHistogramVisualizer.html) (data histograms)
   - [visunproj.HistogramVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/HistogramVisualization.html) (histogram results)
 - Scatterplots:
 - Basic:
   - [scatterplot.AxisVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/AxisVisualization.html)
   - [scatterplot.TooltipStringVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/TooltipStringVisualization.html)
 - Object Selection:
   - [scatterplot.selection.SelectionDotVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/SelectionDotVisualization.html)
   - [scatterplot.selection.SelectionCubeVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/SelectionCubeVisualization.html)
   - [scatterplot.selection.SelectionConvexHullVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/SelectionConvexHullVisualization.html)
 - Clustering:
   - [scatterplot.cluster.ClusterHullVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/ClusterHullVisualization.html)
   - [scatterplot.cluster.ClusterMeanVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/ClusterMeanVisualization.html)
   - [scatterplot.cluster.EMClusterVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/EMClusterVisualization.html)
 - Outlier detection:
   - [scatterplot.TooltipScoreVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/TooltipScoreVisualization.html)
   - [scatterplot.outlier.BubbleVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/outlier/BubbleVisualization.html)
   - [scatterplot.outlier.COPVectorVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/outlier/COPVectorVisualization.html)
 - Geo data:
   - [scatterplot.PolygonVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/PolygonVisualization.html)
 - Specialized:
   - [scatterplot.density.DensityEstimationOverlay](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/density/DensityEstimationOverlay.html)
   - [scatterplot.selection.DistanceFunctionVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/selection/DistanceFunctionVisualization.html) (visualize kNN of selection)
   - [scatterplot.cluster.VoronoiVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/VoronoiVisualization.html) (for K-Means)
   - [scatterplot.cluster.ClusterOrderVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/cluster/ClusterOrderVisualization.html) (for OPTICS)
   - [scatterplot.ReferencePointsVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/ReferencePointsVisualization.html) (Algorithm reference points used)
   - [scatterplot.index.TreeMBRVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/index/TreeMBRVisualization.html) (visualize R-Trees)
   - [scatterplot.index.TreeSphereVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/scatterplot/index/TreeSphereVisualization.html) (visualize M-Trees)
 - Parallel coordinates:
   - [parallel.LineVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/LineVisualization.html)
   - [parallel.cluster.ClusterParallelMeanVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/cluster/ClusterParallelMeanVisualization.html)
   - [parallel.cluster.ClusterOutlineVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/cluster/ClusterOutlineVisualization.html)
   - [parallel.index.RTreeParallelVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/index/RTreeParallelVisualization.html)
   - [parallel.ParallelAxisVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/ParallelAxisVisualization.html) (axis rendering)
   - [parallel.selection.SelectionLineVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/selection/SelectionLineVisualization.html)
   - [parallel.selection.SelectionAxisRangeVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/parallel/selection/SelectionAxisRangeVisualization.html)
 - OPTICS:
   - [optics.OPTICSPlotVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotVisualizer.html)
   - [optics.OPTICSClusterVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSClusterVisualization.html)
   - [optics.OPTICSPlotCutVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotCutVisualizer.html) (for epsilon cuts)
   - [optics.OPTICSPlotSelectionVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotSelectionVisualizer.html)
   - [optics.OPTICSPlotSteepAreaVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/optics/OPTICSPlotSteepAreaVisualizer.html) (for OPTICS Xi method)
 - Pair segments visualization:
   - [pairsegments.CircleSegmentsVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/pairsegments/CircleSegmentsVisualizer.html)
 - Generic:
   - [visunproj.XYCurveVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/XYCurveVisualization.html) (e.g. ROC curves)
   - [visunproj.PixmapVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/PixmapVisualizer.html)
   - [visunproj.SimilarityMatrixVisualizer](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/SimilarityMatrixVisualizer.html)
 - Textual:
   - [visunproj.ClusterEvaluationVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/ClusterEvaluationVisualization.html)
   - [visunproj.KeyVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/KeyVisualization.html)
   - [visunproj.SettingsVisualization](/releases/current/doc/de/lmu/ifi/dbs/elki/visualization/visualizers/visunproj/SettingsVisualization.html)


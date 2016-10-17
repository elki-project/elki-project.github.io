---
layout: page
title: Cluster Evaluation using Pair Segments
short: Segmented Cluster Evaluation
parent: examples
---


Cluster Evaluation using Pair Segments
======================================

At ICDE 2012 we presented an experimental cluster evaluation tool based in pair segments. Details can be found in (see also [Publications](/publications)):

[0.5](/releases)

: Elke Achtert, Sascha Goldhofer, Hans-Peter Kriegel, Erich Schubert, Arthur Zimek\\
  **Evaluation of Clusterings – Metrics and Visual Support**.\\
  Proceedings of the 28th International Conference on Data Engineering (ICDE), Washington, DC, 2012.

Setup
-----

For this experiment, you will need at least version 0.5.0 ([Releases](/releases)).

Launch the MiniGUI as usual and setup your clustering algorithms as usual (if you want to compare to a ground truth labeling, add a `clustering.trivial.TrivialByLabelClustering`!).

As evaluator choose `clustering.pairsegments.ClusterPairSegmentAnalysis`, and the UI should automatically include the circle segments visualization. Also add `clustering.EvaluateClustering` to see cluster scores.

In order to simplify the user interface, you can set for example

    -vis.window.single
    -visualizer.stylesheet presentation
    -vis.enable (ScatterPlot|CircleSegments|Evaluation)

The following two detailed settings also include \* Detailed configurations for two clustering algorithms on this data set \* Embedding visualizers, to allow interaction in the overview (`-vis.window.single`) \* Customized visualization by selectively enabling just some visualizers (by default, much more visualizers are used, making the overview a bit complicated)

Figure 5+6
----------

    -dbc.in pov.csv
    -algorithm clustering.EM,clustering.DBSCAN
    # Parameters for EM clustering
    -em.k 3
    # Parameters for DBSCAN clustering
    -dbscan.epsilon 0.1
    -dbscan.minpts 5
    # Parameters for Evaluation and Visualization
    -evaluator clustering.EvaluateClustering,clustering.pairsegments.ClusterPairSegmentAnalysis
    -vis.window.single
    -visualizer.stylesheet presentation
    -vis.enable (scatterplotfact|emcluster|voronoi|marker|axis|Evalu|Circle)

Figure 7+8
----------

    -dbc.in different-densities-2d.ascii
    -algorithm clustering.EM,clustering.kmeans.KMeansLloyd
    # Parameters for EM clustering
    -em.k 6
    -kmeans.initialization KMeansPlusPlusInitialMeans
    -kmeans.seed 1
    # Parameters for kmeans clustering
    -kmeans.k 5
    -kmeans.initialization KMeansPlusPlusInitialMeans
    -kmeans.seed 1
    # Parameters for Evaluation and Visualization
    -evaluator clustering.EvaluateClustering,clustering.pairsegments.ClusterPairSegmentAnalysis
    -vis.window.single
    -visualizer.stylesheet presentation
    -vis.enable (scatterplotfact|voronoi|marker|axis|Evalu|Circle)

---
layout: page
title: Examples%2FGreedyEnsemble
---


Greedy Ensemble
===============

Example for building a greedy ensemble, as published in

Erich Schubert, Remigius Wojdanowski, Arthur Zimek, Hans-Peter Kriegel

**On Evaluation of Outlier Rankings and Outlier Scores**

In Proceedings of the 12th SIAM International Conference on Data Mining (SDM), Anaheim, CA, 2012

The code for this experiment will be released with Version 0.5 of ELKI, in the package [de.lmu.ifi.dbs.elki.application.greedyensemble](./releases/current/doc/de/lmu/ifi/dbs/elki/application/greedyensemble.html).

This experiment is split into two parts: computing the ensemble members, and then combining their results into one.

Computing the ensemble members
------------------------------

To compute a mixed array, we will use the main class [de.lmu.ifi.dbs.elki.application.greedyensemble.ComputeKNNOutlierScores](./releases/current/doc/de/lmu/ifi/dbs/elki/application/greedyensemble/ComputeKNNOutlierScores.html). It has a number of required and optional parameters that can be found using `--help`. The usual options for setting filters and indexes are also available. Important parameters for this experiment are:

`-dbc.in`:: The input file (data points) `-startk`:: The start value for the `k` parameter `-maxk`:: The maximum value for the `k` parameter `-stepk`:: The step size for the `k` parameter `-app.out`:: Output file, with the score vectors. `-outlier.pattern`:: Pattern to deduce the ground truth vector for the data set `-algorithm.distancefunction`:: Distance function to use.

So for a first experiment, we'll use the command line: `de.lmu.ifi.dbs.elki.application.greedyensemble.ComputeKNNOutlierScores -startk 3 -stepk 2 -maxk 30 -dbc.in aloi-27d-50000-max5-tot1508.csv.gz -app.out /tmp/aloi-results.ascii -algorithm.distancefunction colorhistogram.HistogramIntersectionDistanceFunction -db.index tree.spatial.rstarvariants.rstar.RStarTreeFactory -verbose`

The output file will contain one algorithm output per line, consisting of a label and then one ("unified") score for each object in the input file. This application computes kNN-based outlier detection methods (kNN, weighted kNN, LOF, LDOF, [LoOP](./LoOP)) for multiple values of `k` quite efficiently, by precomputing the kNN just once for the maximum `k` required. As distance function, we chose to use histogram intersection distance (since this data set are color histograms). In verbose note, you will notice that it spends a large share of the time on this step - this is to be expected, as this step is of complexity O(n log n).

Details on the applied unification of scores can be found in:

H.-P. Kriegel, P. Kröger, E. Schubert, A. Zimek

**Interpreting and Unifying Outlier Scores**

In Proceedings of the 11th SIAM International Conference on Data Mining (SDM), Mesa, AZ: 13–24, 2011.

Building the ensemble
---------------------

Note: the ensemble is built and evaluated; but you cannot directly apply this to a data set to detect outliers. This implementation is closely tied to the evaluation, and the actually detected outliers will not be printed.

The main class for this experiment is [de.lmu.ifi.dbs.elki.application.greedyensemble.GreedyEnsembleExperiment](./releases/current/doc/de/lmu/ifi/dbs/elki/application/greedyensemble/GreedyEnsembleExperiment.html). For this example, we will read and process the result of the previous step using `de.lmu.ifi.dbs.elki.application.greedyensemble.GreedyEnsembleExperiment -dbc.in /tmp/aloi-results.ascii -dbc.filter [ByLabelFilter](./ByLabelFilter) -patternfilter.invert -patternfilter.pattern ".*outliers" -verbose`

The filter we added is because the data set produced in the previous step contains two control "algorithms", one that assigns every object an outlierness of 0, and one that assigns 1 each. They are called "all-outliers" and "no-outliers", and will be removed by this filter.

The output will look like this:

    Merged top 250 outliers to: 1451 outliers
    ROC AUC: 0.697837132641967 estimated 0.9177165423426206 cost 0.7737280482507285 KNN-03
    ROC AUC: 0.6745235643889741 estimated 0.9317168905997655 cost 0.8008212342922019 KNN-05
    ...

The method has performed the initial estimation of outliers. For each method, it computes the true ROC and cost values, along with an estimated cost based on the outlier estimation. In a *real* setting, only the estimated costs would be available!

Next, it will build the actual ensemble:

    ...
    Initial estimation of outliers: 1451
    Initializing ensemble with: LOOP-05
    Estimated outliers remaining: 1451
    Greedy ensemble: LOOP-05 KNN-23 LDOF-03 LOF-29 LOF-03 LOF-27 LOOP-03

In the default setting, it will not refine the outlier estimation, which remains at 1451 outliers on this data set. Note that out of the 70 methods (5 algorithms \* 14 values of k) in the input data set, the greedy ensemble chose just 7. There are indications that maybe a low value of k (3 to 5) and a value around 20-30 would have been enough. Maybe the data set contains two types of outliers.

Finally, it will compare the ensemble performance to individual algorithms and naive ensembles:

    Best single ROC AUC: 0.8172427290366582 (LOOP-11)
    Best single cost:    0.545007455425115 (LOOP-15)
    Naive ensemble AUC:   0.7919500408172551 cost: 0.621547460233804
    Naive ensemble Gain:  -0.13839497649577193 cost gain: -0.1404384546427655
    Greedy ensemble AUC:  0.8212270677807127 cost: 0.5691008796309247
    Greedy ensemble Gain to best:  0.02180125979695635 cost gain: -0.04420751306423232
    Greedy ensemble Gain to naive: 0.14072113774240935 cost gain: 0.08438065306091158
    Random ensemble AUC:  0.7823554918257739 + stddev: 0.027543898649210474 = 0.8098993904749844
    Random ensemble Gain: -0.19089383982912556
    Greedy improvement:   1.4112590396150426 standard deviations.
    Random ensemble Cost: 0.642211615964882 + stddev: 0.06788990707423054 = 0.6697555146140924
    Random ensemble Gain: -0.17835381804813322
    Greedy improvement:   1.076901405300471 standard deviations.
    Naive ensemble Gain to random: 0.04408357955809594 cost gain: 0.03217655242817641
    Random ensemble Gain to naive: -0.04611656271969555 cost gain: -0.033246303867615845
    Greedy ensemble Gain to random: 0.17860122582933202 cost gain: 0.11384212698194973

So [LoOP](./LoOP) (Local Outlier Probabilities) performed really well on this data set. With both respect to the ROC AUC and to the cost it had the best method. A naive ensemble, averaging all 70 methods, is significantly worse than this (negative gain). The greedy ensemble however slightly improved over the best method with respect to ROC, although not with respect to cost (which actually is not surprising, as it is still only an average, which in general will only make costs worse).

While the greedy ensemble improved only very slightly against the best individual method, it clearly outperforms both the full naive ensemble, and randomized ensembles of the same size. This is in particular nice, as it did not even include the best individual methods.

Visualizing pairwise gains
--------------------------

To see the benefits from combining two methods, use the class [de.lmu.ifi.dbs.elki.application.greedyensemble.VisualizePairwiseGainMatrix](./releases/current/doc/de/lmu/ifi/dbs/elki/application/greedyensemble/VisualizePairwiseGainMatrix.html):

`de.lmu.ifi.dbs.elki.application.greedyensemble.VisualizePairwiseGainMatrix -dbc.in /tmp/aloi-results.ascii`

will open a visualization window that computes the pairwise gain from combining two methods, always compared to the better of the two (not globally!). Green colors indicate the result became better than the two single methods. Red colors indicate that one of the single methods was better.

Continuing this research
------------------------

Of course, this is still a very heuristic approach of building ensembles, and leaves research questions open. For example, the estimated set of outliers will have errors and might need refinement during the process. Similarly, the "target vector" could be updated during pruning. You are invited to explore more advanced methods, and we would appreciate if you cite both the scientific work for this greedy ensemble method (SDM 2012, at the top of this page), as well as ELKI itself (see [Publications](./Publications)).

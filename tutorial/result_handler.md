---
layout: page
title: Result Handlers
parent: docs
navigation: 50
---


Write a custom result handler
=============================

Version information: Updated for ELKI 0.8.0
{: class="versioninfo" }

The simples API for accessing ELKI results is the [ResultHandler](/releases/current/javadoc/elki/result/ResultHandler.html) API.

In this tutorial, we will implement a custom result handler to output data in our preferred custom format.

Auto-generated code
-------------------

Implementing the interface yields the following template stub:

{% highlight java %}
import elki.result.ResultHandler;

public class SimpleScoreDumper implements ResultHandler {
  @Override
  public void processNewResult(Object newResult) {
    // TODO: implement
  }
}
{% endhighlight %}

Finding Outlier Results
-----------------------

For this example, we want to access the result of an outlier detection algorithm. First of all, we will need to scan the current result tree for appropriate outlier detection results. Fortunately, the [ResultUtil](/releases/current/javadoc/elki/result/ResultUtil.html) class already implements this job for us:

{% highlight java %}
    ArrayList<OutlierResult> ors = ResultUtil.filterResults(newResult, OutlierResult.class);
    for (OutlierResult o : ors) {
      // TODO: process outlier result.
    }
{% endhighlight %}

Accessing the scores
--------------------

Our output format will be a simple list of object id and outlier scores. For this we just iterate over all objects, print their ID and score:

{% highlight java %}
      DoubleRelation scores = o.getScores();
      for (DBIDIter iter = scores.iterDBIDs(); iter.valid(); iter.advance()) {
        System.out.println(DBIDUtil.toString(iter) + " " + scores.doubleValue(iter));
      }
{% endhighlight %}

Putting it all together
-----------------------

The complete class looks like this:

{% highlight java %}
import java.util.ArrayList;

import elki.database.ids.DBIDIter;
import elki.database.ids.DBIDUtil;
import elki.database.relation.DoubleRelation;
import elki.result.ResultHandler;
import elki.result.ResultUtil;
import elki.result.outlier.OutlierResult;

public class SimpleScoreDumper implements ResultHandler {
  @Override
  public void processNewResult(Object newResult) {
    // Get all new outlier results
    ArrayList<OutlierResult> ors = ResultUtil.filterResults(newResult, OutlierResult.class);
    for (OutlierResult o : ors) {
      DoubleRelation scores = o.getScores();
      for (DBIDIter iter = scores.iterDBIDs(); iter.valid(); iter.advance()) {
        System.out.println(DBIDUtil.toString(iter) + " " + scores.doubleValue(iter));
      }
    }
  }
}
{% endhighlight %}

**The class should show up automatically in the `-resulthandler` choices of the UI.
Since there is an implicit parameterless public constructor, it can automatically be instantiated, and we do not have to add an Parameterizer.**

[You can browse the full source code online, in the tutorial folder](https://github.com/elki-project/elki/blob/master/addons/tutorial/src/main/java/tutorial/outlier/SimpleScoreDumper.java)

Dumping clusterings
-------------------

Similarly, we could search for [Clustering](/releases/current/javadoc/elki/data/Clustering.html) results, iterate over the clusters and print each clusters object IDs:

{% highlight java %}
    ArrayList<Clustering<?>> cs = ResultUtil.filterResults(newResult, Clustering.class);
    for (Clustering<?> c : cs) {
      for (Cluster<?> cluster : c.getAllClusters()) {
        for (DBIDIter iter = cluster.getIDs().iter(); iter.valid(); iter.advance()) {
          System.out.print(DBIDUtil.toString(iter));
        }
        System.out.println();
      }
    }
{% endhighlight %}

Object numbering
----------------

ELKI will use a continuous object numbering by default. If you want the object IDs to always start at 0, use e.g. a FixedDBIDsFilter to use a static numbering scheme.

---
layout: page
title: Result Handlers
parent: docs
---


Write a custom result handler
=============================

Version information: Updated for ELKI 0.6.5~20141030
{: class="compact" style="font-size: x-small; text-align:right" }

The simples API for accessing ELKI results is the [ResultHandler](/releases/current/doc/de/lmu/ifi/dbs/elki/result/ResultHandler.html) API.

In this tutorial, we will implement a custom result handler to output data in our preferred custom format.

Auto-generated code
-------------------

Implementing the interface yields the following template stub:

{% highlight java %}
    import de.lmu.ifi.dbs.elki.result.HierarchicalResult;
    import de.lmu.ifi.dbs.elki.result.Result;
    import de.lmu.ifi.dbs.elki.result.ResultHandler;

    public class SimpleScoreDumper implements ResultHandler {
      @Override
      public void processNewResult(HierarchicalResult baseResult, Result newResult) {
        // TODO: implement
      }
    }
{% endhighlight %}

Finding Outlier Results
-----------------------

For this example, we want to access the result of an outlier detection algorithm. First of all, we will need to scan the current result tree for appropriate outlier detection results. Fortunately, the [ResultUtil](/releases/current/doc/de/lmu/ifi/dbs/elki/result/ResultUtil.html) class already implements this job for us:

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

    import de.lmu.ifi.dbs.elki.database.ids.DBIDIter;
    import de.lmu.ifi.dbs.elki.database.ids.DBIDUtil;
    import de.lmu.ifi.dbs.elki.database.relation.Relation;
    import de.lmu.ifi.dbs.elki.result.HierarchicalResult;
    import de.lmu.ifi.dbs.elki.result.Result;
    import de.lmu.ifi.dbs.elki.result.ResultHandler;
    import de.lmu.ifi.dbs.elki.result.ResultUtil;
    import de.lmu.ifi.dbs.elki.result.outlier.OutlierResult;

    public class SimpleScoreDumper implements ResultHandler {
      @Override
      public void processNewResult(HierarchicalResult baseResult, Result newResult) {
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

\[browser:elki/addons/tutorial/src/main/java/tutorial/outlier/SimpleScoreDumper.java You can browse the full source code online, in the tutorial folder\]

Dumping clusterings
-------------------

Similarly, we could search for [Clustering](/releases/current/doc/de/lmu/ifi/dbs/elki/data/Clustering.html) results, iterate over the clusters and print each clusters object IDs:

{% highlight java %}
        ArrayList<Clustering<?>> cs = ResultUtil.filterResults(newResult, Clustering.class);
        for (Clustering<?> c : cs) {
          for (Cluster<?> cluster : c.getAllClusters()) {
            for (DBIDIter iter = cluster.getIDs().iter(); iter.valid(); iter.advance()) {
              System.out.print(DBIDUtil.toString(iter)+" ");
            }
            System.out.println();
          }
        }
{% endhighlight %}

Object numbering
----------------

ELKI will use a continuous object numbering by default. If you want the object IDs to always start at 0, use e.g. a FixedDBIDsFilter to use a static numbering scheme.

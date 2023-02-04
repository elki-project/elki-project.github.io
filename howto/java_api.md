---
layout: page
title: How To Invoke ELKI From Java
short: Java API
parent: howto
navigation: 20
---


Invoking ELKI from Java
=======================

Preface
-------

You can easily use ELKI from Java - it has a [standard Java API](#PureJavaAPI). You will need to first load your data into a database (think of "data frames" in many other tools), then you can add an index to the data, and run an algorithm on this database. But note that some classes have ''many'' parameters, and since Java does not have default values and parameter constraints, using the ELKI-specific APIs does provide several advantages.

You can even embed ELKI into your application (if you accept the [AGPL-3 license](/license)), but we currently do not (yet) recommend to do so, because the API is still changing substantially.

But in many cases, using the MiniGUI or the command line interface to run your experiments will be better, even when writing custom extensions in Java. If you want a custom output format, this is best done e.g. as a custom [ResultHandler](/releases/current/javadoc/elki/result/ResultHandler.html) or just by using the [ResultWriter](/releases/current/javadoc/elki/result/ResultWriter.html) and parsing the resulting files afterwards.

The reasons why we recommend "loose coupling" over "tight integration" with ELKI are:

1.  The API is still changing a lot, because we keep on adding options and optimizations, and we **do not (yet) provide a stable API** (this will be the 1.0 release). The command line / MiniGUI / Parameterization is much more stable, because of the handling of default values and aliases - the parameterization only lists the non-default parameters, so only if the defaults change you'll notice.

2.  **Memory usage:** data mining is quite memory intensive. If you use the MiniGUI or command line, you have a good *cleanup* when the task is finished. If you invoke it from Java, changes are *really high* that you keep some reference somewhere, and end up leaking *lots* of memory. So **when using the Java API, *you* need to ensure that the objects are properly cleaned up and garbage collected**!

    By running ELKI from the command line, you get two things for free: a. no memory leaks. When the task is finished, the process quits and frees all memory. b. no need to rerun it twice for the same data. Subsequent analysis does not need to rerun the algorithm, just re-read the output.

3.  ELKI is **not designed as embeddable library**. It can be used, but it is not primarily designed to be used this way. ELKI has tons of options and functionality, and this comes at a price, both in runtime (although it can easily [outperform R and Weka](/benchmarking), for example!) memory usage and in particular in code complexity. You may not need all of this power.

    ELKI was **designed for research in data mining algorithms**, not for making them easy to include in arbitrary applications. Instead, if you have a particular problem, you should use ELKI to find out *which* approach works good, then *reimplement that approach in an optimized manner for your problem* (maybe even in C++ then, to further reduce memory and runtime).

4.  ELKI is [AGPL licensed](/license). This is a variant of the GPL license, and requires you to license your code the same way as ELKI. If you embed ELKI into your application, and distribute this combination, then **you agree to license your code** with a compatible license (e.g., GPL, AGPL, BSD). In particular for commercial users this may not be acceptable, and if you include/use code written by others you may not be allowed to relicense their code at all. This licensing restriction should not matter much for research and academic usage. It also does not apply if ELKI is run as a separate application (e.g., via [command line scripts](#CommandLineScripting)).

Recommended Solutions {#Recommended}
---------------------

The *two* recommended approaches of automating ELKI processing are by using [command line scripting](#CommandLineScripting) and [extending ELKI via modules](#ExtendingELKI). Two alternate approaches [use the Parameterization API](#ParameterizationAPI) or the [pure Java API](#PureJavaAPI).

### Command Line Scripting ELKI {#CommandLineScripting}

The **simplest way of automating ELKI** is using the command line. Any operating system has a powerful scriping language. In the following examples, we will be using common POSIX shell scripting (e.g., bash on Linux). And for shell scripts, you have a wide variety of tools available, such as [clusterssh](http://sourceforge.net/projects/clusterssh/) or the [Oracle Grid Engine](https://en.wikipedia.org/wiki/Oracle_Grid_Engine) for distributed running on ELKI jobs.

The MiniGUI is essentially an assisted command line builder. While it is a visual tool in the end it builds a list of parameters that would make up a command line.

{% highlight shell %}
#!/bin/bash
for k in $( seq 3 40 ); do
  java -jar elki.jar KDDCLIApplication \
    -dbc.in mouse.csv \
    -algorithm clustering.kmeans.ExponionKMeans \
    -kmeans.k $k \
    -resulthandler ResultWriter -out.gzip \
    -out output/k-$k 
done
{% endhighlight %}

### Extending ELKI {#ExtendingELKI}

A neat trick to use ELKI for your own experiments is to hook into the API by the regular extension points, such as [ResultHandler](/releases/current/javadoc/elki/result/ResultHandler.html) (for customizing output), [Parser](/releases/current/javadoc/elki/datasource/parser/Parser.html) (for custom input file formats), and [DatabaseConnection](/releases/current/javadoc/elki/datasource/DatabaseConnection.html) (for custom data sources). You can then use `ResultUtil` to select the results that you want to **output in your own preferred format** or analyze:

{% highlight java %}
public class MyCustomHandler implements ResultHandler {
  @Override
  public void processNewResult(HierarchicalResult baseResult, Result newResult) {
    Collection<Clustering<?>> col = ResultUtil.filterResults(newResult, Clustering.class);
    for (Clustering<?> c : col) {
      // process clustering
    }
  }
}
{% endhighlight %}

If your class has a `public` and parameterless constructor, or includes a [Parameterizer](/dev/parameterization) inner class, then it will automatically show up in the MiniGUI drop-down menus (if found on the classpath).

Using the [Parameterization](/dev/parameterization) API {#ParameterizationAPI}
------------------------------------------------------

An approach recommended only for *complicated* setups (managing multiple relations, or doing large benchmarks where a lot of work can be shared across multiple runs) instantiates classes using the parameterization API. But consider using the [recommended solutions](#Recommended) above!

This approach uses the [Parameterization](/dev/parameterization) API, which offers two benefits: 1. default values, also for nested parameters and future additions 2. corresponds to parameters you choose in the UI

It's main drawback is that it is *unusual* by Java conventions. A more Java-like approach will be discussed [in PureJavaAPI below](#PureJavaAPI).

### Creating a database

This is the basic setup for getting a [Database](/releases/current/javadoc/elki/database/Database.html) and [Relation](/releases/current/javadoc/elki/database/relation/Relation.html):

{% highlight java %}
// Setup parameters:
ListParameterization params = new ListParameterization();
params.addParameter(FileBasedDatabaseConnection.Parameterizer.INPUT_ID, filename);
// Add other parameters for the database here!

// Instantiate the database:
Database db = ClassGenericsUtil.parameterizeOrAbort(StaticArrayDatabase.class, params);
// Don't forget this, it will load the actual data (otherwise you get null values below)
db.initialize();

Relation<NumberVector> vectors = db.getRelation(TypeUtil.NUMBER_VECTOR_FIELD);
Relation<LabelList> labels = db.getRelation(TypeUtil.LABELLIST);
{% endhighlight %}

If you want to program more general, write your program to use a [NumberVector](/releases/current/javadoc/elki/data/NumberVector.html) instead of a more specific type such as `DoubleVector`.

Note that we did **not use the Java constructors**, which need *more complicated* parameters. The parameterization API takes care of creating objects and setting default parameters.

### Running an Algorithm

{% highlight java %}
ListParameterization params = new ListParameterization();
params.addParameter(LOF.Parameterizer.K_ID, 20);

Algorithm alg = ClassGenericsUtil.parameterizeOrAbort(LOF.class, params);
Result result = alg.run(db); // will choose the relation automatically!

LOF<NumberVector> lof = ClassGenericsUtil.parameterizeOrAbort(LOF.class, params);
OutlierResult outliers = alg.run(rel); // Manually chosen relation - not general!
{% endhighlight %}

Pure Java API {#PureJavaAPI}
-------------

If you are a Java purist, and want to specify all parameters, this is of course possible, too.

This is an alternative approach to the one you just saw, but you have to pay a price both in forward compatibility and in the amount of parameters you specify: Java does not have default values, and we do not maintain a backward compatible API until we have reached version 1.0 (in order to not clutter the API with dozens of compatibility constructors). Thus, if you use a newer ELKI, your code may need to be updated!

A complete example can be found in the sources: [PassingDataToELKI.java](https://github.com/elki-project/elki/blob/master/addons/tutorial/src/main/java/tutorial/javaapi/PassingDataToELKI.java)

### Creating a database from a `double[][]` array

Above example read data from a file, and the initialization shown here may also be used with the Parameterization approach if the data is already in Java.

{% highlight java %}
// Adapter to load data from an existing array.
DatabaseConnection dbc = new ArrayAdapterDatabaseConnection(data);
// Create a database (which may contain multiple relations!)
Database db = new StaticArrayDatabase(dbc, null);
// Load the data into the database (do NOT forget to initialize...)
db.initialize();
{% endhighlight %}

### Running an algorithm

Here you have to specify a number of parameters that would have default values in the other API.

{% highlight java %}
// K-means should be used with squared Euclidean (least squares):
SquaredEuclideanDistance dist = SquaredEuclideanDistance.STATIC;
// Default initialization, using global random:
// To fix the random seed, use: new RandomFactory(seed);
RandomUniformGenerated init = new RandomUniformGenerated(RandomFactory.DEFAULT);

// Setup textbook k-means clustering:
LloydKMeans<NumberVector> km = new LloydKMeans<>(dist, 3, 0, init);
// Run the algorithm:
Clustering<KMeansModel> c = km.autorun(db);
{% endhighlight %}

As you can see, this API requires you to *specify more parameters*. You need to be explicit about the distance function (although squared Euclidean is the reasonable default; with other distances k-means may fail), the maximum number of iterations, and the initialization method, the random generator used for initialization. Once we add a parameter to control how empty clusters are handled (on our wishlist), you will need to update your code, too!

### Processing the result

ELKI stores data in [Relation](/releases/current/javadoc/elki/database/relation/Relation.html)s. They are similar but not identical to "data frames" in other languages, or "column groups" in modern column store databases. They are a uniform, typed collection of objects, such as a vector field *or* labels. However, we do not mix data types: the numerical vectors and the associated labels are separate relations. This model is a hybrid of a relational data store (where often different data types would be in the same SQL table) and column stores (where often each dimension would be a separate table). This midway solution (which also resembles [normal forms of databases](https://en.wikipedia.org/wiki/Database_normalization)) was found both beneficial in NoSQL databases (c.f. column groups) and for our purposes, since e.g. k-means works on numerical data, and not on the labels.

[DBIDs](/dev/dbids) may not start with 0. In particular if you do multiple invocations, ELKI will continue enumerating where it left off. However, for a static context your DBIDs will be continuous, and can be efficiently mapped back to an offset in your data set. In this example, we will process a clustering result and output the object offsets:

{% highlight java %}
// Relation containing the number vectors:
Relation<NumberVector> rel = db.getRelation(TypeUtil.NUMBER_VECTOR_FIELD);
// We know that the ids must be a continuous range:
DBIDRange ids = (DBIDRange) rel.getDBIDs();

int i = 0;
for(Cluster<KMeansModel> clu : c.getAllClusters()) {
  // K-means will name all clusters "Cluster" in lack of noise support:
  System.out.println("#" + i + ": " + clu.getNameAutomatic());
  System.out.println("Size: " + clu.size());
  System.out.println("Center: " + clu.getModel().getPrototype().toString());
  // Iterate over objects:
  System.out.print("Objects: ");
  for(DBIDIter it = clu.getIDs().iter(); it.valid(); it.advance()) {
    // To get the vector use:
    NumberVector v = rel.get(it);

    // Offset within our DBID range: "line number"
    final int offset = ids.getOffset(it);
    System.out.print(" " + offset);
    // Do NOT rely on using "internalGetIndex()" directly!
  }
  System.out.println();
  ++i;
}
{% endhighlight %}

The complete tutorial can be found in [PassingDataToELKI.java](https://github.com/elki-project/elki/blob/master/addons/tutorial/src/main/java/tutorial/javaapi/PassingDataToELKI.java)

[FAQ](/faq): How to Identify Objects
-------------------------------------

Note that [DBIDs](/dev/dbids) in ELKI are internal identifiers. You should *not* rely on them mapping to any external identification. There are two easy to use approaches to map them back to identifiers such as line numbers or array offsets.

Do *not* rely on DBIDs to start at 0/1, and do not use `internalGetIndex`.
{: class="box-warn" }

If our data is in a static database (no inserts/deletes), the objects will have been assigned a continuous range of identifiers. In such cases, an efficient way to map them back to an offset within this range (0-based):

{% highlight java %}
DBIDRange ids = (DBIDRange) relation.getDBIDs();
// For each DBID reference:
int offset = ids.getOffset(dbidref);
{% endhighlight %}

Alternatively, you can use labels and a `LabelList` relation to identify objects. The default parser will do this when it sees text along the numerical attributes, i.e. a file such as

<pre>
1.0  2.0  3.0  ObjectLabel1
</pre>

will make it easy to identify the object by its label `ObjectLabel1`. The data type used for such labels is up to you. You could attach arbitrary objects to your data points using appropriate custom relations.

---
layout: page
title: ELKI Data Set Generator
short: Data Generator
parent: datasets
---


{% raw %}
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Dataset",
  "name" : "ELKI Data Generator",
  "description" : "A generator for synthetic data sets for use in cluster analysis, classification, and outlier detection.",
  "author" : {
    "@type" : "Person",
    "givenName" : "Erich",
    "familyName" : "Schubert",
    "affiliation" : { "@id" : "https://www.tu-dortmund.de/" }
  },
  "isAccessibleForFree" : true,
  "keywords" : ["data generator", "clustering", "cluster analysis", "outlier", "outlier detection", "anomaly detection"],
  "license" : "https://www.gnu.org/licenses/agpl-3.0.html"
}
</script>
{% endraw %}
Data Set Generator
==================

ELKI includes a special data set generator that is quite powerful:

-   Supports arbitrary dimensionalities
-   Reproducible random with seed specification
-   XML specification file (can also be generated with other tools)
-   Supports Uniform, Normal and Gamma distributions (as of release 0.4)
-   Can generate non-overlapping clusters of specified size
-   Allows arbitrary rotations, translations and scaling of generated clusters to generate correlated data sets
-   Support for clipping

A full XML schema definition can be found in the ELKI jar file.

Basic cluster definition
------------------------

A typical cluster definition (cluster model):

{% highlight xml %}
<cluster name="Cluster_1" size="100">
  <!-- first dimension: Gaussian distribution -->
  <normal mean="0" stddev="0.5" />
  <!-- second dimension: Uniform distribution -->
  <uniform min="0" max="1" />
  <!-- third dimension: Gamma distribution -->
  <gamma k="2" theta="3" />
  <!-- you can repeat distributions as you want -->
  <!-- Now we can add arbitrary rotations and translations: -->
  <rotate axis1="1" axis2="2" angle="-60" />
  <translate vector="0.1 0.3 0.1" />
  <!-- Finally: clip to the unit cube -->
  <clip min="0 0" max="1 1"/>
</cluster>
{% endhighlight %}

Obviously, all clusters in the data set must have the same number of dimensions, and for each dimension you need to specify the distribution to use.

The generation flow is to produce random values using the given distributions, then apply the rotations and translations in order (optimized using homogeneous coordinates, so you can put in as many operations as you want with minimal cost), then finally clipping is applied. There currently is no support for clipping inbetween over transformations.

Gold standard generation
------------------------

For a gold standard, the model specification serves a dual purpose: it is not only used to generate the points, but at the same time also to classify them. Only data points that classify as the same cluster they were generated for will be kept.

This leads to some drawbacks - some models will not be satisfiable, and the generator will stop after a number of retries - but it also has many benefits when using the labels for validating clustering results. In particular when generating outlier detection data sets, you can easily avoid producing background noise within a dense cluster (which by definition would no longer be an outlier). When using this option, you should be aware of the risk of overfitting (but you should be aware of this when using artificial data anyway!).

This is enabled by default (or explicitly by setting the `test-model="1"` attribute of the dataset element). This can be disabled by setting the `test-model="0"` attribute of the dataset element.

Invocation
----------

Beginning with ELKI 0.7.1, you can choose the generator in the MiniGUI.

The [GeneratorXMLSpec](/releases/current/doc/de/lmu/ifi/dbs/elki/application/GeneratorXMLSpec.html) can be invoked from the command line using

<pre>
java -cp elki.jar de.lmu.ifi.dbs.elki.application.GeneratorXMLSpec [... parameters ...]
</pre>

As with all ELKI command line applications, help can be obtained with `-h`:

<pre>
Parameters:
-verbose &lt;|true|false&gt;
   Enable verbose messages while performing the algorithm.
   Default: false
-app.out &lt;file&gt;
   the file to write the generated data set into, if the file already exists,
   the generated points will be appended to this file.
-bymodel.spec &lt;file&gt;
   The generator specification file.
-bymodel.sizescale &lt;double&gt;
   Factor for scaling the specified cluster sizes.
   Default: 1.0
-bymodel.randomseed &lt;int&gt;
   The random generator seed.
</pre>

The last two parameters allow scripted generation of data set series with different random seeds and varying data set scale.

Version 0.5 (unreleased) also contains a [GeneratorXMLDatabaseConnection](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/GeneratorXMLDatabaseConnection.html) for generating the data on the fly as input stream.

Examples
--------

A simple example can be found in [mouse.xml](https://github.com/elki-project/elki/blob/master/data/synthetic/Vorlesung/mouse.xml). This 2 dimensional data set includes three gaussian clusters and background noise. Due to the `test-model="1"` statement, the clusters will not overlap, and the outliers will be outside of the clusters.

Additional examples can be found in [DataSets](/datasets)

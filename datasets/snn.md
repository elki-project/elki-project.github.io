---
layout: page
title: Synthetic Data for Shared-Nearest-Neighbors
short: SNN Data
parent: datasets
---

{% raw %}
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Dataset",
  "name" : "Synthetic Data for Shared-Nearest-Neighbors",
  "description" : "Synthetic data set in up to 640 dimensions that exhibits typical characteristics of the 'curse of dimensionality' (i.e., distance concentration), but also variants where the data becomes more separable with increasing dimensionality because of the signal-to-noise ratio.",
  "author" : {
    "@type" : "Person",
    "givenName" : "Erich",
    "familyName" : "Schubert",
    "affiliation" : { "@id" : "https://www.tu-dortmund.de/" }
  },
  "isAccessibleForFree" : true,
  "keywords" : ["high-dimensional", "synthetic", "cluster analysis", "clustering"],
  "license" : "http://creativecommons.org/licenses/by/4.0/"
}
</script>
{% endraw %}

Synthetic Data for Shared-Nearest-Neighbors
===========================================

These data sets were originally created for the publication:

> *M. E. Houle, H.-P. Kriegel, P. Kröger, E. Schubert, A. Zimek*\\
> **[Can Shared-Neighbor Distances Defeat the Curse of Dimensionality?](https://doi.org/10.1007/978-3-642-13818-8_34)**\\
> In Proceedings of the 22nd International Conference on Scientific and Statistical Database Management (SSDBM), Heidelberg, Germany, 2010.

<table>
<tr><th>Variant</th><th colspan="7">size</th></tr>
<tr>
<td><b>all-relevant</b></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/10d.csv.gz">10d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/20d.csv.gz">20d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/40d.csv.gz">40d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/80d.csv.gz">80d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/160d.csv.gz">160d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/320d.csv.gz">320d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/640d.csv.gz">640d</a></td>
</tr>
<tr>
<td><b>10-relevant</b></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/10d.csv.gz">10d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/20d.csv.gz">20d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/40d.csv.gz">40d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/80d.csv.gz">80d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/160d.csv.gz">160d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/320d.csv.gz">320d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-relevant/640d.csv.gz">640d</a></td>
</tr>
<tr>
<td><b>cyc-relevant</b></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/10d.csv.gz">10d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/20d.csv.gz">20d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/40d.csv.gz">40d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/80d.csv.gz">80d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/160d.csv.gz">160d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/320d.csv.gz">320d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/640d.csv.gz">640d</a></td>
</tr>
<tr>
<td><b>half-relevant</b></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/10d.csv.gz">10d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/20d.csv.gz">20d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/40d.csv.gz">40d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/80d.csv.gz">80d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/160d.csv.gz">160d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/320d.csv.gz">320d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/640d.csv.gz">640d</a></td>
</tr>
<tr>
<td><b>all-dependent</b></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/10d.csv.gz">10d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/20d.csv.gz">20d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/40d.csv.gz">40d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/80d.csv.gz">80d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/160d.csv.gz">160d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/320d.csv.gz">320d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/all-dependent/640d.csv.gz">640d</a></td>
</tr>
<tr>
<td><b>10-dependent</b></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/10d.csv.gz">10d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/20d.csv.gz">20d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/40d.csv.gz">40d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/80d.csv.gz">80d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/160d.csv.gz">160d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/320d.csv.gz">320d</a></td>
<td><a href="http://elki.dbs.ifi.lmu.de/datasets/snn/10-dependent/640d.csv.gz">640d</a></td>
</tr>
</table>

All sizes are derived from the 640 dimensional version by keeping the first n dimensions.

Data Generator Specifications
-----------------------------

These data sets were generated with the [data generator](generator) included in ELKI
(although using an older version of ELKI, that for example used a different random number generator),
using the following XML data specifications:

[all-relevant](http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/spec-640d.xml)
[cyc-relevant](http://elki.dbs.ifi.lmu.de/datasets/snn/cyc-relevant/spec-640d.xml)
[half-relevant](http://elki.dbs.ifi.lmu.de/datasets/snn/half-relevant/spec-640d.xml)

Then only the first 10,20,... dimensions were retained to produce the subsets of each dimensionality.

Simplified versions of the all-relevant data set:
-------------------------------------------------

The following versions (not used in the article) of the all-relevant data set
have been simplified by scaling the cluster standard deviations, thus making
the clusters easier separable and easier to index: 

Rescaled standard deviations of all-relevant (for use with the ELKI [data generator](generator)):
[0.75](http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/spec-640d-simplified-0.75.xml)
[0.50](http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/spec-640d-simplified-0.50.xml)
[0.25](http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/spec-640d-simplified-0.25.xml)
[0.10](http://elki.dbs.ifi.lmu.de/datasets/snn/all-relevant/spec-640d-simplified-0.10.xml)


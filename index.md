---
layout: page
title: ELKI Data Mining Framework
---

{% comment %} The spans below are to force a nicer line breaking {% endcomment %}
ELKI: Environment for Developing <span style="display:inline-block">KDD-Applications</span> <span style="display:inline-block">Supported by Index-Structures</span>
===============================================================================

<div class="elklogo"><a href="/team"><img src="img/elki-fulllogo-400.png" class="elklogo" alt="ELKI Logo"></a></div>

Quick Summary
-------------

ELKI is an open source (AGPLv3) data mining software written in Java. The focus of ELKI is research in algorithms, with an emphasis on unsupervised methods in [cluster analysis](/howto/clustering) and outlier detection.
In order to achieve high performance and scalability, ELKI offers data index structures such as the R\*-tree that can provide major performance gains.
ELKI is designed to be easy to extend for researchers and students in this domain, and welcomes contributions of additional methods.
ELKI aims at providing a large collection of highly parameterizable algorithms, in order to allow easy and fair evaluation and benchmarking of algorithms.

Background
----------

Data mining research leads to many algorithms for similar tasks.\\
A fair and useful comparison of these algorithms is difficult due to several reasons:

* Implementations of comparison partners are not at hand.
* If implementations of different authors are provided, an evaluation in terms of efficiency is biased to evaluate the efforts of different authors in efficient programming instead of evaluating algorithmic merits.

On the other hand, efficient data management tools like index-structures can show considerable impact on data mining tasks and are therefore useful for a broad variety of algorithms.

In ELKI, data mining algorithms and data management tasks are separated and allow for an independent evaluation. This separation makes ELKI unique among data mining frameworks like Weka or Rapidminer and frameworks for index structures like GiST. At the same time, ELKI is open to arbitrary data types, distance or similarity measures, or file formats. The fundamental approach is the independence of file parsers or database connections, data types, distances, distance functions, and data mining algorithms. Helper classes, e.g. for algebraic or analytic computations are available for all algorithms on equal terms.

With the development and publication of ELKI, we humbly hope to serve the data mining and database research community beneficially. The framework is **free** for scientific usage ("free" as in "open source", see [ELKI license](/license) for details). In case of application of ELKI in scientific publications, we would appreciate credit in form of a [citation](/publications) of the appropriate publication (see [ELKI publications](/publications)), that is, the publication related to the release of ELKI you were using.

The people behind ELKI are documented on the [team page](/team).

The ELKI web page: Tutorials, HowTos, Documentation
---------------------------------------------------

A [basic tutorial example](/tutorial/#basic-usage-example) will show you how to run k-Means and EM clustering with ELKI.

Further documentation can be found int the [HowTo](/howto) documents, [Examples](/examples), [Tutorials](/tutorial), and [FAQ](/faq) to help with difficult configuration scenarios and beginning with ELKI development.

The most important documentation pages are: [Tutorial](/tutorial), [JavaDoc](/dev/javadoc), [FAQ](/faq), [InputFormat](/howto/inputformat), [DataTypes](/datatypes), [DistanceFunctions](/algorithms/distances), [DataSets](/datasets), [Development](/dev), [Parameterization](/dev/parameterization), [Visualization](/algorithms/visualization), [Benchmarking](/benchmarking), and the list of [Algorithms](/algorithms) and [publications implemented in ELKI](/related).

Getting ELKI: Download and Citation Policy
------------------------------------------

You can download ELKI including source code on the [releases](/releases) page.
ELKI uses the AGPLv3 [license](/license), a well-known open source license.

ELKI is available on [GitHub](https://github.com/elki-project/elki) and [Maven](https://search.maven.org/#artifactdetails%7Cde.lmu.ifi.dbs.elki%7Celki%7C0.7.5%7Cjar).
You can [clone an example project](https://github.com/elki-project/example-elki-project) to get started.

Gradle:
{% highlight gradle %}
dependencies {
    compile group: 'de.lmu.ifi.dbs.elki', name: 'elki', version:'0.7.5'
}
{% endhighlight %}

Maven:
{% highlight xml %}
<!-- https://mvnrepository.com/artifact/de.lmu.ifi.dbs.elki/elki -->
<dependency>
    <groupId>de.lmu.ifi.dbs.elki</groupId>
    <artifactId>elki</artifactId>
    <version>0.7.5</version>
</dependency>
{% endhighlight %}

There is a list of [publications](/publications) that accompany the ELKI releases. When using ELKI in your scientific work, you should cite the publication corresponding to the ELKI release you are using, to give credit. This also helps to improve the repeatability of your experiments. We would also appreciate if you contributed your algorithm to ELKI to allow others to reproduce your results and compare with your algorithm (which in turn will likely get you citations). We try to document every publication used for implementing ELKI: the page [related publications](/related) lists over 220 publications that we used for implementing ELKI, and is generated from annotations in the source code. Also we list publications that used or cited ELKI, see [references](/references).

Compiling ELKI
--------------
ELKI is compiled using Maven and Python. The [compilation process is explained here](/dev/compiling).

Information on ELKI APIs and coding styles is collected at the [development starting page](/dev). Please contribute!

Efficiency Benchmarking with ELKI
---------------------------------

ELKI is fast (see [some of our benchmark results](/benchmarking)) but the focus lies on a *broad coverage of algorithms and variations*. We discourage cross-platform benchmarking, because it is easy to produce misleading results by comparing apples and oranges. For fair comparability, you should implement all algorithms within ELKI, and use the same APIs. We have also observed Java JDK versions have a large impact on the runtime performance. To make your results reproducible, please [cite](/publications) the publication of the version, which you have been using.

Bug Reports and Contact
-----------------------

You can [browse the open bug reports and create new issues](https://github.com/elki-project/elki/issues).

We also appreciate any comments, suggestions and code contributions.\\
You can contact the core development team by e-mail: <span class="maillink">elki () dbs ifi lmu de</span>

You can also subscribe to the user mailing list, by sending an email to
<span class="maillink">elki-user-request () lists ifi lmu de</span>
with the subject "subscribe" or "unsubscribe"
([Mailman manual](https://www.gnu.org/software/mailman/mailman-member/node10.html)).
You may use this list to exchange questions and ideas among other users or to
get announcements (e.g., new releases, major changes) by the ELKI team.

Our primary "support" medium is this *community* mailing list. We appreciate if you share experiences and also success stories there that might help other users. This project makes a lot of progress, and information can get outdated rather quickly. If you prefer a web forum, you can *try* asking at [StackOverflow](http://stackoverflow.com/questions/tagged/elki), but you should understand that this is a general (and third-party operated) *programming* community; questions just on how to use it may be considered off-topic there.

Design Goals
------------

-   **Extensibility:** ELKI has a very modular design. We want to allow arbitrary combinations of data types, distance functions, algorithms, input formats, index structures and evaluations methods
-   **Contributions:** ELKI grows only as fast as people contribute. By having a modular design that allows small contributions such as single distance functions and single algorithms, we can have students and external contributors participate in the progress of ELKI
-   **Completeness:** for an exhaustive comparison of methods, we aim at covering as much published and credited work as we can
-   **Fairness:** It is easy to do an unfair comparison by badly implementing a competitor. We try to implement every method as good as we can, and by publishing the source code allow for external improvements. We try to add all proposed improvements, such as index structures for faster range and kNN queries
-   **Performance:** the modular architecture of ELKI allows optimized versions of algorithms and index structures for acceleration
-   **Development Progress:** ELKI is changing with every release. To accomodate new features and enhance performance, API breakages are unavoidable. We hope to get a stable API with the 1.0 release, but we are not there yet.

<div style="float:right; clear:right"><span id="forkongithub"><a href="https://github.com/elki-project/elki">Fork me on GitHub</a></span></div>

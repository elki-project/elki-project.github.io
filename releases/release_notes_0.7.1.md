---
layout: page
title: Releases%2FReleaseNotes0.7.1
---


ELKI 0.7.1 release notes
========================

ELKI 0.7.1 is available on Maven:

    #!xml
    <!-- ELKI core, without visualization -->
    <dependency>
        <groupId>de.lmu.ifi.dbs.elki</groupId>
        <artifactId>elki</artifactId>
        <version>0.7.1</version>
    </dependency>
    <!-- You only need this dependency if you need visualization -->
    <dependency>
        <groupId>de.lmu.ifi.dbs.elki</groupId>
        <artifactId>elki-batik-visualization</artifactId>
        <version>0.7.1</version>
    </dependency>

Please clone https://github.com/elki-project/example-elki-project for a minimal project example.

Algorithm additions: \* [GriDBSCAN](./GriDBSCAN): DBSCAN using grid partitioning (Minkowski distances only) \* Compare-Means and Sort-Means k-means variations (much faster than traditional k-means) \* Visualization of dendrograms.

Important bug fixes: \* Classes with no package ("default package") would cause errors. \* The fast power function implementation was sometimes returning incorrect results. \* Random sampling was sometimes not sampling from the full data set.

UI improvements: \* The file input source will now automatically choose the Arff parser for .arff files. \* [MiniGUI](./MiniGUI) now allows choosing other applications. \* [MiniGUI](./MiniGUI) now displays the command line in a separate field. \* [MiniGUI](./MiniGUI) displays an error message, if an incorrect classpath or JAyatana (on Ubuntu) is detected. \* Export to png now works, we added a work-around for an open Batik bug.

To enable PDF and [PostScript](./PostScript) export, you need to add [Apache FOP](https://xmlgraphics.apache.org/fop/) with all dependencies.

(Nevertheless, we recommend using SVG and Inkscape).

Smaller changes: \* Many smaller bug fixes. \* C-Index for cluster evaluation now can process larger data sets. \* OPTICS output of undefined reachability fixed. \* External distance matrixes are easier to use and perform additional checks. \* Precomputed distance matrixes can answer range and kNN queries. \* Voronoi visualization can be switched in the menu now. \* Improved backwards command line compatibility with additional aliases. \* Added generated `@since` annotations in [JavaDoc](./JavaDoc). \* Many new unit tests, renamed to the Java conventions. \* Low-level reading of service files, to have faster startup.

See also [ReleaseNotes0.7](./ReleaseNotes0.7) for additional release notes of ELKI 0.7.0

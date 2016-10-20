---
layout: page
title: Release Notes 0.4
parent: releases
navigation: -40
---


Release Notes for ELKI 0.4
==========================

Release 0.4 marks another big milestone in ELKI development, but also highlights why we still do not use a 1.x version number: things still change at a large scale, so expect to be code that was written for ELKI 0.3 to require a lot of work to work with 0.4. The scope of ELKI is still widening, and many of the APIs need to grow with these requirements. For example to support specialized spatial algorithm, the database layer now needs to have solid support for multi-relational operation. In order to have the database layer fully exploit index structures, the query API needs to support features that you might know from traditional databases: optimizer hints and "prepared queries".

Release goals
-------------

Main goals for this release were:

* Multi-index support\\
to allow for example comparison of indexes or combined indexes
* Multi-relation support\\
to allow the development of multi-relational algorithms such as spatial outlier detection methods
* Multi-output\\
to have output to various sources such as text files, visualization, geo applications and web browser interfaces
* Geo mining functionality
* Better Java API\\
so far, users were expected to use the command line and GUI interfaces. However, there has been a lot of interest in using the implementation directly from Java. This release tries to allow having both a traditional Java API as well as the information needed for user-assisted parameterization and dynamic UI.

Changes
-------

Performance:

* Specializations to doubles led to an approximately 1.5x speedup compared to the previous release for many typical situations. This can be attributed to the cost of boxing and unboxing and the this way increased memory management cost, and emphasized why you shouldn't be [Benchmarking](/benchmarking) ELKI against a non-generalized implementation.

Global changes:

* Indexing: Multi-index support - databases can now have more than one index
* Database: multi-relational database API
* Database: [Database query objects](/dev/query) (base for a query optimization layer)
* [Parameterization](/dev/parameterization): Improved Java API by moving parameterization into helper classes
* Algorithms: [TypeInformation](/dev/typeinformation) to match data sources and input type restrictions
* Generics: Many java generics became obsolete by the multi-relational database change

Package level changes:

* Preprocessors converted to just another type of index
* Normalizations and Meta-Parsers become Input Filters
* Parsers, Filters and Databases exchange data using [ObjectBundle](/dev/object_bundle)s
* Some functionality of DatabaseConnection (such as class label index) moved to filters
* Persistence: Cache has been converted to a nested PageFile, allowing for arbitrary combinations, including multi-level caching.
* Indexing: Major refactoring to split the tree structure from the index use of the tree.

Extensions added:

* Score unification:\\
  H.-P. Kriegel, P. Kröger, E. Schubert, A. Zimek:\\
  *Interpreting and Unifying Outlier Scores*.\\
  In: Proc. 11th SIAM International Conference on Data Mining (SDM), Mesa, AZ, 2011\\
  [preprint](http://www.dbs.ifi.lmu.de/~zimek/publications/SDM2011/SDM11-outlier-preprint.pdf)
* Spatial outlier detection:\\
  Elke Achtert, Ahmed Hettab, Hans-Peter Kriegel, Erich Schubert, Arthur Zimek:\\
  *Spatial Outlier Detection: Data, Algorithms, Visualizations*.\\
  12th International Symposium on Spatial and Temporal Databases (SSTD), Minneapolis, MN, 2011
* Additional outlier detection algorithms
* Many new visualizations
* Ad-hoc layouter for visualizations



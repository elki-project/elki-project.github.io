---
layout: page
title: ELKI Database Query API
parent: dev
navigation: -60
---

Database Query API
==================

**Compatibility note: this documentation applies to ELKI version 0.4**

Introduction
------------

Database queries are a key concept in ELKI that allows algorithms to benefit from available indexes and will in the future be used for additional optimizations. For example, a separate thread could be spawned to precompute values according to some plan, or appropriate indexes could be added automatically.

The query API works much like a "prepared statement" as you might know it from SQL. Except that instead of providing a string SQL statement with placeholders, you request a particular Java API. Of course when using a spatial SQL database as backend, a query could indeed be translated into a SQL Prepared Statement!

As there might be expensive optimizations happening, you should try to prepare a statement only rarely!

Database queries
----------------

Current queries include:

* Data queries: in fact, when requesting a relation you prepare a statement akin to\\
  `SELECT column FROM database WHERE id = ?`
* Distance queries: these could be paraphrased as\\
   `SELECT distance(a,b) FROM relation WHERE a.id # ? AND b.id ?`
* Similarity queries are essentially the same as distance queries
* k nearest neighbor (kNN) queries:\\
  `SELECT id FROM neighbors(?, relation, distance, kmax) LIMIT BY ?`
* radius range queries:\\
  `SELECT a.id FROM relation WHERE distance(a, ?) < ?`

Note that the SQL paraphrases are just for understanding the queries; there usually is no SQL database available.

Optimization
------------

There are a number of "hints" to give to the database layers to optimize. Please consider which ones are appropriate for your algorithm! Note: this list is not exhaustive!

-   HEAVY\_USE flag: when doing more than once query per object, the use of caches or indexes is appropriate. Setting this flag will hint to future versions of the database layer to automatically add a cache or index!
-   Maximum k needed for kNN queries: Many indexes will only support certain values of k. If possible, provide the maximum value you will use.
-   Maximum range needed for range queries: Similarly, range indexes (e.g. precomputed) will often be only appropriate for a certain value range
-   Bulk operation: Not all indexes support bulk operation - or can only be used in bulk mode. By indicating that you plan to do a bulk query, you allow the database to choose an optimized strategy.
-   Single use: Sometimes you also know that you are only going to use this rarely - and thus expensive optimizations should be avoided.


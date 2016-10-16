---
layout: page
title: Optimizing ELKI Performance
---


Optimizing ELKI Performance
===========================

The generic and modular nature of ELKI comes at a certain cost. While Java does a pretty good job at optimizing at runtime, there are some points where we do incurr costs. Here are some points to consider:

Boxing and Unboxing
-------------------

A known problem with Java for statistical computing is the cost of unboxing and boxing. While most people associate this with converting native types such as `int` to their object representation `Integer`, we do have new types of boxing/unboxing in ELKI. For example for a [FeatureVector](/releases/current/doc/de/lmu/ifi/dbs/elki/data/FeatureVector.html), the [getValue](./releases/current/doc/de/lmu/ifi/dbs/elki/data/FeatureVector.html) method will often have to do boxing. A [DoubleVector](./releases/current/doc/de/lmu/ifi/dbs/elki/data/DoubleVector.html) internally uses a native `double[]` array to store the data, the `getValue()` method has to return an object - so whenever this method is called, a new `Double` may be produced (only in some cases the Hotspot VM seems to be able to optimize this away).

### How to optimize:

When developing algorithms on *numerical* vector fields, it is advisable to use the [NumberVector.doubleValue](/releases/current/doc/de/lmu/ifi/dbs/elki/data/NumberVector.html) method instead, which passes native data on the stack.

Large quantity objects
----------------------

This essentially affects *any small object occurring in large quantities*. While in C you often only store the raw data, Java needs to store a full Java object, including type information and locking capabilities. This cost in Java commonly occurs when using maps with numerical types, such as `Map<Integer, Double>` or `Set<Integer>`. In ELKI, this occurs a lot when mapping database objects to associated values. You should avoid using `Map<DBID, ?>` since this usually means producing trivial DBID objects.

### How to optimize:

The class [DBIDUtil](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDUtil.html) allows you to generate arrays, hash sets, tree sets, pairs and similar types for DBIDs. The DBIDFactory becomes the central place to optimize DBID related data structures. While we currently do not yet have an optimized implementation for all of these, this will be added in future versions.

In order to replace a `Map<DBID, ?>` construct, use the [DataStoreUtil](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/DataStoreUtil.html) API. The data store manager then is the central place for optimization. It will in the future be extended with on-disk storage fuctionality to allow processing of larger data sets as well as low-level optimizations for more efficiently storing data by their associated DBID.

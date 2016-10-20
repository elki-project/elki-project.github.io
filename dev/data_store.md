---
layout: page
title: DataStore
parent: dev
navigation: -80
---


DataStore API
=============

The [DataStore](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/DataStore.html) API was created with two primary goals in mind:

* Memory- and performance-optimized storage to avoid Java boxing/unboxing cost
* Increased type safety to avoid programming errors
* (optional, not yet implemented) support for on-disk operation for large datasets

Note: the current API is not *automatically* synchronized. This is intentional, as data stores are also to be used local, when there may be no need for synchronization.

Again we have a number of interfaces to consider:

* [DataStore](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/DataStore.html) read-only, general
* [WritableDataStore](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/WritableDataStore.html) writable, general
* [DoubleDataStore](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/DoubleDataStore.html) read-only, double-optimized (ELKI 0.5)
* [WritableDoubleDataStore](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/WritableDoubleDataStore.html) writable, double-optimized (ELKI 0.5)

Implementations (as of ELKI 0.5) include plain array-storage (for static, continuous range DBIDs), GNU Trove optimized HashMaps (using significantly less memory) and regular Java HashMaps (as fallback).

Factory
-------

Again we follow the common factory pattern for creating data stores. This allows for better optimization.

A real example from [LOF](/releases/current/doc/de/lmu/ifi/dbs/elki/algorithm/outlier/lof/LOF.html) (as in ELKI 0.5):

{% highlight java %}
WritableDoubleDataStore vals = DataStoreUtil.makeDoubleStorage(ids,
  DataStoreFactory.HINT_HOT | DataStoreFactory.HINT_TEMP);
{% endhighlight %}

This creates a data store optimized for the given set of DBIDs (if the set is continuous and static, the optimizer may choose to use an array storage!), optimized for storing double values (with accessors and setters that avoid boxing and unboxing cost of regular Java HashMaps) and indicates to the optimizer that frequent random access is needed ("`HINT_HOT`") and the data will be discarded at the end of the algorithm ("`HINT_TEMP`") thus is a candidate for keeping in-memory.

Optimization
------------

Storing doubles can come at a surprisingly high cost. A Java `HashMap<Integer, Double>` on a 32-bit architecture is supposed to use about 16 (Integer object) + 16 (Double object) + 32 bytes (Map.Entry) \# 64 bytes *per stored value*, not including the actual Hashmap. The GNU trove low-level hashmaps can store this using only the required 4 + 8 12 bytes, at the cost of using a slightly larger table for efficiency, which should be less than 4 bytes extra for each entry. So roughly speaking, we can fit four times as much data into memory - not including garbage collector overhead.

For static-range DBIDs, we can save storing the keys and need no extra overhead - we are then close to the raw 8 bytes per double by using a raw array.

To benefit from this, you should use the [WritableDoubleDataStore](/releases/current/doc/de/lmu/ifi/dbs/elki/database/datastore/WritableDoubleDataStore.html) for storing Double values, and always use the optimized getters and setters `doubleValue(id)` and `putDouble(id, value)` to avoid creating boxed Double objects. (Life would be a bit easier here if we would be using C++).

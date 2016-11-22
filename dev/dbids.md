---
layout: page
title: DBIDs
parent: dev
navigation: -90
---


Database IDs
============

[DBID](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBID.html) is the ELKI-internal identifier of a database object.

Note that this is *deliberately* only exposed as an interface:

* the ID might be coming from a backing RDBMS
* it makes code more readable, as it explicitly is an object identifier
* avoiding errors: an `int` can mean anything
* optimizations

Just as important as managing single objects is the management of collections. ELKI comes with a large set of DBID optimized collections that *perform better than the generic native Java collections*. So use these collections where possible.

**Never** use a `Map<DBIDRef, ?>` or similar (references may change, breaking your data structure). Avoid `DBIDUtil.deref`, too - usually it means you are wasting a lot of memory and thus performance, and have overlooked a better data model using the optimized data structures in ELKI!
{: class="box-warn" }


DBIDs - optimized collections for DBIDs
---------------------------------------

[DBIDs](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDs.html) is the most general collection of DBIDs. In fact, even a single DBID implements this interface (containing itself only).

[ModifiableDBIDs](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/ModifiableDBIDs.html) is the base of modifiable collections (there also is [StaticDBIDs](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/StaticDBIDs.html), which however is much less often used). In contrast to the Java collections API which already specifies `add` and `remove` in the top interface, these are in ELKI only available for modifiable DBIDs.

Creating a new collection is fairly easy, using the appropriate factory methods from [DBIDUtil](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDUtil.html):

{% highlight java %}
ArrayModifiableDBIDs array = DBIDUtil.newArray();
HashSetDBIDs hashset = DBIDUtil.newHashSet();
{% endhighlight %}

[DBIDUtil](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDUtil.html) is your central utility class for common DBID operations: `union`, `intersection`, `difference`, `randomSample`, ... are all implemented efficiently.

Benefits of the specialized DBIDs interfaces:

* Optimized storage (often ~75% less memory)
* Optimized operations
* Clearer cut interfaces (modifiable, data organization)
* Less error prone by better compile time type checking (cf. [Collection\#remove(Object)](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#remove-java.lang.Object-) which allows you to remove objects of arbitrary type)

**Always** prefer a DBIDs object over a traditional Java collection!
{: class="box-recommend" }

DBID references
---------------

Some classes - including iterators below, and some pairs containing a single DBID - implement the [de.lmu.ifi.dbs.elki.database.ids.DBIDRef](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDRef.html) interface.

`DBIDRef` objects behave mostly like a `DBID`, but they may be only temporarily valid (e.g. iterators).
{: class="box-recommend" }

If possible, try to use `DBIDRef` directly, as it requires less memory management than `DBID`.

Never use `DBIDRef` as keys in Java collections (e.g. `Map<DBIDRef, ?>`), as these APIs assume they are unmodifiable. Using them with ELKI data storage classes however is safe, as they will be internally dereferenced.
{: class="box-warn" }

Iterators
---------

[DBIDIter](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDIter.html) is not the standard Java iterator. It does not have `remove` and its semantics are closer to that of a C++ iterator. You can use it as follows:

{% highlight java %}
for (DBIDIter iter = ids.iter(); iter.valid(); iter.advance()) {
  DBID id = iter.getDBID();
}
{% endhighlight %}

Note that many APIs will accept the `DBIDIter` itself (as it is a `DBIDRef`), so you don't need to materialize the `id` object!

`DBIDIter` allow you to inexpensively iterate over a set.
{: class="box-recommend" }

Maps - associated storage
-------------------------

ELKI also offers an optimized storage API for associating values to DBIDs. Regular Java HashMaps can waste a lot of memory (remember: they use an "Entry" object each and require boxing/unboxing of primitive types - they need 6x as much memory for int-double maps). For static databases, ELKI will only store the doubles, then requiring even less memory!

See [DataStore](/dev/data_store) for further information on the dynamic storage API.

------------------------------------------------------------------------

Tips & Tricks
-------------

- **Mapping DBIDs to row numbers**:

  Static databases will assign a continuous [DBIDRange](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDRange.html) to each object. The method `range.getOffset(dbidref)` can be used to map a DBID reference back to the offset within the data set (i.e. row number, starting with 0).

- **Fixed DBIDs for multiple runs** (deprecated):

  People are often surprised that running the same task in ELKI twice may give different output, and in particular the objects are given different DBIDs. By default, ELKI will just use DBIDs consecutively. So if your first task used 100 objects, the second run will use objects 100-200. The reason is the growing support for *streaming* operation where this continuous allocation is desired. There is a simple workaround if you desire the fixed IDs behaviour: set `-dbc.filter` to contain [FixedDBIDsFilter](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/FixedDBIDsFilter.html).

- **Collections**:

  Use [DBIDUtil](/releases/current/doc/de/lmu/ifi/dbs/elki/database/ids/DBIDUtil.html), it has a lot of things.

  - Never use Java collections; never combine Java collections and DBIDRef.
  - Avoid `DBIDUtil.deref`. Most of the time, you are wasting memory, time, and have overlooked an appropriate data structure provided by ELKI.

------------------------------------------------------------------------

History: why not integers
-------------------------

In early versions of ELKI, objects were identified by an Integer. While this worked, it caused both *programming errors*, *performance* and *memory* issues. Programming errors, because integers are everywhere, and not every integer is a sensible object ID. You can compute the difference of two objects ids, and sometimes this will be another object ID. Surprisingly often it will somewhat work, and then suddenly start failing. An explicit type `DBID` prevents many such errors.

Performance issues, because there may be many objects, and Java performance suffers a lot when boxing and unboxing primitive objects. Memory issues, because `Integer` objects occupy 16 bytes, instead of the 4 bytes of a primitive `int`; `Double` occupy 24 bytes as opposed to 8 (measured using Java instrumentation). In a `Map<Integer, Double>`, every `Entry` adds a 32 bytes object. So storing a simple object-to-double relationship with Java standard classes needs 72+ bytes per entry, with 12 bytes of content. 6 times as much memory as actually needed - and all the Garbage Collection overhead needed to manage all these objects.

This ultimately lead to the use of GNU Trove primitive collections, however transparently wrapped in an explicitly typed API.

The plans
---------

At some point, someone will want to use ELKI with *huge* databases. Say, more than 4 billion objects. These could for example be a data stream, so they actually will never be in memory at the same time, yet they should have a unique identifier. For this, it should be possible to replace the DBID implementation with a LongDBID implementation easily. So we chose to use the factory pattern for DBIDs, and meant to not expose the integer numbers at all.

DBIDRef, an interface for objects referencing a DBID, but not necessarily being a DBID itself, is expected to further improve performance by requiring less materializations of DBID objects.

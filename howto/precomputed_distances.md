---
layout: page
title: Use Precomputed Distances
short: Precomputed Distances
parent: howto
navigation: 50
---


How to use precomputed distances in ELKI
========================================

Version information: Updated for ELKI 0.6.5~20141030
{: class="versioninfo" }

In many situations, computing the object distances will be a major part of the algorithm runtimes. If you have enough disk space, it may be desirable to compute the distances only once and store them on the harddisk.

ELKI comes with a number of classes related to precomputed distances:

- [CacheDoubleDistanceInOnDiskMatrix](/releases/current/doc/de/lmu/ifi/dbs/elki/application/cache/CacheDoubleDistanceInOnDiskMatrix.html)
- [CacheFloatDistanceInOnDiskMatrix](/releases/current/doc/de/lmu/ifi/dbs/elki/application/cache/CacheFloatDistanceInOnDiskMatrix.html)
- [DiskCacheBasedDoubleDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DiskCacheBasedDoubleDistanceFunction.html)
- [DiskCacheBasedFloatDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DiskCacheBasedFloatDistanceFunction.html)
- [FileBasedSparseDoubleDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedSparseDoubleDistanceFunction.html)
- [FileBasedSparseFloatDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedSparseFloatDistanceFunction.html)

The first two are "applications", i.e. standalone tasks that do nothing but precompute the distance matrix and write it to disk, using a *binary* file format ("DiskCache") The last four are distance functions that access/load different input formats. The "FileBasedSparse" classes use a simpler, but much less efficient, ascii format.

Precomputing a distance matrix
------------------------------

A typical command line for precomputing a distance matrix will look like this:

<pre>
java -cp elki.jar
de.lmu.ifi.dbs.elki.application.cache.CacheDoubleDistanceInOnDiskMatrix
-dbc.in inputfile.ascii
-dbc.filter FixedDBIDsFilter -dbc.startid 0
-loader.diskcache matrix.dat
-loader.distance CosineDistanceFunction
</pre>

Using the [FixedDBIDsFilter](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/FixedDBIDsFilter.html) is only necessary if you need to offset values. However, I recommend using this filter *whenever* using precomputed distances to avoid indexing issues.

Note that you will need on the order of `n * n / 2 * 8` bytes for a matrix storing doubles, and half of that for float distances. As a rule of thumb, 32000 objects with double precision will use about 4 GB (which may be an operating system limit!)

Using a precomputed (binary) distance matrix
--------------------------------------------

To use the precomputed distance matrix, set the following parameters

<pre>
-dbc.filter FixedDBIDsFilter -dbc.startid 0
-algorithm.distancefunction external.DiskCacheBasedDoubleDistanceFunction
-distance.matrix matrix.dat
</pre>

Note that you *really* should set the [FixedDBIDsFilter](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/FixedDBIDsFilter.html), in particular when using the MiniGUI. Otherwise, a second run will use different object IDs and will likely produce errors because the matrix does not store the desired distances!

You need to choose the appropriate class for the data precision you generated the matrix with: Double for double precision matrixes, Float for float precision matrixes. It may be possible to use 4 GB matrixes on systems with less than 4 GB of memory, as the matrixes are mapped into memory by the operating system, instead of using physical memory.

Using an external distance
--------------------------

The binary matrix format used by ELKI (actually an upper triangle matrix) is not meant to be written by third party programs. You can use the ELKI classes to produce a compatible matrix, or implement a custom distance function. The simplest way of getting external distance information into ELKI however is to use a **text based distance matrix**.

This will however need more memory than the binary format above, which can be mapped directly from the file system, thus this approach is really meant for using *external* distance information.

- [FileBasedSparseDoubleDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedSparseDoubleDistanceFunction.html)
- [FileBasedSparseFloatDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/FileBasedSparseFloatDistanceFunction.html)

require a different amount of *Java memory*, while they use the same input format (this is different from the distance matrixes above, which actually use a different file format).

The default file format is ascii text, three columns, where the first two columns store the object IDs, and the third column the distance. The line

<pre>
0 1 0.12345
</pre>

thus specifies that the objects 0 and 1 have a distance of 0.12345. Details can be found in the class [AsciiDistanceParser](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/AsciiDistanceParser.html), or you can provide your own implementation of the [DistanceParser](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/external/DistanceParser.html) interface.

Note that the current implementation requires you to also specify the distance from an object to itself.

In order to specify the exact meaning of the object numbers, you need to use the [FixedDBIDsFilter](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/FixedDBIDsFilter.html)!

Here are the key parameters needed for using a text based distance matrix:

<pre>
-dbc.filter FixedDBIDsFilter -dbc.startid 0
-algorithm.distancefunction external.FileBasedSparseDoubleDistanceFunction
-distance.matrix /tmp/simple.ascii
</pre>

Using without primary data
--------------------------

Even when reading an external distance, ELKI will still need to get *regular* input data. In particular when just using this to precompute distances, this makes perfect sense. However, sometimes you don't need this. In order to *not* load the original data, you can use the fake data source

<pre>
-dbc DBIDRangeDatabaseConnection -idgen.count 100
</pre>

where you only need to specify the number of objects you have in your distance matrix.

Furthermore, the *visualization* cannot work. Use `-resulthandler ResultWriter` to output the results into files, or implement a custom result handler for your preferred output format.

---
layout: page
title: ELKI Input Format
short: Input Format
parent: howto
navigation: 10
---


ELKI Input Format
=================

Note that ELKI will automatically recognize GZip compressed input files and uncompress them on the fly. This can reduce load times for large files stored in Ascii formats (including .arff) significantly.

Default Input Format
--------------------

The input format depends on the parser you use.

The default parser is [NumberVectorLabelParser](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/parser/NumberVectorLabelParser.html), which essentially expects the format

    # comment
    1.23 4.56 7.89 label1 label2
    2.34 5.67 8.90123 label3 label4
    # another comment

which is a format also understood by [GNUPlot](http://gnuplot.sf.net/). Lines starting with a `#` are considered comments, records are separated by newlines, columns are separated by whitespace. Any numeric column is considered data, other columns are used as labels.

All records should have the same number of numerical columns! Otherwise, the resulting relation will be unusable with many algorithms, that require a fixed dimensionality.

The separator character(s) can be set e.g. using `-parser.colsep ","` with the default being whitespace, comma or semicolon.

A more detailed description and *an example file* can be found in the package documentation of [de.lmu.ifi.dbs.elki.datasource.parser](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/parser/package-summary.html)

ARFF files
----------

Since ELKI 0.4.0~beta2, a simple [ArffParser](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/parser/ArffParser.html) is included. It does not yet include support for sparse vectors, since we want to avoid materializing them, and mixing dense and sparse vectors in relations is currently deliberately not allowed. We are however planning to at least have support for all-dense and all-sparse files soon. Additionally the ArffParser includes some code to automatically convert certain relations into the ELKI types of ExternalID and ClassLabel that are semantically stronger than regular labels.

LibSVM format
-------------

ELKI 0.6.5 can read files in libSVM format via [LibSVMFormatParser](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/parser/LibSVMFormatParser.html)

Custom input formats
--------------------

In many cases you will want to implement your own parser. ELKI is designed to be extended this way.

The main extension points are:

-   [de.lmu.ifi.dbs.elki.datasource.parser.AbstractStreamingParser](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/parser/AbstractStreamingParser.html) which can serve as a base class for reading data streams. The `tokenize` method may be useful for splitting individual lines.
-   [de.lmu.ifi.dbs.elki.datasource.parser.Parser](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/parser/Parser.html) the (non-streaming) API for custom parsers, which consists of a single method: `public [MultipleObjectsBundle](./MultipleObjectsBundle) parse([InputStream](./InputStream) in);`
-   [de.lmu.ifi.dbs.elki.datasource.AbstractDatabaseConnection](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/datasource/AbstractDatabaseConnection.html) an abstract base class for custom data sources (e.g. database connectors, that do not read from a single `InputStream`)


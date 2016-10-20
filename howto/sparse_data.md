---
layout: page
title: Sparse Data in ELKI
short: Sparse Data
parent: howto
navigation: 60
---


Sparse Data in ELKI
===================

While ELKI has some support for sparse data, not everything will work with it. Many index structures such as R-Trees are known to not scale very well to high-dimensional data, and sparse data data is high-dimensional.

Loading sparse data
-------------------

While for dense vectors there is the common format of CSV files (or whitespace separated, as in Gnuplot), for sparse vectors there are multiple more or less compatible formats. You will have to choose the appropriate input format first (or write your own parser!)

- CSV with sparse vectors. The format understood by [SparseNumberVectorLabelParser](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/parser/SparseNumberVectorLabelParser.html) looks roughly like this:
  <pre>
  3 11 1.1 13 2.2 17 3.3 objlabel
  </pre>
  where `3` gives the number of non-zero attributes, then there are three pairs of format "`anum val`" containing attribute number and value. Finally, zero or more (optional) *non-numeric* labels.

- Named columns and text data. [TermFrequencyParser](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/parser/TermFrequencyParser.html) was written with text data in mind, but can of course be used for arbitrary data of the format
  <pre>
  att11 1.1 att13 2.2 att17 3.3 objlabel
  objlabel att11 1.1 att13 2.2 att17 3.3
  </pre>
  where attributes come in pairs of the format "`non-numeric numeric`" where the non-numeric part is the column identifier. Non-numeric words that are not followed by a number a considered object labels.

- ARFF files, defined by Weka, can have sparse vectors. The ELKI [ArffParser](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/parser/ArffParser.html) supports this.

Memory representation
---------------------

ELKI 0.5.0 includes two types of true sparse vectors, [SparseFloatVector](/releases/current/doc/de/lmu/ifi/dbs/elki/data/SparseFloatVector.html) and [SparseDoubleVector](/releases/current/doc/de/lmu/ifi/dbs/elki/data/SparseDoubleVector.html) that vary obvious in memory and precision. Further releases may also include different variants because of memory and performance differences. Some parsers can also produce bit vectors and dense vectors, if needed.

Data filtering
--------------

ELKI parsers try to operate streaming. As such, sparse vectors will vary in dimensionality, and not form a vector *field*. Some algorithms and distance functions expect all vectors to have the same dimensionality. The filter [SparseVectorFieldFilter](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/SparseVectorFieldFilter.html) will trivially set the maximum dimensionality by re-scanning the data set in memory.

For text data, a common normalization of data is TF-IDF. The filter [TFIDFNormalization](/releases/current/doc/de/lmu/ifi/dbs/elki/datasource/filter/normalization/TFIDFNormalization.html) will normalize TF vectors accordingly.

Distance functions
------------------

While most distance functions will accept any number vector *field*, there are a number of distance functions implemented that are optimized for sparse vectors and allow the dimensionality of the two vectors to vary. [SparseEuclideanDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/SparseEuclideanDistanceFunction.html) for example is faster for sparse vectors and does not have this restriction. We appreciate contributions of additional optimized implementations to ELKI!

Two views of sparse data
------------------------

Depending on the context, sparse vectors can be interpreted in two different ways that are equally reasonable.

- Missing attributes are 0. This is reasonable in the context of e.g. text frequency vectors, where missing words indeed do not occur in the article.
- Missing attributes are unknown. In a context of partial observations this occurs naturally, too. (Currently not supported by ELKI 0.5.0 distance functions)

If you want to have better control of the handling of missing attributes, you may consider to implement your own distance function with explicit handling for missing values.

---
layout: page
title: Object Bundles
---

Object Bundles
==============

**Compatibility note: this documentation applies to ELKI 0.4**

Object bundles in ELKI serve as an *exchange format* for objects in particular between the input layer, filters and the database layer. At some point, we also plan to use this for serialization using a kind of "stream bundle".

When using object bundles, you should understand the following principles:
 * Provide and use meta information: a bundle could contain arbitary data. Provide specific information of the data contained
 * It is an exchange format: when building bundles, **let go of the data afterwards** and be prepared that the receiver might convert or change the data as appropriate for him. **Do not keep references!**
 * Importing bundles may require expensive type matching or conversion. If possible, build a single bundle (`MultipleObjectsBundle`) for all objects, so the type matching only occurs once.
 * In general this is considered an *expensive* format (both memory and processing wise), that should not be overly used.

Examples
--------

A parser loads data from a file and builds a bundle. However, it also lets go of the data afterwards. One or more filters may successively be applied to the data and change it completely. When returing the data to the data loader, they however also let go of it. Finally when loading the data into a database, the records might be written to disk and be garbage collected.

---
layout: page
title: Data Type Information in ELKI
short: Type Information
parent: dev
navigation: -40
---

Type Information
================

**Compatibility note: this documentation applies to ELKI 0.4**

Type information in ELKI is used for run time type checking, automatically matching data sources, conversion and documentation purposes. For example, the UI might indicate that a chosen algorithm cannot operate on the dataset loaded, or even suggest a conversion filter.

The type information objects serve two purposes: they can either specify the data type *available* or the data type *requested*. Note that when implementing algorithms and distance functions, you will often be giving this type information in two places: in Java generics (for type checking by the Java compiler) and in form of implementing an interface method, which is dynamic and used for runtime type matching.

Type information classes
------------------------

The most simple case, just a particular Java type is required such as a double vector. While this works well for some types in particular such as a class label type. However, for example you cannot just compute the Euclidean distance for arbitrary number vectors: they also need to have the same dimensionality.

This is where `VectorFieldTypeInformation` comes into play: this type requires all instances in the relation to have the same dimensionality. Here an important difference between type requests and type providers come into play: the type information of a relation should always be able to give you the dimensionality; whereas a type request can also not know the dimensionality requested. For example, Euclidean distance can work on any dimensionality vector field, it just needs that all vectors have the same dimensionality. A distance function for the earth surface on the other hand might only allow 2 or 3 dimensions: latitude, longitude and an optional height.

Combined type informations
--------------------------

A special case is combined type informations. This only concerns type requests: it usually occurs when data is to be used by multiple modules. For example, an algorithm might have own restrictions on the data, but also rely on a distance function which brings its own restrictions, so the input data needs to satisfy both restrictions. On the other hand, it might be able to operate on more than one type of data, and dynamically choose the codepath depending on the data provided. In this case, the input data only needs to satisfy one of the given restrictions.

Using type information
----------------------

When *providing* data sources, be as specific as possible. Annotate the minimum and maximum dimensionalities, indicate whether all vectors are of the same dimensionality and their most specific type.

When *requesting* data, be as general as possible. Try to implement your code so it can work with as many data types as possible. For example, many algorithms can be implemented for arbitrary `NumberVector`s instead of requiring double vectors. This way, the algorithm can also be used for float vectors that require less memory.

Examples
--------

The `TypeUtil` class provides shared instances of commonly used type requests such as a "number vector field" (i.e. number vectors with a fixed dimensionality).

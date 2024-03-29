---
layout: page
title: Spatial Distance Functions
parent: docs
navigation: 60
---


Implementing a spatial distance function
========================================

Version information: Updated for ELKI 0.8.0
{: class="versioninfo" }

In the tutorial on [distance functions](distance_functions) we already implemented a custom, domain-specific distance function.

In this tutorial, we will implement a textbook distance function, but also extend it to allow **index accelerated** queries.

The index we focus on is the R-tree, because it is very easy to extend with custom distances. For the M-tree, a distance function must be a *metric*, i.e. satisfy the triangle inequality. The R-tree does not have such a restriction: it can acclerate non-metrical distance queries, such as squared euclidean distances.

While here we implement this for a "textbook distance", you should realize that **these two tutorials can and should be combined**. When implementing a custom distance function, always consider whether you can define such a MBR-MBR lower bound, and this way get R-tree acceleration for your queries.

Bray-Curtis distance
--------------------

Bray-curtis dissimilarity (also: Sørensen–Dice coefficient) is a distance function originating from Ecology and Biology. In essence, it is a normalized form of Manhattan distance. While it is commonly applied to presence/absence data, it can also be defined on continuous variables, which is the version we will be using here.

The continuous formulation of Bray-Curtis for two vectors `x` and `y` is as follows:

<pre>
           sum_i |x_i - y_i|
d(x,y) = ---------------------
          sum_i |x_i| + |y_i|
</pre>

Often, the absolute value of the denominator is missing, but then it would no longer be a proper dissimilarity function on R<sup>n</sup> either. For nonnegative values, it obviously does not change results, and bray-curtis was originally designed for nonnegative values.

The numerator obivously is the Manhattan distance, while the denominator is the Manhattan norms of the vectors. So as mentioned above, Bray-Curtis is a normalized form of Manhattan distance.

Implementing the distance
-------------------------

First of all, we will implement the regular distance function. To minimize the amount of work we need to do, we will use the most specific abstract base class: [AbstractNumberVectorDistance](/releases/current/javadoc/elki/distance/AbstractNumberVectorDistance.html) which is good for distance functions that have continuous numerical vectors as input and return double valued results.

{% highlight java %}
package tutorial;

import elki.distance.AbstractNumberVectorDistance;

public class BrayCurtisDistance extends AbstractNumberVectorDistance {
  @Override
  public double distance(NumberVector v1, NumberVector v2) {
    // TODO
    return 0;
  }
}
{% endhighlight %}

this very simple signature is all that we need to fill. We can pretty much straightforward use the definition above. We add a safety check to ensure vectors have the same dimensionality.

{% highlight java %}
  @Override
  public double distance(NumberVector v1, NumberVector v2) {
    final int dim = dimensionality(v1, v2);
    double sumdiff = 0., sumsum = 0.;
    for(int d = 0; d < dim; d++) {
      double xd = v1.doubleValue(d), yd = v2.doubleValue(d);
      sumdiff += Math.abs(xd - yd);
      sumsum += Math.abs(xd) + Math.abs(yd);
    }
    return sumsum > 0 ? sumdiff / sumsum : 0;
  }
{% endhighlight %}

After implementing this class, we can immediately run our algorithms with it. Since it has an (implicit) public constructor and no parameters, the GUI will automatically add it to its drop down menus.

Support for spatial indexes
---------------------------

In order to accelerate distance based algorithms (e.g., DBSCAN, LOF) using this distance function, we need to implent a **lower-bound on the rectangle-to-rectangle distances**. This is often called the "minDist". We additionally implement the interface [SpatialPrimitiveDistance](/releases/current/javadoc/elki/distance/SpatialPrimitiveDistance.html), and have eclipse generate the missing method. After adding the usual safety checks, it looks like this:

{% highlight java %}
  @Override
  public double minDist(SpatialComparable mbr1, SpatialComparable mbr2) {
    if (mbr1 instanceof NumberVector && mbr2 instanceof NumberVector) {
      return distance((NumberVector) mbr1, (NumberVector) mbr2);
    }
    final int dim = dimensionality(mbr1, mbr2);
    double sumdiff = 0., sumsum = 0.;
    // TODO: compute lower bound for sumdiff
    // TODO: compute upper bound for sumsum
    return sumdiff / sumsum;
  }
{% endhighlight %}

In order to find a lower bound for the equation above, we need a lower bound for the nominator, and an upper bound for the denominator. Fortunately, we can do this in each single dimension independently.

In a single dimension, the bounding rectangles of the R-tree become intervals: `[min1:max1]` and `[min2:max2]`. There are three different situations that can arise: the first rectangle can be strictly less than the second (then `max1 < min2`), the first rectangle can be strictly larger than the second (then `min1 > max2`) or the two rectangles overlap. When they overlap, their minimum distance is 0, otherwise it is the difference of the inequalities we just gave.

For the upper bound on the lengths, we can exploit that either `-min1` or `+max2` will have the largest absolute value.

{% highlight java %}
    double sumdiff = 0., sumsum = 0.;
    for(int d = 0; d < dim; d++) {
      final double min1 = mbr1.getMin(d), max1 = mbr1.getMax(d);
      final double min2 = mbr2.getMin(d), max2 = mbr2.getMax(d);
      if(max1 < min2) {
        sumdiff += min2 - max1;
      } else if (min1 > max2) {
        sumdiff += min1 - max2;
      } else {
        // Minimum difference is 0
      }
      sumsum += Math.max(-min1, max1) + Math.max(-min2, max2);
    }
    return sumdiff / sumsum;
{% endhighlight %}

Using index acceleration
------------------------

In order to benefit from this, we need to

1.  [Add an R-Tree index to the database](/howto/use_indexes) via the `-dbc.index` parameter
2.  Use an algorithm that is implemented by k nearest neighbor or radius queries

Not every algorithm can be accelerated with an index, but many can such as DBSCAN, OPTICS and LOF. When an appropriate index was added to the database, ELKI will automatically use it wherever possible. So by implementing indexing support for this distance function, we accelerated dozens of algorithms at the same time!

Bonus ELKIification
-------------------

In order to fully ELKIfy the implementation, we should add a static instance (since this distance function is parameterless) and add a Parameterizer to use the static instance:

{% highlight java %}
  /**
   * Static instance.
   */
  public static final BrayCurtisDistance STATIC = new BrayCurtisDistance();

  /**
   * Constructor.
   * 
   * @deprecated Use {@link #STATIC} instance instead.
   */
  @Deprecated
  public BrayCurtisDistance() {
    super();
  }

  /**
   * Parameterization class.
   */
  public static class Par implements Parameterizer {
    @Override
    public BrayCurtisDistance make() {
      return BrayCurtisDistance.STATIC;
    }
  }
{% endhighlight %}

Why: it is not at all essential. Usually, distance functions will barely be compared, or instantiated. So you are not going to save a lot of anything. But from an engineering point of view it *emphasizes* that there exist only one such distance. We might as well formalize it.

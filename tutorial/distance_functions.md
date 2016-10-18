---
layout: page
title: Implementing a Custom Distance Function
short: Custom Distance
parent: docs
---


Writing a custom distance function
==================================

Version information: Updated for ELKI 0.6.5~20141030
{: class="compact" style="font-size: x-small; text-align:right" }

For many real-world applications, a domain expert may be able to define a domain-specific distance function. For the following, let us assume we are working with 2D data, and the domain expert has decided that an appropriate distance function is `dx*dx+abs(dy)`, so taking the difference on the x axis to the square and the y axis linearly.

Basic distance function
-----------------------

Most distances are defined on real-number vectors and return double values. There is a convenient abstract class for this that we can use: [AbstractNumberVectorDistanceFunction](/releases/current/doc/de/lmu/ifi/dbs/elki/distance/distancefunction/AbstractNumberVectorDistanceFunction.html). Let's start a new class for this, and see what Eclipse generates for us:

{% highlight java %}
package tutorial.distancefunction;

import de.lmu.ifi.dbs.elki.data.NumberVector;
import de.lmu.ifi.dbs.elki.distance.distancefunction.AbstractNumberVectorDistanceFunction;

public class TutorialDistanceFunction extends AbstractNumberVectorDistanceFunction {
  @Override
  public double distance(NumberVector o1, NumberVector o2) {
    // TODO Auto-generated method stub
    return 0;
  }
}
{% endhighlight %}

Now lets implement the doubleDistance method:

{% highlight java %}
package tutorial.distancefunction;

import de.lmu.ifi.dbs.elki.data.NumberVector;
import de.lmu.ifi.dbs.elki.distance.distancefunction.AbstractNumberVectorDistanceFunction;

public class TutorialDistanceFunction extends AbstractNumberVectorDistanceFunction {
  @Override
  public double distance(NumberVector o1, NumberVector o2) {
    double dx = o1.doubleValue(0) - o2.doubleValue(0);
    double dy = o1.doubleValue(1) - o2.doubleValue(1);
    return dx * dx + Math.abs(dy);
  }
}
{% endhighlight %}

**We can now already test this distance function!** Yes - we do not need to do more. (If you compiled ELKI and do not use a .jar file, you should now have this class in the dropdown menu. Otherwise, you might need to type in the name of the class.

Fine tuning
-----------

Now this domain specific distance function makes only sense for 2-dimensional data. So we will now specify this, so that ELKI does not try to use it with higher dimensional relations. For this, we need to override the method `getInputTypeRestriction`.

{% highlight java %}
public class TutorialDistanceFunction extends AbstractNumberVectorDistanceFunction {
  // ... as above ...

  @Override
  public SimpleTypeInformation<? super NumberVector> getInputTypeRestriction() {
    return VectorFieldTypeInformation.typeRequest(NumberVector.class, 2, 2);
    // alternative:
    // return TypeUtil.NUMBER_VECTOR_FIELD_2D;
  }
}
{% endhighlight %}

We now also override the method `makeOptions` to configure the variable `ps`:

With this statement, we specify three requirements for the input data:

* The vectors must be a *vector field* (i.e. have the same dimensionality)
* The input data must be [NumberVector](/releases/current/doc/de/lmu/ifi/dbs/elki/data/NumberVector.html)s (of arbirary type: Float, Double, Integer...)
* The dimensionality must be exactly 2.

If this distance function were metrical, we would also override `isMetric()` to contain `return true` (this distance function however is not metrical).

Making it parameterizable
-------------------------

In order to make the distance function parameterizable, we write some additional lines. You can read more here: [Parameterization](/dev/parameterization)

This class already satistfied the parameterizable API: it had an implicit *public* and *parameterless* constructor, and can thus be instantiated by the UI. However, if we want to actually have some parameters in the class and a different constructor, we need to help the UI with the parameterization. For this, a `static`, `public`, inner class called `Parameterizer` is used.

So here is a more complex variation of Lp norms where we can specify a different "p" for each dimension.

{% highlight java %}
package tutorial.distancefunction;

import de.lmu.ifi.dbs.elki.data.NumberVector;
import de.lmu.ifi.dbs.elki.distance.distancefunction.AbstractNumberVectorDistanceFunction;

public class MultiLPNorm extends AbstractNumberVectorDistanceFunction {
  /**
   * The exponents
   */
  double[] ps;

  /**
   * Normalization factor (count(ps)/sum(ps))
   */
  double pinv;

  /**
   * Constructor.
   * 
   * @param ps The exponents
   */
  public MultiLPNorm(double[] ps) {
    super();
    double sum = 0.0;
    for(int dim = 0; dim < ps.length; dim++) {
      assert (ps[dim] >= 0) : "Negative exponents are not allowed.";
      sum += ps[dim];
    }
    assert (sum > 0) : "At least one exponent should be different from 0!";

    this.ps = ps;
    this.pinv = ps.length / sum;
  }

  @Override
  public double distance(NumberVector o1, NumberVector o2) {
    assert o1.getDimensionality() == ps.length : "Inappropriate dimensionality!";
    assert o2.getDimensionality() == ps.length : "Inappropriate dimensionality!";

    double sum = 0.0;
    for(int dim = 0; dim < ps.length; dim++) {
      if(ps[dim] > 0) {
        final double delta = Math.abs(o1.doubleValue(dim) - o2.doubleValue(dim));
        sum += Math.pow(delta, ps[dim]);
      }
    }
    return Math.pow(sum, pinv);
  }

  @Override
  public SimpleTypeInformation<? super NumberVector> getInputTypeRestriction() {
    return VectorFieldTypeInformation.typeRequest(NumberVector.class, ps.length, ps.length);
  }
}
{% endhighlight %}

If you want, you can think about when this function will be metrical (for example when all ps are constant and &gt;= 1) and implement `isMetric()` accordingly.

However, when you try to select this class in the ELKI UI, you will see this error:

> Error instantiating class - no usable public constructor.

So we need to add a [Parameterization](/dev/parameterization) helper next, based on [AbstractParameterizer](/releases/current/doc/de/lmu/ifi/dbs/elki/utilities/optionhandling/AbstractParameterizer.html). The generated stub looks like this:

{% highlight java %}
  public static class Parameterizer extends AbstractParameterizer {
    @Override
    protected Object makeInstance() {
      // TODO Auto-generated method stub
      return null;
    }
  }
{% endhighlight %}

Make sure that you define the class as `public static`. Now you *must* change the return type to your actual class (MultiLPNorm in this case), so it will now look like this:

{% highlight java %}
  public static class Parameterizer extends AbstractParameterizer {
    double[] ps;

    // ... we still need to initialize "ps"!
    
    @Override
    protected MultiLPNorm makeInstance() {
      return new MultiLPNorm(ps);
    }
  }
{% endhighlight %}

In order to setup the parameters, we have to override the `makeOptions` method, and add our options there. Parameterization consists of multiple parts:

1. Define a public static [OptionID](/releases/current/doc/de/lmu/ifi/dbs/elki/utilities/optionhandling/OptionID.html) for the parameter (so it can be referenced from other classes!)
2. Create an option parameter. Here we need a list of doubles, which is parsed by [DoubleListParameter](/releases/current/doc/de/lmu/ifi/dbs/elki/utilities/optionhandling/parameters/DoubleListParameter.html).
3. Get the options value from the config object using `grab`. If the value is unavailable, an error will automatically reported, since this parameter was not optional. (Do not throw an exception, so multiple errors can be reported!)

{% highlight java %}
  public static class Parameterizer extends AbstractParameterizer {
    /**
     * Option ID for the exponents
     */
    public static final OptionID EXPONENTS_ID = new OptionID("multinorm.ps",
        "The exponents to use for this distance function");

    /**
     * P exponents
     */
    double[] ps;

    @Override
    protected void makeOptions(Parameterization config) {
      super.makeOptions(config);
      DoubleListParameter ps_param = new DoubleListParameter(EXPONENTS_ID);
      if(config.grab(ps_param)) {
        ps = ArrayLikeUtil.toPrimitiveDoubleArray(ps_param.getValue());
      }
    }
    // ... as above
  }
{% endhighlight %}

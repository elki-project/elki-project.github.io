---
layout: page
title: Parameterization API
short: Parameterization
parent: dev
navigation: -70
---


Parameterization in ELKI
========================

ELKI includes a generic parameterization API that is used for the command line and graphical user interfaces.

Key features of this approach:

 * Generic, re-usable parsers for parameters
 * Generic constraint checking (valid value ranges etc.)
 * Documentation of available options and valid values
 * Uniform error reporting for parameter errors
 * Input assistance for the user (constraints, required values, ...)
 * Automatic UI generation (Dropdown menus, File selectors, ...)
 * Automatic experiments

The API for this has gone through several iterations already, and it keeps on getting easier to use for the developers as well as more powerful for the user interface.

FAQs
----

1. Why don't you just **throw an exception** on errors?

   This way, the first error will abort, and we cannot get a complete list of options. In order to set all parameters, a user may need many iterations to get everything right. Reporting multiple errors in one run is much more useful.

1. Why don't you use **introspection** and inspect the class constructor?

   This is significantly slower, and we still don't have any parameter descriptions, constraints, etc. that we need for a good user interface. We are considering this as a fallback option, though.

1. Why don't you just use **String\[\]** everywhere?

   This way, we cannot pass existing instances for parameters. Plus, when configuring internally, we can avoid lots of string operations this way.

1. But I just want to call it from **Java**!

   Actually you become a bit less dependant on the other class when you use the parameterization API, since the addition of a new option with a default value will not affect you. [ListParameterization](/releases/current/javadoc/elki/utilities/optionhandling/parameterization/ListParameterization.html) is an easy to use API for this. However, forth generation API will allow you to use regular Java constructors. As examples for usage within Java, check the unit tests (e.g. in `elki/src/test/java/de/lmu/ifi/dbs/elki/algorithm`). An example containing many use-cases is `elki/src/test/java/de/lmu/ifi/dbs/elki/algorithm/AbstractSimpleAlgorithmTest.java`.

1. Why does this **change every version**?

   Because we're still discovering ways to make it easier to use. Our UIs are getting more powerful, and new applications require new functionality. This is why we are using 0.x version numbers! But by version 1.0 we're expecting to have something stable for you. And in fact, this didn't change much since 0.4 anymore.

1. What is this `if (config.grab(param)) ...` I see all the time?

   This serves two purposes. First of all, it adds the parameter to the configuration for the UIs. Secondly, when the method returns true, the parameter is guaranteed to have a valid value. This actually is a shorthand for `config.grab(param); if (param.isDefined()) ...`).

Parameterization
----------------

This is the parameterization API as of version 0.4.0 onwards.

Classes are now encouraged to offer a **classic java constructor**. Parameterization is delegated to an **inner class** derived from [AbstractParameterizer](/releases/current/javadoc/elki/utilities/optionhandling/AbstractParameterizer.html) (or `Super.Parameterizer`) that will read the parameters and then produce an instance.

### Example

A benefit is that classes can now also return a subclass (this was already possible with static methods in 3.5 generation), as can be seen in this example from [LPNormDistanceFunction](/releases/current/javadoc/elki/distance/distancefunction/minkowski/LPNormDistanceFunction.html)

{% highlight java %}
// NOTE: this is a STATIC INNER class of LPNormDistanceFunction!

/**
 * Parameterization class.
 * 
 * @author Erich Schubert
 */
public static class Parameterizer extends AbstractParameterizer {
  /**
   * The value of p.
   */
  protected double p = 0.0;

  @Override
  protected void makeOptions(Parameterization config) {
    // While our superclass doesn't add any options,
    // we formally should always call the super class!
    super.makeOptions(config);
    // Add a parameter for the value of "p"
    DoubleParameter paramP = new DoubleParameter(P_ID);
    paramP.addConstraint(new GreaterConstraint(0));
    if(config.grab(paramP)) {
      // The value of p is now available, otherwise, an error is reported
      p = paramP.getValue();
    }
  }

  // This method will only be called when parameterization succeeded,
  // and thus "p" is defined. This is checked by the abstract class.
  @Override
  protected LPNormDistanceFunction makeInstance() {
    // Return optimized implementations for common values.
    if(p == 1.0) {
      return ManhattanDistanceFunction.STATIC;
    }
    if(p == 2.0) {
      return EuclideanDistanceFunction.STATIC;
    }
    if(p == Double.POSITIVE_INFINITY) {
      return MaximumDistanceFunction.STATIC;
    }
    return new LPNormDistanceFunction(p);
  }
}
{% endhighlight %}

Note that when using the regular Java API, the optimization for Euclidean and Manhattan distances will not be used, since the constructor of LPNormDistanceFunction cannot just return the static instance of `EuclideanDistanceFunction`.

Parameterless version
---------------------

If your class does not have parameters, and you do not mean to use optimizations such as static instances, a `public` and parameterless constructor is also allowed:

{% highlight java %}
/** Parameterless, public constructor */
public MyClass() {
  super();
}
{% endhighlight %}

However, the constructor *must* be `public`, otherwise Java policy disallows instantiation.

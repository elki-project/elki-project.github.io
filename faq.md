---
layout: page
title: FAQ
navigation: 12
---


Frequently Asked Questions
==========================

How do I use ELKI?
------------------

Just run the jar file, either by double-clicking it or via command line: `java -jar elki.jar`. Obviously, you need to have a Java Runtime Environment installed. A window should open that assists you with parameterizing all algorithms released with ELKI.

When developing ELKI, you can run the [de.lmu.ifi.dbs.elki.gui.minigui.MiniGUI](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/gui/minigui/MiniGUI.html) class to get the GUI.

How do I run ELKI on my corporate database?
-------------------------------------------

Please understand that this is research software. We currently do not offer professional support, and the software is developed and optimized for the use in science; it probably is not as easy to use as you want it to be. You should contact a professional consultant. If you are willing to pay for professional support, you can of course contact us, and we will try to refer you to some alumni that work with ELKI.

Can I extend ELKI?
------------------

**Absolutely!** ELKI is designed around extensions. In fact, every algorithm, index, visualization and even every distance function and data type in ELKI is an extension. When running from the jar file, ELKI uses class lists in `META-INF/elki` to discover available functionality, as it is a best practise for service discovery. When running in development mode, any folder in the class path will be scanned for classes implementing the desired interfaces. The MiniGUI will show any class in the dropdown menus it has discovered and that can be automatically instantiated (either by a parameterless constructor, or by implementing the [Parameterization](/dev/parameterization) API)

How do I visualize results using ELKI?
--------------------------------------

Choose the `ResultVisualizer` for the `resulthandler` parameter (in the MiniGUI, this actually is the default value). If you just want to see your data without even running a real algorithm, you could run the `NullAlgorithm` or `ByLabelClustering`. Technically, we could just make the algorithm parameter optional, but for all the users that are interested in the algorithm results, we actually do want the parameter to be mandatory.

I'd like to script ELKI calls - is there a command line?
--------------------------------------------------------

ELKI also comes with a powerful command line, accessible as [de.lmu.ifi.dbs.elki.application.KDDCLIApplication](/releases/0.7.5/doc/de/lmu/ifi/dbs/elki/application/KDDCLIApplication.html). Use a command such as `java -cp elki.jar de.lmu.ifi.dbs.elki.application.KDDCLIApplication <parameters>` to run ELKI without the tabular UI. Starting with ELKI 0.5.5 there also is a shorthand `java -jar elki.jar KDDCLIApplication`, and the Debian and Ubuntu packages come with a command `elki-cli` preinstalled.

You can find out about parameters using the `--help` switch, find a complete list in the documentation, or copy the command line shown in the first line of the MiniGUI log window.

Is there a complete list of parameters?
---------------------------------------

Of course. It can be found in the [JavaDoc](/dev/javadoc) of the release that you are using. Here are the lists for the current release [sorted by class name](/releases/0.7.5/doc/parameters-byclass.html) and [sorted by option name](/releases/0.7.5/doc/parameters-byopt.html). The list is automatically generated from the parameterization classes, so it is fairly complete.

What is the `NoSupportedDataTypeException`?
-------------------------------------------

Algorithms have different requirements. For example k-means needs to be able to compute mean vectors and distances between objects and the mean. Therefore, you cannot use k-means with external distance functions, for example (there is however k-medoids which works with arbitrary distance functions). For many algorithms, the limiting factor is the distance function - the Euclidean distance for example is defined on vector fields, not on text.

So this error essentially says: *the algorithm / distance function cannot be used with your input data*.

Sometimes, the problem can be resolved easily: For example, if an algorithm such as k-means requires the data to be a `NumberVector,field` (i.e. number vectors of the *same* dimensionality), but you only have a `SparseFloatVector` input source, adding `-dbc.filter SparseVectorFieldFilter` will compute the appropriate vector field (yielding a relation of the type `SparseFloatVector,field`).

In other cases, you will first need to "vectorize" your data set. There is alot of literature on feature extraction available.

How do I call ELKI algorithms from Java?
----------------------------------------

The [Parameterization](/dev/parameterization) documentation is a good place to start. Make sure to have a look at the unit tests, since these do exactly this: call algorithms from Java. Note that it is often easier to learn also the parameterization API, because it does do a lot of auto configuration. The raw constructors can be quite complex, but many parameters have default values. The parameterization API can use these defaults, while the Java API does not. Plus it performs some extra constraint checking, to avoid misconfigurations. So in our experience it is best to configure at least 90% via parameterization API, and then only the one class that you are particularly interested in via pure Java.

Why does my new algorithm not show up in the MiniGUI?
-----------------------------------------------------

You probably did not implement the [Parameterization](/dev/parameterization) API yet. Check the documentation on how to make your algorithm parameterizable by the UI. Note that this is also needed for command line UIs!

Classes will show up in ELKI if they 1a) are in a .jar file, and listed in `META-INF/elki/<interface>`, 1b) are not in a jar file (via slow scanning, useful during development) *and* 2) if they are instantiable via the [Parameterization](/dev/parameterization) API.

How do I make my algorithm parameterizable?
-------------------------------------------

Both the command line and graphical interfaces rely on an API that specified parameter names and value constraints. This in particular allows the automatic generation of the UI and generation of documentation. For details on the parameterization API, check out the separate wiki page on [Parameterization](/dev/parameterization)!

Where can I get help?
---------------------

You can subscribe to the user mailing list, by sending an email to
<span class="maillink">elki-user-request () lists ifi lmu de</span>
with the subject "subscribe" or "unsubscribe"
([Mailman manual](https://www.gnu.org/software/mailman/mailman-member/node10.html)).

If you have a *programming* question, you can also try asking at
[StackOverflow](http://stackoverflow.com/questions/tagged/elki).
But you should understand that this is a general (and third-party operated)
*programming* community; questions just on how to use it may be considered
off-topic there, and may be closed quickly without an answer.

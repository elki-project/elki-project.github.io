---
layout: page
title: Compiling ELKI
---

Compiling ELKI
==============

ELKI is compiled using Apache Maven:

On Linux (and supposedly other Unix-like systems):
{% highlight shell %}
# Compile everything into individual jars:
mvn package
# Launch
sh util/launch-packaged.sh
{% endhighlight %}

To build a single-jar ELKI package, you also need to install Python (2.6+ or 3.x should be fine), then run

{% highlight shell %}
# Build a package. Same as sh util/compile.sh
mvn -P svg,svm,uncertain,tutorial,bundle package
# Launch single-jar:
java -jar elki-bundle-*-SNAPSHOT.jar
{% endhighlight %}

The resulting standalone package is output to the main folder.
Alternatively, the folder `addons/bundle/target/dependency/` will contain all individual `.jar` files required for ELKI.

Classpath
---------

To manually run ELKI, you need to build a classpath containing:

1. the jars of the ELKI modules you want to use
2. the jars of required dependencies
   (The jars will specify these dependencies, so keeping them in a `dependency/` subfolder is enough.)
3. additional jars with e.g. your own modules

The following wrapper for Linux (included as `util/launch-packaged.sh`) works well. Much of the logic you see below is directory handling and ordering the jars such that the options in the MiniGUI appear in the desired order.

{% highlight shell %}
#!/bin/sh
bd=$( dirname $( dirname $0 ) )
java=$( test -z "$JAVA" && echo java || echo $JAVA  )
core=$( ls $bd/elki/target/*.jar $bd/elki-core*/target/*.jar | egrep -v "javadoc.jar|sources.jar" )
mods=$( ls $bd/elki*/target/*.jar | egrep -v "javadoc.jar|sources.jar|/elki-core|/elki/|/elki-docutil" )
addons=$( ls $bd/addons/*/target/*.jar | egrep -v "javadoc.jar|sources.jar|elki-bundle" )
if [ -z "$core" ]; then
  echo "ELKI does not appear to be compiled yet. Call 'mvn package' first."  >&2
  exit 1
fi
cp=$( echo "$core:$mods:$addons" | paste -s -d: )
exec $java $JVM_OPTS -cp "$cp" de.lmu.ifi.dbs.elki.application.ELKILauncher "$@"
{% endhighlight %}

With this wrapper, you can for example enable assertions and increase the memory available to ELKI via the `$JVM_OPTS` variable, or choose a different java JVM via `$JAVA`:
{% highlight shell %}
JAVA=/usr/bin/java JVM_OPTS="-ea -Xmx30G" sh elki.sh
{% endhighlight %}

The wrapper `util/launch-compiled.sh` will build a complex classpath that includes the compiled, but not yet packaged code. This may be useful to launch the development version.

Maven Problem MDEP-187
----------------------

Unfortunately, there is a long-standing design problem ([MDEP-187](https://issues.apache.org/jira/browse/MDEP-187)) in Maven that makes compilation fail often with the error message.

>     [ERROR] Failed to execute goal org.apache.maven.plugins:maven-dependency-plugin:2.8:copy-dependencies (copy-dependencies) on project elki-core-util: Artifact has not been packaged yet. When used on reactor artifact, copy should be executed after packaging: see MDEP-187. -> [Help 1]

Because of this other Maven goals such as `mvn compile` tend to *not* work, unfortunately.

We have not yet found an easy workaround for this problem, as we need to have the dependencies copied prior to building the bundle documentation, otherwise there would not be a complete JavaDoc. We are thus considering a move to either Gradle, or back to Apache Ant.

The following command should correctly compile ELKI: 

{% highlight shell %}
mvn -P svg,svm,uncertain,tutorial,bundle package
{% endhighlight %}

After successful compilation, you will find a standalone "fat" jar in `addons/bundle/target/elki-bundle-*.jar`.

Under the hood
--------------

Compilation is tricky because of dependencies. Maven does much of the work in compiling the individual modules.

The really messy part is now getting all the modules into a single big jar.

- Jars need to be collected, extracted, and combined into one.
- License documentation needs to be cleaned up.
- Service files (files listing the available implementations of an interface for the GUI) need to be merged.
- A single "manifest" needs to be generated to make it executable.
- A complete documentation needs to be built.

Much of this is moved into the `addons/bundle/pom.xml` so it does not need to be run every time, but only when it is desired to have a single "fat" jar build.

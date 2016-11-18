---
layout: page
title: Compiling ELKI
parent: dev
navigation: -100
---

Compiling ELKI
==============

ELKI is compiled using Gradle (note that many IDEs will work with Gradle builds just fine):

On Linux (and supposedly other Unix-like systems, Windows users can use `gradlew.bat`):
{% highlight shell %}
# Compile everything into individual jars:
./gradlew jar
# Launch
sh util/launch-compiled.sh
{% endhighlight %}

To build a single-jar ELKI package, run

{% highlight shell %}
# Build a package. Same as sh util/compile.sh
./gradlew shadowJar
# Launch single-jar:
java -jar elki-bundle-*-SNAPSHOT.jar
{% endhighlight %}

The resulting standalone package is output to the main folder.
Alternatively, the folder `addons/bundle/build/libs/lib` will contain all individual `.jar` files required for ELKI.

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
core=$( ls $bd/elki/build/libs/*.jar $bd/elki-core*/build/libs/*.jar | egrep -v "javadoc.jar|sources.jar" )
mods=$( ls $bd/elki*/build/libs/*.jar | egrep -v "javadoc.jar|sources.jar|/elki-core|/elki/|/elki-docutil" )
addons=$( ls $bd/addons/*/build/libs/*.jar | egrep -v "javadoc.jar|sources.jar|elki-bundle" )
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


Disabling Modules
-----------------

You can disable addon modules that you do not need by commenting them in `settings.gradle`

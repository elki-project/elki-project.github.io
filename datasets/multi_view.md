---
layout: page
title: Multi-View Data
short: Multi-View
parent: datasets
---

{% raw %}
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Dataset",
  "name" : "ALOI Image Features - Multiple Views",
  "description" : "The \"Amsterdam Library of Object Images\" is a collection of 110250 images of 1000 small objects, taken under various light conditions and rotation angles. All objects were placed on a black background. Thus the images are taken under rather uniform conditions, which means there is little uncontrolled bias in the data set (unless mixed with other sources). They do however not resemble a \"typical\" image collection. The data set has a rather unique property for its size: there are around 100 different images of each object, so it is well suited for clustering. By downsampling some objects it can also be used for outlier detection. For multi-view research, we offer a number of different feature vector sets for evaluating this data set.",
  "author" : {
    "@type" : "Person",
    "givenName" : "Erich",
    "familyName" : "Schubert",
    "affiliation" : { "@id" : "https://www.tu-dortmund.de/" }
  },
  "isAccessibleForFree" : true,
  "isBasedOn" : { "@id" : "http://aloi.science.uva.nl/" },
  "keywords" : ["image features", "color histograms", "clustering", "cluster analysis", "outlier", "outlier detection", "anomaly detection"],
  "license" : "http://creativecommons.org/licenses/by/4.0/"
}
</script>
{% endraw %}

Multi-View Data Sets
====================

The multiview data set collection contains sets of different features extracted from the same raw data. This data is meant for investigating the results of multiple clustering runs against each other and against different features, to define a notion of "freshness" and "interestingness". Results that are essentially just trivial subsets of existing features can be seen as "uninteresting", while surprising combinations can be seen as interesting.

ALOI images
-----------

The [Amsterdam Library of Object Images](http://aloi.science.uva.nl/) is a collection of 110250 images of 1000 small objects, taken under various light conditions and rotation angles. All objects were placed on a black background. Thus the images are taken under rather uniform conditions, which means there is little uncontrolled bias in the data set (unless mixed with other sources). They do however not resemble a "typical" image collection.

The data set has a rather unique property for its size: there are around 100 different images of each object, so it is well suited for clustering. By downsampling some objects it can also be used for outlier detection.

For multiview research, we offer a number of feature vectors for evaluating this data set. Some of these were used in: *M. E. Houle, H.-P. Kriegel, P. Kröger, E. Schubert, A. Zimek*\\
**Can Shared-Neighbor Distances Defeat the Curse of Dimensionality?**\\
In Proceedings of the 22nd International Conference on Scientific and Statistical Database Management (SSDBM), Heidelberg, Germany, 2010.

*H.-P. Kriegel, E. Schubert, A. Zimek*\\
**Evaluation of Multiple Clustering Solutions**\\
In 2nd MultiClust Workshop: Discovering, Summarizing and Using Multiple Clusterings Held in Conjunction with ECML PKDD 2011, Athens, Greece, 2011.

*E. Schubert, R. Wojdanowski, A. Zimek, H.-P. Kriegel*\\
**On Evaluation of Outlier Rankings and Outlier Scores**\\
In Proceedings of the 12th SIAM International Conference on Data Mining (SDM), Anaheim, CA, 2012.

The first article studied the effects of dimensionality on this data set. In the second article we offer some initial thoughts about evaluating clusters on this data set.

We hope to continuously add additional feature sets for this data set.

| Feature type | Description | Files |
|----|----|----|
| Object number | Sparse 1000 dimensional vectors that give the *true* object assignment | [objs.arff.gz](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/objs.arff.gz) |
| RGB color histograms | Standard RGB color histograms (uniform binning) | [8](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-8d.csv.gz) [27](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-27d.csv.gz) [64](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-64d.csv.gz) [125](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-125d.csv.gz) [216](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-216d.csv.gz) [343](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-343d.csv.gz) [512](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-512d.csv.gz) [729](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-729d.csv.gz) [1000](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-1000d.csv.gz) |
| HSV color histograms | Standard HSV/HSB color histograms in various binnings | [2x2x2](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-2x2x2.csv.gz) [3x3x3](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-3x3x3.csv.gz) [4x4x4](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-4x4x4.csv.gz) [5x5x5](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-5x5x5.csv.gz) [6x6x6](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-6x6x6.csv.gz) [7x7x7](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-7x7x7.csv.gz) [7x2x2](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-7x2x2.csv.gz) [7x3x3](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-7x3x3.csv.gz) [14x3x3](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-14x3x3.csv.gz) [8x4x4](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-8x4x4.csv.gz) [9x5x5](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-9x5x5.csv.gz) [13x4x4](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-13x4x4.csv.gz) [14x5x5](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-14x5x5.csv.gz) [10x6x6](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-10x6x6.csv.gz) [14x6x6](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-hsb-14x6x6.csv.gz) |
| Color similiarity | Average similarity to 77 reference colors (not histograms) 18 colors x 2 sat x 2 bri + 5 grey values (incl. white, black) | [arff.gz](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-colorsim77.arff.gz) (choose feature subset!) |
| Haralick features | First 13 Haralick features (radius 1 pixel) | [haralick-1](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-haralick-1.csv.gz) |
| Front to back | Vectors representing front face vs. back faces of individual objects | [front.arff.gz](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/front.arff.gz) |
| Basic light | Vectors indicating basic light situations | [light.arff.gz](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/light.arff.gz) |
| Manual annotations | Manually annotated object groups of semantically related objects such as cups | [manual1.arff.gz](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/manual1.arff.gz) |

### Details

**Object number**

: This data set are sparse binary vectors with a single one that just represent the "ground truth" class membership. Object 1 has a 1 in the first dimension, object 2 in the second and so on.

**RGB color histograms**

: For these histograms, RGB space was evenly split into 2<sup>n</sup> bins, each pixel assigned to the nearest bin and the resulting histogram normalized to a total size of 1. Available dimensionality is the consequence of n=2..10.

**HSB color histograms**

: A HSB (Hue-Saturation-Brightness) split usually yields better performance at the same dimensionality. Brightness and Saturation are split at a lower resolution than the Hue. Each pixel is first transformed into HSB space, then assigned the nearest bin. 7x2x2 and 7x3x3 (HxSxB) already offer a decent performance at 28 and 63 dimensions, while the dimensionality is comparable to 27 and 64 dimensions RGB.

**Color similarity**

: A set of 77 reference colors were chosen, based on 18 Hues, with 50% and 100 Saturation and 50% and 100% Brightness each. Additionally, 5 Grey values (0%, 25%, 50%, 75% and 100%) are used. For each pixel of the image, the color similarity in HSB space to this reference color is computed, and the average value is used for the output dimension. Note that the output dimensions are computed independently, and do not sum up to one - they each represent the *average pixel color similarity to a single reference color*. They however are strongly correlated in particular for similar colors.

**Haralick features**

: The common Haralick features extracted by [JFeatureLib](https://code.google.com/p/jfeaturelib/). The 14th Haralick feature is unstable and was not available in JFeatureLib. The radius was set to 1 pixel.

**Notes:** "HSB color histograms" and "Color similarity" may appear very similar at first sight. However, for histograms the bins are non-overlapping, and the process essentially corresponds to producing a reduced-colors approximation of the image, then summarizing the color values to a histogram. Whereas for color similarity, each pixel contributes to each dimension as in an average distance to an image entirely of the reference color. They thus have very different semantics and behaviour. For example, an entirely black image will have a binary histogram (all in the "black" color bin), whereas it will still have high color similarity to dark colors and lower similarity to light colors.

### Outlier detection subsets

| Feature type | Description | Files |
|----|----|----|
| RGB Histograms | Downsampled to 100000 objects (553 outliers) | [27d](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-27d-100000-max10-tot553.csv.gz) [64d](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-64d-100000-max10-tot553.csv.gz) |
| | Downsampled to 75000 objects (717 outliers)  | [27d](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-27d-75000-max4-tot717.csv.gz) [64d](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-64d-75000-max4-tot717.csv.gz) |
| | Downsampled to 50000 objects (1508 outliers) | [27d](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-27d-50000-max5-tot1508.csv.gz) [64d](http://elki.dbs.ifi.lmu.de/datasets/multiview/aloi/aloi-64d-50000-max5-tot1508.csv.gz) |



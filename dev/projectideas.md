---
layout: page
title: Data Mining Project Ideas with ELKI
short: Project Ideas
parent: dev
navigation: 900
---


Data Mining Project Ideas with ELKI
===================================

You are welcome to help ELKI by contributing algorithms.

Some ideas of what to do can be found here in the following list.

To contribute, [fork ELKI on github](https://github.com/elki-project/elki), write your algorithm there, and send a pull request.

Low difficulty
--------------

The following list are project ideas for *students that want to get started* with developing data mining algorithms in ELKI.

### k-means variations

- ISODATA clustering:

  G. H. Ball and D. J. Hall. ISODATA, a novel method of data analysis and pattern classification. Tech. rep. Stanford Research Institute, 1965

- Global k-means:

  Likas, A., Vlassis, N., & Verbeek, J. J. (2003). The global k-means clustering algorithm. Pattern recognition, 36(2), 451-461.

- k-medoids with a Genetic Algorithm:

  C. B. Lucasius, and A. D. Dane, and G. Kateman. "On k-medoid clustering of large data sets with the aid of a genetic algorithm: background, feasiblity and comparison." Analytica Chimica Acta 282.3 (1993): 647-669.

- Modification of PAM to optimize the Silhouette:

  M. Van der Laan, and K. Pollard, and J. Bryan. "A new partitioning around medoids algorithm." Journal of Statistical Computation and Simulation, 73(8) (2003): 575-584.

- "Trimmed k-means":

  J. A. Cuesta-Albertos, A. Gordaliza, and C. Matrán. "Trimmed k-means: an attempt to robustify quantizers." The Annals of Statistics, 25(2) (1997): 553-576.

- K-Harmonic Means:

  Zhang, B., Hsu, M., & Dayal, U. (2000, September). K-harmonic means-a spatial clustering algorithm with boosting. In International Workshop on Temporal, Spatial, and Spatio-Temporal Data Mining (pp. 31-45). Springer, Berlin, Heidelberg.

### Hierarchical clustering variations

- Generic linkage clustering nach Müllner:

  D. Müllner. “Modern hierarchical, agglomerative clustering algorithms.” arXiv preprint arXiv:1109.2378.

- Dynamic Closest Pairs for hierarchical clustering:

  D. Eppstein. “Fast hierarchical clustering and other applications of dynamic closest pairs” SODA'98.

- Hierarchical clustering using the minimum spanning tree:

  F. J. Rohlf. “Algorithm 76: Hierarchical clustering using minimum spanning tree.” Comput. Journal, 16:93–95, 1973.

- Greedy complete linkage:

  E. Althaus, A. Hildebrandt, A. K. Hildebrandt. “A Greedy Algorithm for Hierarchical Complete Linkage”. In: Algorithms for Computational Biology (2014) pp. 25-34.

- DIANA algorithm:

  L. Kaufman and P. J. Rousseeuw. Finding Groups in Data: An Introduction to Cluster Analyis. John Wiley&Sons, 1990

- Extension of Lance-Williams - minimum average distance in new cluster etc.:

  M. Jambu, M.-O. Lebeaux. "Classification automatique pour l'analyse des données"
  
  J. Podani. "New Combinatorial Clustering Methods". Vegetatio 81(1/2)

- Stopping conditions by Mojena:

  R. Mojena. Hierarchical grouping methods and stopping rules: an evaluation. Comput. Journal, 20(4): 359-363, 1977

- Hausdorff linkage:

  N. Basalto, R. Bellotti, F. De Carlo, P. Facchi, E. Pantaleo, S. Pascazio. Hausdorff clustering. Phys. Rev. E 78, 046112, 2008

### DBSCAN and OPTICS extensions

- DBCLASD algorithm:

  X. Xu, M. Ester, H.-P. Kriegel, and J. Sander. “A Distribution-Based Clustering Algorithm for Mining in Large Spatial Databases”. In: Proceedings of the 14th International Conference on Data Engineering (ICDE), Orlando, FL. 1998, pp. 324–331

- OPTICS cluster extraction with local maxima:

  J. Sander, X. Qin, Z. Lu, N. Niu, and A. Kovarsky. “Automatic Extraction of Clusters from Hierarchical Clustering Representations”. In: Proceedings of the 7th Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD), Seoul, Korea. 2003, pp. 75–87

- OPTICS cluster extraction with inflexion points:

  S. Brecheisen, H.-P. Kriegel, P. Kröger, and M. Pfeifle. “Visually Mining Through Cluster Hierarchies”. In: Proceedings of the 4th SIAM International Conference on Data Mining (SDM), Lake Buena Vista, FL. 2004, pp. 400–412

### Other clustering algorithms

- CURE algorithm:

  S. Guha, R. Rastogi, and K. Shim. “CURE: An efficient Clustering Algorithm for Large Databases”. In: Proceedings of the ACM International Conference on Management of Data (SIGMOD), Seattle, WA. 1998, pp. 73–84

- JP-Clustering:

  R. A. Jarvis and E. A. Patrick. “Clustering Using a Similarity Measure based on Shared Near Neighbors”. In: IEEE Transactions on Computers C-22.11 (1973), pp. 1025–1034

- BANG clustering:

  E. Schikuta and M. Erhart. “The BANG-clustering system: Grid-based data analysis”. In Advances in Intelligent Data Analysis Reasoning about Data (1997), pp. 513–524

- STING clustering:

  W. Wang, J. Yang, and R. R. Muntz. “STING: A Statistical Information Grid Approach to Spatial Data Mining”. In: Proceedings of the 23rd International Conference on Very Large Data Bases (VLDB), Athens, Greece. 1997, pp. 186–195

- ENCLUS subspace clustering:

  C. H. Cheng, A. W.-C. Fu, and Y. Zhang. “Entropy-based Subspace Clustering for Mining Numerical Data”. In: Proceedings of the 5th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), San Diego, CA. 1999, pp. 84–93

- MAFIA subspace clustering:

  S. Goil, H. Nagesh, and A. Choudhary. MAFIA: Efficient and scalable subspace clustering for very large data sets. Tech. rep. CPDC-TR-9906-010. Northwestern University, 1999

- SCHISM subspace clustering:

  K. Sequeira and M. J. Zaki. “SCHISM: a new approach to interesting subspace mining”. In: International Journal of Business Intelligence and Data Mining 1.2 (2005), pp. 137–160

- FLAME fuzzy subspace clustering:

  L. Fu and E. Medico. “FLAME, a novel fuzzy clustering method for the analysis of DNA microarray data”. In: BMC Bioinformatics 8.1 (2007), p. 3. URL : http://dx.doi.org/10.1186/1471-2105/8/3

- ROSECC correlation clustering:

  M. S. Aziz, and C. K. Reddy. "A robust seedless algorithm for correlation clustering." Advances in Knowledge Discovery and Data Mining. Springer Berlin Heidelberg, 2010. 28-37.

- STATPC subspace clustering:

  G. Moise and J. Sander. "Finding non-redundant, statistically significant regions in high dimensional data: a novel approach to projected and subspace clustering." Proceedings of the 14th ACM SIGKDD international conference on Knowledge discovery and data mining, 2008. 533-541.

- SSPC subspace clustering (with semi-supervision):

  K. P. Yip, D. W. Cheung, and M. K. Ng "On discovery of extremely low-dimensional clusters using semi-supervised projected clustering." Proceedings of the 21st International Conference on Data Engineering (ICDE), 2005. 329-340.

### Historic clustering algorithms

These probably are primarily of interest to the history of clustering.

- Bonner clustering (historic):

  R. E. Bonner. "On some clustering techniques." IBM journal of research and development 8.1 (1964): 22-32.

- Rocchio clustering (historic):

  J. J. Rocchio. "Document Retrieval System - Optimization and Evaluation." Harvard University Doctoral Thesis, Report No. ISR-10 to the National Science Foundation, 1966 http://sigir.org/files/museum/isr-10/pdfs/p1-chapter_4.pdf

- Wong and Lane's "Nearest neighbor clustering" (historic, related to DBSCAN):

  M. A. Wong, T. Lane, A kth nearest neighbour clustering procedure. In Computer Science and Statistics: Proceedings of the 13th Symposium on the Interface (pp. 308-311), 1981.

### Outlier detection algorithms

- ORCA fast version of KNNOutlier:

  S. D. Bay and M. Schwabacher. “Mining distance-based outliers in near linear time with randomization and a simple pruning rule”. In: Proceedings of the 9th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), Washington, DC. 2003, pp. 29–38

- Top-n LOF variant:

  W. Jin, A.K. Tung, and J. Han. “Mining Top-n Local Outliers in Large Databases”. In: Proceedings of the 7th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), San Francisco, CA. 2001, pp. 293–298

- Grid-based LOF variant:

  A. L.-M. Chiu and A. W.-C. Fu. “Enhancements on Local Outlier Detection”. In: Proceedings of the 7th International Database Engineering and Applications Symposium (IDEAS 2003), Hong Kong, China. 2003, pp. 298–307

- RBRP kNN variant:

  A. Ghoting, S. Parthasarathy, and M. E. Otey. “Fast mining of distance-based outliers in high-dimensional datasets”. In: Data Mining and Knowledge Discovery 16.3 (2008), pp. 349–364

- GLOSS subspace outlier:

  B. van Stein, M. van Leeuwen, and T. Bäck. “Local subspace-based outlier detection using global neighbourhoods”. In: IEEE International Conference on Big Data (2016), pp. 1136–1142

### Association rule mining

- Additional measures of interestingness for association rule extraction

- CHARM:

  M. J. Zaki. "Generating non-redundant association rules". In: Proceedings of the 6th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), 2000, pp. 34-43.

- Visualization of FPgrowth FP-Trees

- FPgrowth variations, such as FP-bonsai

### Data indexing

- Additional splitting strategy:

  Korotkov, Alexander. "A new double sorting-based node splitting algorithm for R-tree". Programming and Computer Software 38.3 (2012): 109-118.

- Top-down bulk loading support for the R-tree, such as:

  Lee, Taewon, and Sukho Lee. "OMT: Overlap Minimizing Top-down Bulk Loading Algorithm for R-tree." CAiSE Short Paper Proceedings. Vol. 74. 2003.
  
- Vantage-Point trees:

  Yianilos, Peter N. "Data structures and algorithms for nearest neighbor search in general metric spaces." SODA. Vol. 93. No. 194. 1993.
  
  Bozkaya, Tolga, and Meral Ozsoyoglu. "Indexing large metric spaces for similarity search queries." ACM Transactions on Database Systems (TODS) 24.3 (1999): 361-404.
  
  Uhlmann, Jeffrey K. "Satisfying general proximity/similarity queries with metric trees." Information processing letters 40.4 (1991): 175-179.
  
### Evaluation
- Cluster evaluation by connectivity (internal):

  Handl, J., Knowles, J., & Kell, D. B. (2005). "Computational cluster validation in post-genomic data analysis." Bioinformatics, 21(15), 3201-3212.
  
- Validation of Arbitrary-Shaped Clusters

  Baya, Ariel E., and Pablo M. Granitto. "How many clusters: A validation index for arbitrary-shaped clusters." IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB) 10.2 (2013): 401-414.

### Visualization

- Additional visualizations of dendrograms (e.g. radial), labels for dendrograms.

- Kernel density for 1 dimensional plots.

- Andrew's curves (as a variant for parallel coordinates)

### Infrastructure

- Additional interactions with visualization

- More unit tests to improve code coverage

- Tutorials and guides

Medium difficulty
-----------------

- Data type support: categorial types with levels, e.g. based on the Arff format. Much of the challenge is to design an API that is easy to use *and* fast.

- LOBPCG Eigenvector solver:

  Benner, P., & Mach, T. (2011). “Locally optimal block preconditioned conjugate gradient method for hierarchical matrices”. In PAMM, 11(1), 741-742.

Algorithms for categorial data:

- ROCK clustering:

  S. Guha, R. Rastogi, and K. Shim. “ROCK: A robust clustering algorithm for categorical attributes”. In: Information systems 25.5 (2000), pp. 345–366

- Squeezer clustering for categorial data:

  Z. He, X. Xu, and S. Deng. “Squeezer: an efficient algorithm for clustering categorical data”. Journal of Computer Science and Technology 17.5 (2002): pp. 611–624.

- CB-LOF variant:

  Z. He, X. Xu, and S. Deng. “Discovering cluster-based local outliers”. In: Pattern Recognition Letters 24.9 (2003), pp. 1641–1650

Master level
------------

These projects will require substantial changes and refactorings to the codebase:

- Advanced user interface, e.g. web-based or Eclipse based
- "Query optimizer" for ELKI that automatically picks a good indexing strategy to accelerate the algorithm


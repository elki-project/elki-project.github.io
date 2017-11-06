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

- k-means using a kd-tree for acceleration.

  D. Pelleg and A. Moore. “Accelerating exact k-means algorithms with geometric reasoning”. In: Proceedings of the 5th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), San Diego, CA. 1999, pp. 277–281

  T. Kanungo, D. M. Mount, N. S. Netanyahu, C. D. Piatko, R. Silverman, and A. Y. Wu. “An efficient k-means clustering algorithm: Analysis and implementation”. In: IEEE Transactions on Pattern Analysis and Machine Intelligence 24.7 (2002), pp. 881–892

- k-means nach Hartigan & Wong:

  J. A. Hartigan, and M. A. Wong. “Algorithm AS 136: A k-means clustering algorithm.” Applied statistics (1979): 100-108.

- Accelerate EM algorithm (Gaussian Mixture Modeling) using kd-trees.

  A. W. Moore. “Very fast EM-based mixture model clustering using multiresolution kd-trees”. In: Proceedings of the Annual Conference on Neural Information Processing Systems (NIPS), Denver, CO (1999), pp. 543–549

- Fuzzy c-means:

  J. Dunn. “Well separated clusters and optimal fuzzy partitions”. In: Journal of Cybernetics 4 (1974), pp. 95–104

  J. C. Bezdek. Pattern recognition with fuzzy objective function algorithms. Kluwer Academic Publishers, 1981

  J. C. Bezdek, R. Ehrlich, and W. Full. “FCM: The fuzzy c-means clustering algorithm”. In: Computers & Geosciences 10.2 (1984), pp. 191–203

- ISODATA clustering:

  G. H. Ball and D. J. Hall. ISODATA, a novel method of data analysis and pattern classification. Tech. rep. Stanford Research Institute, 1965

- G-Means:

  G. Hamerly, and C. Elkan. "Learning the k in k-means". Advances in neural information processing systems, 16, 281. 2004.

- A simple and fast algorithm for K-medoids clustering:

  H.-S. Park, and C.-H. Jun. "A simple and fast algorithm for K-medoids clustering." Expert Systems with Applications 36.2 (2009): 3336-3341.

- "A new partitioning around medoids algorithm":

  M. Van der Laan, and K. Pollard, and J. Bryan. "A new partitioning around medoids algorithm." Journal of Statistical Computation and Simulation, 73(8) (2003): 575-584.

- "Spherical k-means":

  I. S. Dhillon, and D. S. Modha. Concept Decompositions for Large Sparse Text Data Using Clustering." Machine Learning 42(1) (2001): 143-175.

- "Trimmed k-means":

  J. A. Cuesta-Albertos, A. Gordaliza, and C. Matrán. "Trimmed k-means: an attempt to robustify quantizers." The Annals of Statistics, 25(2) (1997): 553-576.


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

- CLARANS algorithm: (*in progress*)

  R. T. Ng and J. Han. “CLARANS: A method for clustering objects for spatial data mining”. In: IEEE Transactions on Knowledge and Data Engineering 14.5 (2002), pp. 1003–1016

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

### Outlier detection algorithms

- ORCA fast version of KNNOutlier:

  S. D. Bay and M. Schwabacher. “Mining distance-based outliers in near linear time with randomization and a simple pruning rule”. In: Proceedings of the 9th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), Washington, DC. 2003, pp. 29–38

- Top-n LOF variant:

  W. Jin, A.K. Tung, and J. Han. “Mining Top-n Local Outliers in Large Databases”. In: Proceedings of the 7th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), San Francisco, CA. 2001, pp. 293–298

- Grid-based LOF variant:

  A. L.-M. Chiu and A. W.-C. Fu. “Enhancements on Local Outlier Detection”. In: Proceedings of the 7th International Database Engineering and Applications Symposium (IDEAS 2003), Hong Kong, China. 2003, pp. 298–307

- RBRP kNN variant:

  A. Ghoting, S. Parthasarathy, and M. E. Otey. “Fast mining of distance-based outliers in high-dimensional datasets”. In: Data Mining and Knowledge Discovery 16.3 (2008), pp. 349–364

### Association rule mining

- Additional measures of interestingness for association rule extraction

- CHARM:

  M. J. Zaki. "Generating non-redundant association rules". In: Proceedings of the 6th ACM International Conference on Knowledge Discovery and Data Mining (SIGKDD), 2000, pp. 34-43.

- Visualization of FPgrowth FP-Trees

- FPgrowth variations, such as FP-bonsai

### Data indexing

- Top-down bulk loading support for the R-tree, such as:

  Lee, Taewon, and Sukho Lee. "OMT: Overlap Minimizing Top-down Bulk Loading Algorithm for R-tree." CAiSE Short Paper Proceedings. Vol. 74. 2003.
  
- Vantage-Point trees:

  Yianilos, Peter N. "Data structures and algorithms for nearest neighbor search in general metric spaces." SODA. Vol. 93. No. 194. 1993.
  
  Bozkaya, Tolga, and Meral Ozsoyoglu. "Indexing large metric spaces for similarity search queries." ACM Transactions on Database Systems (TODS) 24.3 (1999): 361-404.
  
  Uhlmann, Jeffrey K. "Satisfying general proximity/similarity queries with metric trees." Information processing letters 40.4 (1991): 175-179.

### Visualization

- Visualization of Silhouette

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


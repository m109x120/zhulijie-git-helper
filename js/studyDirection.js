$(function() {
	//菜单初始化开始
  var oHeader = $('#header');
  getNav(oHeader, 2);

  var totalpages = null;
  // 每一页上面有10条数据
  var everyPage = 10;
  var pubArr = [
    {
      // 按照id进行排序
      id:'165',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.9b00277',
      publicationTitle:'Pengfei Yang, Zhepeng Zhang, Mengxing Sun,Feng Lin, Ting Cheng,Jianping Shi,Chunyu Xie,Yuping Shi, Shaolong Jiang,Yahuan Huan,Porun Liu,Feng Ding,Chunyang Xiong,§ Dan Xie*,and Yanfeng Zhang*,†Thickness Tunable Wedding-Cake Like MoS2 Flakes for High Performance Optoelectronics.ACS Nano 2019.DOI: 10.1021/acsnano.9b00277 ',
      time:'2019.02.20',
      year: '2019',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'164',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/pdf/10.1002/aelm.201800580',
      publicationTitle:'Mengxingsun, Pengfei Yang, Dan Xie, Yilin Sun, Jianlong Xu, Tianling Ren,Yanfeng Zhang,Self‐Powered MoS 2 –PDPP3T Heterotransistor‐Based Broadband Photodetectors,Advanced Electronic Materials, 2019,5,1800580',
      time:'2018.12.26',
      year: '2019',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'163',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://iopscience.iop.org/article/10.1088/1361-6528/aaff19/meta',
      publicationTitle:'Zhepeng Zhang, Pengfei Yang, Min Hong, Shaolong Jiang, Guanchao Zhao, Jianping Shi, Qin Xie and Yanfeng Zhang,Recent progress in the controlled synthesis of 2D metallic transition metal dichalcogenides,Nanotechnology 30 (2019) 182002',
      time:'2018.12.26',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'162',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/ente.201801025',
      publicationTitle:'Yahuan Huan,Jianping Shi,Guanchao Zhao,Xiaoqin Yan,*and Yanfeng Zhang*,Two-dimensional Metallic Transitional Metal Dichalcogenides for Electrochemical Hydrogen Evolution,Energy Techonology,10.1002/ente.201801025',
      time:'2018.12.26',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'161',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.8b08677',
      publicationTitle:'Zhepeng Zhang, Yue Gong, Xiaolong Zou, Porun Liu, Pengfei Yang, Jianping Shi, Liyun Zhao, Qing Zhang, Lin Gu, and Yanfeng Zhang ,Epitaxial Growth of Two-Dimensional Metal−Semiconductor Transition-Metal Dichalcogenide Vertical Stacks (VSe2/MX2) and Their Band Alignments.ACSNano 2018.DOI: 10.1021/acsnano.8b08677',
      time:'2018.12.26',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'160',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsami.7b17935',
      publicationTitle:'Mengxing Sun, Qiyi Fang, Zhepeng Zhang, Dan Xie,* Yilin Sun, Jianlong Xu, Weiwei Li, Tianling Ren, and Yanfeng Zhang*, All-Inorganic Perovskite Nanowires−InGaZnO Heterojunction for High-Performance Ultraviolet−Visible Photodetectors, ACS Appl. Mater. Interfaces. 2018, 10, 7231−7238.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'159',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/1361-6528/aab3a4/meta',
      publicationTitle:'Shaolong Jiang, Liyun Zhao, Yuping Shi, Chunyu Xie, Na Zhang, Zhepeng Zhang, Yahuan Huan, Pengfei Yang, Min Hong, Xiebo Zhou, Jianping Shi, Qing Zhang* and Yanfeng Zhang*, Temperature-dependent Raman spectroscopy studies of the interface coupling effect of monolayer ReSe2 single crystals on Au foils, Nanotechnology 2018, 29, 204003(1-8).',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'158',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/s41467-018-03388-5',
      publicationTitle:'Pengfei Yang, Xiaolong Zou, Zhepeng Zhang, Min Hong, Jianping Shi, Shulin Chen, Jiapei Shu, Liyun Zhao, Shaolong Jiang, Xiebo Zhou, Yahuan Huan, Chunyu Xie, Peng Gao, Qing Chen, Qing Zhang, Zhongfan Liu, Yanfeng Zhang*, Batch production of 6-inch uniform monolayer molybdenum disulfide catalyzed by sodium in glass, Nature Commun. 2018, 9, 979 (1-10). Pub. Date: 2018.03.07.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'157',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201705916',
      publicationTitle:'Yahuan Huan, # Jianping Shi, # Xiaolong Zou, Yue Gong, Zhepeng Zhang, Minghua Li, Liyun Zhao, Runzhang Xu, Shaolong Jiang, Xiebo Zhou, Min Hong, Chunyu Xie, He Li, Xingyou Lang, Qing Zhang, Lin Gu,* Xiaoqin Yan,* and Yanfeng Zhang*, Vertical 1T-TaS2 Synthesis on Nanoporous Gold for High-Performance Electrocatalytic Applications, Adv. Mater. 2018, 1705916(1-9). ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'156',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acs.jpclett.8b00260',
      publicationTitle:'Qiyi Fang, # Qiuyu Shang, # Liyun Zhao, Rui Wang, Zhepeng Zhang, Pengfei Yang, Xinyu Sui, Xiaohui Qiu, Xinfeng Liu, Qing Zhang,* and Yanfeng Zhang*, Ultrafast Charge Transfer in Perovskite Nanowire/2D Transition Metal Dichalcogenide Heterostructures, J. Phys. Chem. Lett. 2018, 9, 1655−1662. ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'155',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/s42004-018-0010-6',
      publicationTitle:'Shaolong Jiang,# Min Hong,# Wei Wei, Liyun Zhao, Na Zhang, Zhepeng Zhang, Pengfei Yang, Nan Gao, Xiebo Zhou, Chunyu Xie, Jianping Shi, Yahuan Huan, Lianming Tong, Jijun Zhao, Qing Zhang, Qiang Fu*, Yanfeng Zhang*, Direct synthesis and in situ characterization of monolayer parallelogrammic rhenium diselenide on gold foil, Commun. Chem. 2018, 1, 17(1-8). Pub. Date: 2018.03.22.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'154',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.rsc.org/en/content/articlelanding/2018/cs/c7cs00852j#!divAbstract',
      publicationTitle:'Ke Chen, # Liurong Shi, # Yanfeng Zhang* and Zhongfan Liu *, Scalable chemical-vapour-deposition growth of three-dimensional graphene materials towards energy-related applications, Chem. Soc. Rev. 2018, 47, 3018-3036.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'153',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.rsc.org/en/content/articlelanding/2018/cs/c8cs00167g#!divAbstract',
      publicationTitle:'Jingyu Sun,* Chen Lu, Yingze Song, Qingqing Ji, Xiuju Song, Qiucheng Li, Yanfeng Zhang, Li Zhang,* Jing Kong, and Zhongfan Liu*, Recent progress in the tailored growth of two-dimensional hexagonal boron nitride via chemical vapour deposition, Chem. Soc. Rev. 2018, 47, 4242-4257.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'152',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acs.nanolett.7b04847',
      publicationTitle:'Qiuyu Shang, Shuai Zhang, Zhen Liu, Jie Chen, Pengfei Yang, Chun Li, Wei Li, Yanfeng Zhang, Qihua Xiong,* Xinfeng Liu,* and Qing Zhang*, Surface Plasmon Enhanced Strong Exciton−Photon Coupling inHybrid Inorganic−Organic Perovskite Nanowires, Nano Lett. 2018, 18, 3335−3343.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'151',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-017-1855-1',
      publicationTitle:'Mengxing Sun, Qiyi Fang, Dan Xie,* Yilin Sun, Liu Qian, Jianlong Xu, Peng Xiao, Changjiu Teng,Weiwei Li, Tianling Ren, and Yanfeng Zhang,* Heterostructured graphene quantum dot/WSe2/Si photodetector with suppressed dark current and improved Detectivity, Nano Res. 2018, 11, 3233–3243.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'150',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.8b01773',
      publicationTitle:'Huihui Wang, Bingzhi Liu, Ling Wang, Xudong Chen, Zhaolong Chen, Yue Qi, Guang Cui, Huanhuan Xie, Yanfeng Zhang,* and Zhongfan Liu*, Graphene Glass Inducing Multidomain Orientations in Cholesteric Liquid Crystal Devices toward Wide Viewing Angles, ACS Nano 2018, 12, 6443−6451.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'149',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201801608',
      publicationTitle:'Zhaolong Chen, Xiang Zhang, Zhipeng Dou, Tongbo Wei,* Zhiqiang Liu, Yue Qi, Haina Ci, Yunyu Wang, Yang Li, Hongliang Chang, Jianchang Yan, Shenyuan  Yang, Yanfeng Zhang, Junxi Wang, Peng Gao,* Jinmin Li,* and Zhongfan Liu*,  High-Brightness Blue Light-Emitting Diodes Enabled by a Directly Grown Graphene Buffer Layer, Adv. Mater. 2018, 1801608(1-8).',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'148',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201801805',
      publicationTitle:'Yan Gao, Liyun Zhao, Qiuyu Shang, Yangguang Zhong, Zhen Liu, Jie Chen, Zhepeng Zhang, Jia Shi, Wenna Du, Yanfeng Zhang, Shulin Chen, Peng Gao, Xinfeng Liu,* Xina Wang,* and Qing Zhang*, Ultrathin CsPbX3 Nanowire Arrays with Strong Emission Anisotropy, Adv. Mater. 2018, 1801805 (1-9). ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'147',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/admi.201800662',
      publicationTitle:'Qiucheng Li, # Qingqing Wu,# Jing Gao, Tongbo Wei, Jingyu Sun, Hao Hong, Zhipeng Dou,Zhepeng Zhang, Mark H. Rümmeli, Peng Gao, Jianchang Yan,* Junxi Wang, Jinmin Li, Yanfeng Zhang,* and Zhongfan Liu*, Direct Growth of 5 in. Uniform Hexagonal Boron Nitride on Glass for High-Performance Deep-Ultraviolet Light-Emitting Diodes, Adv. Mater. Inter. 2018, 1800662(1-8). Pub Date: (Web): 2018. 07.01.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'146',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.8b04511',
      publicationTitle:'Liyun Zhao, Qiuyu Shang, Yan Gao, Jia Shi, Zhen Liu, Jie Chen, Yang Mi, Pengfei Yang, Zhepeng Zhang, Wenna Du, Min Hong, Yin Liang, Jingya Xie, Xiaoyong Hu, Bo Peng, Jiancai Leng, Xinfeng Liu, Yue Zhao,* Yanfeng Zhang,* and Qing Zhang*, High-Temperature Continuous-Wave Pumped Lasing from Large-Area Monolayer Semiconductors Grown by Chemical Vapor Deposition, ACS Nano 2018, 12, 9390−9396.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },{
      // 按照id进行排序
      id:'145',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/10.1002/admi.201800641',
      publicationTitle:'Min Hong,# Pengfei Yang,# Xiebo Zhou, Siqin Zhao, Chunyu Xie, Jianping Shi, Zhepeng Zhang, Qiang Fu, and Yanfeng Zhang*, Decoupling the Interaction between Wet-Transferred MoS2, and Graphite Substrate by an Interfacial Water Layer, Adv. Mater. Inter. 2018, 1800641(1-8).',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'144',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsami.8b11579',
      publicationTitle:'Lingzhi Cui, Xudong Chen, Bingzhi Liu, Ke Chen, Zhaolong Chen, Yue Qi, Huanhuan Xie, Fan Zhou, Mark H. Rümmeli, Yanfeng Zhang,* and Zhongfan Liu*, Highly Conductive Nitrogen-Doped Graphene Grown on Glass toward Electrochromic Applications, ACS Appl. Mater. Interfaces 2018, 10, 32622−32630.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'143',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201804616',
      publicationTitle:'Jianping Shi, Xuexian Chen, Liyun Zhao, Yue Gong, Min Hong, Yahuan Huan, Zhepeng Zhang, Pengfei Yang, Yong Li, Qinghua Zhang, Qing Zhang, Lin Gu, Huanjun Chen,* Jian Wang,* Shaozhi Deng, Ningsheng Xu, and Yanfeng Zhang*, Chemical Vapor Deposition Grown Wafer-Scale 2D Tantalum Diselenide with Robust Charge-Density-Wave Order, Adv. Mater. 2018, 1804616(1-9).',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'142',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.8b04872',
      publicationTitle:'Min Hong,# Xiebo Zhou,# Nan Gao,# Shaolong Jiang, Chunyu Xie, Liyun Zhao, Yan Gao, Zhepeng Zhang, Pengfei Yang, Yuping Shi, Qing Zhang, Zhongfan Liu, Jijun Zhao,* Yanfeng Zhang*, Identifying the Non-Identical Outermost Selenium Atoms and Invariable Band Gaps across the Grain Boundary of Anisotropic Rhenium Diselenide, ACS Nano 2018, 12, 10095−10103. ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'141',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-018-2194-6',
      publicationTitle:'Chunyu Xie§, Shaolong Jiang§, Xiaolong Zou§, Yuanwei Sun, Liyun Zhao1, Min Hong, Shulin Chen, Yahuan Huan, Jianping Shi, Xiebo Zhou, Zhepeng Zhang, Pengfei Yang, Yuping Shi, Porun Liu, Qing Zhang, Peng Gao, and Yanfeng Zhang*, Space-confined growth of monolayer ReSe2 under a graphene layer on Au foils, Nano Res. 2019, 12, 149-157. ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'140',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/1361-6528/aaea3f',
      publicationTitle:'Yuping Shi, Pengfei Yang, Shaolong Jiang, Zhepeng Zhang,Yahuan Huan, Chunyu Xie, Min Hong, Jianping Shi, and Yanfeng Zhang*, Na-assisted fast growth of large singlecrystal MoS2 on sapphire, Nanotechnology 2019, 034002 (1-9). ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'139',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201803639',
      publicationTitle:'Zhaolong Chen, Yue Qi, Xudong Chen, Yanfeng Zhang, and Zhongfan Liu*, Direct CVD Growth of Graphene on Traditional Glass: Methods and Mechanisms, Adv. Mater. 2018, 1803639(1-18). ',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'138',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.sciencedirect.com/science/article/pii/S0010854518302534',
      publicationTitle:'Jianping Shi, Min Hong, Zhepeng Zhang, Qingqing Ji, Yanfeng Zhang,* Physical properties and potential applications of two-dimensional metallic transition metal dichalcogenides, Coordin. Chem. Rev. 2018, 376, 1–19.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'137',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/aelm.201800580',
      publicationTitle:'Mengxing Sun, Pengfei Yang, Dan Xie,* Yilin Sun, Jianlong Xu, Tianling Ren, and Yanfeng Zhang*, Self-Powered MoS2–PDPP3T Heterotransistor-Based Broadband Photodetectors, Adv. Electron. Mater. 2018, 1800580(1-7).',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'136',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.8b08677',
      publicationTitle:'Zhepeng Zhang, Yue Gong, Xiaolong Zou, Porun Liu, Pengfei Yang, Jianping Shi, Liyun Zhao, Qing Zhang, Lin Gu, and Yanfeng Zhang*, Epitaxial Growth of Two-Dimensional Metal−Semiconductor Transition-Metal Dichalcogenide Vertical Stacks (VSe2/MX2) and Their Band Alignments, ACS Nano in press.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'135',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acs.nanolett.7b04342',
      publicationTitle:'Ruijing Ge,# Xiaohan Wu,# Myungsoo Kim, Jianping Shi, Sushant Sonde, Li Tao, Yanfeng Zhang, Jack C. Lee, and Deji Akinwande*, Atomristor: Nonvolatile Resistance Switching in Atomic Sheets of Transition Metal Dichalcogenides, Nano Lett. 2018, 18, 434−441.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'134',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201704839',
      publicationTitle:'Yue Qi, Bing Deng, Xiao Guo, Shulin Chen, Jing Gao, Tianran Li, Zhipeng Dou, Haina Ci, Jingyu Sun, Zhaolong Chen, Ruoyu Wang, Lingzhi Cui, Xudong Chen, Ke Chen, Huihui Wang, Sheng Wang, Peng Gao, Mark H. Rummeli, Hailin Peng, Yanfeng Zhang*, and Zhongfan Liu*, Switching Vertical to Horizontal Graphene Growth Using Faraday Cage-Assisted PECVD Approach for High-Performance Transparent Heating Device, Adv. Mater. 2018, 1704839(1-9).',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'133',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-017-1839-1',
      publicationTitle:'Haina Ci, Huaying Ren, Yue Qi, Xudong Chen, Zhaolong Chen, Jincan Zhang, Yanfeng Zhang*, Zhongfan Liu*, 6-inch uniform vertically-oriented graphene on soda-lime glass for photothermal applications, Nano Res. 2018, 11, 3106–3115.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'132',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-017-1796-8',
      publicationTitle:'Shaolong Jiang, Zhepeng Zhang, Na Zhang, Yahuan Huan, Yue Gong, Mengxing Sun, Jianping Shi, Chunyu Xie, Pengfei Yang, Qiyi Fang, He Li, Lianming Tong, Dan Xie, Lin Gu, Porun Liu, Yanfeng Zhang*, Application of chemical vapor-deposited monolayer ReSe2 in the electrocatalytic hydrogen evolution reaction, Nano Res. 2018, 11, 1787–1797.',
      time:'2018.12.07',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'131',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://engine.scichina.com/publisher/scp/journal/CSB/62/20/10.1360/N972016-01387?slug=fulltext',
      publicationTitle:'史建平, 周协波, 张哲朋, 张艳锋*，过渡金属硫属化合物层间异质结构的可控制备和能源应用. 科学通报, 2017, 62, 2180–2194.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'130',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.7b00313',
      publicationTitle:'Jiayu Li#, Li Lin#, Dingran Rui, Qiucheng Li, Jincan Zhang, Ning Kang*, Yanfeng Zhang, Hailin Peng, Zhongfan Liu*, and H. Q. Xu*, Electron−Hole Symmetry Breaking in Charge Transport in Nitrogen−Doped Graphene, ACS Nano 2017, 11, 4641−4650.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'129',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/s41467-017-01089-z',
      publicationTitle:'Jianping Shi#, Xina Wang#, Shuai Zhang, Lingfeng Xiao, Yahuan Huan, Yue Gong, Zhepeng Zhang, Yuanchang Li, Xiebo Zhou, Min Hong, Qiyi Fang, Qing Zhang, Xinfeng Liu, Lin Gu, Zhongfan Liu and Yanfeng Zhang*, Two-dimensional metallic tantalum disulfide as a hydrogen evolution catalyst, Nature Commun. 2017, 8, 958(1-9). ',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },{
      // 按照id进行排序
      id:'128',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jacs.7b00647',
      publicationTitle:'Yue Qi, Zhepeng Zhang, Bing Deng, Xiebo Zhou, Qiucheng Li, Min Hong, Yuanchang Li*, Zhongfan Liu*, and Yanfeng Zhang*, Irreparable Defects Produced by the Patching of h-BN Frontiers on Strongly Interacting Re(0001) and Their Electronic Properties, J. Am. Chem. Soc. 2017, 139, 5849−5856.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'127',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jacs.7b09755',
      publicationTitle:'Yue Qi, Caixia Meng, Xiaozhi Xu, Bing Deng, Nannan Han, Mengxi Liu, Min Hong, Yanxiao Ning, Kaihui Liu, Jijun Zhao, Qiang Fu, Yuanchang Li*, Yanfeng Zhang*, and Zhongfan Liu*, Unique Transformation from Graphene to Carbide on Re(0001) Induced by Strong Carbon−Metal Interaction, J. Am. Chem. Soc. 2017, 139, 17574–17581.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'126',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acs.nanolett.7b01914',
      publicationTitle:'Qingqing Ji #, Cong Li #, Jingli Wang, Jingjing Niu, Yue Gong, Zhepeng Zhang, Qiyi Fang, Yu Zhang, Jianping Shi, Lei Liao, Xiaosong Wu, Lin Gu*, Zhongfan Liu*, and Yanfeng Zhang*, Metallic Vanadium Disulfide Nanosheets as a Platform Material for Multifunctional Electrode Applications, Nano Lett. 2017, 17, 4908-4916.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'125',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201701325',
      publicationTitle:'Qiucheng Li, Zifeng Zhao, Baoming Yan, Xiuju Song, Zhepeng Zhang, Jia Li,Xiaosong Wu, Zuqiang Bian, Xiaolong Zou,* Yanfeng Zhang*, and Zhongfan Liu*, Nickelocene-Precursor-Facilitated Fast Growth of Graphene/h-BN Vertical Heterostructures, and Its Applications in OLEDs, Adv. Mater. 2017, 1701325(1-9).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'124',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201702359',
      publicationTitle:'Zhepeng Zhang, Jingjing Niu, Pengfei Yang, Yue Gong, Qingqing Ji, Jianping Shi, Qiyi Fang, Shaolong Jiang, He Li, Xiebo Zhou, Lin Gu, Xiaosong Wu, and Yanfeng Zhang*, Van der Waals Epitaxial Growth of 2D Metallic Vanadium Diselenide Single Crystals and their Extra-High Electrical Conductivity, Adv. Mater. 2017, 1702359(1-9).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'123',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/full/10.1021/acsnano.6b07773?src=recsys',
      publicationTitle:'Yue Qi, Nannan Han, Yuanchang Li, Zhepeng Zhang, Xiebo Zhou, Bing Deng, Qiucheng Li, Mengxi Liu, Jijun Zhao,* Zhongfan Liu,* and Yanfeng Zhang*, Strong Adlayer−Substrate Interactions “Break”the Patching Growth of h‑BN onto Graphene on Re(0001), ACS Nano 2017, 11, 1807−1815. ',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'122',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.7b01537',
      publicationTitle:'Zhepeng Zhang, Xujing Ji, Jianping Shi, Xiebo Zhou, Shuai Zhang, Yue Hou, Yue Qi, Qiyi Fang, Qingqing Ji, Yu Zhang, Min Hong,Pengfei Yang, Xinfeng Liu, Qing Zhang, Lei Liao, Chuanhong Jin,*, Zhongfan Liu, and Yanfeng Zhang*, Direct  Chemical Vapor Deposition Growth and Band-Gap Characterization of MoS2/h-BN van der Waals Heterostructures on Au Foils, ACS Nano 2017, 11, 4328−4336.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'121',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-017-1480-z',
      publicationTitle:'Qiyi Fang#, Zhepeng Zhang#, Qingqing Ji#, Siya Zhu, Yue Gong, Yu Zhang, Jianping Shi, Xiebo Zhou, Lin Gu, Qian Wang, and Yanfeng Zhang*, Transformation of monolayer MoS2 into multiphasic MoTe2: Chalcogen atom-exchange synthesis route, Nano Res. 2017, 10, 2761(1-7).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'120',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/cnma.201700031',
      publicationTitle:'Pengfei Yang, Zhepeng Zhang, Jianping Shi, Shaolong Jiang, and Yanfeng Zhang*, Progress in Controllable Construction and Energy-Related Applications of MX2/Graphene and MX2/MX2 Heterostructures, Chem. Nano. Mater. 2017, 3, 340 – 351.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'119',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-017-1601-8',
      publicationTitle:'Min Hong, Xiebo Zhou, Jianping Shi, Yue Qi, Zhepeng Zhang, Qiyi Fang, Yaguang Guo, Yajuan Sun, Zhongfan Liu, Yuanchang Li, Qian Wang, and Yanfeng Zhang*, Quasi-freestanding, striped WS2 monolayer with an invariable band gap on Au(001), Nano Res. 2017, 10, 3875-3884.',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'118',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201602967',
      publicationTitle:'Mengxi Liu, Jianping Shi, Yuanchang Li, Xiebo Zhou, Donglin Ma, Yue Qi, Yanfeng Zhang*, and Zhongfan Liu*, Temperature-Triggered Sulfur Vacancy Evolution in Monolayer MoS2/Graphene Heterostructures, Small 2017, 1602967(1-8).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'117',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.96.075402',
      publicationTitle:'Jingjing Niu and Baoming Yan, Qingqing Ji and Zhongfan Liu, Mingqiang Li, Peng Gao, Yanfeng Zhang*, Dapeng Yu and Xiaosong Wu*, Anomalous Hall effect and magnetic orderings in nanothick V5S8, Phys. Rev. B 2017, 96, 075402(1-7).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'116',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201701694',
      publicationTitle:'Yang Mi, Zhepeng Zhang, Liyun Zhao, Shuai Zhang, Jie Chen, Qingqing Ji, Jianping Shi,Xiebo Zhou, Rui Wang, Jia Shi, Wenna Du, Zhiyong Wu, Xiaohui Qiu, Qing Zhang,* Yanfeng Zhang*, and Xinfeng Liu*, Tuning Excitonic Properties of Monolayer MoS2 with Microsphere Cavity by High-Throughput Chemical Vapor Deposition Method, Small 2017, 1701694(1-9).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'115',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/aelm.201700212',
      publicationTitle:'Zhaolong Chen, Xu-Dong Chen, Huihui Wang, Xinqi Li, Li Lin, Ke Chen, Haina Ci, Xiaosong Wu, Yingying Zhang, Yanfeng Zhang*, and Zhongfan Liu*, One-Step Growth of Graphene/Carbon Nanotube Hybrid Films on Soda-Lime Glass for Transparent Conducting Applications, Adv. Electron. Mater. 2017, 17000212(1-8).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'114',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/aelm.201700373',
      publicationTitle:'Liyun Zhao, Xuewen Wang, Zhepeng Zhang, Pengfei Yang, Jie Chen, Yanqi Chen, Hao Wang, Qiuyu Shang, Yuyang Zhang, Yanfeng Zhang, Xinfeng Liu, Jiancai Leng,* Zheng Liu,* and Qing Zhang*, Surface State Mediated Interlayer Excitons in a 2D Nonlayered–Layered Semiconductor Heterojunction, Adv. Electron. Mater. 2017, 1700373(1-8).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'113',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201701486',
      publicationTitle:'Jia Shi, Peng Yu, Fucai Liu, Peng He, Rui Wang, Liang Qin, Junbo Zhou, Xin Li, Jiadong Zhou, Xinyu Sui, Shuai Zhang, Yanfeng Zhang, Qing Zhang, Tze Chien Sum, Xiaohui Qiu,* Zheng Liu,* and Xinfeng Liu*，“Jia Shi, Peng Yu, Fucai Liu, Peng He, Rui Wang, Liang Qin, Junbo Zhou, Xin Li,Jiadong Zhou, Xinyu Sui, Shuai Zhang, Yanfeng Zhang, Qing Zhang, Tze Chien Sum, Xiaohui Qiu,* Zheng Liu,* and Xinfeng Liu*, 3R MoS2 with Broken Inversion Symmetry: A Promising Ultrathin Nonlinear Optical Device, Adv. Mater. 2017, 1701486(1-9).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'112',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/aelm.201600502',
      publicationTitle:'Mengxing Sun, Qiyi Fang, Dan Xie*, Yilin Sun, Jianlong Xu, Changjiu Teng, Ruixuan Dai, Pu Yang, Zhixin Li, Weiwei Li, and Yanfeng Zhang, Novel Transfer Behaviors in 2D MoS2/WSe2 Heterotransistor and Its Applications in Visible-Near Infrared Photodetection, Adv. Electron. Mater. 2017, 1600502(1-7).',
      time:'2018.12.07',
      year: '2017',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'111',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.6b03668',
      publicationTitle:'Mengqi Zeng, Lifang Tan, Lingxiang Wang, Rafael G. Mendes, Zhihui Qin, Yaxin Huang,Tao Zhang, Liwen Fang, Yanfeng Zhang, Shuanglin Yue, Mark H. Rümmeli, Lianmao Peng, Zhongfan Liu, Shengli Chen, and Lei Fu*, Isotropic Growth of Graphene toward Smoothing Stitching, ACS Nano 2016, 10, 7189−7196.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'110',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201603428',
      publicationTitle:'Xudong Chen, Zhaolong Chen, Wenshuai Jiang, Cuihong Zhang, Jingyu Sun, Huihui Wang, Wei Xin, Li Lin, Manish K. Priydarshi, Huai Yang, Zhibo Liu, Jianguo Tian, Yingying Zhang*, Yanfeng Zhang*, Zhongfan Liu*, Fast Growth and Broad Applications of 25-Inch Uniform Graphene Glass, Adv. Mater. 2017, 29, 1603428(1-9).',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'109',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/ncomms13440',
      publicationTitle:'Ke Chen, Cong Li, Liurong Shi, Teng Gao, Xiuju Song, Alicja Bachmatiuk, Zhiyu Zou, Bing Deng, Qingqing Ji, Donglin Ma, Hailin Peng, Zuliang Du, Mark Hermann Ru¨mmeli, Yanfeng Zhang*, and Zhongfan Liu*, Growing three-dimensional biomorphic graphene powders using naturally abundant diatomite templates towards high solution processability, Nature Commum. 2016, 7, 13340(1-9).',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'108',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acs.nanolett.6b02279',
      publicationTitle:'Xiuju Song#, Teng Gao#, Yufeng Nie#, Jianning Zhuang, Jingyu Sun, Donglin Ma, Jianping Shi, Yuanwei Lin, Feng Ding, Yanfeng Zhang*, and Zhongfan Liu*, Seed-Assisted Growth of Single-Crystalline Patterned Graphene Domains on Hexagonal Boron Nitride by Chemical Vapor Deposition. Nano Lett. 2016, 16 (10), 6109-6116.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'107',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jacs.6b02262',
      publicationTitle:'Liurong Shi, Ke Chen, Ran Du, Alicja Bachmatiuk, Mark Hermann Rummeli, Kongwei Xie, Youyuan Huang, Yanfeng Zhang*, Zhongfan Liu*, Scalable Seashell-Based Chemical Vapor Deposition Growth of Three-Dimensional Graphene Foams for Oil−Water Separation, J. Am. Chem. Soc. 2016, 138(20), 6360-6363.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'106',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-016-1013-1',
      publicationTitle:'Ke Chen#, Cong Li#, Zhaolong Chen, Liurong Shi, Sathish Reddy, Huan Meng, Qingqing Ji, Yanfeng Zhang*, Zhongfan Liu*, Bioinspired synthesis of CVD graphene flakes and graphene-supported molybdenum sulfide catalysts for hydrogen evolution reaction, Nano Res. 2016, 9(1), 249-259.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'105',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-016-1187-6',
      publicationTitle:'Zhaolong Chen, Baolu Guan, Xudong Chen, Qing Zeng, Li Lin, Ruoyu Wang, Manish Kr. Priydarshi, Jingyu Sun, Zhepeng Zhang, Tongbo Wei, Jinmin Li, Yanfeng Zhang, Yingying Zhang*, and Zhongfan Liu*, Fast and uniform growth of graphene glass using confined-flow chemical vapor deposition and its unique applications, Nano Res. 2016, 9(10), 3048-3055.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'104',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201504762',
      publicationTitle:'Qingqing Ji#, Yu Zhang#, Jianping Shi#, Jingyu Sun, Yanfeng Zhang*, Zhongfan Liu*, Morphological Engineering of CVD-Grown Transition Metal Dichalcogenides for Efficient Electrochemical Hydrogen Evolution, Adv. Mater. 2016, 28(29), 6207-6212.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'103',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201602247',
      publicationTitle:'Jingyu Sun#, Yubin Chen#, Manish Kr. Priydarshi, Teng Gao, Xiuju Song, Yanfeng Zhang*, Zhongfan Liu*, Graphene Glass from Direct CVD Routes: Production and Applications, Adv. Mater. 2016, 28(29), 10333-10339.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'102',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201603174',
      publicationTitle:'Jianping Shi, Rui Tong, Xiebo Zhou, Yue Gong, Zhepeng Zhang, Qingqing Ji, Yu Zhang, Qiyi Fang, Lin Gu, Xina Wang, Zhongfan Liu, and Yanfeng Zhang*, Temperature-Mediated Selective Growth of MoS2/WS2 and WS2/MoS2 Vertical Stacks on Au Foils for Direct Photocatalytic Applications, Adv. Mater. 2016, 28(48), 10664-10672.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'101',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/admi.201600332',
      publicationTitle:'Jianping Shi#, Xiebo Zhou#, Gaofeng Han, Mengxi Liu, Donglin Ma, Jingyu Sun, Cong Li, Qingqing Ji, Yu Zhang, Xiuju Song, Xingyou Lang, Qing Jiang, Zhongfan Liu, Yanfeng Zhang*, Narrow-Gap Quantum Wires Arising from the Edges of Monolayer MoS2 Synthesized on Graphene, Adv. Mater. Inter. 2016, 1600332(1-8).',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'100',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adfm.201505571',
      publicationTitle:'Yu Zhang#, Qingqing Ji#, Jinxiu Wen, Jiu Li, Cong Li, Jianping Shi, Xiebo Zhou, Kebin Shi, Huanjun Chen,* Yuanchang Li,* Shaozhi Deng, Ningsheng Xu, Zhongfan Liu, and Yanfeng Zhang*, Monolayer MoS2 Dendrites on a Symmetry-Disparate SrTiO3 (001) Substrate: Formation Mechanism and Interface Interaction, Adv. Funct. Mater. 2016, 26(19), 3299-3305.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'99',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.6b00113',
      publicationTitle:'Ke Chen, Zhigang Chai, Cong Li, Liurong Shi, Mengxi Liu, Qin Xie, Yanfeng Zhang*, Dongsheng Xu, Ayyakkannu Manivannan, Zhongfan Liu*, Catalyst-Free Growth of Three-Dimensional Graphene Flakes and Graphene/g-C3N4 Composite for Hydrocarbon Oxidation, ACS Nano, 2016, 10(3), 3665-3673.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'98',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.5b07545',
      publicationTitle:'Xiebo Zhou#, Jianping Shi#, Yue Qi, Mengxi Liu, Donglin Ma, Yu Zhang, Qingqing Ji, Zhepeng Zhang, Cong Li, Zhongfan Liu*, Yanfeng Zhang*, Periodic Modulation of the Doping Level in Striped MoS2 Superstructures, ACS Nano, 2016, 10(3), 3461–3468.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'97',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acsnano.6b02548',
      publicationTitle:'Xiebo Zhou, Yue Qi, Jianping Shi, Jingjing Niu, Mengxi Liu, Guanhua Zhang, Qiucheng Li, Zhepeng Zhang, Min Hong, Qingqing Ji, Yu Zhang, Zhongfan Liu, Xiaosong Wu*, Yanfeng Zhang*, Modulating the Electronic Properties of Monolayer Graphene Using a Periodic Quasi-One-Dimensional Potential Generated by Hex-Reconstructed Au(001), ACS Nano 2016, 10(8), 7550-7557.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'96',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/aenm.201600541',
      publicationTitle:'Xiuju Song#, Jingyu Sun#, Yue Qi#, Teng Gao, Yanfeng Zhang*, Zhongfan Liu*, Graphene/h-BN Heterostructures: Recent Advances in Controllable Preparation and Functional Applications, Adv. Energy. Mater. 2016, 6(17), 1600541.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'95',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/10.1002/aenm.201600459',
      publicationTitle:'Jianping Shi#, Qingqing Ji#, Zhongfan Liu, Yanfeng Zhang*, Recent Advances in Controlling Synthesis and Energy Related Applications of MX2 and MX2/Graphene Heterostructures, Adv. Energy. Mater. 2016, 6(17), 1600459.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'94',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/2053-1583/3/3/035001',
      publicationTitle:'Cong Li#, Yu Zhang#, Qingqing Ji, Jianping Shi, Zhaolong Chen, Xiebo Zhou, Qiyi Fang and Yanfeng Zhang*, Substrate effect on the growth of monolayer dendritic MoS2 on LaAlO3 (100) and its electrocatalytic applications, 2D Materials, 2016, 3, 035001(1-8).',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'93',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.6b06066',
      publicationTitle:'Jingyu Sun, Zhaolong Chen, Long Yuan, Yubin Chen, Jing Ning, Shuwei Liu, Donglin Ma, Xiuju Song, Manish K. Priydarshi, Alicja Bachmatiuk, Mark H. Rümmeli, Tianbao Ma, Linjie Zhi, Libai Huang, Yanfeng Zhang*, and Zhongfan Liu*, Direct Chemical-Vapor-Deposition-Fabricated, Large-Scale Graphene Glass with High Carrier Mobility and Uniformity for Touch Panel Applications, ACS Nano 2016, 10(12), 11136-11144.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'92',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/cnma.201500160',
      publicationTitle:'Jingyu Sun, Yanfeng Zhang*, and Zhongfan Liu*, Direct Chemical Vapor Deposition Growth of Graphene on Insulating Substrates, Chem Nano Mat, 2016, 2(1), 9–18.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'91',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/srep23626',
      publicationTitle:'Jiu Li, Qingqing Ji, Saisai Chu, Yanfeng Zhang, Yan Li, Qihuang Gong, Kaihui Liu*, Kebin Shi*, Tuning the photo-response in monolayer MoS2 by plasmonic nano-antenna, Sci. Rep, 2016, 6, 23626.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'90',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/2053-1583/3/1/014001/meta',
      publicationTitle:'Xuefeng Liu, Hongyi Yu, Qingqing Ji, Zhihan Gao, Shaofeng Ge, Jun Qiu, Zhongfan Liu, Yanfeng Zhang, Dong Sun*, An ultrafast terahertz probe of the transient evolution of the charged and neutral phase of photo-excited electron-hole gas in a monolayer semiconductor, 2D Materials, 2016, 3, 014001(1-7).',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'89',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://chinesesites.library.ingentaconnect.com/content/apcs/apcs/2016/00000032/00000001/art00004',
      publicationTitle:'陈旭东#, 陈召龙#, 孙靖宇, 张艳锋, 刘忠范*,  石墨烯玻璃：玻璃表面上的石墨烯生长方法, 物理化学学报, 2016, 32(1), 14-27.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'88',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201501766',
      publicationTitle:'Qiucheng Li#, Mengxi Liu#, Yanfeng Zhang*, and Zhongfan Liu*, Hexagonal Boron Nitride–Graphene heterostructures: Synthesis and Interfacial Properties, Small 2016, 12, 32-50.',
      time:'2018.12.07',
      year: '2016',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'87',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/ncomms7835',
      publicationTitle:'Teng Gao, Xiuju Song, Huiwen Du, Yufeng Nie, Yubin Chen, Qingqing Ji, Jingyu Sun, Yanlian Yang, Yanfeng Zhang*, Zhongfan Liu*, Temperature-triggered chemical switching growth of in-plane and vertically stacked graphene-boron nitride heterostructures, Nat. Commun. 2015, 6, 6835(1-8).',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'86',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201504229',
      publicationTitle:'Yubin Chen#, Jingyu Sun#, *, Junfeng Gao, Feng Du, Qi Han, Yufeng Nie, Zhaolong Chen, Alicja Bachmatiuk, Manish Kr. Priydarshi, Donglin Ma, Xiuju Song, Xiaosong Wu, Chunyang Xiong, Mark H. Rümmeli, Feng Ding, Yanfeng Zhang*, and Zhongfan Liu*, Growing uniform graphene disks and films on molten glass for heating devices and cell culture, Adv. Mater. 2015, 27, 7839-7846.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'85',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201503342',
      publicationTitle:'Jianping Shi, Mengxi Liu, Jinxiu Wen, Xibiao Ren, Xiebo Zhou, Qingqing Ji, Donglin Ma, Yu Zhang, Chuanhong Jin, Huanjun Chen, Shaozhi Deng, Ningsheng Xu, Zhongfan Liu, and Yanfeng Zhang*, All Chemical Vapor Deposition Synthesis and Intrinsic Bandgap Observation of MoS2/Graphene Heterostructures, Adv. Mater. 2015, 27, 7086-7092.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'84',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acsnano.5b00081',
      publicationTitle:'Jianping Shi, Xiaona Zhang, DonglinMa, Jianbao Zhu, YuZhang, Zhenxi Guo, Yu Yao, Qingqing Ji, Xiuju Song, Yanshuo Zhang, Cong Li, Zhongfan Liu, Wenguang Zhu*, and Yanfeng Zhang*, Substrate Facet Effect on the Growth of Monolayer MoS2 on Au Foils, ACS Nano 2015, 9, 4017-4025.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'83',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-015-0727-9',
      publicationTitle:'Zhiyu Zou, Xiuju Song, Ke Chen, Qingqing Ji, Yanfeng Zhang*, and Zhongfan Liu*, Uniform single-layer graphene growth on recyclable tungsten foils, Nano Res. 2015, 8, 592-599. ',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'82',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-015-0816-9',
      publicationTitle:'Xiuju Song, Junfeng Gao, Yufeng Nie, Teng Gao, Jingyu Sun, Donglin Ma, Qiucheng Li, Yubin Chen, Chuanhong Jin, Alicja Bachmatiuk, Mark H. Rümmeli, Feng Ding*, Yanfeng Zhang*, and Zhongfan Liu*, Chemical vapor deposition growth of large-scale hexagonal boron nitride with controllable orientation, Nano Res. 2015, 8, 3164-3176.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'81',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-015-0849-0',
      publicationTitle:'Jingyu Sun, Yubin Chen, Xin Cai, Bangjun Ma, Zhaolong Chen, Manish Kr. Priydarshi, Ke Chen, Teng Gao1, Xiuju Song, Qingqing Ji, Xuefeng Guo, Dechun Zou, Yanfeng Zhang*, and Zhongfan Liu*, Direct low-temperature synthesis of graphene on various glasses by plasma-enhanced chemical vapor deposition for versatile, cost-effective electrodes, Nano Res. 2015, 8, 3496-3504.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'80',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-015-0866-z',
      publicationTitle:'Donglin Ma, Jianping Shi, Qingqing Ji, Ke Chen, Jianbo Yin, Yuanwei Lin, Yu Zhang, Mengxi Liu, Qingliang Feng, Xiuju Song, Xuefeng Guo, Jin Zhang, Yanfeng Zhang*, and Zhongfan Liu*, A universal etching-free transfer of MoS2 films for applications in photodetectors, Nano Res. 2015, 8, 3662-3672.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'79',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-015-0793-z',
      publicationTitle:'Yanshuo Zhang#, Jianping Shi#, Gaofeng Han, Minjie Li, Qingqing Ji, Donglin Ma, Yu Zhang, Cong Li, Xingyou Lang(*), Yanfeng Zhang*, and Zhongfan Liu, Chemical vapor deposition of monolayer WS2 nanosheets on Au foils toward direct application in hydrogen evolution, Nano Res. 2015, 8, 2881-2890.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'78',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://wulixb.iphy.ac.cn/EN/Y2015/V64/I7/078101',
      publicationTitle:'Mengxi Liu, Yanfeng Zhang*, Zhongfan Liu*, Scanning tunneling microscopy study of in-plane graphene-hexagonal boron nitride heterostructures, Acta Physica Sinica, 2015, 64, 078101(1-11).',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'77',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.rsc.org/en/Content/ArticleLanding/2015/CS/C4CS00258J#!divAbstract',
      publicationTitle:'Qingqing Ji, Yu Zhang, Yanfeng Zhang* and Zhongfan Liu*, Chemical vapour deposition of group-VIB metal dichalcogenide monolayers: engineered substrates from amorphous to single crystalline, Chem. Soc. Rev. 2015, 44, 2587-2602.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'76',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl503373x',
      publicationTitle:'Qingqing Ji, Min Kan, Yu Zhang, Yao Guo, Donglin Ma,  Jianping Shi, Qiang Sun, Qing Chen,  Yanfeng Zhang* and Zhongfan Liu*, Unravelling Orientation Distribution and Merging Behavior of Monolayer MoS2 Domains on Sapphire, Nano Lett. 2015, 15, 198-205.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'75',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/acs.nanolett.5b01852',
      publicationTitle:'Qiucheng Li, Xiaolong Zou, Mengxi Liu, Jingyu Sun, Yabo Gao, Yue Qi, Xiebo Zhou, Boris I. Yakobson*, Yanfeng Zhang*, and Zhongfan Liu*, Grain Boundary Structures and Electronic Properties of Hexagonal Boron Nitride on Cu(111), Nano Lett. 2015, 15, 5804-5810.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'74',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/10.1021/acs.nanolett.5b01936',
      publicationTitle:'Jingyu Sun, Yubin Chen, Manish Kr. Priydarshi, Zhang Chen, Alicja Bachmatiuk, Zhiyu Zou, Zhaolong Chen, Xiuju Song, Yanfeng Gao, Mark H. Rümmeli, Yanfeng Zhang*, and Zhongfan Liu*, Direct Chemical Vapor eposition-Derived Graphene Glasses Targeting Wide Ranged Applications, Nano Lett. 2015, 15, 5846-5854. ',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'73',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adfm.201403659',
      publicationTitle:'Jianping Shi, Yang Yang, Yu Zhang, Donglin Ma, Wei Wei, Qingqing Ji , Yanshuo Zhang, Xiuju Song, Teng Gao, Cong Li, Xinhe Bao, Zhongfan Liu, Qiang Fu* and Yanfeng Zhang*, Monolayer MoS2 Growth on Au Foils and On-Site Domain Boundary Imaging, Adv. Funct. Mater. 2015, 6, 842-849.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      
      // 按照id进行排序
      id:'72',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201501354',
      publicationTitle:'Jingxin Cheng#, Tao Jiang#, Qingqing Ji, Yu Zhang, Zhiming Li, Yuwei Shan, Yanfeng Zhang, Xingao Gong, Weitao Liu, and Shiwei Wu*, Kinetic nature of grain boundary formation in as-grown MoS2 monolayers, Adv. Mater. 2015, 27, 4069-4074.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'71',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.rsc.org/en/Content/ArticleLanding/2015/RA/C5RA12848J#!divAbstract',
      publicationTitle:'Yue Qi, Xiebo Zhou, Mengxi Liu, Qiucheng Li, Donglin Ma, Yanfeng Zhang*, and Zhongfan Liu*, Controllable synthesis of graphene using novel aromatic 1,3,5-triethynylbenzene molecules on Rh(111), RSC Adv. 2015, 5, 76620-76625.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'70',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://www.cnki.com.cn/Article/CJFDTotal-HXXB201509003.htm',
      publicationTitle:'史建平, 马冬林, 张艳锋*, 刘忠范*, 金箔上单层MoS2的控制生长及电催化析氢应用, 化学学报, 2015, 73, 877-885.',
      time:'2018.12.07',
      year: '2015',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'69',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: ' https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl500994m',
      publicationTitle:'Zhiyu Zou, Lei Fu, Xiuju Song, Yanfeng Zhang* and Zhongfan Liu*, Carbide-Forming Groups IVB-VIB Metals: A New Territory in the Periodic Table for CVD Growth of Graphene, Nano Lett. 2014, 14, 3832-3839.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'68',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl502780u',
      publicationTitle:'Mengxi Liu#, Yuanchang Li#, Pengcheng Chen, Jingyu Sun, Donglin Ma, Qiucheng Li, Teng Gao, Yabo Gao, Zhihai Cheng, Xiaohui Qiu, Ying Fang, Yanfeng Zhang* and Zhongfan Liu*, Quasi-Freestanding Monolayer Heterostructure of Graphene and Hexagonal Boron Nitride on Ir(111) with a Zigzag Boundary, Nano Lett. 2014, 14, 6342-6347.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'67',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn503211t',
      publicationTitle:'Jianping Shi#, Donglin Ma#, Gao-Feng Han, Yu Zhang, Qingqing Ji, Teng Gao, Jingyu Sun, Xiuju Song, Cong Li, Yanshuo Zhang, Xing-You Lang*, Yanfeng Zhang* and Zhongfan Liu, Controllable Growth and Transfer of Monolayer MoS2 on Au Foils and Its Potential Application in Hydrogen Evolution Reaction, ACS Nano 2014, 8, 10196-10204.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'66',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/ange.201400273',
      publicationTitle:'Lirong Xu#, Xin Zhou#, Weiquan Tian, Teng Gao, Yanfeng Zhang and Shengbin Lei* and Zhongfan Liu, Surface-Confined Single-Layer Covalent Organic Framework on Single-Layer Graphene Grown on Copper Foil, Angew. Chem. Int. Ed. 2014, 53, 9564-9568.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'65',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/nnano.2014.167',
      publicationTitle:'Xiaoping Hong#, Jonghwan Kim#, Su-Fei Shi#, Yu Zhang, Chenhao Jin, Yinghui Sun, Sefaattin Tongay, Junqiao Wu, Yanfeng Zhang and Feng Wang*, Ultrafast charge transfer in atomically thin MoS2/WS2 heterostructures, Nat. Nanotechnol. 2014, 9, 682-686.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'64',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jp4109915',
      publicationTitle:'Lan Meng, Wei Yan, Longjing Yin, Zhao-Dong Chu, Yanfeng Zhang, Lei Feng, Ruifen Dou* and Jiacai Nie, Tuning the Interlayer Coupling of the Twisted Bilayer Graphene by Molecular Adsorption, J. Phys. Chem. C 2014, 118, 6462-646.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'63',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn503412w',
      publicationTitle:'Yu Zhang, Qingqing Ji, Gao-Feng Han, Jing Ju, Jianping Shi, Donglin Ma, Jingyu Sun, Yanshuo Zhang, Minjie Li, Xing-You Lang, Yanfeng Zhang* and Zhongfan Liu, Dendritic, Transferable, Strictly Monolayer MoS2 Flakes Synthesized on SrTiO3 Single Crystals for Efficient Electrocatalytic Applications, ACS Nano 2014, 8, 8617-8624.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'62',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201400421',
      publicationTitle:'Donglin Ma, Mengxi Liu, Teng Gao, Cong Li, Jingyu Sun, Yufeng Nie, Qingqing Ji, Yu Zhang, Xiuju Song, Yanfeng Zhang* and Zhongfan Liu*, High-Quality Monolayer Graphene Synthesis on Pd Foils via the Suppression of Multilayer Growth at Grain Boundaries, Small 2014, 10, 4003-4011.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'61',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/ja5022602',
      publicationTitle:'Jingyu Sun, Teng Gao, Xiuju Song, Yanfei Zhao, Yuanwei Lin, Huichao Wang, Donglin Ma, Yubin Chen, Wenfeng Xiang, Jian Wang, Yanfeng Zhang* and Zhongfan Liu*, Direct Growth of High-Quality Graphene on High-κ Dielectric SrTiO3 Substrates, J. Am. Chem. Soc. 2014, 13, 6574-6577.',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },{
      // 按照id进行排序
      id:'60',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/srep03533',
      publicationTitle:'Qi Han, Teng Gao, Rui Zhang, Yi Chen, Jianhui Chen, Gerui Liu, Yanfeng Zhang*, Zhongfan Liu, Xiaosong Wu* and Dapeng Yu, Highly sensitive hot electron bolometer based on disordered graphene, Sci. Rep. 2013, 3, 3533(1-6).',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'59',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201303697',
      publicationTitle:'Qi Han, Baoming Yan, Teng Gao, Jie Meng, Yanfeng Zhang*, Zhongfan Liu, Xiaosong Wu*, and Dapeng Yu, Boron Nitride Film as a Buffer Layer in Deposition of Dielectrics on Graphene, Small 2014,11, 2293-2299. ',
      time:'2018.12.07',
      year: '2014',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'58',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: ' https://www.nature.com/articles/ncomms3205',
      publicationTitle:'Yabin Chen, Ziyong Shen, Ziwei Xu, Yue Hu, Haitao Xu, Sheng Wang, Xiaolei Guo, Yanfeng Zhang, Lianmao Peng, Feng Ding, Zhongfan Liu and Jin Zhang*, Helicity-dependent single-walled carbon nanotube alignment on graphite for helical angle and handedness recognition, Nat. Commun. 2013, 4, 2205(1-6).',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'57',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl403336x',
      publicationTitle:'Yabin Chen, Yue Hu, Mengxi Liu, Weigao Xu, Yanfeng Zhang, Liming Xie and Jin Zhang*, Chiral Structure Determination of Aligned Single-Walled Carbon Nanotubes on Graphite Surface, Nano Lett. 2013, 13, 5666-5672.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'56',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://aip.scitation.org/doi/abs/10.1063/1.4824206',
      publicationTitle:'Hui Yan#, Cheng-Cheng Liu#, Ke-Ke Bai#, Xuejiao Wang, Mengxi Liu, Wei Yan, Lan Meng, Yanfeng Zhang, Zhongfan Liu, Rui-fen Dou, Jiacai Nie, Yugui Yao*, Lin He*, Electronic structures of graphene layers on a metal foil: The effect of atomic-scale defects, Appl. Phys. Lett. 2013, 103, 143120(1-4).',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'55',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn403454e',
      publicationTitle:'Yu Zhang, Yanfeng Zhang*, Qingqing Ji, Jing Ju, Hongtao Yuan, Jianping Shi, Teng Gao, Donglin Ma, Mengxi Liu, Yubin Chen, Xiuju Song, Harold Y. Hwang, Yi Cui and Zhongfan Liu, Controlled Growth of High-Quality Monolayer WS2 Layers on Sapphire and Imaging Its Grain Boundary, ACS Nano 2013, 7, 8963-8971.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'54',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-013-0365-z',
      publicationTitle:'Yu Zhang, Yanfeng Zhang*, Donglin Ma, Qingqing Ji, Wei Fang, Jianping Shi, Teng Gao, Mengxi Liu, Yabo Gao, Yubin Chen, Limei Xu and Zhongfan Liu*, Mn atomic layers under inert covers of graphene and hexagonal boron nitride prepared on Rh (111), Nano Res. 2013, 6, 887-896.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'53',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.rsc.org/en/Content/ArticleLanding/2013/NR/c3nr03720g#!divAbstract',
      publicationTitle:'Mario Lanza, Teng Gao, Zixuan Yin, Yanfeng Zhang, Zhongfan Liu, Yuzhen Tong, Ziyong Shen and Huiling Duan*, Nanogap based graphene coated AFM tips with high spatial resolution, conductivity and durability, Nanoscale 2013,5, 10816-10823.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'52',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-013-0342-6',
      publicationTitle:'Donglin Ma, Yanfeng Zhang*, Mengxi Liu, Qingqing Ji, Teng Gao, Yu Zhang and Zhongfan Liu*, Clean transfer of graphene on Pt foils mediated by a carbon monoxide intercalation process, Nano Res. 2013, 6, 671-678.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'51',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-013-0326-6',
      publicationTitle:'Mario Lanza, Yan Wang, Teng Gao, Albin Bayerl, Marc Porti, Montserrat Nafria, Yangbo Zhou, Guangyin Jing, Yanfeng Zhang, Zhongfan Liu, Dapeng Yu and Huiling Duan*, Electrical and mechanical performance of graphene sheets exposed to oxidative environments, Nano Res. 2013, 6, 485-495.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'50',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl401938t',
      publicationTitle:'Qingqing Ji, Yanfeng Zhang*, Teng Gao, Yu Zhang, Donglin Ma, Mengxi Liu, Yubin Chen, Xiaofen Qiao, Ping-Heng Tan, Min Kan, Ji Feng, Qiang Sun and Zhongfan Liu*, Epitaxial Monolayer MoS2 on Mica with Novel Photoluminescence, Nano Lett. 2013, 13, 3870-3877.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'49',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/ncomms3159',
      publicationTitle:'Wei Yan#, Wen-Yu He#, Zhao-Dong Chu#, Mengxi Liu, Lan Meng, Rui-Fen Dou, Yanfeng Zhang, Zhongfan Liu, Jia-Cai Nie and Lin He*, Strain and curvature induced evolution of electronic band structures in twisted graphene bilayer, Nat. Commun. 2013, 4, 2159(1-7).',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'48',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201301336',
      publicationTitle:'Song Liu, Bo Lu, Qing Zhao*, Ji Li, Teng Gao, Yubin Chen, Yanfeng Zhang, Zhongfan Liu, Zhongchao Fan, Fuhua wang, Liping You and Dapeng Yu*, Boron Nitride Nanopores: Highly Sensitive DNA Single-Molecule Detectors, Adv. Mater. 2013, 25, 4549-4554.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'47',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl4021123',
      publicationTitle:'Yabo Gao, Yanfeng Zhang*, Pengcheng Chen, Yuanchang Li, Mengxi Liu, Teng Gao, Donglin Ma, Yubin Chen, Zhihai Cheng, Xiaohui Qiu, Wenhui Duan and Zhongfan Liu*, Toward Single-layer Uniform Hexagonal Boron Nitride–Graphene Patchworks with Zigzag Linking Edges, Nano Lett. 2013, 13, 3439-3443.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'46',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.87.205405',
      publicationTitle:'Lan Meng, Wen-Yu He, Hong Zheng, Mengxi Liu, Hui Yan, Wei Yan, Zhao-Dong Chu, Keke Bai, Rui-Fen Dou, Yanfeng Zhang, Zhongfan Liu, Jia-Cai Nie and Lin He*, Strain-induced one-dimensional Landau level quantization in corrugated graphene, Phys. Rev. B 2013, 87, 205405(1-6). ',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'45',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.201202962',
      publicationTitle:'Mengxi Liu#, Yabo Gao#, Yanfeng Zhang*, Yu Zhang, Donglin Ma, Qingqing Ji, Teng Gao, Yubin Chen and Zhongfan Liu*, Single and Polycrystalline Graphene on Rh (111) Following Different Growth Mechanisms, Small 2013, 9, 1360-1366.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'44',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://www.wanfangdata.com.cn/details/detail.do?_type=perio&id=hxxb201303004',
      publicationTitle:'张朝华, 付磊, 张艳锋, 刘忠范*, 石墨烯催化生长中的偏析现象及其调控方法, 化学学报, 2013, 71, 308-322.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'43',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.87.075405',
      publicationTitle:'Hui Yan, Zhao-Dong Chu, Wei Yan, Mengxi Liu, Lan Meng, Mudan Yang, Yide Fan, Jiang Wang, Rui-Fen Dou, Yanfeng Zhang, Zhongfan Liu, Jia-Cai Nie and Lin He*, Superlattice Dirac points and space-dependent Fermi velocity in a corrugated graphene monolayer, Phys. Rev. B 2013, 87, 075405(1-6).',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'42',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.87.075405',
      publicationTitle:'Hui Yan, Zhao-Dong Chu, Wei Yan, Mengxi Liu, Lan Meng, Mudan Yang, Yide Fan, Jiang Wang, Rui-Fen Dou, Yanfeng Zhang, Zhongfan Liu, Jia-Cai Nie and Lin He*, Superlattice Dirac points and space-dependent Fermi velocity in a corrugated graphene monolayer, Phys. Rev. B 2013, 87, 075405(1-6).',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'41',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201204380',
      publicationTitle:'Mario Lanza, Albin Bayerl, Teng Gao, Marc Porti, Montserrat Nafria, Guangyin Jing, Yanfeng Zhang, Zhongfan Liu and Huiling Duan*, Graphene-Coated Atomic Force Microscope Tips for Reliable Nanoscale Electrical Characterization, Adv. Mater. 2013, 25, 1440-1444.',
      time:'2018.12.07',
      year: '2013',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'40',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://www.cnki.com.cn/Article/CJFDTotal-WLHX201210029.htm',
      publicationTitle:'张艳锋*，高腾，张玉，刘忠范*，金属衬底上石墨烯的控制生长和微观形貌的STM表征, 物理化学学报, 2012, 28, 2456-2464.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'39',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn3047154',
      publicationTitle:'Mengxi Liu, Yanfeng Zhang*, Yubin Chen, Yabo Gao, Teng Gao, Donglin Ma, Qingqing Ji, Yu Zhang, Cong Li, Zhongfan Liu*, Thinning segregated graphene layers on high carbon solubility substrates of rhodium foils by tuning the quenching process, ACS Nano 2012, 6, 10581-10589.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'38',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.109.126801',
      publicationTitle:'Wei Yan#, Mengxi Liu#, Rui-Fen Dou, Lan Meng, Lei Feng, Zhao-Dong Chu, Yanfeng Zhang*, Zhongfan Liu, Jia-Cai Nie, and Lin He*, Angle-dependent van Hove singularities in a slightly twisted graphene bilayer, Phys. Rev. Lett. 2012, 109, 126801.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'37',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn302303n',
      publicationTitle:'Teng Gao, Yabo Gao, Cuizu Chang, Yubin Chen, Mengxi Liu, Shubao Xie, Ke He, Xucun Ma, Yanfeng Zhang* and Zhongfan Liu*, Atomic-scale morphology and electronic structure of manganese atomic layers underneath epitaxial graphene on SiC (0001), ACS Nano 2012, 6, 6562-6568.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'36',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-012-0239-9',
      publicationTitle:'Yabo Gao, Yanfeng Zhang*, Jun Ren, Denghua Li, Teng Gao, Ruiqi Zhao, Yanlian Yang, Sheng Meng, Chen Wang, and Zhongfan Liu*, Sequential assembly of metal-free phthalocyanine on few-layer epitaxial graphene mediated by thickness-dependent surface potential, Nano Res. 2012, 5, 543-549.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'35',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.85.235453',
      publicationTitle:'Lan Meng, Zhao-Dong Chu, Yanfeng Zhang, Ji-Yong Yang, Rui-Fen Dou, Jia-Cai Nie, and Lin He*, Enhanced intervalley scattering of twisted bilayer graphene by periodic AB stacked atoms, Phys. Rev. B 2012, 85, 235453(1-5).',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'34',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-012-0221-6',
      publicationTitle:'Yanfeng Zhang#, Teng Gao#, Shubao Xie#, Boya Dai, Lei Fu, Yabo Gao, Yubin Chen, Mengxi Liu and Zhongfan Liu*, Different growth behaviors of ambient pressure chemical vapor deposition graphene on Ni (111) and Ni films: A scanning tunneling microscopy study, Nano Res. 2012, 5, 402-411.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'33',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl204012c',
      publicationTitle:'Zhuoyu Chen#, Hongtao Yuan#,*, Yanfeng Zhang#, Kentaro Nomura, Teng Gao, Yabo Gao, Hidekazu Shimotani, Zhongfan Liu and Yoshihiro Iwasa*, Tunable Spin–Orbit Interaction in Trilayer Graphene Exemplified in Electric-Double-Layer Transistors, Nano Lett. 2012, 12, 2212-2216.',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'32',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://aip.scitation.org/doi/abs/10.1063/1.3691952',
      publicationTitle:'Lan Meng, Yanfeng Zhang, Wei Yan, Lei Feng, Lin He*, Rui-Fen Dou#, and Jia-Cai Nie, Single-layer behavior and slow carrier density dynamic of twisted graphene bilayer, Appl. Phys. Lett. 2012, 100, 091601(1-4).',
      time:'2018.12.07',
      year: '2012',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'31',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn203440r',
      publicationTitle:'Teng Gao#, Shubao Xie#, Yabo Gao, Mengxi Liu, Yubin Chen, Yanfeng Zhang* and Zhongfan Liu*, Growth and atomic-scale characterizations of graphene on multifaceted textured Pt foils prepared by chemical vapor deposition, ACS Nano 2011, 5, 9194-9201.',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'30',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-011-0127-8',
      publicationTitle:'Ruiqi Zhao, Yanfeng Zhang*, Teng Gao, Yabo Gao, Nan Liu, Lei Fu and Zhongfan Liu*, Scanning tunneling microscope observations of non-AB stacking of graphene on Ni films, Nano Res. 2011, 4, 712-721.',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'29',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nn200573v',
      publicationTitle:'Yanfeng Zhang#, Teng Gao#, Yabo Gao#, Shubao Xie, Qingqing Ji, Kai Yan, Hailin Peng and Zhongfan Liu *, Defect-like structures of graphene on copper foils for strain relief investigated by high-resolution scanning tunneling microscopy, ACS Nano 2011, 5, 4014-4022.',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'28',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jp202933u',
      publicationTitle:'Xun Liu#, Lei Fu#, Nan Liu, Teng Gao, Yanfeng Zhang, Lei Liao and Zhongfan Liu*, Segregation growth of graphene on Cu–Ni alloy for precise layer control, J. Phys. Chem. C 2011, 115, 11976-11982.',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'27',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.nature.com/articles/ncomms1210',
      publicationTitle:'Tadahiro Komeda*, Hironari Isshiki, Jie Liu, Yan-Feng Zhang, Nicolás Lorente, Keiichi Katoh, Brian K. Breedlove, Masahiro Yamashita(*), Observation and electric current control of a local spin in a single-molecule magnet, Nat. Commun. 2011, 2, 217(1-7).',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'26',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/1367-2630/12/11/113034/meta',
      publicationTitle:'Shaolong He#, *, Zhenhua Zeng#, Masashi Arita, Masahiro Sawada, Kenya Shimada, Shan Qiao*, Guoling Li, Wei-Xue Li*, Yan-Feng Zhang, Yi Zhang, Xucun Ma, Jinfeng Jia, Qi-Kun Xue, Hirofumi Namatame and Masaki Taniguchi, Band structure and Fermi surface of atomically uniform lead films, New J. Phys. 2010, 12, 113034(1-9).',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'25',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/nl103962a',
      publicationTitle:'Nan Liu#, Lei Fu#, Boya Dai, Kai Yan, Xun Liu, Ruiqi Zhao, Yanfeng Zhang and Zhongfan Liu*, Universal segregation growth approach to wafer-size graphene from non-noble metals, Nano Lett. 2011, 11, 297-303.',
      time:'2018.12.07',
      year: '2011',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'24',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s12274-010-0021-9',
      publicationTitle:'Yanfeng Zhang*, Pengfei Guan, Hironari Isshiki, Mingwei Chen, Masahiro Yamashita and Tadahiro Komeda*, Bis (phthalocyaninato) yttrium grown on Au (111): Electronic structure of a single molecule and the stability of two-dimensional films investigated by scanning tunneling microscopy/spectroscopy at 4.8 K, Nano Res. 2010, 3, 604-611.',
      time:'2018.12.07',
      year: '2010',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'23',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://aip.scitation.org/doi/abs/10.1063/1.3256288',
      publicationTitle:'Yanfeng Zhang, Yong Yang, Yoshiyuki Kawazoe and Tadahiro Komeda*, Experimental and theoretical investigations on the epitaxial growth of 4, 4’ stilbenedicarboxylic acid molecules on Au (111), J Chem. Phys. 2009, 131, 174706(1-5).',
      time:'2018.12.07',
      year: '2009',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'22',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jp9045935',
      publicationTitle:'Yanfeng Zhang, Hironari Isshiki, Keiichi Katoh, Yusuke Yoshida, Masahiro Yamashita, Hitoshi Miyasaka, Brian K. Breedlove, Takashi Kajiwara, Shinya Takaishi  and Tadahiro Komeda(*), A Low-Temperature Scanning Tunneling Microscope Investigation of a Nonplanar Dysprosium-Phthalocyanine Adsorption on Au (111), J. Phys. Chem. C 2009, 113, 14407-14410.',
      time:'2018.12.07',
      year: '2009',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'21',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/ja902349t',
      publicationTitle:'Keiichi Katoh, Yusuke Yoshida, Masahiro Yamashita*, Hitoshi Miyasaka, Brian K. Breedlove, Takashi Kajiwara, Shinya Takaishi, Naoto Ishikawa, Hironari Isshiki, Yanfeng Zhang, Tadahiro Komeda, Masakazu Yamagishi and Jun Takeya, Direct observation of lanthanide (III)-phthalocyanine molecules on Au (111) by using scanning tunneling microscopy and scanning tunneling spectroscopy and thin-film field-effect transistor properties of Tb (III)-and Dy (III)-phthalocyanine molecules, J. Am. Chem. Soc. 2009, 131, 9967-9976.',
      time:'2018.12.07',
      year: '2009',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'20',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jp902410q',
      publicationTitle:'Yanfeng Zhang, Hironari Isshiki, Keiichi Katoh, Yusuke Yoshida, Masahiro Yamashita, Hitoshi Miyasaka, Brian K. Breedlove, Takashi Kajiwara, Shinya Takaishi and Tadahiro Komeda*, Low-temperature scanning tunneling microscopy investigation of Bis (phthalocyaninato) yttrium growth on Au (111): from individual molecules to two-dimensional domains, J. Phys. Chem. C 2009, 113, 9826-9830.',
      time:'2018.12.07',
      year: '2009',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'19',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://aip.scitation.org/doi/abs/10.1063/1.2919992',
      publicationTitle:'Zhen Zhang, Yanfeng Zhang, Qiang Fu, Hui Zhang, Yunxi Yao, Teng Ma, Dali Tan1, Qikun Xue and Xinhe Bao*, Modulation of surface reactivity via electron confinement in metal quantum well films: O2 adsorption on Pb/Si (111), J. Chem. Phys. 2008, 129, 014704(1-4).',
      time:'2018.12.07',
      year: '2008',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'18',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jp710538u',
      publicationTitle:'Tatsuro Osada, Na Zhu, Yanfeng Zhang, and Tadahiro Komeda*, Molecule-precision cavity formation in molecular layer using scanning tunneling microscope lithography, J. Phys. Chem. C 2008, 112, 3835-3839.',
      time:'2018.12.07',
      year: '2008',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'17',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.sciencedirect.com/science/article/pii/S0039602807011582',
      publicationTitle:'Yanfeng Zhang, Na Zhu, T. Komeda*, Programming of a Mn-coordinated 4-4’-biphenyl dicarboxylic acid nanosystem on Au (111) and investigation of the non-covalent binding of C60 molecules, Surf. Sci. 2008, 602, 614-619.',
      time:'2018.12.07',
      year: '2008',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'16',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/0953-8984/19/13/136005/meta',
      publicationTitle:'Yun Qi, Weisheng Yang, Xucun Ma, Shuaihua Ji, Yingshuang Fu, Yanfeng Zhang, Jin-Feng Jia*, and Qi-Kun Xue, A study of the surface structure of deposited Au on Pb film, J. Phys.: Condens. Matter 2007, 19, 136005(1-6).',
      time:'2018.12.07',
      year: '2007',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'15',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.jps.jp/doi/abs/10.1143/JPSJ.76.082001',
      publicationTitle:'Jin-Feng Jia, Shao-Chun Li, Yanfeng Zhang, and Qi-Kun Xue*, Quantum size effects induced novel properties in two-dimensional electronic systems: Pb thin films on Si (111), J. Phys. Soc. Jpn. 2007, 76, 082001(1-23).',
      time:'2018.12.07',
      year: '2007',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'14',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://pubs.acs.org.ccindex.cn/doi/abs/10.1021/jp074925d',
      publicationTitle:'Yanfeng Zhang, Na Zhu, and T. Komeda*, Mn-coordinated stillbenedicarboxylic ligand supramolecule regulated by the herringbone reconstruction of Au (111), J. Phys. Chem. C 2007, 111, 16946-16950.',
      time:'2018.12.07',
      year: '2007',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'13',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://aip.scitation.org/doi/abs/10.1063/1.2710223',
      publicationTitle:'Yanfeng Zhang, Zhe Tang, Tie-Zhu Han, Xu-Cun Ma, Jin-Feng Jia, Qi-Kun Xue*, Kun Xun and Si-Cheng Wu, Oscillatory thermal expansion of Pb thin films modulated by quantum size effects, Appl. Phys. Lett. 2007, 90, 093120.',
      time:'2018.12.07',
      year: '2007',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'12',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://aip.scitation.org/doi/abs/10.1063/1.2382729',
      publicationTitle:'Tie-Zhu Han, Guo-Cai Dong, Quan-Tong Shen, Yanfeng Zhang, Jin-Feng Jia* and Qi-Kun Xue, Adhesion modulation by quantum size effects in Pb/Si (111) system, Appl. Phys. Lett. 2006, 89, 183109(1-3).',
      time:'2018.12.07',
      year: '2006',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'11',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://link.springer.com/article/10.1007/s11467-006-0021-0',
      publicationTitle:'Yanfeng Zhang, Shao-chun Li, Xu-cun Ma, Jin-feng Jia, Qi-Kun Xue, Quantum oscillations in Pb/Si (111) heterostructure system, Front. Phys. China 2006, 3, 323-333.',
      time:'2018.12.07',
      year: '2006',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'10',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.74.075410',
      publicationTitle:'Shao-Chun Li, Xucun Ma, Jin-Feng Jia*, Yanfeng Zhang, Dongmin Chen, Qian Niu, Feng Liu, Paul S. Weiss and Qi-Kun Xue, Influence of quantum size effects on Pb island growth and diffusion barrier oscillations, Phys. Rev. B 2006, 74, 075410(1-5).',
      time:'2018.12.07',
      year: '2006',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'9',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://www.cqvip.com/qk/94421x/200406/11864800.html',
      publicationTitle:'Yanfeng Zhang, Yang Guo, Xinyu Bao, Tiezhu Han, Zhe Tang, Lixin Zhang, Wenguang Zhu, Enge Wang, Qian Niu, Z. Q. Qiu, Jinfeng Jia, Zhongxian Zhao and Qikun Xue(*), Superconductivity modulated by quantum size effects, Journal of Chinese Electron Microscopy Society, 2005, 23, 599-602.',
      time:'2018.12.07',
      year: '2005',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'8',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/1009-1963/14/9/041/meta',
      publicationTitle:'Zhang Yanfeng*, Jia Jin-Feng, Han Tie-Zhu, Tang Zhe, Shen Quan-Tong, Guo Yang and Xue Qi-Kun*, Oscillatory electron phonon coupling in Pb/Si (111) deduced by temperature-dependent quantum well states, Chin. Phys. Soc. 2005, 14, 1910-1914.',
      time:'2018.12.07',
      year: '2005',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'7',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.95.247005',
      publicationTitle:'Xin-Yu Bao, Yanfeng Zhang, Yupeng Wang, Jin-Feng Jia, Qi-Kun Xue, X. C. Xie, and Zhong-Xian Zhao*, Quantum size effects on the perpendicular upper critical field in ultrathin lead films, Phys. Rev. Lett. 2005, 95, 247005(1-4).',
      time:'2018.12.07',
      year: '2005',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'6',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.sciencedirect.com/science/article/pii/S0039602805009519',
      publicationTitle:'Yan-feng Zhang*,  Jin-Feng Jia, Zhe Tang, Tie-Zhu Han, Xu-Cun Ma, Qi-Kun Xue*, Growth, stability and morphology evolution of Pb films on Si (111) prepared at low temperature, Surf. Sci. 2005, 596, L331-L338.',
      time:'2018.12.07',
      year: '2005',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'5',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.95.096802',
      publicationTitle:'Yan-feng Zhang, Jin-Feng Jia, Tie-Zhu Han, Zhe Tang, Quan-Tong Shen, Yang Guo, Z. Q. Qiu and Qi-Kun Xue*, Band structure and oscillatory electron-phonon coupling of Pb thin films determined by atomic-layer-resolved quantum-well states, Phys. Rev. Lett. 2005, 95, 096802(1-4).',
      time:'2018.12.07',
      year: '2005',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'4',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://iopscience.iop.org/article/10.1088/0256-307X/21/8/055/meta',
      publicationTitle:'Hong Liu*, Yanfeng Zhang, Deyong Wang, Jinfeng Jia and Qikun Xue*, Room-temperature growth of Al films on Si(111)-7×7 surface, Chin. Phys. Lett. 2004, 21, 1608-1611.',
      time:'2018.12.07',
      year: '2004',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'3',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://www.sciencedirect.com/science/article/pii/S0039602804010659',
      publicationTitle:'Hong Liu*, YanFeng Zhang, Deyong Wang, Minghu Pan, JinFeng Jia and QiKun Xue*, Two-dimensional growth of Al films on Si (111)-7×7 at low-temperature, Surf. Sci. 2004, 571, 5-11.',
      time:'2018.12.07',
      year: '2004',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'2',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.93.106102',
      publicationTitle:'Y. Han, J. Y. Zhu, Feng Liu*, Shao-Chun Li, Jin-Feng Jia, Yan-Feng Zhang, and Qi-Kun Xue*, Coulomb sink: A novel coulomb effect on coarsening of metal nanoclusters on semiconductor surfaces, Phys. Rev. Lett. 2004, 93, 106102(1-4).',
      time:'2018.12.07',
      year: '2004',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'1',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'http://science.sciencemag.org/content/306/5703/1915',
      publicationTitle:'Yang Guo#, Yanfeng Zhang#, Xinyu Bao#, Tiezhu Han, Zhe Tang, Lixin Zhang, Wenguang Zhu, Enge Wang, Qian Niu, Z. Q. Qiu, Jinfeng Jia, Zhongxian Zhao and Qikun Xue*, Superconductivity modulated by quantum size effects, Science 2004, 306, 1915-1917.',
      time:'2018.12.05',
      year: '2004',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
  ];
  // 对数组进行排序，改变原数组
  pubArr.sort((a,b)=>{
    return b.id-a.id;
  });
  // 年限变化的时候就重新渲染
  var handleYearArr = pubArr;
  $('#changeYear').change(function(){
    let currentYear = this.value;
    // 重新给handleYearArr进行赋值，handleYearArr是最终在页面上渲染的数据
    if (currentYear === 'default') {
      handleYearArr = pubArr;
    } else {
      handleYearArr = pubArr.filter(item => {
        return(item.year == currentYear);
      }); 
    }
   // 年份改变重新渲染界面
   $('#pubRender').html(template('publicationList',{"list":handleYearArr.slice(0,everyPage)}));
   initListAndPages();
  });
  initListAndPages();
  function initListAndPages() {
    // 列表初始化
    $('#pubRender').html(template('publicationList',{"list":handleYearArr.slice(0,everyPage)}));
    if(handleYearArr.length%everyPage === 0){
      totalpages = parseInt((handleYearArr.length)/everyPage);
    }else{
      totalpages = parseInt((handleYearArr.length)/everyPage)+1;
    }
    // 分页初始化
    $('.totalInfo').text(`一共${totalpages}页${handleYearArr.length}条数据`);
    if(handleYearArr.length){
      $("#paginator").bootstrapPaginator({
        bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
        currentPage:1,//当前页
        totalPages:totalpages,//总页数
        numberOfPages: 4,
        size:"small",//设置控件的大小，mini, small, normal,large
        onPageClicked:function(event, originalEvent, type,page){
          //为按钮绑定点击事件 page:当前点击的按钮值
          // alert(page);
          // alert(`event:${event},originalEvent:${originalEvent},type:${type},page:${page}`);
          $('#pubRender').html('');
          if(page === totalpages){
            // 最后一页,(page-1)*everyPage-1->rear
            $('#pubRender').html(template('publicationList',{"list":handleYearArr.slice((page-1)*everyPage)}));
          }else{
            // (page-1)*everyPage-1->page*everyPage
            $('#pubRender').html(template('publicationList',{"list":handleYearArr.slice((page-1)*everyPage,page*everyPage)}));
          }
        } 
      });
    }
  }
});


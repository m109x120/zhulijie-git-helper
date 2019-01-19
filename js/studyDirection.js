$(function() {
	//菜单初始化开始
  var oHeader = $('#header');
  getNav(oHeader, 2);

  var totalpages = null;
  // 每一页上面有6条数据
  var everyPage = 2;
  var pubArr = [
    {
      // 按照id进行排序
      id:'0',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/10.1002/adma.201704839',
      publicationTitle:'1.	Yue Qi, Bing Deng, Xiao Guo, Shulin Chen, Jing Gao, Tianran Li, Zhipeng Dou,Haina Ci, Jingyu Sun, Zhaolong Chen, Ruoyu Wang, Lingzhi Cui, Xudong Chen, Ke Chen, Huihui Wang, Sheng Wang, Peng Gao, Mark H. Rummeli, Hailin Peng, Yanfeng Zhang,* and Zhongfan Liu*, Switching Vertical to Horizontal Graphene Growth Using Faraday Cage-Assisted PECVD Approach for High-Performance Transparent Heating DeviceAdv. Mater. 2018, 1704839(1-9).',
      time:'2018.12.05',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'0',
      picUrl:'../images/publicationLists/1.jpg',
      aHref: 'https://onlinelibrary.wiley.com/doi/10.1002/adma.201704839',
      publicationTitle:'2.	Pengfei Yang, Xiaolong Zou, Zhepeng Zhang, Min Hong, Jianping Shi, Shulin Chen, Jiapei Shu, Liyun Zhao, Shaolong Jiang, Xiebo Zhou, Yahuan Huan, Chunyu Xie, Peng Gao, Qing Chen, Qing Zhang, Zhongfan Liu, Yanfeng Zhang*, Batch production of 6-inch uniform monolayer molybdenum disulfide catalyzed by sodium in glass, Nature Commun. 2018, 9, 979 (1-10).',
      time:'2018.12.05',
      year: '2018',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
  ];
  // 对数组进行排序，改变原数组
  pubArr.sort((a,b)=>{
    return a.id-b.id;
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


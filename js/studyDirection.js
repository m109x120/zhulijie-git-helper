$(function() {
	//菜单初始化开始
  var oHeader = $('#header');
  getNav(oHeader, 1);
  // 菜单初始化结束
  var totalpages = null;
  // 每一页上面有6条数据
  var everyPage = 6;
  var pubArr = [
    {
      // 按照id进行排序
      id:'0',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'1',
      picUrl:'',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'2',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'3',
      picUrl:'',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'4',
      picUrl:'',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'5',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'6',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'7',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'8',
      picUrl:'',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'9',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'10',
      picUrl:'',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'11',
      picUrl:'',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'12',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    },
    {
      // 按照id进行排序
      id:'13',
      picUrl:'../images/publicationLists/1.jpg',
      publicationTitle:'Biomacromolecules 2018, DOI:10.1021/acs.biomac.8b00190.',
      time:'2018.12.05',
      publicationPro:'A Versatile and Robust Approach to Stimuli-Responsive Protein Multilayers with Biologically Enabled Unique Functions. '
    }
  ];
  pubArr.sort((a,b)=>{
    return a.id-b.id;
  });
  var pubData = {"list":pubArr};
  // 列表初始化
  // let pubStr = template('publicationList',pubData);
  // $('#pubRender').html(pubStr);
  $('#pubRender').html(template('publicationList',{"list":pubArr.slice(0,everyPage)}));
  console.log(pubArr.length);
  if(pubArr.length%everyPage === 0){
    totalpages = parseInt((pubArr.length)/everyPage);
  }else{
    totalpages = parseInt((pubArr.length)/everyPage)+1;
  }
  // 分页初始化
  $('.totalInfo').text(`一共${totalpages}页${pubArr.length}条数据`);
  if(pubArr.length){
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
          $('#pubRender').html(template('publicationList',{"list":pubArr.slice((page-1)*everyPage)}));
        }else{
          // (page-1)*everyPage-1->page*everyPage
          $('#pubRender').html(template('publicationList',{"list":pubArr.slice((page-1)*everyPage,page*everyPage)}));
        }
      } 
    });
  }
});


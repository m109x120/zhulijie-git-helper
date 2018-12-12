/*
* 请在调用前先阅读
* 1.将导航菜单分出来，便于多次使用
* 2.obj：jQuery对象
* 3.id：默认滑块位置，比如首页id=0
* 4.该函数调用了startMove函数，所以调用前先引入animite.js
* 5.nav的样式被单独放到header-nav.css文件中，注意提前引入
*/

function getNav(obj,id){
    obj.html('<nav class="wrapper clearfix">\n' +
            '    <h1 class="logo">\n' +
            '      <a href="index.html"><span>个人博客</span><canvas id = "myHeart" width="60" height="60"></canvas></a>\n' +
            '    </h1>\n' +
            '    <ul id="nav-list" class="clearfix">\n' +
            '      <li class="nav-router"><a href="index.html">首页</a></li>\n' +
            '      <li class="nav-router"><a href="html/studyDirection.html">研究方向</a></li>\n' +
            '      <li class="nav-router"><a href="html/members.html">课题组成员</a></li>\n' +
            '      <li class="dairy sub-menu nav-router">\n' +
            '        <a href="html/studyResults.html">学术成果</a>\n' +
            '      </li>\n' +
            '      <li class="nav-router"><a href="html/recruit.html">招贤纳士</a></li>\n' +
            '    </ul>\n' +
            '  </nav>');
    /*根据id值设定动态路由*/
    if(id!==0){
        /*当前页面不是index调用的*/
        $('.logo>a')[0].setAttribute('href','../index.html');
        var $routers = $('.nav-router>a');
        $routers[0].setAttribute('href','../index.html');
        for(var i = 1;i<$routers.length;i++){
           var h = $routers[i].getAttribute('href').split('/');
           for(var j=0;j<h.length;j++){
               if(h[0]==='html'){
                   h[0] = null;
               }
           }
           h = h.join('');
           // console.log(h);
           // h = h.replace(',','');
           $routers[i].setAttribute('href',h);
        }
        // $('.nav-router>a').css('herf',)
    }
    /*背景精灵制作*/
    /*判断id获取默认位置*/
    if(parseInt(id)){
       $('#nav-list').css({'background-position':id*115+'px'});
    };
    /*鼠标移入移到当前位置*/
    $('#nav-list > li').mouseenter(function(){
        startMove( $('#nav-list')[0],{backgroundPosition:$(this).index()*115});
    });
    // 鼠标移出还原默认位置
    $('#nav-list').mouseleave(function(){
        startMove( $(this)[0],{backgroundPosition:id*115});
    });
}
//右侧导航栏 *************************************************************---王鑫
//   -------学无止境
function ToppicFn(jqNode,data){
    this.jqNode = jqNode;
    this.data = data;
    this.init();
}
ToppicFn.prototype.init = function (){
    //原型内部可以访问到this.jqNode但是在each的函数中却访问不到了，这时我们将this.jqNode声明为局部变量。
    //当each函数中的变量找不到时默认会想父级查找，通过这个原理给让each中可以访问到this.jqNode.
    var jqNode = this.jqNode
    $.each(this.data , function(index,element){
     $('<li></li>').appendTo(jqNode);
     if(index == 0 ){
       $('<a "href = / target = _blank"></a>').appendTo('.toppic>li:first');
       $('<i></i>').appendTo('.toppic>li:first>a');
       $('<img src = '+ element.img +'></img>').appendTo('.toppic>li:first>a>i')
       $('<h2></h2>').text(element.title).appendTo('.toppic>li:first>a');
       $('<span></span>').text(element.top).appendTo('.toppic>li:first>a');
     }else if (index == 1){
       $('<a "href = / target = _blank"></a>').appendTo('.toppic>li:last');
       $('<i></i>').appendTo('.toppic>li:last>a');
       $('<img src = '+ element.img +'></img>').appendTo('.toppic>li:eq(1)>a>i');
       $('<h2></h2>').text(element.title).appendTo('.toppic>li:eq('+index+')>a');
       $('<span></span>').text(element.top).appendTo('.toppic>li:eq('+index+')>a');
     }
    });
}
// ---------博主介绍
 
function About_MeFn(jqNode ,data){
            this.jqNode = jqNode ;
            this.data = data ;
            this.about_me_init();
            this.about_Trc();
}
About_MeFn.prototype.about_me_init = function (){
    jqNode = this.jqNode ;
    $.each(this.data,function(i,e){
      $('<h2></h2>').text(e.title_bar).appendTo(jqNode);
      $('<ul></ul>').appendTo('.about_me');
      $('<i><img src = '+ e.img +'></img></i>').appendTo('.about_me > ul:first');
      $('<p class = "transFromColor"><b>'+ e.author + '</b>'+ e.detials+'</p>').appendTo('.about_me > ul:first');
    });
}
About_MeFn.prototype.about_Trc = function (){
    $('.transFromColor').css({color : '#0278db'});
    setInterval(function(){
    setTimeout("$('.transFromColor').css({color : '#01bffd'})",1000);
    setTimeout("$('.transFromColor').css({color : '#008bf7'})",2000);
    },2000);
}
//--------图片精选
function WdxcFn(jqNode,data){
        this.jqNode = jqNode ; 
        this.data = data ; 
        this.init();
}
WdxcFn.prototype.init = function () {
    var jqNode = this.jqNode ;
    $.each(this.data,function(i,e){
        if(i == 0 ){
                  $('<h2></h2>').text(e.title_bar).appendTo(jqNode);
                   $('<ul></ul>').appendTo(jqNode);
           for(var a = 0 ; a < e.wdxcImg.length ; a ++){
            $('<li><a href = javascript:void(0); ><img src = '+e.wdxcImg[a] +'></img></a></li>').appendTo('.wdxc>ul:first');
           }
        }
    });
}
//-------文章分类
function FenleiFn(jqNode,data){
  this.jqNode = jqNode ; 
  this.data = data ; 
  this.init();
}
FenleiFn.prototype.init = function (){
    var jqNode = this.jqNode ;
    jQuery.each(this.data,function(i,e){
          if(i === 0){
            //当i=== 0时，访问不到索引1中的对象值
                  $('<ul></ul>').appendTo(jqNode);
              for(var a = 0 ; a < e.subTitle.length ; a++ ){
                  $('<li><a href = javascript:void(0);>'+e.subTitle[a] +'</a></li>').appendTo('.fenlei>ul:first');
                 }
          }else{
             $('<h2></h2>').text(e.topTitle).prependTo(jqNode);
          }
    });
}    
//------推荐
    //-----
function TuijianFn (jsNode,data){
          this.jsNode = jsNode ;
          this.data = data ;
          this.tuijian_count = 0 ;
          this.init();
          this.tuijian_click();
          this.tuijian_lunbo();
}   
    //函数只有调用后才生效。。。。
TuijianFn.prototype.init = function (){
        jsNode = this.jsNode ;
        tuijianDatas = this.data ;
            //------获取标签将内容放置其中
        var tuijian = document.getElementById('tuijian_id');
        var content = document.getElementById('content');
        var tabDatas = tuijianDatas.tabDatas;
        var contentDatas = tuijianDatas.contentDatas;
                //------遍历对象将标题和内容分别放入页面内，为了使用原有的CSS样式，就必须遵循原有的CSS的行内样式 命名规则。
                //------遍历对象需要是用for in 循环
          for(key in tuijianDatas){
              //key中获取的是对象中的键值，因为对象中有多个键值对所以我们需要进行判断，如果匹配某个键那么就遍历这个键中的内容。
                  if(key == 'tabDatas'){
                    var tuih2 = document.createElement('h2');
                      tuih2.id = 'tab';
                      tuih2.class = 'tuih2tab' ;
                      tuijian.insertBefore(tuih2,content);
                        for(var a = 0 ; a < tabDatas.length ; a++){
                          var tuia = document.createElement('a');
                          tuia.setAttribute('data-index',a);
                           if(a === 0 ){
                      $(tuia).addClass('current');
                    }
                   
                      tuia.innerText = tabDatas[a];
                      tuia.href = 'javascript:void(0);' ;
                      tuih2.appendChild(tuia);
                    }
                }else{
              for( a = 0 ; a < contentDatas.length ; a++){
                    var conul = document.createElement('ul');
                    conul.setAttribute('data-index',a);
                    if(a === 0 ){
                        conul.style.display = 'block';
                        conul.id = 'content_clone' ;
                    }
                    content.appendChild(conul);
                    for(key in contentDatas[a]){
                      var conli = document.createElement('li');
                      conul.appendChild(conli);
                      var cona = document.createElement('a');
                      cona.href = 'javascript:void(0);' ;
                      cona.innerText = contentDatas[a][key];
                      conli.appendChild(cona);
                    }
              }
              }
            }   
}

TuijianFn.prototype.tuijian_click = function (){
        tuijian_count = this.tuijian_count ;
        $('#tab>a').click(function(){
                        $(this).addClass('current').siblings().removeClass('current');
                       var index = ($(this).data('index'));
                        $('#content').animate({
                            left : -300 * index + 'px'
                          })
                        tuijian_count = index ;
                        return false ;
        });
}
     
TuijianFn.prototype.tuijian_lunbo = function (){
        var tuijian_timer = null;
        var tuijian_lunbo =  null;
        tuijian_count = this.tuijian_count ;
        // var tuijian_count = 0 ;
         //克隆
          $('#content_clone').clone().appendTo('#content')
          //设置定时器
          tuijian_lunbo = setInterval( tuijian_Interval ,1000);
                 $('.tuijian').mouseenter(function(){
                    clearInterval(tuijian_lunbo)
                  }).mouseleave(function(){
                    tuijian_lunbo = setInterval( tuijian_Interval,1000);
                  });
                  //轮播图方法
                function tuijian_Interval(){
                    if(tuijian_count === 3){
                       $('#tab>a').eq(0).addClass('current').siblings().removeClass('current');
                     }
                             if(tuijian_count === 4){
                                  $('#content').css({ left  : 0 + 'px', })
                                      tuijian_count = 1 ;
                          // console.log('这是克隆图片')
                              }
                          $('#content').animate({
                            left : -300 * tuijian_count + 'px'
                          });
                      $('#tab>a').eq(tuijian_count).addClass('current').siblings().removeClass('current');
                            tuijian_count ++ ;
                   }
}   

//-----关注我
function GuanZhuFn (jqNode,data) {
        //指向函数本身 
         this.jqNode = jqNode ;
          this.data = data ;
          this.init(); 
          this.gridding();
}
GuanZhuFn.prototype.init = function (){
            jqNode = this.jqNode ; 
         $('<h2></h2>').text(this.data[0].topTitle).appendTo(jqNode);
          $('<ul><img src ='+ this.data[1].weChatCodeImg +' id = gzimg> </img></ul>').appendTo(jqNode);
}
       //网格动画方法
GuanZhuFn.prototype.gridding = function (){
         var img = $("#gzimg");
           img.gridImageAnimation({ 'mode' : 'fadeIn', 
                             'cell' : 20 , 
                             'speed' : 60, 
                             'durationFading' : 3000,
                             'previewBox' : '.guanzhu', 
                              complete : null
                                      }); 
           $("#gzimg").mouseenter(function(){
                  $(this).stop().animate({
                    top :  30 ,
                  }, 1500);
             });
             $("#gzimg").mouseleave(function(){
                  $(this).stop().animate({
                    top :  0 ,
                  }, 1500);
             });
}
//**************************关于我
//
//

function about_MeFn (jqNode,data){
      this.jqNode = jqNode  ;
      this.data =  data  ;
      this.init();
  }
about_MeFn.prototype.init = function (){
 var about_Me_timer_Count = 0 ;
      var jqNode = this.jqNode ;
       var data  =  this.data   ;

    $.each(data,function (i ,e ){
      //创建基本结构
      if(i=== 0 ){
      $('<h2></h2>').text(e.title).appendTo(jqNode);
      $('<div class="biji-content" id="content"> </div>').appendTo(jqNode);
      $(' <div class="navlist"><ul></ul></div>').appendTo(jqNode);
      $('<div class="navtab"></div>').appendTo(jqNode);
      // for()
      //创建标题栏
      }else if (i === 1 ){
      $.each(e,function(i,e){
         if(i == 0){
          $('<li ><a href=#top'+i+'>'+e+'</a></li>').addClass("navcurrent").attr('data-index',i).appendTo('.navlist>ul');
          $('<div class="navitem"  style="display: block;" id = "top'+i+'"><div class="content"></div></div>').attr('data-index',i).appendTo('.navtab');
         }else{
          $('<li><a href=#top'+i+'>'+e+'</a></li>').attr('data-index',i).appendTo('.navlist>ul');
          $('<div class="navitem" id = "top'+i+'"> <div class="content"></div></div>').attr('data-index',i).appendTo('.navtab');
         }
      });
      }else if (i == 2){
          $.each(e,function (i ,e) {
                if(i == 'img0'){
                    $('<a href = javacript:void(0);></a>').addClass('iconfont').html(e).appendTo('#top0>.content')
                }else if (i == 'mail0'){
                   $('<a href = javacript:void(0);></a>').addClass('iconfont').html('&#xe699; '+e).appendTo('#top0>.content')
                }
                else{
                  $('<a href = javacript:void(0);></a>').addClass('iconfont').html('&#xe663; '+e).appendTo('#top0>.content')
                }
      }); 
      }else if (i == 3){
      $.each(e,function (i ,e) {
           $('<a href = javacript:void(0);></a>').addClass('iconfont').html('&#xe602; '+e).appendTo('#top1>.content')
      });
      }else if (i == 4){
      $.each(e,function (i ,e) {
           $('<a href = javacript:void(0);></a>').addClass('iconfont').html('&#xe602; '+e).appendTo('#top2>.content')
      });
      }else if (i == 5){
      $.each(e,function (i ,e) {
           $('<a href = javacript:void(0);></a>').addClass('iconfont').html('&#xe602; '+e).appendTo('#top3>.content')
      });
      }else if (i == 6){
      $.each(e,function (i ,e) {
           $('<a href = javacript:void(0);></a>').addClass('iconfont').html('&#xe602; '+e).appendTo('#top4>.content')
      });
      }
      });
  // 轮播功能
  function about_Me_lunbo(){
     $('.navlist>ul>li').eq(about_Me_timer_Count).addClass("navcurrent").siblings().removeClass("navcurrent")
     $('.navitem').eq(about_Me_timer_Count).stop().fadeIn(2000).css({display:'block'}).siblings().css({display:'none'});
     if (about_Me_timer_Count ==5 ){
     $('.navitem').eq(0).stop().fadeIn(2000).css({display:'block'}).siblings().css({display:'none'});
     $('.navlist>ul>li').eq(0).addClass("navcurrent").siblings().removeClass("navcurrent")
      about_Me_timer_Count = 0;
    }
  about_Me_timer_Count ++ ;
  }
    // 设置定时器启动轮播
   var about_Me_timer = setInterval(about_Me_lunbo,2000);
   $(jqNode).mouseenter(function (){
    clearInterval(about_Me_timer);
   });  
    $(jqNode).mouseleave(function (){
   about_Me_timer = setInterval(about_Me_lunbo,2000);
   });  
     $('.navlist>ul>li').click(about_Me_click);
  $('.navlist>ul>li').click(about_Me_click);

  function about_Me_click(){
      $(this).addClass("navcurrent").siblings().removeClass("navcurrent")
   var index = $(this).data('index');
       $('.navitem').eq(index).stop().show().css({display:'block'}).siblings().css({display:'none'});
       about_Me_timer_Count = index ;
      return false ;
    }
}
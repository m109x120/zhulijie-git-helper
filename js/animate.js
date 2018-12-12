/*
*author:Grace
* time：2018/7
*/
/*
* attr：width，fontSize，borderWidth,opacity(只要是数字的都可以)...
* obj: 原生DOM
* fun：回调函数,传了就执行，不传就算了
*startMove(oDiv,{height:500,width:500,opacity:50},fun)
*/
function startMove(obj,json,fn){
  //定时器与事件结合需要先清定时器，防止多点击加速
  clearInterval(obj.startMovetimer);
  obj.startMovetimer = setInterval(function(){
    //当前的样式与速度是会变化的，必须放在定时器里才能改变他的值，放在外面会到不了目标点
    var isStop = true;//所有目标点都已到达
    //循环json，同时改变多个属性
    for(var attr in json){
      var current = attr == 'opacity' ? parseInt(parseFloat(getStyle(obj,attr))*100) : parseInt(getStyle(obj,attr));
      // speed = (json[attr] - current)/8;
      /*分母越小速度越快，据说8最合适*/
      speed = (json[attr] - current)/6;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if(current != json[attr]){
        isStop = false;
      }
      if(attr == 'opacity'){
        obj.style.filter = 'alpha(opacity:'+(current + speed)+')';
        obj.style.opacity = (current + speed)/100;
      }
      else{
        obj.style[attr] = current + speed  + "px";
      }
    }
    if(isStop){
      clearInterval(obj.startMovetimer);
      if(fn){
        fn();
      }
    }
  },30);
}
/*
*1.elasticMove(oDiv,{left:300});
*2.elasticMove(oDiv,{'background-position':300});
*3.如果设置不了负值就不要再用了，效果很差劲
*4.obj：DOM节点
*/
function elasticMove(obj,json,fn){
    //定时器与事件结合需要先清定时器，防止多点击加速
    clearInterval(obj.startMovetimer);
    obj.speed = 0;
    obj.startMovetimer = setInterval(function(){
        //循环json，同时改变多个属性
        for(var attr in json){
            var current = parseInt(getStyle(obj,attr));
            obj.speed +=  (json[attr] - current)/5;
            // 0.7是摩擦系数，可以变更
            obj.speed =  obj.speed*0.7;
            // left += obj.speed;
            obj.style[attr] = current + obj.speed  + "px";
            if(Math.abs( obj.speed)<1 && Math.abs(current-json[attr])<1){
                clearInterval(obj.startMovetimer);
                obj.style[attr] = json[attr] +'px';
            }
        }
    },30);
}
/*
* 1.obj必须是jQuery对象
* 2.obj必须加position：relative;
* 3.调用之前必须保证jQuery的引入
*/
function jellyElastic(obj){
    /*包装节点开始*/
    for(var i = 0;i<obj.length;i++){
        //把每个a里面的文字劈成数组
        var aHtml = obj.eq(i).html().split('');
        for(var j = 0;j<aHtml.length;j++){
            //将取出来的单个文字给它包一层span，便于单独控制每一个文字的位置
            aHtml[j] = '<span>'+aHtml[j]+'</span>';
        }
        //将刚才包好的节点串成字符串，方便插入
        obj.eq(i).html(aHtml.join(''));
    }
    /*包装节点结束*/
    /*对节点进行运动操作*/
    /*这是所有span节点*/
    var $aSpan = obj.children('span');
    /*给每一个span加绝对定位，相对于父元素a进行定位，并且赋初值为当前位置*/
    for(var i = 0;i<$aSpan.length;i++){
        /*获取每一个span元素的位置坐标，并赋值给left*/
        $aSpan.eq(i).css('left',$aSpan.eq(i).position().left+'px');
    }
    $aSpan.css('position','absolute');
    /*设定运动初始位置*/
    var iStartTop = $aSpan.position().top;
    var iMinTop = -10;
    var iMaxTop = 10;
    var ele = null;
    $aSpan.on('mouseenter',aaa);
    function aaa(ev) {
        this.parentNode.onmouseout = null;
        this.parentNode.onmousemove = null;
        var ev = ev || event;
        var iStartY = ev.clientY;
        obj = $(this);
        this.parentNode.onmousemove = function(ev) {
            $(this).find("span").off("mouseenter", aaa);
            $(this).find("span").on("mouseenter", bbb);
            var iMouseY = ev.clientY;
            var iTop = iStartTop + (iMouseY - iStartY);
            var aSpan = $(this).find("span");
            var iIndex = obj.index();
            aSpan.stop();
            if (iTop < iMinTop || iTop > iMaxTop) {
                aSpan.animate({
                        top: iStartTop
                    },
                    500);
                $(this).find("span").on("mouseenter", aaa);
                $(this).find("span").off("mouseenter", bbb);
                this.onmouseleave = null;
                this.onmousemove = null
            } else {
                for (var i = 0; i < aSpan.length; i++) {
                    if (iMouseY > iStartY) {
                        var iSpanTop = iTop - Math.abs(i - iIndex);
                        if (iSpanTop < iStartTop) {
                            iSpanTop = iStartTop
                        }
                    } else {
                        if (iMouseY < iStartY) {
                            var iSpanTop = iTop + Math.abs(i - iIndex);
                            if (iSpanTop > iStartTop) {
                                iSpanTop = iStartTop
                            }
                        }
                    }
                    aSpan.eq(i).css("top", iSpanTop + "px")
                }
            }
            this.onmouseleave = function() {
                aSpan.animate({
                        top: iStartTop
                    },
                    500);
                $(this).find("span").on("mouseenter", aaa);
                $(this).find("span").off("mouseenter", bbb);
                this.onmouseleave = null;
                this.onmousemove = null;
            }
        }
    }
    function bbb() {
        obj = $(this);
    }
}
/*
* 1.offsetWidth既包括本身width，padding，还包括border
* 2.我们如何取得不包括padding与border的width?实际上在运动的时候是想要获取纯正的width
* 3.element： DOM节点
* 4.styleName：想要获取的样式
* 5.比如getStyle(oDiv,'width');
* 6.返回值是带px的string
* 7.这里只是做了兼容写法
*/
function getStyle(element,styleName) {
  if (element.currentStyle) {
    return element.currentStyle[styleName];
  } else {
    return getComputedStyle(element)[styleName];
  }
}
$(function() {
	//菜单初始化开始
  var oHeader = $('#header');
  getNav(oHeader, 3);
  // 菜单初始化结束
  var bg = document.querySelector('.item-bg');
  var items = document.querySelectorAll('.news__item');
  var item = document.querySelector('.news__item');
  var topDistance = 0;
  $(window).scroll(function(e){
    topDistance = $(this).scrollTop();

  });
  function cLog(content) {
      console.log(content)
  }
  
  if($(window).width() > 800) {
      $(document).on("mouseover", ".news__item", function (_event, _element) {
  
          var newsItem = document.querySelectorAll('.news__item');
          newsItem.forEach(function (element, index) {
              element.addEventListener('mouseover', function () {
                  var x = this.getBoundingClientRect().left;
                  // debug top值计算的不对，没有加滚动距离
                  var y = this.getBoundingClientRect().top+topDistance;
                  var width = this.getBoundingClientRect().width;
                  var height = this.getBoundingClientRect().height;
                  $('.news__item').removeClass('active');
                  // $('.news__item').removeClass('active');
  
                  bg.style.width = width + 'px';
                  bg.style.height = height + 'px';
                  bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
                  bg.classList.add('active');
              });
  
              element.addEventListener('mouseout', function () {
                  $('.item-bg').removeClass('active');
                  $('.news__item').removeClass('active');
              });
  
          });
  
      });
  }
  
  
  var swiper = new Swiper('.news-slider', {
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      speed: 300,
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 3,
          slideShadows: false
      },
      breakpoints: {
          480: {
              spaceBetween: 0,
              centeredSlides: true
          }
      },
      simulateTouch: true,
      navigation: {
          nextEl: '.news-slider-next',
          prevEl: '.news-slider-prev'
      },
      pagination: {
          el: '.news-slider__pagination',
          clickable: true
      },
      on: {
          init: function () {
              var activeItem = document.querySelector('.swiper-slide-active');
  
              var sliderItem = activeItem.querySelector('.news__item');
  
              $('.swiper-slide-active .news__item').addClass('active');
  
              var x = sliderItem.getBoundingClientRect().left;
              var y = sliderItem.getBoundingClientRect().top+topDistance;
              var width = sliderItem.getBoundingClientRect().width;
              var height = sliderItem.getBoundingClientRect().height;
  
  
              $('.item-bg').addClass('active');
  
              bg.style.width = width + 'px';
              bg.style.height = height + 'px';
              bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
          }
      }
  });
  
  swiper.on('touchEnd', function () {
      $('.news__item').removeClass('active');
      $('.swiper-slide-active .news__item').addClass('active');
  });
  
  swiper.on('slideChange', function () {
      $('.news__item').removeClass('active');
  });
  
  swiper.on('slideChangeTransitionEnd', function () {
      $('.news__item').removeClass('active');
      var activeItem = document.querySelector('.swiper-slide-active');
  
      var sliderItem = activeItem.querySelector('.news__item');
  
      $('.swiper-slide-active .news__item').addClass('active');
  
      var x = sliderItem.getBoundingClientRect().left;
      var y = sliderItem.getBoundingClientRect().top+topDistance;
      var width = sliderItem.getBoundingClientRect().width;
      var height = sliderItem.getBoundingClientRect().height;
  
  
      $('.item-bg').addClass('active');
  
      bg.style.width = width + 'px';
      bg.style.height = height + 'px';
      bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
  });
});






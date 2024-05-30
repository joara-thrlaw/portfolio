$(function(){
  // Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
  
  // Sliding jQuery
  $('.gnb a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
  })
  
  // Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    }
    else {
      $('header, .gototop').removeClass('active')
    }    
  })

  // Logo Desc 
  $('.about .right-desc li').mouseover(function(){
    $(this).find('span').attr('class', 'show');
  })
  $('.about .right-desc li').mouseleave(function(){
    $(this).find('span').attr('class', 'hidden');
  })
  
  // Slick.js
  $('.items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-next-button",
      prevEl: ".swiper-prev-button"
    },
    effect: "fade",
    loop: "infinite",
    pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          }
  });
  
  swiper.on('slideChange', function(sld) {
    document.querySelector(".work").setAttribute('data-sld', sld.realIndex);
  })

  /* 롯데면세점 모달 html import  */
  if($('#lotte').length > 0) {
    document.getElementById("lotte-content").innerHTML='<object type="text/html" data="../modal.html"></object>'; 
  }
})
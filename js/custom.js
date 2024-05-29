$(function(){
  
  //fullpage
  new fullpage('#fullpage', {
    sectionSelector: '.section',
    scrollOverflow: true,
    navigation: true,
    scrollingSpeed: 1000,
  });
  
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  /* 롯데면세점 모달 html import  */
  if($('#lotte').length > 0) {
    document.getElementById("lotte-content").innerHTML='<object type="text/html" data="../modal.html"></object>'; 
  }
})
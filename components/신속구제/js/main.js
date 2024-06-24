// 공통 변수
let topBannerNumber = 0;
let checkArtiNumber = 0;

$(() => {
     /* 스크롤 이벤트 (최초 접속시) */
    scollHandler();

    document.addEventListener("scroll", function () {
         /* 스크롤 이벤트 */
        scollHandler();
    });

    /* 메인 리뷰 슬라이드 */
    mainReviewSlide();

    /* 상담내역 */
    mainVerticalSlide();

    // 팝업
    $(".popup_box").hide();
    $("body").append("<div id='mask'></div>");
    
    $("#mask").click(function(){
      $(this).hide();
      $(".popup_box").hide();
    });
    
    $(".btn_open01").click(function(){
      $("#mask").show();
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    
      $(".popup_box01").show();
      
      $(".btn_close").click(function(){
        $("#mask").hide();
        $(".popup_box01").hide();
        $('body').off('scroll touchmove mousewheel');
      });
      return false;
    });

    $(".btn_open02").click(function(){
      $("#mask").show();
      $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      $(".popup_box02").show();
      
      $(".btn_close").click(function(){
        $("#mask").hide();
        $(".popup_box02").hide();
        $('body').off('scroll touchmove mousewheel');
      });
      return false;
    });

    collapse();
});

const scollHandler = () => {
    const scroll_y = window.scrollY + window.innerHeight / 1.5;
    const animationContainer = document.querySelectorAll(".ani");
    animationContainer.forEach((element) => {
      const itemTop = element.getBoundingClientRect().top + window.scrollY;
      if (scroll_y > itemTop) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
};

const mainReviewSlide = () => {
    var swiper = new Swiper(".main .reviewArti .slideContainer .reviewSlide", {
      slidesPerView: "auto",
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 0, // important !!
        disableOnInteraction: false,
      },
      speed: 5000,
      breakpoints: {
        640: {
          speed: 8000,
        },
      },
    });
};

const mainVerticalSlide = () => {
  var findSwiper = new Swiper(".vSwiper", {
      direction: "vertical",
      slidesPerView: 5,
      autoHeight : false,
      loop:true,
      speed: 500,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
  });

  // 실시간 상담신청 현황 날짜 업데이트
	function consultDateUpdate() {
		var today = new Date();
		var year = today.getFullYear();
		var month = ('0' + (today.getMonth() + 1)).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);

		var dateString = year + '-' + month  + '-' + day;

		$('.vSwiper').find('.date').text(dateString);
	}
	consultDateUpdate();
}

function collapse(element) {
	var before = document.getElementsByClassName("footer active")[0]             
	console.log(before)  
	if (before && document.getElementsByClassName("active")[0] != element) {  
		before.nextElementSibling.style.maxHeight = null; 
		before.classList.remove("active");                 
	}
	element.classList.toggle("active");       

	var content = element.nextElementSibling;
	if (content.style.maxHeight != 0) {        
		content.style.maxHeight = null;      
	} else {
		content.style.maxHeight = content.scrollHeight + "px";  
	}
};

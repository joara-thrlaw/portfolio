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

    /* 카테고리 탭 */
    mainCateTabSlick();

    /* 상담내역 */
    mainSuccesss();

    /* 상담내역 */
    mainVerticalSlide();

    /* 메인 리뷰 슬라이드 */
    mainReviewSlide();

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

const mainCateTabSlick = () => {
  $('.work_slide').slick({
	  autoplaySpeed: 3000,
	  arrows: true,
	  dots: true,
	  slidesToShow: 1,
	  customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      if (i.toString() === '0') {
        return '<a class="dot"><span>상속포기</span></a>';
      } else if (i.toString() === '1') {
        return '<a class="dot"><span>한정승인</span></a>';
      } else if (i.toString() === '2') {
        return '<a class="dot"><span>유류분</span></a>';
      } else if (i.toString() === '3') {
        return '<a class="dot"><span>상속재산분할</span></a>';
      } else if (i.toString() === '4') {
        return '<a class="dot"><span>상속가사</span></a>';
      }
	  },
	});
}

const mainSuccesss = () => {
  var main_success = new Swiper(".main .successArti .slideBox", {
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

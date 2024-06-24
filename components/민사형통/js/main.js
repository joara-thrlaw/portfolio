$(function(){
    var hide_menu = false;
    var mouse_event = false;
    var oldX = oldY = 0;

    $(document).mousemove(function(e) {
        if(oldX == 0) {
            oldX = e.pageX;
            oldY = e.pageY;
        }

        if(oldX != e.pageX || oldY != e.pageY) {
            mouse_event = true;
        }
    });

    // �ָ޴�
    var $gnb = $(".gnb_1dli > a");
    $gnb.mouseover(function() {
        if(mouse_event) {
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
            hide_menu = false;
        }
    });

    $gnb.mouseout(function() {
        hide_menu = true;
    });

    $(".gnb_2dli").mouseover(function() {
        hide_menu = false;
    });

    $(".gnb_2dli").mouseout(function() {
        hide_menu = true;
    });

    $gnb.focusin(function() {
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
        $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
        hide_menu = false;
    });

    $gnb.focusout(function() {
        hide_menu = true;
    });

    $(".gnb_2da").focusin(function() {
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
        var $gnb_li = $(this).closest(".gnb_1dli").addClass("gnb_1dli_over gnb_1dli_on");
        hide_menu = false;
    });

    $(".gnb_2da").focusout(function() {
        hide_menu = true;
    });

    $('#gnb_1dul>li').bind('mouseleave',function(){
        submenu_hide();
    });

    $(document).bind('click focusin',function(){
        if(hide_menu) {
            submenu_hide();
        }
    });
});

function submenu_hide() {
    $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
}



$(function(){
 
  $("#tnb").click(function()    {
    if($("#burgur").hasClass('on')){
      $("#burgur").removeClass('on');
      $("#total_m_lay").removeClass('on');
     
    } else{
      $("#burgur").addClass('on');
     $("#total_m_lay").addClass('on'); 
    }
  });

  /* ����ϸ޴� */
	$('#total_m_lay ul li.has-sub > button').on('click', function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp('fast');
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown('fast');
			element.siblings('li').children('ul').slideUp('fast');
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp('fast');
		}
		return false;
	});

	$('.total_m > ul > li.open > ul').css('display','block');
	$('.total_m > ul > li > ul > li.open > ul').css('display','block');
	$('.total_m > ul > li > ul > li > ul > li.open > ul').css('display','block');

	$(".tabs_content").hide();
	$("ul.tabs li:first").addClass("current").show();
	$(".tabs_content:first").show();
		
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("current");
		$(this).addClass("current");
		$(".tabs_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;

	});


	$(".tab_content").hide();
	$("ul.tab li:first").addClass("current").show();
	$(".tab_content:first").show();
		
	$("ul.tab li").click(function() {
		$("ul.tab li").removeClass("current");
		$(this).addClass("current");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;

	});

		$('.lawyers_list').slick({
				slide: 'div',		//�����̵� �Ǿ�� �� �±� ex) div, li 
				infinite : true, 	//���� �ݺ� �ɼ�	 
				slidesToShow : 6,		// �� ȭ�鿡 ������ ������ ����
				slidesToScroll : 1,		//��ũ�� �ѹ��� ������ ������ ����
				speed : 1000,	 // ���� ��ư ������ ���� ȭ�� �ߴµ����� �ɸ��� �ð�(ms)
				arrows : true, 		// ������ �̵��ϴ� ȭ��ǥ ǥ�� ����
				dots : false, 		// ��ũ�ѹ� �Ʒ� ������ ���������̼� ����
				autoplay : true,			// �ڵ� ��ũ�� ��� ����
				autoplaySpeed : 2000, 		// �ڵ� ��ũ�� �� �������� �Ѿ�µ� �ɸ��� �ð� (ms)
				pauseOnHover : true,		// �����̵� �̵�	�� ���콺 ȣ���ϸ� �����̴� ���߰� ����
				vertical : false,		// ���� ���� �����̵� �ɼ�
				draggable : true,	//�巡�� ���� ���� 
				//centerMode: true,
				
				responsive: [ // ������ �� ���� �ɼ�
					{  
						breakpoint: 960, //ȭ�� ������ 960px
						settings: {
							//���� �ɼ��� ����Ʈ , ���⿡ �߰��ϸ� �װɷ� ����
							slidesToShow:3 
						} 
					},
					{ 
						breakpoint: 768, //ȭ�� ������ 768px
						settings: {	
							//���� �ɼ��� ����Ʈ , ���⿡ �߰��ϸ� �װɷ� ����
							slidesToShow:2,
							centerMode: true
						} 
					},
					{ 
						breakpoint: 480,
						settings: {	
							slidesToShow:1,
							centerMode: true
						} 
					}
				]

			});


			$('.board_slide').slick({
				slide: 'div',		//�����̵� �Ǿ�� �� �±� ex) div, li 
				infinite : true, 	//���� �ݺ� �ɼ�	 
				slidesToShow : 3,		// �� ȭ�鿡 ������ ������ ����
				slidesToScroll : 1,		//��ũ�� �ѹ��� ������ ������ ����
				speed : 100,	 // ���� ��ư ������ ���� ȭ�� �ߴµ����� �ɸ��� �ð�(ms)
				arrows : true, 		// ������ �̵��ϴ� ȭ��ǥ ǥ�� ����
				dots : true, 		// ��ũ�ѹ� �Ʒ� ������ ���������̼� ����
				autoplay : true,			// �ڵ� ��ũ�� ��� ����
				autoplaySpeed : 3000, 		// �ڵ� ��ũ�� �� �������� �Ѿ�µ� �ɸ��� �ð� (ms)
				pauseOnHover : true,		// �����̵� �̵�	�� ���콺 ȣ���ϸ� �����̴� ���߰� ����
				vertical : false,		// ���� ���� �����̵� �ɼ�
				draggable : true, 	//�巡�� ���� ���� 
				//centerMode: true,
				
				responsive: [ // ������ �� ���� �ɼ�
					{ 
						breakpoint: 768, //ȭ�� ������ 768px
						settings: {	
							//���� �ɼ��� ����Ʈ , ���⿡ �߰��ϸ� �װɷ� ����
							slidesToShow:2,
							centerMode: true
						} 
					},
					{ 
						breakpoint: 500, //ȭ�� ������ 500px
						settings: {	
							//���� �ɼ��� ����Ʈ , ���⿡ �߰��ϸ� �װɷ� ����
							slidesToShow:1,
							centerMode: true
						} 
					}
				]

			});
			
			var slider = $('.board_slide02');
			var slickOptions = {
				slide: 'div',		//�����̵� �Ǿ�� �� �±� ex) div, li 
				infinite : true, 	//���� �ݺ� �ɼ�	 
				slidesToShow : 3,		// �� ȭ�鿡 ������ ������ ����
				slidesToScroll : 1,		//��ũ�� �ѹ��� ������ ������ ����
				speed : 100,	 // ���� ��ư ������ ���� ȭ�� �ߴµ����� �ɸ��� �ð�(ms)
				arrows : true, 		// ������ �̵��ϴ� ȭ��ǥ ǥ�� ����
				dots : true, 		// ��ũ�ѹ� �Ʒ� ������ ���������̼� ����
				autoplay : true,			// �ڵ� ��ũ�� ��� ����
				autoplaySpeed : 3000, 		// �ڵ� ��ũ�� �� �������� �Ѿ�µ� �ɸ��� �ð� (ms)
				pauseOnHover : true,		// �����̵� �̵�	�� ���콺 ȣ���ϸ� �����̴� ���߰� ����
				vertical : false,		// ���� ���� �����̵� �ɼ�
				draggable : true, 	//�巡�� ���� ���� 

			}; 

			$(window).on('load resize', function() { 		
				if($(window).width() < 767) { 			
					slider.slick('unslick'); 		
				}else{ 			
					slider.not('.slick-initialized').slick(slickOptions); 		
				} 
			});


			$('.news_slide').slick({
				slide: 'div',		//�����̵� �Ǿ�� �� �±� ex) div, li 
				infinite : true, 	//���� �ݺ� �ɼ�	 
				slidesToShow : 1,		// �� ȭ�鿡 ������ ������ ����
				slidesToScroll : 1,		//��ũ�� �ѹ��� ������ ������ ����
				speed : 1000,	 // ���� ��ư ������ ���� ȭ�� �ߴµ����� �ɸ��� �ð�(ms)
				arrows : true, 		// ������ �̵��ϴ� ȭ��ǥ ǥ�� ����
				dots : true, 		// ��ũ�ѹ� �Ʒ� ������ ���������̼� ����
				autoplay : true,			// �ڵ� ��ũ�� ��� ����
				autoplaySpeed : 3000, 		// �ڵ� ��ũ�� �� �������� �Ѿ�µ� �ɸ��� �ð� (ms)
				pauseOnHover : true,		// �����̵� �̵�	�� ���콺 ȣ���ϸ� �����̴� ���߰� ����
				vertical : false,		// ���� ���� �����̵� �ɼ�
				draggable : true, 	//�巡�� ���� ���� 
				fade:true
			});

		var swiper = new Swiper(".certificate_slide", {
			  slidesPerView:2,
			  spaceBetween: 40,
			  centerSlides :true,
			  loop : true,
			  freeMode : true,
			  observe : true,
			  observeParent : true,
			  speed :4000,
			  allowTouchMove : false,
			  autoplay : {
				  delay : 0,
				  disableOnInteraction : false
			  },
			 breakpoints: {
        
			  768: {
				slidesPerView: 3  //�������� 768���� Ŭ ��
			  },
			  1024: {
				slidesPerView: 6  //�������� 1024���� Ŭ ��
			  },
			  1500: {
			    slidesPerView: 8  //�������� 1500���� Ŭ ��
			  },
			}
		});



		$(".popup_box").hide()
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
		
			$(".popup_box01").show()
			// .css({
			// 	marginTop:"-"+$(".popup_box01").height()/2+"px" , 
			// 	marginLeft:"-"+$(".popup_box01").width()/2+"px" 
			// });
			
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
			$(".popup_box02").show()
			// .css({
			// 	marginTop:"-"+$(".popup_box02").height()/2+"px" , 
			// 	marginLeft:"-"+$(".popup_box02").width()/2+"px" 
			// });
			
			$(".btn_close").click(function(){
				$("#mask").hide();
				$(".popup_box02").hide();
				$('body').off('scroll touchmove mousewheel');
			});
			return false;
		});


		
		/*����Ʈ�ڽ�*/

		const selectBoxElements = document.querySelectorAll(".select");

		function toggleSelectBox(selectBox) {
		  selectBox.classList.toggle("active");
		}

		function selectOption(optionElement) {
		  const selectBox = optionElement.closest(".select");
		  const selectedElement = selectBox.querySelector(".selected-value");
		  selectedElement.textContent = optionElement.textContent;
		}

		selectBoxElements.forEach(selectBoxElement => {
		  selectBoxElement.addEventListener("click", function (e) {
			const targetElement = e.target;
			const isOptionElement = targetElement.classList.contains("option");

			if (isOptionElement) {
			  selectOption(targetElement);
			}

			toggleSelectBox(selectBoxElement);
		  });
		});

		document.addEventListener("click", function (e) {
		  const targetElement = e.target;
		  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

		  if (isSelect) {
			return;
		  }

		  const allSelectBoxElements = document.querySelectorAll(".select");

		  allSelectBoxElements.forEach(boxElement => {
			boxElement.classList.remove("active");
		  });
		});

  
	});


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

/* sub page */
document.addEventListener("DOMContentLoaded", function(e){
	mainCaseTab();
	subProfilePrevNext();
	StoriesPopup();
	MapToggle();
	MapApplyBtn();
	proArtiToggle();
	realTimeSwiper();
});

const mainCaseTab = () => {
    $('.case_arti .tab_container .tab_btn_list .item').click(function(){
        var index = $(this).parent('li').index();
        $('.case_arti .tab_container .tab_btn_list .item').removeClass('active');
        $('.case_arti .tab_container .tab_btn_list').children('li').eq(index).children('.item').addClass('active');

        $('.case_arti .tab_container .cate_tab_content_list > li').removeClass('active');
        $('.case_arti .tab_container .cate_tab_content_list > li').eq(index).addClass('active');
    })

}

const subProfilePrevNext = () => {
    $('.sub .profile_arti .prev_next_btn').click(function(){
        $('.sub .profile_arti .prev_next_btn').toggleClass('prev');
        $('.sub .profile_arti .content_list .right_box .product_box').toggleClass('active');
        $('.sub .profile_arti .content_list .left_box .product_box').toggleClass('active');
    })
}

const StoriesPopup = () => {
    $('.stories_arti .story_list .item').click(function(e){
        e.preventDefault();
        $('#stories_popup').addClass('show');
    })
    $('.stories_popup').click(function(){
        $('.stories_popup').removeClass('show');
    })
    $('.stories_popup .popup_content .title_box .close_btn').click(function(){
        $('.stories_popup').removeClass('show');
    })
    $('.stories_popup .popup_content').click(function(e){
        e.stopPropagation();
    })
}

let applyIndex = 0; 
const MapApplyBtn = () => {
    $('.map_arti .apply_content > li .map_container .btn_wrap .next_btn').click(function(){
        applyIndex = applyIndex + 1; 
        prevNextShow();
    })
    $('.map_arti .apply_content .left_box .top_btn_box .prev_btn').click(function(){
        applyIndex = applyIndex - 1; 
        prevNextShow();
    })
    const prevNextShow = () => {
        $('.map_arti .apply_content > li').removeClass('active');
        $('.map_arti .apply_content > li').eq(applyIndex).addClass('active');
    }

 
    $(".map_arti .apply_content .date_time label input[type='checkbox']").click(function() {
        // 현재 라디오 버튼의 체크 상태 확인
        $(".map_arti .apply_content .date_time label input[type='checkbox']").not(this).prop("checked", false);
    });
   
    /* 모바일에서 가로 스크롤 */
    $(function() {
        var isDragging = false;
        var startX, startScrollLeft;

        $(".map_arti .apply_content > li .map_container .content_box .tab_btn_list").on("mousedown", function(event) {
            isDragging = true;
            startX = event.pageX;
            startScrollLeft = $(this).scrollLeft();
        });

        $(document).on("mousemove", function(event) {
            if (isDragging) {
                var offsetX = event.pageX - startX;
                $(".map_arti .apply_content > li .map_container .content_box .tab_btn_list").scrollLeft(startScrollLeft - offsetX);
            }
        }).on("mouseup", function() {
            isDragging = false;
        });
    });
}

const MapToggle = () => {
    $('.map_arti .apply_content > li .map_container .content_box .tab_btn_list > li .item').click(function(){
        var index = $(this).parent('li').index();
        $('.map_arti .apply_content > li .map_container .content_box .tab_btn_list > li .item').removeClass('active');
        $('.map_arti .apply_content > li .map_container .content_box .tab_btn_list > li').eq(index).children('.item').addClass('active');
        $('.map_arti .apply_content > li .map_container .map_box .map_list > li').removeClass('active');
        $('.map_arti .apply_content > li .map_container .map_box .map_list > li').eq(index).addClass('active');
    })

    $( function() {
        $( "#reservation_date" ).datepicker({
            dateFormat: 'yy-mm-dd', // 년-월-일 형식으로 설정
            dayNames: ['일', '월', '화', '수', '목', '금', '토'], // 요일 이름을 한글로 지정
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'], // 요일 이름을 한글로 짧게 지정
			monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], // 월의 이름을 숫자로 지정
            monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true, // 년과 달의 위치 바꾸기
			yearSuffix: '.',
            // weekHeader: "주",
            onSelect: function(dateText) {
                var selectedDate = new Date(dateText);
                var year = selectedDate.getFullYear();
                var month = selectedDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
                var day = selectedDate.getDate();
                $('#reserved_date').val(year + "-" + month + "-" + day);
            },
            minDate: 0, // 오늘 이전의 날짜 선택 불가능
            beforeShowDay: function(date) {
                var day = date.getDay();
                if (day === 0) {
                    return [true, 'red-color', ''];
                }
                return [true, '', ''];
            },
        });
        
    });

	const labels = document.querySelectorAll('.select_box');
	const options = document.querySelectorAll('.option');
	let selectTarget
	const handleSelect = function(item) {
		selectTarget = item.closest('.select_box').querySelector('.fake_label');

		selectTarget.innerHTML = item.textContent;
		selectTarget.classList.remove('active');
		selectTarget.classList.add('selected')
	}
	options.forEach(function(option) {
		option.addEventListener('click', function(){handleSelect(option)})
	})

	labels.forEach(label => {
		label.addEventListener("click", function (e) {
			if(label.classList.contains('active')) {
				label.classList.remove('active');
			} else {
				label.classList.add('active');
			}
		});
	});
}

const proArtiToggle = () => {
	$('.pro_arti .pro_item').click(function() {
		$('.pro_arti .pro_item').not(this).removeClass('open');
		$(this).toggleClass('open');
	});
};


const realTimeSwiper = () => {
	var findSwiper = new Swiper(".real-time-swiper-container", {
        direction: "vertical",
        slidesPerView: 'auto',
        autoHeight : false,
        loop:true,
        speed: 750,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}



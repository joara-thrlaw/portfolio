 $(document).ready(function() {
    //fullpage
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        afterLoad: function(origin, destination, direction) {
            $('.navbar-right li').removeClass('active');
            $('.navbar-nav li').removeClass('active');
            $('.navbar-right li:nth-child(' + destination +')').addClass('active');
            $('.navbar-nav li:nth-child(' + destination +')').addClass('active');
            if (destination == 3) inSection3();
        },
        onLeave: function(origin, destination, direction){
            if(destination == 3) outSection3();
        }
    });

    //typing
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".fake-typing>ul>li").length;

    var typingTxt = $(".fake-typing>ul>li").eq(liIndex).text(); 
    typingTxt=typingTxt.split("");
    if(typingBool==false){ 
        typingBool=true; 
        var tyInt = setInterval(typing,100);
    } 
        
    function typing(){ 
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        if(typingIdx<typingTxt.length){ 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
            typingIdx++; 
        } else{ 
            if(liIndex<liLength-1){
                liIndex++; 

                typingIdx=0;
                typingBool = false; 
                typingTxt = $(".fake-typing>ul>li").eq(liIndex).text(); 
            
                clearInterval(tyInt);
                
                setTimeout(function(){
                    tyInt = setInterval(typing,80);
                },800);
             } else if(liIndex==liLength-1){
                    clearInterval(tyInt);
            }
        } 
    }

    //section-3 animation
    function inSection3() {
        $('.section.section-3 p.sub-tit').addClass('active');
        $('.section.section-3 .row').addClass('active');
        setTimeout(drawChart, 1600);
    }

    function outSection3() {
        $('.section.section-3 p.sub-tit').removeClass('active');
        $('.section.section-3 .row').removeClass('active');
    }
    
    //section-3 chart
    function drawChart(){
        $('.chart1').easyPieChart({
            barColor: '#b1297b',
            trackColor: '#0d0f58',
            scaleColor: '#161a88',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 20,
            size: 150,
            rotate: 0,
            animate: {
              duration: 1000,
              enabled: true
            },
        });
        $('.chart2').easyPieChart({
            barColor: '#664cad',
            trackColor: '#0d0f58',
            scaleColor: '#161a88',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 20,
            size: 150,
            rotate: 0,
            animate: {
              duration: 1000,
              enabled: true
            },
        });
        $('.chart3').easyPieChart({
            barColor: '#b1297b',
            trackColor: '#0d0f58',
            scaleColor: '#161a88',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 20,
            size: 150,
            rotate: 0,
            animate: {
              duration: 1000,
              enabled: true
            },
        });
        $('.chart4').easyPieChart({
            barColor: '#664cad',
            trackColor: '#0d0f58',
            scaleColor: '#161a88',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 20,
            size: 150,
            rotate: 0,
            animate: {
              duration: 1000,
              enabled: true
            },
        });
        $('.chart .percent').addClass('active');
        $('.chart .name').addClass('active');
    }

    //slick
    $('.section.section-4 ul').slick({
        infinite: true,
        autoplay: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
        responsive: [ 
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '0'
                }
            }
        ]
    });
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = 'views/' + $(this).data('include') + '.html';
      $(this).load(file);
    });

    /* 롯데면세점 모달 html import */
    document.getElementById("lotte-content").innerHTML='<object type="text/html" data="./modal.html"></object>'; 
});

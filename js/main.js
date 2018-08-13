
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    Windows2: function() {
        return navigator.userAgent.match(/Windows Phone/i) ? true : false;
    },
    
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows() || isMobile.Windows2());
    }
};


var mySwiper= new Swiper('.kv_pic', {
	initialSlide:0,
	loop:true,
	//autoplay:2000,
	pagination: '.swiper-pagination',
	paginationClickable: true, 
});


var slidesPerView = 2;
if(isMobile.any()) slidesPerView = 3;
var mySwiper2= new Swiper('.about_pic', {
	slidesPerView : slidesPerView,
	initialSlide:0,
	loop:true,
	pagination: '.swiper-pagination2',
	paginationClickable: true, 
});

$(window).resize(function(){
	navaSetting();
	var h = $(window).height();
	if(h > 690){
		$('.mnav1').css({'padding-bottom':'20px'});
	}
	else{
		$('.mnav1').css({'padding-bottom':'0'});
	}
});
$(window).resize();


$(function(){
	$("#hot_btn_more").click(function(){
		$(".more_loading").show();
		$("#hot_btn_more").hide();
		setTimeout(function(){
			$(".more_loading").hide();
			$("#hot_more").fadeIn(1000);
		},300)
	});
	navaSetting();
	//checkNaviHide();
	bottomNavtoggle();
	
});
function navaSetting(){
	var navw = 0;
	for(var i=0;i<9;i++){
		navw+=$(".nav2 a:eq("+i+")").width();
	}
	var ws = Math.floor(($(".nav2").width()-navw)/8.1);
	for(var i=0;i<8;i++){
		$(".nav2 a:eq("+i+")").css({"margin-right":ws+"px"});
	}
}
function bottomNavtoggle(){
	var otop = 950;
	var timeout;
	var state = 'show';
	var ns = 'show';
	var upflag = 1;
	var downflag = 1;
	$(window).scroll(function(){
		clearTimeout(timeout);
		var n = ($(window).scrollTop()+$(window).height()) - otop;
        if(n < -5){
        	 if (downflag) {
				$('.bottom-Menu').animate({'bottom':'-100px'});
				downflag = 0;
				upflag = 1;
            }
    	}
    	else if(n > -5){
			if (upflag) {
				$('.bottom-Menu').animate({'bottom':'0px'});
				downflag = 1;
				upflag = 0;
			}
    	}

    	timeout = setTimeout(function(){
    		currTop = $(window).scrollTop();
    		state = ns;
    	}, 80);

    });
}
function checkNaviHide(){
	var currTop = $(window).scrollTop();
	var timeout;
	var state = 'show';
	var ns = 'show';
	var upflag = 1;
	var downflag = 1;
	$(window).scroll(function(){
		clearTimeout(timeout);
		var n = $(window).scrollTop() - currTop;
        if(n > 5){
        	 if (downflag) {
				$('.bottom-Menu').animate({'bottom':'-100px'});
				downflag = 0;
				upflag = 1;
            }
    	}
    	else if(n < -5){
			if (upflag) {
				$('.bottom-Menu').animate({'bottom':'0'});
				downflag = 1;
				upflag = 0;
			}
    	}

    	timeout = setTimeout(function(){
    		currTop = $(window).scrollTop();
    		state = ns;
    	}, 80);

    });


}



var hotcon = '';
for(var i=0;i<4;i++){
	if(i==0){
		hotcon = '<li class="col-md-3 col-lg-2 col-lg-offset-2 ">';
	}else{
		hotcon+= '<li class="col-md-3 col-lg-2">';
	}
	hotcon+='<a  href="#">';
	hotcon+='			<div class="wrap">';
	hotcon+='				<div class="image"><img src="temp/proimg'+(i+1)+'.jpg" /></div>';
	hotcon+='				<div class="name">如新柔润爽肤水</div>';
	hotcon+='				<div class="price">￥150.00</div>';
	hotcon+='			</div>';
	hotcon+='			<img src="images/box_shadow.png" class="box_shadow" />';
	hotcon+='		</a>';
	hotcon+='	</li>';
}


		

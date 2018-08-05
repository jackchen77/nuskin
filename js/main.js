var mySwiper= new Swiper('.kv_pic', {
	initialSlide:0,
	loop:true,
	//autoplay:2000,
	pagination: '.swiper-pagination',
	paginationClickable: true, 
});

var mySwiper2= new Swiper('.about_pic', {
	slidesPerView : 3,
	initialSlide:0,
	loop:true,
	pagination: '.swiper-pagination2',
	paginationClickable: true, 
});
$(function(){
	$("#hot_btn_more").click(function(){
		$(".more_loading").show();
		$("#hot_btn_more").hide();
		setTimeout(function(){
			$(".more_loading").hide();
			$("#hot_more").fadeIn(1000);
		},500)
	})
})

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


		

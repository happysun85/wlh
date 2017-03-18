function setFirstPage(){
	clearStyle(0);
}
mySwiper.addCallback('SlideChangeStart', function(swiper){
  clearStyle(swiper.activeIndex);
})
function clearStyle(i){
  var element = $("#swiper-container").find(".swiper-slide").eq(i).find(".setImg");
  var container = $("#swiper-container");
  container.find(".setImg").each(function(){
    var reLeng = $(this)[0].classList.length;
    var reClass = $(this)[0].classList[reLeng-1];
    if(reClass!='setImg'&&reClass!='layer'){
        $(this).removeClass(reClass);
    }
  });

  if(i==0){
	  $(element).eq(0).addClass("anim-1-0");
	  $(element).eq(1).addClass("anim-1-1");
	  $(element).eq(2).addClass("anim-1-2");
	  $(element).eq(3).addClass("anim-1-3");
	  $(element).eq(4).addClass("anim-1-4");
	  $(element).eq(5).addClass("anim-1-5");
	  $(element).eq(6).addClass("anim-1-6");
	  $(element).eq(7).addClass("anim-1-7");
	  $(element).eq(8).addClass("anim-1-8");
	  $(element).eq(9).addClass("anim-1-9");
	  $(element).eq(10).addClass("anim-1-10");
	  $(element).eq(11).addClass("anim-1-11");
	  $(element).eq(12).addClass("anim-1-12");
	  $(element).eq(13).addClass("anim-1-13");
	  $(element).eq(14).addClass("anim-1-14");
	  $(element).eq(15).addClass("anim-1-15");
	  $(element).eq(16).addClass("anim-1-16");
	  $(element).eq(17).addClass("anim-1-17");
  }
  
  if(i==1){
    $(element).eq(0).addClass("anim-2-4");
	$(element).eq(1).addClass("anim-2-5");
	$(element).eq(2).addClass("anim-2-6");
	$(element).eq(3).addClass("anim-2-7");
	
	$(element).eq(4).addClass("anim-2-8");
	$(element).eq(5).addClass("anim-2-9");
	$(element).eq(6).addClass("anim-2-10");
	$(element).eq(7).addClass("anim-2-11");
  }
  
  if(i==2){
    //mySwiper.enableMousewheelControl();
  }
  
  if(i==3){
  	$(".up-icon").hide();
  }else{
	$(".up-icon").show();  
  }

}
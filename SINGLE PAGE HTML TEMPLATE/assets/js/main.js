$(document).ready(function(){

		$(".menu-triger").on("click", function(){
			$(".off-canvas-overlay, .off-canvas-menu").addClass("active")
		})

		$(".menu-close, .off-canvas-overlay").on("click", function(){
			$(".off-canvas-overlay, .off-canvas-menu").removeClass("active")
		});

		$(".hero-slide-wrap").owlCarousel({
			items:1,
			autoplay:true,
			loop:true,
			nav:false,
			dots:false,
		});

		$(".testimonial-area").owlCarousel({
			items:2,
			autoplay:true,
			loop:true,
			margin:30,
			nav:false,
			dots:true,
			 responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			            nav:false
			        },
			        1140:{
			            items:2,
			            nav:false
			        }
			    }
		});
		$(".counter").counterUp({
			delay:10,
		});


	 $('#bar1').barfiller({
	 	barColor: '#F5865D'
	 });


	 $('#bar2').barfiller({
	 	barColor: '#F5865D'
	 });


	 $('#bar3').barfiller({
	 	barColor: '#F5865D'
	 });


	 $('#bar4').barfiller({
	 	barColor: '#F5865D'
	 });


	 $('#bar5').barfiller({
	 	barColor: '#F5865D'
	 });


	 $('#bar6').barfiller({
	 	barColor: '#F5865D'
	 });

	 $(".protfolio-menu li").on("click", function(){
	 	$(".protfolio-menu li").removeClass("active");
	 	$(this).addClass("active");

	 var selector= $(this).attr('data-filter')
        	$(".protfolio-list").isotope({
        		filter: selector
        	});
	 	

	 });

	$(window).scroll(function(){
		var height = $(window).scrollTop();
		if(height>100){
			$('.header-area').addClass("sticky");
		}else{
			$('.header-area').removeClass("sticky");
		}
	});

});
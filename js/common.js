$(function() {

	$('.mobil-btn').click(function() {
		$('ul.menu-h').slideToggle();
	});


	$("header, nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


	$('.owl-carousel').owlCarousel({
		center: true,
		items:1,
		loop:true,
		margin:20,
		nav: true,
		responsive:{
			0:{
				items:1
			},

			992:{
				items:1
			}
		}
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

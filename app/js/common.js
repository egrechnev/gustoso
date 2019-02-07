$(function() {
	//--navbar
	$('.burger, .overlay, .navbar-mobile a').click(function(){
		$('.burger').toggleClass('clicked');
		$('.overlay').toggleClass('show');
		$('.navbar-mobile-wr').slideToggle(400);

		if (!$(this).hasClass('clicked')) {
			$('#noscroll').scrollLock('disable');
		} else {
			$('#noscroll').scrollLock('enable');
			$('.navbar-mobile-wr').scrollLock();
		}
	});

	$(window).resize(function(){
		if ($(window).width() > 992) {
			$('.navbar-mobile-wr').removeAttr('style');
			$('.burger').removeClass('clicked');
			$('.overlay').removeClass('show');
			$('#noscroll').scrollLock('disable');
		}
	});

	//--slick slides
	$('.slides').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
		    breakpoint: 410,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 2
		    }
		  }
		]
	});

	//--Fake links
	$('a[data-fake-link]').click(function(e){
		e.preventDefault();
		// return false;
	});

});

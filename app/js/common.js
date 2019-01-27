$(function() {
	$('.burger, .overlay, .navbar-mobile a').click(function(){
		$('.burger').toggleClass('clicked');
		$('.overlay').toggleClass('show');
		$('.navbar-mobile-wr').slideToggle(400);
		// $('body').toggleClass('overflow');

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
			// $('body').removeClass('overflow');
			$('#noscroll').scrollLock('disable');
		}
	});


//--Fake links
	$('a[data-fake-link]').click(function(e){
		e.preventDefault();
		// return false;
	});

});

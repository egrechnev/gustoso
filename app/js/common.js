$(function() {
	$('.burger, .overlay, .navbar-mobile a').click(function(){
	  $('.burger').toggleClass('clicked');
	  $('.overlay').toggleClass('show');
	  $('.navbar-mobile').slideToggle();
	  $('body').toggleClass('overflow');
	});

	$(window).resize(function(){
		if ($(window).width() > 992) {
			$('.navbar-mobile').removeAttr('style');
			$('.burger').removeClass('clicked');
			$('.overlay').removeClass('show');
			$('body').removeClass('overflow');
		}
	});


//--Fake links
	$('a[data-fake-link]').click(function(e){
		e.preventDefault();
		// return false;
	});

});

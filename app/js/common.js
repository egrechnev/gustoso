$(function() {
	$('.burger, .overlay, .navbar-mobile a').click(function(){
	  $('.burger').toggleClass('clicked');
	  $('.overlay').toggleClass('show');

	  // $('.navbar-mobile').toggleClass('active');
	  $('.navbar-mobile').slideToggle();
	  // $(".navbar-mobile").animate({ width: "toggle" }, 300);

	  $('body').toggleClass('overflow');
	});

	$(window).resize(function(){
		if ($(window).width() > 992) {
			// $('.navbar-mobile').removeClass('active');
			$('.navbar-mobile').removeAttr('style');
			$('.burger').removeClass('clicked');
			$('.overlay').removeClass('show');
			$('body').removeClass('overflow');
		}
	});


///////

    // $('.burger').on('click', function(e){
    //     $('html').toggleClass('menu-active');
    //     e.preventDefault();
    // });

//////


//////



/////



/////



//--Fake links
	$('a[data-fake-link]').click(function(e){
		e.preventDefault();
		// return false;
	});

});

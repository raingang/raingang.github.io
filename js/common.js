$(function() {

	// Пользовательские функции
	const HEADER_HEIGHT = 70
	$('#header__burger').click(() =>{
		$('#main-menu').toggle()
	})

	$('#hero__arrow').click(() =>{
		$('html, body').animate({
	        scrollTop: ($("#about-header").offset().top - HEADER_HEIGHT)
	    }, 800);
	})

	$('#about-button').click(() =>{
		$('html, body').animate({
	        scrollTop: ($("#about-header").offset().top - HEADER_HEIGHT)
	    }, 800);
	    $('#main-menu').toggle()
	})

	$('#tools-button').click(() =>{
		$('html, body').animate({
	        scrollTop: ($("#tools-header").offset().top - HEADER_HEIGHT)
	    }, 800);
	    $('#main-menu').toggle()
	})

	$('#contacts-button').click(() =>{
		$('html, body').animate({
	        scrollTop: ($("#contacts-header").offset().top - HEADER_HEIGHT)
	    }, 800);
	    $('#main-menu').toggle()
	})

});
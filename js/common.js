$(function() {
	const HEADER_HEIGHT = 70
		$('#header__burger').click(() =>{
			$('#main-menu').toggle()
	})

	$(document).click((event) => {
		let id = event.target.id
		let target = ''
		switch(id){
			case('about-button'):
				target = 'about-header'
				break
			case('tools-button'):
				target = 'tools-header'
				break
			case('contacts-button'):
				target = 'contacts-header'
				break
		}
		if(target){
			console.log('from document')
			$('html, body').animate({
				scrollTop: ($('#' + target).offset().top - HEADER_HEIGHT)
			}, 800)
		}
	})
	

	$('#hero__arrow').click(() =>{
		$('html, body').animate({
	        scrollTop: ($("#about-header").offset().top - HEADER_HEIGHT)
	    }, 800);
	})
});
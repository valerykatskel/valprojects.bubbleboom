$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
	var link = $('.header-container nav a');

	link.each(function(){
		$(this).on('click', function(){
			var ancor = $(this).data('scrollTo'),
				pos = $('a[name="'+ancor+'"]').offset().top;
			$('.header-container nav a').removeClass('active');
			$(this).addClass('active');
			$("html, body").animate({ scrollTop: pos }, 500);
			return false;
		})
	})


});
/*
	Lightbox gallery for game screenshots
*/
(function($) {
	var $lightbox = $('#lightbox');
	var $lightboxImg = $lightbox.find('img');
	var $closeBtn = $lightbox.find('.lightbox-close');

	function openLightbox(src) {
		$lightboxImg.attr('src', src);
		$lightbox.attr('aria-hidden', 'false').addClass('active');
		$('body').css('overflow', 'hidden');
	}

	function closeLightbox() {
		$lightbox.attr('aria-hidden', 'true').removeClass('active');
		$('body').css('overflow', '');
	}

	$(document).on('click', '[data-lightbox]', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		if (href && href !== '#') {
			openLightbox(href);
		}
	});

	$closeBtn.on('click', closeLightbox);
	$lightbox.on('click', function(e) {
		if (e.target === this) closeLightbox();
	});
	$(document).on('keydown', function(e) {
		if (e.keyCode === 27) closeLightbox();
	});
})(jQuery);

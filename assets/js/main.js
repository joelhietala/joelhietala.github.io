/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 75);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 750,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
	
	// Funcitons - Joel
		$(".scrollyHover").hover(
			function() {
				$(this).css("transition", "200ms ease-out");
				$(this).css("transform", "scale(1.2)");
		},
			function(){
				$(this).css("transform", "scale(1)");
		});

		$(".menuToggle").hover(
			function() {
				$(this).css("transition", "200ms ease-out");
				$(this).css("transform", "scale(1.1)");
		},
			function(){
				$(this).css("transform", "scale(1)");
		});

		$(".arrowHover").hover(
			function() {
				$(this).css("transition", "100ms ease-out");
				$(this).css("transform", "scale(1.2)");
		},
			function(){
				$(this).css("transform", "scale(1)");
		});

		$(".menuHover").hover(
			function() {
				$(this).css("transition", "200ms ease-out");
				$(this).css("transform", "scaleX(1.1)");
				$(this).css("border-bottom", "1px solid white");
		},
			function(){
				$(this).css("transform", "scaleX(1.0)");
				$(this).css("border-bottom", "none");
		});

		$(".iconHover").hover(
			function() {
				$(this).css("transition", "800ms ease-out");
				$(this).css("transform", "rotate(360deg)");
		},
			function(){
				$(this).css("transition", "400ms ease-out");
				$(this).css("transform", "rotate(-45deg)");
		});

		$(".iconHoverGeneric").hover(
			function() {
				$(this).css("transition", "800ms ease-out");
				$(this).css("transform", "rotate(360deg)");
		},
			function(){
				$(this).css("transition", "400ms ease-out");
				$(this).css("transform", "rotate(-360deg)");
		});

		$(".copyToClipboard").click(
			function() {
				navigator.clipboard.writeText("hietaladev@gmail.com")
		});


})(jQuery);
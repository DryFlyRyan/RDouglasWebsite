

// alert("preload");
$(document).ready(function() {
// alert("Initializing");

$('.content-fill').hide();
$('.sub-button').hide();
$('.hidden-start').hide();
// FOR SCROLLING CODE
$('.content').first().addClass('active');



$('.nav-icon')
	.on('click', function () {
		$(this).toggleClass('nav-icon-clicked');
		$('.navbar').toggleClass('navbar-shown');
		// $('.background-container').toggleClass('grayscale-blur');
		$(this).removeClass('nav-icon-hover');
	})
	.on('mouseenter', function () {
		if ($(this).hasClass('nav-icon-clicked') === false) {
			$(this).addClass('nav-icon-hover');
		}
	})
	.on('mouseleave', function () {
		$(this).removeClass('nav-icon-hover');
	})

 // NAV SUBLIST POPOUT

$('#map-icon').on('click', function () {
	$('.bottom-list-past').toggle(200);
	if (($('.bottom-list-future').is(":visible") === false)) {
		$('.contact-link').toggle(200);
	}
});

$('#road-icon').on('click', function () {
	$('.bottom-list-future').toggle(200);
	if (($('.bottom-list-past').is(":visible") === false)) {
		$('.contact-link').toggle(200);
	}
})

// LINK SCROLLING

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	var target = this.hash;
	var $target = $(target);
	if ($(this).parent('li').hasClass('nav-anchor')) {
		$('html, body').find('.grayscale-blur').removeClass('grayscale-blur');
	}

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
		window.location.hash = target;
		// target.closest('section').addClass('active')
		// 													.siblings().removeClass('active');
	});
});

// PAGE SCROLL CODE

var scrollTimer = null;
var lastScrollFireTime = 0;

$(document).on('mousewheel DOMMouseScroll', function (e) {
	e.preventDefault();

	var minScrollTime = 75;
	var now = new Date().getTime();
	var active = $('section.active');
	// var prev = $(this).prev('.content');
	// var next = $(this).next('.content')

	var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
	if (scrollTimer === null) {
		if ((now - lastScrollFireTime) > (minScrollTime)) {
				if(delta < 0) {
					var next = active.next();
						if (next.length) {
							$('.grayscale-blur').removeClass('grayscale-blur');
							$('html, body').animate({
								scrollTop: next.offset().top
							},500,
							function () {
								next.addClass('active')
										.siblings().removeClass('active').clearQueue();
									}
								);

							}
						} else if (delta > 0) {
							var prev = active.prev();
							if (prev.length) {
								$('.grayscale-blur').removeClass('grayscale-blur');
								$('html, body').animate({
									scrollTop: prev.offset().top
								}, 500,
								function () {
									prev.addClass('active')
										.siblings().removeClass('active').clearQueue();
								});
							}
						}
					lastScrollFireTime = now;
					}
					scrollTimer = setTimeout(function() {
						scrollTimer = null;
						lastScrollFireTime = new Date().getTime();
					}, minScrollTime);
				}
	});

	$(document).on('keydown', function (e) {
		e.preventDefault();

		var minScrollTime = 75;
		var now = new Date().getTime();
		var active = $('section.active');

		if (scrollTimer === null) {
			if ((now - lastScrollFireTime) > (minScrollTime)) {
					if( (e.keyCode == 40 || e.which == 40) || (e.keyCode == 32 || e.which == 32) ) {
						var next = active.next();
							if (next.length) {
								$('.grayscale-blur').removeClass('grayscale-blur');
								$('html, body').animate({
									scrollTop: next.offset().top
								},500,
								function () {
									next.addClass('active')
											.siblings().removeClass('active').clearQueue();
										}
									);

								}
							} else if (e.keyCode == 38 || e.which == 38) {
								var prev = active.prev();
								if (prev.length) {
									$('.grayscale-blur').removeClass('grayscale-blur');
									$('html, body').animate({
										scrollTop: prev.offset().top
									}, 500,
									function () {
										prev.addClass('active')
											.siblings().removeClass('active').clearQueue();
									});
								}
							}
						lastScrollFireTime = now;
						}
						scrollTimer = setTimeout(function() {
							scrollTimer = null;
							lastScrollFireTime = new Date().getTime();
						}, minScrollTime);
					}
		});


	// GRAYSCALE ON HOVER

	$('.page-button').on('mouseenter', function () {
		if ($(this).hasClass('clicked-container') === false) {
			$(this).closest('section').find('.background-container').addClass('grayscale-blur');
		}
		var icon = $(this).find('i');
		if ($(this).hasClass('clicked-container') === false) {
			if ($(this).is('#home-button')) {
				icon.addClass('button-chocolate');
			} else if ($(this).is('#binoculars-button')) {
				icon.addClass('button-red');
			} else if ($(this).is('#paw-button, #lucky-button')) {
				icon.addClass('button-gold');
			} else if ($(this).is('#tree-button')) {
				icon.addClass('button-green');
			} else if ($(this).is('#galvanize-button')) {
				icon.addClass('button-gray');
			} else if ($(this).is('#career-button')) {
				icon.addClass('button-peru');
			} else if ($(this).is('#future-button')) {
				icon.addClass('button-orangered');
			}	else if ($(this).is('#twitter, #linkedin')) {
				icon.addClass('button-blue');
			} else if ($(this).is('#fishing-button, #ringo-button')) {
				icon.addClass('button-red');
			} else if ($(this).is('#brewing-button')) {
				icon.addClass('button-blue');
			} else if ($(this).is('#brewery-button')) {
				icon.addClass('button-peru');
			} else if ($(this).is('#colorado-button')) {
				icon.addClass('button-orangered');
			} else if ($(this).is('#github, #lacey-button')) {
				$(this).addClass('contact-button-white');
				icon.addClass('github-transition');
			}
		}
});
	$('.page-button').on('mouseleave', function () {
			if ($(this).hasClass('clicked-container') === false) {
				$(this).closest('section').find('.background-container').removeClass('grayscale-blur');
			}
			var icon = $(this).find('i');
			if ($(this).hasClass('clicked-container') === false) {
				if ($(this).is('#home-button')) {
					icon.removeClass('button-chocolate');
				} else if ($(this).is('#binoculars-button')) {
					icon.removeClass('button-red');
				} else if ($(this).is('#paw-button, #lucky-button')) {
					icon.removeClass('button-gold');
				} else if ($(this).is('#tree-button')) {
					icon.removeClass('button-green');
				} else if ($(this).is('#galvanize-button')) {
					icon.removeClass('button-gray');
				} else if ($(this).is('#career-button')) {
					icon.removeClass('button-peru');
				} else if ($(this).is('#future-button')) {
					icon.removeClass('button-orangered');
				}	else if ($(this).is('#twitter, #linkedin')) {
					icon.removeClass('button-blue');
				} else if ($(this).is('#fishing-button, #ringo-button')) {
					icon.removeClass('button-red');
				} else if ($(this).is('#brewing-button')) {
					icon.removeClass('button-blue');
				} else if ($(this).is('#brewery-button')) {
					icon.removeClass('button-peru');
				} else if ($(this).is('#colorado-button')) {
					icon.removeClass('button-orangered');
				} else if ($(this).is('#github, #lacey-button')) {
					$(this).removeClass('contact-button-white');
					icon.removeClass('github-transition');
				}
			}
		});


	$('.page-button').click(function () {
		if ($(this).hasClass('clicked-container') === false) {
			$(this).closest('section').find('.background-container').addClass('grayscale-blur');
		}
		var icon = $(this).find('i');
		if ($(this).hasClass('clicked-container') === false) {
		if ($(this).is('#home-button')) {
			icon.addClass('button-chocolate');
		} else if ($(this).is('#binoculars-button')) {
			icon.addClass('button-red');
		} else if ($(this).is('#paw-button, #lucky-button')) {
			icon.addClass('button-gold');
		} else if ($(this).is('#tree-button')) {
			icon.addClass('button-green');
		} else if ($(this).is('#galvanize-button')) {
			icon.addClass('button-gray');
		} else if ($(this).is('#career-button')) {
			icon.addClass('button-peru');
		} else if ($(this).is('#future-button')) {
			icon.addClass('button-orangered');
		}	else if ($(this).is('#twitter, #linkedin')) {
			icon.addClass('button-blue');
		} else if ($(this).is('#fishing-button, #ringo-button')) {
			icon.addClass('button-red');
		} else if ($(this).is('#brewing-button')) {
			icon.addClass('button-blue');
		} else if ($(this).is('#brewery-button')) {
			icon.addClass('button-peru');
		} else if ($(this).is('#colorado-button')) {
			icon.addClass('button-orangered');
		} else if ($(this).is('#github')) {
			$(this).addClass('contact-button-white');
			icon.addClass('github-transition');
		} else if ($(this).is('#lacey-button')) {
			$(this).removeClass('contact-button-white');
			icon.removeClass('github-transition');
		}
	} else {
			if ($(this).is('#home-button')) {
				icon.removeClass('button-chocolate');
			} else if ($(this).is('#binoculars-button')) {
				icon.removeClass('button-red');
			} else if ($(this).is('#paw-button, #lucky-button')) {
				icon.removeClass('button-gold');
			} else if ($(this).is('#tree-button')) {
				icon.removeClass('button-green');
			} else if ($(this).is('#galvanize-button')) {
				icon.removeClass('button-gray');
			} else if ($(this).is('#career-button')) {
				icon.removeClass('button-peru');
			} else if ($(this).is('#future-button')) {
				icon.removeClass('button-orangered');
			}	else if ($(this).is('#twitter, #linkedin')) {
				icon.removeClass('button-blue');
			} else if ($(this).is('#fishing-button, #ringo-button')) {
				icon.removeClass('button-red');
			} else if ($(this).is('#brewing-button')) {
				icon.removeClass('button-blue');
			} else if ($(this).is('#brewery-button')) {
				icon.removeClass('button-peru');
			} else if ($(this).is('#colorado-button')) {
				icon.removeClass('button-orangered');
			} else if ($(this).is('#github')) {
				$(this).addClass('contact-button-white');
				icon.removeClass('github-transition');
		}
	}
	});

	$('.page-button').on('click', function () {
		$(this).parent('section').addClass('grayscale-blur');

		var toggleContentWindow = function (elem) {
			$(elem).toggleClass('clicked-container');
			$(elem).find('a').toggleClass('clicked-icon');
			$(elem).find('.content-fill').toggle();
		};

		if ($(this).hasClass('sm-button') === false
		// && $(this).hasClass('clicked-container') === false
	){
			if ($(this).hasClass('front-button')) {
			// alert('front button!!');
			toggleContentWindow(this);

		} else if ($(this).hasClass('sub-button')) {
			if ($(this).hasClass('clicked-container') === false) {
				$(this).siblings('.sub-button').fadeToggle();
				$(this).fadeToggle(function () {
				toggleContentWindow(this);
				$(this).fadeToggle();
			});
		} else if ($(this).hasClass('clicked-container')) {
			$(this).fadeOut(function () {
				toggleContentWindow(this);
				$(this).closest('section').find('.sub-button').fadeIn();
			})
		}

			// if ($(this).hasClass('clicked-container') === false) {
			// 	$(this).closest('section').find('.sub-button').fadeToggle();
			// 	$(this).queue(function () {
			// 		$(this).toggleClass('hidden-button');
			// 		$(this).toggleClass('hidden-button');
			// 		toggleContentWindow(this);
			// 		$(this).toggle();
			// 	})
			// } else if ($(this).hasClass('clicked-container')){
			// 		toggleContentWindow(this);
			// 		$(this).siblings('.sub-button').fadeToggle();
			// 		$(this).removeClass('clicked-container');
			// }
		} else {
					$(this).animate( 400, function () {
						$(this).fadeOut('slow', function () {
							$(this).closest('section').find('.hidden-start').toggleClass('.hidden-start').fadeIn();
					})
					$(this).addClass('faded');
					$('a').closest('section').find('background-container').addClass('grayscale-blur');
					})
		}
	}
	});



// alert('end');
});

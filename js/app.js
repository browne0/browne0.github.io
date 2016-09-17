$.fn.scrollBottom = function() { 
	return $(document).height() - this.scrollTop() - this.height(); 
};

typer('.typertext', 45)
.cursor({blink: 'soft'})
.line(' ')
.pause(2000)
.continue('^')
.pause(2000)
.continue(" That's me. ")
.pause(1500)
.continue('I create beautiful & functional websites & applications for all devices.')
.pause(5000)
.back('all')
.pause(500)
.continue("Over the years, I've developed strong skills as a Web Developer.")
.pause(2000)
.back(14)
.continue("iOS Developer.")
.pause(2000)
.back(14)
.continue("Photographer.")
.pause(2000)
.back(13)
.continue("Designer.")
.pause(2000)
.back(9)
.continue("Ukulele player.")
.pause(2000)
.back('all')
.continue("I can do whatever you need, really. I'm an overachiever.")
.pause(4000)
.empty()
.pause(300)
.continue("Web Developer, iOS Developer, Designer, Photographer. The story continues!");

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
    	forceHeight: false,
    	mobileCheck: function() {
    		return false;
    	}
    });
} )( jQuery );

// Hotfix: Realign navbar logo when button is pressed
$(".navbar-toggle").on("click", function(){
	if ($('.navbar-toggle').attr('aria-expanded') === "false") {
		$(".navbar-toggle ~ a").toggleClass("onMobileBrand");
		$(".navbar-toggle").toggleClass("onMobileButton");
	}
});

// Feature: Smooth Scrolling on navbar link clicks

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.link').click(function() {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  		var target = $(this.hash);
  		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  		if (target.length) {
  			$('html,body').animate({
  				scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
  			return false;
  		}
  	}
  });
});

// Feature: Work and About Pages will stick until the end of page is reached
$(document).ready(function() {

	if ($(window).width() > 800) {
		var abouts = $("#about #sticker");
		var works = $('#work #sticker2');
		var nav = $(".navbar").height();
		var aboutpos = abouts.offset(); 
		var workpos = works.offset();                   
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			// console.log("Scroll position: " + windowpos);
			console.log("Distance to bottom " + $(window).scrollBottom());
			if (windowpos > workpos.top) {
				works.addClass("stick");
				works.removeClass("sticky-fix");
			} else {
				works.removeClass("stick");
			}

			if ($(window).scrollBottom() <= $('#contact').height()) {
				works.removeClass("stick");
				works.addClass("sticky-fix");
			}
			if (windowpos >= aboutpos.top) {
				abouts.addClass("stick");
				abouts.removeClass("sticky-fix");
			} else {
				abouts.removeClass("stick");
			}

			if ($(window).scrollBottom() <= $('#work').height()) {
				abouts.removeClass("stick");
				abouts.addClass("sticky-fix");
			}
		});
	}

	console.log($('#about .rightcont').height())
});

var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
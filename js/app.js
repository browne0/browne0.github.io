var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider

		.when('/', {
			templateUrl: './pages/workMain.html',
			controller: 'WorkMainController'
		})

		.when('/projects/spotter', {
			templateUrl: './pages/spotter.html',
			controller: 'SpotterController'
		})

		.when('/projects/factsoftoday', {
			templateUrl: './pages/factsoftoday.html',
			controller: 'FactsOfTodayController'
		})

		.when('/projects/medxport', {
			templateUrl: './pages/medxport.html',
			controller: 'MedxportController'
		})

		.when('/projects/mychef', {
			templateUrl: './pages/mychef.html',
			controller: 'MyChefController'
		})

		.when('/projects/beesdesign', {
			templateUrl: './pages/beesdesign.html',
			controller: 'BeesDesignController'
		})

		.when('/projects/shoppingcart', {
			templateUrl: './pages/shoppingCart.html',
			controller: 'ShoppingCartController'
		})

		.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode({
			enabled: true,
		});
	}]);

app.controller('HomeController', function($scope) {
	$scope.$on('$routeChangeSuccess', function(){
		if ($(window).width() > 800) {
			// Check to see whether it should stick on page load
			var abouts = $("#about #sticker");
			var aboutpos = abouts.offset();
			var nav = $(".navbar").height();
			$(window).scroll(function() {
				var windowpos = $(window).scrollTop();
				// console.log("Scroll position: " + windowpos);
				// console.log("Distance to bottom " + $(window).scrollBottom());

				if (windowpos >= aboutpos.top + $('#work').height()) {
					abouts.addClass("stick");
					abouts.removeClass("sticky-fix");
				} else {
					abouts.removeClass("stick");
				}

				if ($(document).scrollTop() > 50) {
					$('nav').addClass('shrink');
					$('.navbar li a').addClass('shrink');
					$('.navbar-brand').addClass('shrink');
				} else {
					$('nav').removeClass('shrink');
					$('.navbar li a').removeClass('shrink');
					$('.navbar-brand').removeClass('shrink');
				}
			});
		}
	});
});

app.controller('WorkMainController', function($scope) {
	$scope.pageClass = 'work-home';
})

app.controller('SpotterController', function($scope) {
	$scope.pageClass = 'work-spotter';
});

app.controller('FactsOfTodayController', function($scope) {
	$scope.pageClass = 'work-factsoftoday';
});

app.controller('MedxportController', function($scope) {
	$scope.pageClass = 'work-medxport';
});

app.controller('MyChefController', function($scope) {
	$scope.pageClass = 'work-mychef';
});

app.controller('BeesDesignController', function($scope) {
	$scope.pageClass = 'work-beesdesign';
});

app.controller('ShoppingCartController', function($scope) {
	$scope.pageClass = 'work-shoppingcart';
});

app.directive('flexslider', function () {

	return {
		link: function (scope, element, attrs) {

			element.flexslider({
				animation: "slide",
				startAt: 0,
				controlNav: false,
				slideshow: false
			});
		}
	}
});



$.fn.scrollBottom = function() {
	return $(document).height() - this.scrollTop() - this.height();
};

typer('.typertext', 30)
.cursor({blink: 'soft'})
.line(' ')
.pause(500)
.continue("Web Developer, iOS Developer, Web Designer, Photographer. The story continues!");

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
		( function( $ ) {
	    // Init Skrollr
			    var s = skrollr.init({
			    	forceHeight: false,
			    	mobileCheck: function() {
			    		return false;
			    	}
			    });
		} )( jQuery );
	}

	// console.log($('#about .rightcont').height())

  // hide our element on page load
	$('.funfact').css('opacity', 0)
	$('.animated').waypoint(function() {
  	$(this).toggleClass($(this).data('animated'));
  	$(this).css('opacity', 1)
  },{ offset: '100%', triggerOnce: true });

  $("body").click(function(event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
        if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
        	$('.navbar-collapse').collapse('toggle');
        }
    });

});
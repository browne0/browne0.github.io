typer('.typertext', 45)
	.cursor({blink: 'soft'})
	.pause(500)
	.line('^')
	.pause(2000)
	.continue(" That's me. ")
	.pause(1500)
	.continue('I create beautiful & functional websites/applications for all devices.')
	.pause(5000)
	.empty()
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
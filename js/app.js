typer('.typertext', 45)
	.cursor({blink: 'soft'})
	.line("I'd like to say that I'm a pretty skilled Web Developer.")
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
	.continue("I can do whatever you need, really. Can't help it, I'm an overachiever.")
	.pause(5000)
	.empty()
	.pause(300)
	.continue("Web Developer, iOS Developer, Designer, Photographer. The story continues!");

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
    	forceHeight: false,
    	return false
        render: function(data) {
            //Debugging - Log the current scroll position.
            // console.log(data.curTop);
        }
    });
} )( jQuery );
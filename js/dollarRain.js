// JavaScript Document
(function ( $ ) {
 
var settings = $.extend({
            // These are the defaults.
            number: 100,
            images : ["img/dollar1.jpg", "img/dollar2.jpg", "img/dollar3.jpg"]
        }, settings );
		
 
    $.fn.dollarRain = function() {
		for (i=0;i<settings.number;i++) {
		var w = $(this).width();
		var h = $(this).height();
		var src = settings.images[i%settings.images.length];
		var x = Math.round(Math.random()*w)-100 +  "px";
		var y = -Math.round(Math.random()*h)-100 +  "px";
		var delay = Math.random();
	    var delay = " -webkit-animation-delay: "+delay+"s;-moz-animation-delay: "+delay+"s;";

		var leaf = "<img src='"+src+"' class='fallingLeaves' style='left:"+x+";top:" + y + ";"+delay + "' >";		
		console.log(leaf);
		$(this).append(leaf);
	}
        return this;
    };
 
}( jQuery ));
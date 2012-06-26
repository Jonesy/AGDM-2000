// prevent viewport scrolling
document.ontouchmove = function(e) { e.preventDefault(); }

// make pads change color and play sound when tapped
var pads = document.querySelectorAll("div.drumpad");

for (var i = 0; i < pads.length; i++) {
  pads[i].addEventListener("touchstart", function() { 
    AG.media.play("Application/shared/assets/samples/" + this.getAttribute("data-sound"));
	  this.id = 'playing';
  });

  pads[i].addEventListener("touchend", function() {
	  this.id = '';
  });

};

// play an empty sound every 10 seconds to ensure that the speakers do not go to sleep mode
setInterval(function() { AG.media.play("Application/shared/assets/samples/null.aiff") }, 10000);
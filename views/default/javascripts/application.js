// prevent viewport scrolling
document.ontouchmove = function(e) { e.preventDefault(); }

// make pads change color and play sound when tapped
var pads = document.querySelectorAll("div");

for (var i = 0; i < pads.length; i++) {
  pads[i].addEventListener("touchstart", function() { 
    AG.media.play("Application/shared/assets/samples/" + this.getAttribute("data-sound"));
	  this.className = 'playing';
  });

  pads[i].addEventListener("touchend", function() {
	  this.className = '';
  });

};
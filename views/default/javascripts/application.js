// prevent viewport scrolling
document.ontouchmove = function(e) { e.preventDefault(); }

// make pads change color and play sound when tapped
var pads = document.querySelectorAll("div.drumpad_container > div");

for (var i = 0; i < pads.length; i++) {
  pads[i].addEventListener("touchstart", function() {
    var soundFile = this.getAttribute("data-sound");
    AG.media.play("Application/shared/assets/samples/" + soundFile);
	  this.className = 'playing';
  });

  pads[i].addEventListener("touchend", function() {
	  this.className = '';
  });

};

// play an empty sound every 10 seconds to ensure that the speakers do not go to sleep mode
setInterval(function() { AG.media.play("Application/shared/assets/samples/null.aiff") }, 10000);
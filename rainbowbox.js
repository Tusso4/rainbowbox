var inter;
var jumps = 0;

function tryRgb2_callback(num, loop=false, elem) {
	if(hastax.length-1 < jumps && loop == true) {
  	jumps = 0;
  }
	var toNext = [ [ hastax[jumps][0], hastax[jumps][1], hastax[jumps][2] ] ];
	var toBack = ($(elem).css("background-color")).substring(4, ($(elem).css("background-color")).length-1).replace(/ /g, '').split(',');
 
  tryRgb2($(elem), toBack, toNext, loop);

  jumps++;
}

function tryRgb2(elem, from=[0, 0, 0], to=[255, 255, 255], loop=false, vel=20) {
		//Vars
    var rgb_now;
    var rgb;
    var count = 0;
    if(to.constructor === Array)
    	count = to.length;
    
    var toStr = to.toString().replace(" ", "").split(",");
		if(to[0].constructor === Array) {
    	toStr = to[0].toString().replace(" ", "").split(",");
    }
		rgb = toStr;
    if(toStr.length < 1) {
    	return false;
    }

    var fromStr = from.toString().replace(" ", "").split(",");
		rgb_now = fromStr;
    if(fromStr.length < 1) {
    	return false;
    }

    //Timer
    inter = setInterval(function() {
      if(rgb[0] == rgb_now[0] && rgb[1] == rgb_now[1] && rgb[2] == rgb_now[2]) {
        clearInterval(inter);
        if(to[0].constructor === Array) {
	        tryRgb2_callback(count, loop, elem);
        }
      }
      
      for(var i = 0; i < 3; i++) {
      	if(rgb_now[i] < rgb[i] && rgb_now[i] != rgb[i]) {
        	rgb_now[i]++;
        }
        else if(rgb_now[i] > rgb[i] && rgb_now[i] != rgb[i]) {
        	rgb_now[i]--;
        }
      }

      $(elem).css("background-color", "rgb("+rgb_now[0]+", "+rgb_now[1]+", "+rgb_now[2]+")");
		}, vel);
}

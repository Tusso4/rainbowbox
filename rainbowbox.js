(function(window){
    var inter = [];
    var interMultiColor = [];
    var started = [];
    
    function Libreria() {
        var _init = {};
        
        
        return _init;
    }
    
    stopAll = function() {
        for(var i = 0; i < inter.length; i++) {
            clearInterval(inter[i]);
            clearInterval(interMultiColor[i - 1]);
        }
        console.log("Stop ALL");
        //stopAll();
    }

    function _b(elem, to=[255,255,255], from=[0,0,0], animated=false, velocity=20) {
        var fixedTo = "";
        if(animated == false)
            return $(elem).css("background-color", "rgb("+to.toString()+")");
        else {
            var multiColor = false;
            var actualRgb = from;
            var jumps = 0;
            var interId = inter.push(
                [setInterval(function() {
                    if(to.constructor == Array) {
                        fixedTo = to;
                    } else {
                        fixedTo = (to.replace(new RegExp(" ","g"), "")).split(",");
                    }
                    if(to[0].constructor == Array) {
                        multiColor = true;
                        if(!interMultiColor[interId - 1]) {
                            interMultiColor[interId - 1] = setInterval(function() {
                                if(actualRgb.toString() == to[jumps].toString()) {
                                    if(jumps + 1 > to.length - 1) {
                                      clearInterval(inter[interId - 1][0]);
                                      clearInterval(interMultiColor[interId - 1]);
                                      return false;
                                    }
                                    jumps++;
                                } else {
                                    for(var i = 0; i < 3; i++) {
                                      if(actualRgb[i] > to[jumps][i])
                                        actualRgb[i]--;
                                      if(actualRgb[i] < to[jumps][i])
                                        actualRgb[i]++;
                                    }
                                    $(elem).css("background-color", "rgb("+actualRgb.toString()+")");
                                }
                            });
                        }
                    }
                }, velocity), elem]
            );
        }
    }

    if(typeof(window.rainbowbox) === 'undefined'){
        var options = {
            to: [255,255,255],
            from: [0,0,0],
            animated: true,
            velocity: 20
        };
                
        window.rainbowbox = function(element = null, config = null) {
            if(element === null || $(element)[0].ownerDocument === undefined) {
                console.log("Rainbowbox: Falta el parametro 'Element'");
                return false;
            }
            if(config !== null) {
                if(config.constructor == Object) {
                    $.each(config, function(a, b) {
                        if(options[a]) {
                            options[a] = config[a];
                        } 
                    });
                } else {
                    console.log("Rainbowbox: Configuracion erronea");
                }
            } else {
                console.log("Rainbowbox: Configuracion erronea");
            }
        };
        
        window.rainbowbox.stopAll = function() {
            stopAll();
        };
    }
})(window);



//rainbowbox($("#rainbowbox"), [ [ 255,255,255 ], [ 0,255,0 ] , [ 0,0,255 ] ], [0,0,0], true, 500);

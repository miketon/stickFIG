(function(){

  var C = window.C = function(){
    alert('Library Wrapping');
  }

  C.init = function(){

    var  $ = function(id)  { return document.getElementById(id) } ;
    var dc = function(tag) { return document.createElement(tag) } ;
    var w  = 320                                                  ;
    var h  = 240                                                  ;

    var canvas    = dc('canvas')      ;
    canvas.id     = 'canvasMT'        ;
    canvas.width  = w                 ;
    canvas.height = h                 ;
    document.body.appendChild(canvas) ;

    C.x   = canvas.offsetLeft       ; //delta from x.offsetParent (body)
    C.y   = canvas.offsetTop        ; //alt = e.offsetX (will tile?)
    C.TX  = canvas.getContext('2d') ;

    C.clearCanvas = function(){
      C.TX.setTransform(1,0,0,1,0,0)           ; //reset canvas
      C.TX.fillStyle = 'rgba(122,122,122,1.0)' ;
      C.TX.fillRect(0, 0, w, h)                ;
    }()                                     ;
  }

  function debugPrint(text, x, y){
    C.TX.setTransform(1,0,0,1,MOUSE.x,MOUSE.y) ; //reset canvas
    C.TX.fillStyle = '#DDD'                    ;
    C.TX.font      = '10pt Helvetica'          ;
    C.TX.fillText(text, 0, 0)                  ;
  }

})();

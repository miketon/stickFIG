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
    var c = canvas.getContext('2d') ;

    C.clearCanvas = function(){
      c.setTransform(1,0,0,1,0,0)           ; //reset canvas
      c.fillStyle = 'rgba(122,122,122,1.0)' ;
      c.fillRect(0, 0, w, h)                ;
    }()                                     ;
  }

  function debugPrint(text, x, y){
    CTX.setTransform(1,0,0,1,MOUSE.x,MOUSE.y) ; //reset canvas
    CTX.fillStyle = '#DDD'                    ;
    CTX.font      = '10pt Helvetica'          ;
    CTX.fillText(text, 0, 0)                  ;
  }

})();

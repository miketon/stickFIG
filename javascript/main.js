function initCanvas(width, height){
  $      = function(id)  { return document.getElementById(id) } ;
  var dc = function(tag) { return document.createElement(tag) } ;

  var canvas    = dc('canvas')      ;
  canvas.id     = 'canvasMT'        ;
  canvas.width  = width             ;
  canvas.height = height            ;
  document.body.appendChild(canvas) ;

  return canvas                     ;
}

function clearCanvas(){
  CTX.setTransform(1,0,0,1,0,0)           ; //reset canvas
  CTX.fillStyle = 'rgba(122,122,122,1.0)' ;
  CTX.fillRect(0, 0, C.w, C.h)            ;
}

function helloWorld(){
  alert('The world!');
}

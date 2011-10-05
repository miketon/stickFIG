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

function helloWorld(){
  alert('The world!');
}

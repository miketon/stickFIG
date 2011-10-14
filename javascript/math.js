alert('math.js init!');

function point_To_Mouse(pos){
  var dx    = MOUSE.x - (pos.x) ;
  var dy    = MOUSE.y - (pos.y) ;
  return Math.atan2(dy, dx)     ; //return angle
}

function distanceBetween(x1,x2,y1,y2) {
  var dx = x1-x2                  ;
  var dy = y1-y2                  ;
  return Math.sqrt(dx*dx + dy*dy) ;
}

function ik_Solve(ik_0, ik_1, target){
  var angle  = []                                ;
  var dx     = target.x - ik_0.x                 ;
  var dy     = target.y - ik_0.y                 ;
  var dist   = Math.sqrt(dx *dx + dy* dy)        ;
  var a      = ik_0.length                       ;
  var b      = ik_1.length                       ;
  var c      = Math.min(dist, a + b)             ;
  var B      = Math.acos((b*b-a*a-c*c)/(-2*a*c)) ;
  var C      = Math.acos((c*c-a*a-b*b)/(-2*a*b)) ;
  var D      = Math.atan2(dy, dx)                ;
  angle.push(D + B)                              ;
  var end    = ik_0.getpin()                     ;
  ik_1.x     = end.x                             ;
  ik_1.y     = end.y                             ;
  angle.push(D + B + Math.PI + C)                ;
}

function toggle(nBool){
  if(nBool==true)       { return false ; }
  else if(nBool==false) { return true  ; }
  else                  { return true  ; }
}


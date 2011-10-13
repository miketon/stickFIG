alert('drawNode.js init!');
function drawNode(type){
  if(this instanceof drawNode){
    alert('instance true');
    if(type == 0){
      this.draw = function(){
        return this.y;
      }
    }
    else{
      this.draw = function(){
        return this.x;
      }
    }
  } else{
    alert('instance false');
    return new drawNode(type);
  }
}

drawNode.prototype = {
  x:1399,
  y:911,
  print:function(){
    alert('I live!');
  }
}

alert('drawNode.js init!');
function drawNode(type){
  if(this instanceof drawNode){
    this.init(type);
  } else{ return new drawNode(type);  }
}

drawNode.prototype = {
  type     : 'Node'                      ,
  x        : 0                           ,
  y        : 0                           ,
  angle    : 0                           ,
  dragging : false                       ,
  radius   : 10                          ,
  length   : 70                          ,
  draw     : 'Insert draw function here' ,

  text     : 'Insert your message. '     ,
  color    : 'rgba(222,222,222,1.0)' ,

  getpin : function(){
    var end   = {x:0, y:0}                                    ;
    end.x     = this.x + (Math.cos(this.angle) * this.length) ;
    end.y     = this.y + (Math.sin(this.angle) * this.length) ;
    return end                                                ;
  },

  xform : function(){
    // translation matrix:
    //  1  0  tx              
    //  0  1  ty
    //  0  0  1 
    //CTX.setTransform(1,0,0,1,0,0)                                                                     ; //reset canvas
    C.TX.setTransform(Math.cos(this.angle), Math.sin(this.angle), -Math.sin(this.angle), Math.cos(this.angle), this.x, this.y) ;
  },

  print:function(){
    alert('I live!' + C.x);
  },

  init: function(type){
    this.type = type                 ;
    alert('I is type : '+ this.type) ;
  }
}

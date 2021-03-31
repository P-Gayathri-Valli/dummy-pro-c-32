class S {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      stroke("rgb(51, 53, 53)");
      fill("rgb(51, 53, 53)");
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }
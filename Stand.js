class Stand {
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
      stroke("rgb(27, 171, 239)");
      fill("rgb(27, 171, 239)");
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  }
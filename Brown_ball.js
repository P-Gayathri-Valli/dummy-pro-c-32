class Brown_ball {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body=Bodies.circle(x,y,20,options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      fill("rgb(102, 51, 0)")
      stroke("rgb(102, 51, 0)")
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, 20, 20);
      pop()
    }
  }
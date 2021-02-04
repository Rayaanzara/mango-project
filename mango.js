class mango {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.image =  loadImage("mango.png")
      this.mango = Bodies.rectangle(x, y, width, height, options);
      this.width = 120;
      this.height = 200;
      
      World.add(world, this.mango);
    }
    display(){
      var pos =this.mango.position;
      var angle = this.mango.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4)
      stroke("white")
      fill("grey");
      image(this.image,0, 0, 120, 200);
      pop();
    }
  };
  
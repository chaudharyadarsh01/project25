class Box {

    constructor(x, y, width, height) {

     
        this.x= x;
        this.y= y;
        this.width = width;
        this.height = height;
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic:true});

      World.add(world, this.body);
      this.dimage = loadImage("dustbingreen.png");
    }
    display(){
      //rectMode(CENTER);
      
      image(this.dimage, 560, 550,100,100);
    }
  };
  
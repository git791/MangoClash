class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("PluckMango/stone.png");
      this.Visiblity = 255;
    }
  
    display() {
  
      super.display();
  
       var position = [this.body.position.x, this.body.position.y];

      }
    }
  
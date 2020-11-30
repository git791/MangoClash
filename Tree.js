class Tree{
    constructor(x, y){
        var options={
             isStatic: true
        }
        this.body= Bodies.circle(x,y);
        this.image= this.image("PluckMango/tree.png")
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
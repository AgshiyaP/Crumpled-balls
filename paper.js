class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitustion: 0.3,
            friction: 0.5,
            density:1.2
 }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius

        World.add(world,this.body);

    }
    display(){
    push()
    ellipseMode(2*this.radius)
   ellipse(this.body.position.x,this.body.position.y,2*this.radius,)
    fill(169,169,169)
    pop()

    }
    


}
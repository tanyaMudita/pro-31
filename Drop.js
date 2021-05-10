class  Drops{

    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:1.2,
        }

        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
       
    }

    display(){

    var pos=this.body.position;

    push();
    translate(pos.x,pos.y)
    ellipseMode(CENTER);
    fill("blue");
    ellipse(0,0,this.radius);
    pop();

    }

    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,100),y:random(0,400)})
        }
    }
}
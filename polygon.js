class Polygon{

    constructor(x,y){
    var options={
    
        
        isStatic:false,
        restitution:0.5
    
    }
    this.radius=20;
    this.body=Bodies.circle(x,y,this.radius,options);
    
    World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;
        fill ("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    
    }
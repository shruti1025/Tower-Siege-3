class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        rotate(angle);
        rectMode(CENTER);


        fill (random (50,255),random(50,255),random(50,255));
        strokeWeight(4);
        stroke("black");

        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
      else{
        push();
        World.remove(world, this.body);
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        pop();
      }

      }

      score(){
        if(this.Visibility<0 && this.Visibility >-105){
          score++;
        }
      }
}
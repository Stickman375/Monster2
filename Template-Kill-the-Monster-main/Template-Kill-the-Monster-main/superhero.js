class Superhero{
    constructor(x, y,r) {
        var options = {
           //isStatic:false,
           //restitution:0,
           friction:1,
           density:1.2
        }
        
        this.x = x;
        this.y = y;
        this.r=r;
        this.image = loadImage("superhero.png");
        this.body = Bodies.rectangle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y-100);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+150, this.r);
        pop();
      }
}
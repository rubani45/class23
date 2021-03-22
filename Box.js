class Box{
    constructor(x,y,width,height){
         var  box_options = {
            restitution : 1.5
          }

          this.width = width;
          this.height = height;

          this.body = Bodies.rectangle(x,y,width,height,box_options);
         World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);

     push();
        fill("red");
        rect(pos.x,pos.y,this.width,this.height); 
     pop();
    }
}
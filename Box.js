class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 255;
      //check the spelling of visiblity if error appears;
     // this.image = loadImage("sprites/wood1.png");
    }
  
  display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
   super.display();
}
else{
  World.remove(world, this.body);
  push();
  this.visibility = this.visibility -5;
  pop();
}
}

score (){

  if (this.visibility<0 && this .visibility>-105){
    score++
  }
}

}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
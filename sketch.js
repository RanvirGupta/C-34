//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock; 

function preload(){
  var images, dogImg1, dogImg2;
	//load images here
   dogImg1 = loadImage("images/dog.png");
   dogImg2 = loadImage("images/happyDog.png");
  
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite();
  dog.addImage("dogImg1"); 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  Text("Note: Press UP_ARROW key to feed drago milk")
}


function draw() { 
  background("46, 139, 87") 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2)
  }
  drawSprites();
  //add styles here

}

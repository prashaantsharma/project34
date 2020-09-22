//Create variables her
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload(){
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  var dogimg = loadImage("dog");
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}
function readStock(data){
foodS=data.val();
}





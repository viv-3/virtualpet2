var dog,dogImg;
var happyDogImg;
var database;
var foodS;
var foodStock;
var feed, addFood;
var fedTime, lastFed;
var foodObj;

function preload()
{
  dogImg = loadImage("dogImg.png")
  happyDogImg = loadImage("dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  
  foodObj = new object;

  dog = createSprite(200,200)
  dog.addImage(dogImg)

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);

  feed = createButton("Feed the Dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.positon(800,95)
  addFood.mousePressed(addsFood)
  
}


function draw() {  
  background(46,139,87)
  food.display();
  drawSprites();
 
  

  textSize = 15
  fill("yellow")
  stroke(3)
  text("foodStock",300,20)

  fedTime =database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  });
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last Feed: "+lastFed%12 +"PM",350,30)
  } else if(lastFed===0){
    text("Last Feed: 12 AM", 350,30);
  }else{
    text("Last Feed:"+lastFed+"AM",350,30)
  }

}

function  addsFood(){

}

function readStock(data){
  foodS = data.val();
}

function writeStock(){
  database.ref("/").update({
    Food:x
  })
}

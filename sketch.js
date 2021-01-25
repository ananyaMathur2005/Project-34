var dog , happyDog , foodS , foodStock;
var dog_Img , happyDog_Img;
var database;

function preload()
{
dog_Img = loadImage("images/dogImg.png");
happyDog_Img = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  dog = createSprite(250,250,10,10);
  dog.addImage(dog_Img);
  dog.shapeColor = "brown";

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
background(46, 139, 87);

if(keyDown(UP_ARROW)){
  writePosition(0,-1);
  writeSock(foodS);
  dog.addImage(happyDog_Img);

  drawSprites();
}
}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  if (x<=0){
x=0;
  }else {
    x=x+1;
  }
database.ref('/').update({
  Food:x
})
}

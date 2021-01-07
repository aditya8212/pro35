//Create variables here
var dog,happydog,foods,foodstock,database;


function preload()
{
  dog = loadImage("dogImg.png");
  dogi = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);

  dogn = createSprite(250,250,10,10);
  dogn.addImage(dog);
  dogn.scale = 0.2;
  
  foodstock = database.ref('food');
  foodstock.on("value",readStock)
}

function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dogn.addImage(dogi);

  }

  drawSprites();
  fill("silver");
  textSize(15);
  text("foodStock:  "+foodstock,20,20);
  text("note: press UP_ARROW to feed ",20,50)

}

function readStock(data){
  foods = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    foods:x

  })
}

//.ref = refer to a location of the database value;
//.on = it moniters the value of database;
//.set = used to set the values in the database;
//.update = used to update the values in the database;
//.val = to extract the values of the database;
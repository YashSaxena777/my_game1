var player1,player2,backgroundImg,platform;
var player1img,player2img;




function preload() {
  backgroundImg = loadImage("Sprites/bg_img.jpg");
  player1img = loadImage("Sprites/Player_1.png");
  player2img = loadImage("Sprites/Player_2.png");
  
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  player1 = createSprite()
}

function draw() {
  background(backgroundImg);  
  //drawSprites();
}
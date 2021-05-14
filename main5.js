img="";

function preload(){
 img = loadImage("Fruits.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Fruit basket",55,30);
    noFill();
    stroke("#FF0000")
    rect(50,15,550,400);
}
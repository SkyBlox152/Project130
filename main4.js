img="";

function preload(){
 img = loadImage("Bottles.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bottles",25,30);
    noFill();
    stroke("#FF0000")
    rect(20,15,600,400);
}
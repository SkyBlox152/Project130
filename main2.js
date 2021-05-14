img="";

function preload(){
 img = loadImage("Tv&ac.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Tv",205,115);
    noFill();
    stroke("#FF0000")
    rect(200,100,250,120);
    fill("#FF0000");
    text("Ac",155,25);
    noFill();
    stroke("#FF0000")
    rect(150,10,250,120);
}
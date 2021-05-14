img="";

function preload(){
 img = loadImage("Desk.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Desk",205,115);
    noFill();
    stroke("#FF0000")
    rect(20,100,550,300);
    fill("#FF0000");
    text("Chair",355,65);
    noFill();
    stroke("#FF0000")
    rect(350,50,300,300);
}
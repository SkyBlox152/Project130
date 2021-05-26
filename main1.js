img="";

function preload(){
 img = loadImage("Bedroom.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    bjectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bed",105,75);
    noFill();
    stroke("#FF0000")
    rect(100,60,450,350);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    object = results;
    console.log(results);
}
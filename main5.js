img="";

function preload(){
 img = loadImage("Fruits.jpg")
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(image, gotResult);
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
    text("Fruit basket",55,30);
    noFill();
    stroke("#FF0000")
    rect(50,15,550,400);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    object = results;
    console.log(results);
}
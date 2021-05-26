img="";

function preload(){
 img = loadImage("Tv&ac.jpg")
}


function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    bjectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(image, gotResult);
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

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    object = results;
    console.log(results);
}
 img="";
 object = [];
 status1="";
 function preload(){
 img = loadImage("Bedroom.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    if (status1 != "") {
         r=random(255);
         g=random(255);
         b=random(255);
         objectDetector.detect(image, gotResult);
    }
    for (var i = 0; i < object.length; i++) {
    fill(r,g,b);
    text(object[i].label +" "+per+"%", object[i].x, object[i].y);
    noFill();
    stroke(r,g,b)
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
    fill("#FF0000");
    text("bed",160,215);
    noFill();
    stroke("#FF0000")
    rect(150,200,360,200);
    fill("#FF0000");
    text("table",140,260);
    noFill();
    stroke("#FF0000")
    rect(130,250,120,100);
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

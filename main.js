img1 = "";
state = "";

function preload(){
    img1 = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    state = true;
    objectDetector.detect(img1, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img1, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

    fill("#FF0000");
    text("bowl", 280, 320);
    noFill();
    stroke("#FF0000");
    rect(270, 300, 130, 110);
}


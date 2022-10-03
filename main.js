Status = "";

function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,360);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}

function modelloaded(){
    console.log("modelloaded");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
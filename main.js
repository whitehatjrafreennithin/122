song="";
song1="";

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music1.mp3");
}
function setup(){
canvas = createCanvas(500, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}


function draw(){
    image(video, 0, 0 , 500, 500);
    
}

function play(){
    song.play();

    song1.play();
}
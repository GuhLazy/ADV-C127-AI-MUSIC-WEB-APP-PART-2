song=""

function setup(){
  canvas = createCanvas(400,400);
  canvas.position(550,200);
  video = createCapture(VIDEO);
  video.size(400,400);
  video.position(550,200)
}
function draw(){
    image(video,0,0,600,500)
}
function preload(){
 song = loadSound("Song.mp3")
}
function play(){
    song.play();
}

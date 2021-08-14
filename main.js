canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Nasa_Mars_Array = ["mars.jpg", "Mars1.jpg", "Mars2.jpg","Mars3.jpg" ];
RandomNum = Math.floor(Math.random()*4);


rover_width = 100;
rover_height = 90;
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
background_img = Nasa_Mars_Array[RandomNum];

function Back_Back_img(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_img;

    Rover_imgTag = new Image();
    Rover_imgTag.onload = upload_rover;
    Rover_imgTag.src = rover_image;
}
function upload_background() {
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(Rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown" ,KeyDown);
function KeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

if(keyPressed == "38"){
    Up();
    console.log("Up");
}
if(keyPressed == "40"){
    Down();
    console.log("Down");
}
if(keyPressed == "37"){
    Left();
    console.log("Left");
}
if(keyPressed == "39"){
    Right();
    console.log("Right");
}
}
function Up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, X is = " + rover_x + "Y is = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function Down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, X is = " + rover_x + "Y is = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function Left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, X is = " + rover_x + "Y is = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function Right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, X is = " + rover_x + "Y is = " + rover_y);
        upload_background();
        upload_rover();
    }
}
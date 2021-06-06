canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
roverImg="rover.png";
var nasaImages=["nasaImg1.jpg","nasaImg2.jpg","nasaImg3.jpg","nasaImg4.jpg","nasaImg5.jpg","nasaImg6.jpg","nasaImg7.jpg","nasaImg8.jpg","nasaImg9.jpg","nasaImg10.jpg"];
var random_number = Math.floor(Math.random()*10);
backgroundImg=nasaImages[random_number];
console.log("Background Image = "+backgroundImg);

function add() {
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover;
    roverImgTag.src=roverImg;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37") {
        left();
        console.log("left");
    }
    if (keyPressed=="38") {
        up();
        console.log("up");
    }
    if (keyPressed=="39") {
        right();
        console.log("right");
    }
    if (keyPressed=="40") {
        down();
        console.log("down");
    }
}
function left() {
    rover_x=rover_x-10;
    if (rover_x<0) {
        rover_x=0;
    }
    console.log("When left arrow is pressed, x= "+rover_x+" y= "+rover_y);
    uploadBackground();
    uploadRover();
}
function right() {
    rover_x=rover_x+10;
    if (rover_x>canvas.width-100) {
        rover_x=canvas.width-100;
    }
    console.log("When right arrow is pressed, x= "+rover_x+" y= "+rover_y);
    uploadBackground();
    uploadRover();
}
function up() {
    rover_y=rover_y-10;
    if (rover_y<0) {
        rover_y=0;
    }
    console.log("When up arrow is pressed, x= "+rover_x+" y= "+rover_y);
    uploadBackground();
    uploadRover();
}
function down() {
    rover_y=rover_y+10;
    if (rover_y>canvas.height-90) {
        rover_y=canvas.height-90;
    }
    console.log("When down arrow is pressed, x= "+rover_x+" y= "+rover_y);
    uploadBackground();
    uploadRover();
}
leftHandx=0;
leftHandy=0;
rightHandx=0;
rightHandy=0;
difference=0;

function setup(){
    canvas=createCanvas(250,250);
    canvas.position(750,260);
    video=createCapture(VIDEO);
 poseNet= ml5.poseNet(video,modalLoaded);
 poseNet.on('pose',gotposes);
}
function modalLoaded(){
    console.log("p is working");
}
function gotposes(result){
if(result.length>0){
    console.log("result");
    difference=floor(leftHandx-leftHandy);
}
}
function draw(){
    textsize(difference);
    text(name,50,400)
}
name=document.getElementById(name).value;
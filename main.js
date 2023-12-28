lipx=0;
lipy=0;
lip="";
function preload(){
lip=loadImage('https://i.postimg.cc/qB3QqWWX/lip1.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is ready")
}

function gotPoses (results){

    if(results.length>0){
        console.log(results);
 lipx=results[0].pose.nose.x;
 lipy=results[0].pose.nose.y;
 
        console.log("lip x is",results[0].pose.nose.x)
        console.log("lip y is",results[0].pose.nose.y)

    }
}


function draw(){
    image(video,0,0,300,300);
image(lip,lipx-240,lipy-120,50,50)
}

function take_snapshot(){
    save('lippic.png');
}
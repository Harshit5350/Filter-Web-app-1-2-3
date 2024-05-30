nose_x = 0
nose_y = 0

function preload(){
    imgc = loadImage('https://i.postimg.cc/D0n0qVFc/imageedit-3-6591311388.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}




function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-20;
        nose_y = results[0].pose.nose.y-5;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(imgc, nose_x, nose_y, 40, 40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

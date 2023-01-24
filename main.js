mustacheX = 0
mustacheY = 0
lipstickX = 0
lipstickY = 0

function preload() {    
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(mustacheX, mustacheY, 20);
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(lipstickX, lipstickY, 20);
    image(lipstick, lipstickX, lipstickY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.mustache.x;
        mustacheY = results[0].pose.mustache.y;
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = " + mustacheY);
    }
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        lipstickX = results[0].pose.lipstick.x;
        lipstickY = results[0].pose.lipstick.y;
        console.log("lipstick x = " + lipstickX);
        console.log("lipstick y = " + lipstickY);
    }
}
let video;
let poseNet;
//let noseX = 0;
//let noseY = 0;
//let eyelX = 0;
//let eyelY = 0;
let lefthandX = 0;
let lefthandY = 0;

 
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
 //createDiv(document.getElementById('words').innerHTML, 10, 490);
//'string', 10, 490);
}

function gotPoses(poses) {
  console.log(poses);
    let lhX = poses[0].pose.keypoints[9].position.x;
    let lhY = poses[0].pose.keypoints[9].position.y;
    //let nX = poses[0].pose.keypoints[0].position.x;
   // let nY = poses[0].pose.keypoints[0].position.y;
    //let eX = poses[0].pose.keypoints[1].position.x;
    //let eY = poses[0].pose.keypoints[1].position.y;
    //noseX = lerp(noseX, nX, 0.5);
   // noseY = lerp(noseY, nY, 0.5);
   // eyelX = lerp(eyelX, eX, 0.5);
    //eyelY = lerp(eyelY, eY, 0.5);
  //lefthandX = lerp(lefthandX, lhX, 0.5);
   for (let i = 0; i < poses.length; i++) {
    let keypoints = poses[i].pose.keypoints;
    if (keypoints[9].score>0.5) {
    generate();
    }
  }
}
 //let lhX = poses[0].pose.keypoints[10].position.x;
    //let lhY = poses[0].pose.keypoints[10].position.y;
//function respond() { 
  //if (lhx.length > 0) {
   
    
 // }
//}
function modelReady() {
  console.log('model ready');
}

function draw() {
  image(video, 0, 0);
  
 // let d = dist(noseX, noseY, eyelX, eyelY);

  //fill(255, 0, 0);
  //ellipse(noseX, noseY, d);
  //fill(0,0,255);
  //ellipse(eyelX, eyelY, 50);


}
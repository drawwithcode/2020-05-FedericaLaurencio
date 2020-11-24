let socket = io();
let col = ["#A30015", "#BD2D87", "#D664BE", "#DF99F0", "#B191FF"]
let col2 = ["#EEE82C", "#91CB3E", "#19381F", "#4C934C", "#427AA1"]
let bg = ["#993955", "#993955", "#2E294E", "#596475"]


socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function newConnection() {
  console.log("your id:" + socket.id)
}

function drawOtherMouse(data) {
  noFill()
  one = Math.floor(random(0,4))
    strokeWeight(3)
    stroke(col2[one])
    let q = random(5,300)

  rect(data.x, data.y, q, 1);
  
}

function preload(){
  // put preload code here
}
function changebackground(){
  back = Math.floor(random(0,4))
  background(bg[back])
}
function setup() {
  createCanvas(windowWidth,windowHeight)
  back = Math.floor(random(0,4))
  background(bg[back])

//  setInterval(changebackground, 3000)
  frameRate(4)

}

function draw() {

one = Math.floor(random(0,5))
  strokeWeight(3)
  stroke(col[one])

  noFill()
let k = random(5,300)
ellipse(mouseX, mouseY, k)
}

function mouseMoved() {




  let message = {
    x: mouseX,
    y: mouseY
}
  socket.emit("mouse", message)
}

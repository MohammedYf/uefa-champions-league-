// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    song, background, createCanvas, height, image, loadImage, width, loadSound, mousePressed
 */

let ball;
let ball2;
let ball3;
let stad; //stadium
let stad2;

let x1 = 25;
let x1Velocity;
let y1 = 50;
let y1Velocity;

let x2 = 75;
let x2Velocity;
let y2 = 90;
let y2Velocity;

let x3 = 80;
let x3Velocity;
let y3 = 28;
let y3Velocity;

let m1Velocity = 5;
let m2Velocity = 10;
let m3Velocity = 15;

let song;

function setup() {
  ball = loadImage(
    "https://cdn.glitch.com/922ab605-948d-402f-a251-f207ec14858a%2Fsoccer%20ball%20v2.webp?v=1594162094119");
  ball2 = loadImage(
    "https://cdn.glitch.com/922ab605-948d-402f-a251-f207ec14858a%2Frandom%20balll.png?v=1594164653951");
  ball3 = loadImage(
    "https://cdn.glitch.com/922ab605-948d-402f-a251-f207ec14858a%2Fwc%20ball.png?v=1594165872319");
  stad = loadImage(
    "https://cdn.glitch.com/922ab605-948d-402f-a251-f207ec14858a%2Fcamp%20nou%20pic.jpg?v=1594161242129");
  stad2 = loadImage(
    "https://cdn.glitch.com/922ab605-948d-402f-a251-f207ec14858a%2Fcl.jpg?v=1594186099658");
  song = loadSound(
    "https://cdn.glitch.com/922ab605-948d-402f-a251-f207ec14858a%2FUEFA%20Champions%20League%20Theme%20Song%20%5BOn%20Screen%5D.mp3?v=1594183408585");

  x1Velocity = m1Velocity;
  y1Velocity = m1Velocity;
  
  x2Velocity = m2Velocity;
  y2Velocity = m2Velocity;

  x3Velocity = m3Velocity;
  y3Velocity = m3Velocity;
  
  createCanvas(640,360);
}

function draw() {
  background(stad);
  image(ball, x1, y1, 100, 100);

  x1 = x1 + x1Velocity;
  y1 = y1 + y1Velocity;

  if (x1 > 640 - 100) {
    x1Velocity *= -1;
  } else if (x1 < 0) {
    x1Velocity *= -1;
  }

  if (y1 > 360 - 100) {
    y1Velocity *= -1;
  } else if (y1 < 0) {
    y1Velocity *= -1;
  }

  image(ball2, x2, y2, 100, 100);

  x2 = x2 + x2Velocity;
  y2 = y2 + y2Velocity;

  if (x2 > 640 - 100) {
    x2Velocity *= -1;
  } else if (x2 < 0) {
    x2Velocity *= -1;
  }

  if (y2 > 360 - 100) {
    y2Velocity *= -1;
  } else if (y2 < 0) {
    y2Velocity *= -1;
  }

  image(ball3, x3, y3, 100, 100);

  x3 = x3 + x3Velocity;
  y3 = y3 + y3Velocity;

  if (x3 > 640 - 100) {
    x3Velocity *= -1;
  } else if (x3 < 0) {
    x3Velocity *= -1;
  }

  if (y3 > 360 - 100) {
    y3Velocity *= -1;
  } else if (y3 < 0) {
    y3Velocity *= -1;
  }
}

function mousePressed () {
  if (song.isPlaying() ) {
    song.stop();
  }  else {
  song.play();
  }
}

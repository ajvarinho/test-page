//p5.js
let angle = 0;
let x = window.innerWidth;
let y = window.innerHeight;
const canvasWrap = document.getElementById("canvas");
let wrapHeight = canvasWrap.offsetHeight;

let rectOneX = 920;
let rectOneY = 200;

function setup() {
  const canvas = createCanvas(x, wrapHeight);
  canvas.parent("canvas");
  canvas.background(255);
  //
  angleMode(DEGREES);

  let projectsLink = createA("#menu", "projects");
  projectsLink.position(700, 150);
  projectsLink.class("link projects");

  let instaLink = createA("https://google.com", "instagram", "_blank");
  instaLink.position(670, 730);
  instaLink.class("link insta");
}

function draw() {
  background(255);

  //translate(0, innerHeight / 3);

  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.005;

  // Iterate from left to right.
  for (let x = 0; x < innerWidth; x += 10) {
    // Scale the input coordinates.
    let nx = noiseScale * x;
    let nt = noiseScale * frameCount;

    // Compute the noise value.
    let y = noiseLevel * noise(nx, nt) * 10;

    // Draw the line.
    stroke("blue");
    line(x, 0, x, y);

    //rotateTest(i);
  }

  if (window.innerWidth >= 1200) {
    //Projects triangle
    fill(22, 39, 220);
    triangle(350, 135, 1000, 5, 1045, 210);

    push();
    translate(580, 300);
    rectMode(CENTER);
    rotate(15);
    //scale(mouseX / 1000, mouseY / 1000);
    fill(22, 39, 220);
    rect(0, 0, rectOneX, rectOneY);
    pop();

    //rectOneX = rectOneX - 1;
    //rectOneY = rectOneY - 10;
    //dot decorative
    fill(127, 255, 0);
    ellipse(265, 365, 90, 90);

    //rect deco
    fill(22, 39, 220);
    rect(100, 410, 400, 520);

    //Contact dot
    fill(22, 39, 220);
    ellipse(620, 580, 230, 230);

    fill(22, 39, 220);
    triangle(520, 750, 1045, 575, 885, 753);

    //rect about
    fill(22, 39, 220);
    rect(1050, 0, 400, window.innerHeight);

    angle = angle + 0.05;
    //TEXTZ
    //
    textSize(25);
    fill("limegreen");

    // projecs
    // let angle = radians(-10); // Rotate by 45 degrees
    textAlign(CENTER, CENTER);
    text("projects", 780, 110);

    // //contacts btn
    let buttonContacts = createButton("contact");
    buttonContacts.position(500, 600);
    buttonContacts.class("btn intro-btn contact");

    textSize(25);
    strokeWeight(2);
    fill("limegreen");

    translate(400, 200);
    // Rotate the text by radians
    rotate(10);
    text("Hi, this is Kris ", 0, 0);
    text("Balkan raised, Berlin-based", 0, 50);
    text("designer and illustrator", 0, 90);
  }

  let check = isLooping();

  if (window.innerWidth >= 800 && window.innerWidth < 1500) {
    //
    console.log("under construction");
  }

  if (window.innerWidth < 600) {
    fill(22, 39, 220);
    triangle(15, 180, window.innerWidth - 50, 5, window.innerWidth, 210);
    //

    fill(22, 39, 220);
    ellipse(100, 560, 150, 150);
    //
    fill(22, 39, 220);
    triangle(35, 750, window.innerWidth, 500, 285, 750);
  }

  noLoop();
}

//
const bgEl = document.querySelector(".content-bg");
let zoom = 1;
const ZOOM_SPEED = 10;
let lastScrollTop = 0;
window.addEventListener("scroll", function (e) {
  //console.log("lol scroll", e.deltaY);
  //
  let scrollTop = document.documentElement.scrollTop;
  let scrollAmount = scrollTop - lastScrollTop;
  lastScrollTop = scrollTop;

  console.log("aaaaa", lastScrollTop);

  console.log("Scroll amount:", scrollAmount);
  bgEl.style.height = `${lastScrollTop - 200}px`;
  //bgEl.style = "";
});

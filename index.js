const backToTop = document.querySelector(".back-to-top");
console.log("backToTop", backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
  console.log("alo");
});

//p5.js
let angle = 18;
let x = window.innerWidth;
let y = window.innerHeight;
const canvasWrap = document.getElementById("canvas");
let wrapHeight = canvasWrap.offsetHeight;

let rectOneX = 920;
let rectOneY = 200;
let img;
let imgTest;
//
let offset = 0;
let easing = 0.05;

function preload() {
  img = loadImage("assets/kris-img.jpg");
}

function setup() {
  const canvas = createCanvas(x, wrapHeight);
  canvas.parent("canvas");
  canvas.background(255);
  //
  angleMode(DEGREES);

  let projectsLink = createA("#content", "projects");
  projectsLink.position(700, 150);
  projectsLink.class("link projects");

  let contactLink = createA("", "contact");
  contactLink.position(500, 650);
  contactLink.class("link contact");

  let aboutLink = createA("", "about");
  aboutLink.position(1100, 750);
  aboutLink.class("link about");

  let instaLink = createA("https://google.com", "instagram", "_blank");
  instaLink.position(670, 750);
  instaLink.class("link insta");

  //
  imgTest = createImage(455, 300);
  imgTest.loadPixels();
  for (let x = 0; x < imgTest.width; x++) {
    for (let y = 0; y < imgTest.height; y++) {
      let a = map(y, 0, imgTest.height, 255, 0);
      imgTest.set(x, y, [22, 39, 220, a]);
    }
  }
  imgTest.updatePixels();
}

function draw() {
  background(255);

  //translate(0, innerHeight / 3);

  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.005;

  // Iterate from left to right.
  // for (let x = 0; x < innerWidth; x += 10) {
  //   // Scale the input coordinates.
  //   let nx = noiseScale * x;
  //   let nt = noiseScale * frameCount;

  //   // Compute the noise value.
  //   let y = noiseLevel * noise(nx, nt) * 10;

  //   // Draw the line.
  //   stroke("blue");
  //   line(x, 0, x, y);

  //   //rotateTest(i);
  // }

  if (window.innerWidth >= 1200) {
    push();
    translate(580, 320);
    rectMode(CENTER);
    rotate(18);
    //scale(mouseY / 1000, mouseX / 1000);
    fill(22, 39, 220);
    rect(0, 0, rectOneX, rectOneY);
    pop();

    stroke(0);

    //Projects triangle
    //fill(22, 39, 220);
    triangle(350, 135, 1000, 50, 1045, 210);

    //dot decorative
    //fill(127, 255, 0);
    ellipse(250, 365, 90, 90);

    //rect deco
    //fill(22, 39, 220);
    rect(100, 410, 400, 420);
    //mouseX - img.width / 2, mouseY - img.height / 2
    image(imgTest, 1400, 175);

    //Contact dot
    //fill(22, 39, 220);
    ellipse(620, 580, 230, 230);

    //trianle insta
    //fill(22, 39, 220);
    triangle(520, 797, 1045, 575, 885, 797);

    //rect about
    //fill(22, 39, 220);
    rect(1050, 50, 350, window.innerHeight - 100);

    //image
    // Draw the image.
    image(img, 1100, 100, 400, 550);
    // let dx = mouseX - img.width / 10 - offset;
    // offset += dx * easing;
    // tint(255, 127); // Display at half opacity
    // image(img, offset - 100, 0);

    textSize(30);
    strokeWeight(2);
    //fill("limegreen");

    translate(400, 200);
    rotate(angle);
    textAlign(CENTER);
    text("Hi, this is Kris ", 0, 0);
    text("Balkan raised, Berlin-based", 0, 50);
    text("designer and illustrator", 0, 90);

    //fill(102, 187, 17);
    rect(innerWidth - 50, 0, 50, innerHeight);
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
  angle = angle + 0.05;

  //console.log("angle", angle);

  // if (angle >= 30) {
  //   do {
  //     angle = angle - 0.05;
  //   } while (angle < 15);
  // }

  //noLoop();
}

//
// const bgEl = document.querySelector(".content-bg");
// let zoom = 1;
// const ZOOM_SPEED = 10;
// let lastScrollTop = 0;
// window.addEventListener("scroll", function (e) {
//   //console.log("lol scroll", e.deltaY);
//   //
//   let scrollTop = document.documentElement.scrollTop;
//   let scrollAmount = scrollTop - lastScrollTop;
//   lastScrollTop = scrollTop;

//   console.log("aaaaa", lastScrollTop);

//   console.log("Scroll amount:", scrollAmount);
//   bgEl.style.height = `${lastScrollTop - 200}px`;
//   //bgEl.style = "";
// });

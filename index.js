//p5.js
let angle = 0;
let x = window.innerWidth;
let y = window.innerHeight;

let rectOneX = 920;
let rectOneY = 200;

function setup() {
  const canvas = createCanvas(x, y - y / 5.6);
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

  if (window.innerWidth >= 1200) {
    //Projects triangle
    fill(22, 39, 220);
    triangle(350, 135, 1000, 5, 1045, 210);

    //angle = 15;

    // 'save' current and start a new drawing state
    push();
    translate(580, 300);
    rectMode(CENTER);
    rotate(angle);
    scale(mouseX / 1000, mouseY / 1000);
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
    rect(1050, 0, 300, window.innerHeight);

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

    // // about btn
    // let buttonAbout = createButton("about me");
    // buttonAbout.position(1200, 800);
    // buttonAbout.class("btn intro-btn about");

    textSize(25);

    // Rotate the text by radians
    rotate(angle);
    text("Hi, this is Kris ", 400, 200);
    text("Balkan raised, Berlin-based", 480, 230);
    text("designer and illustrator", 455, 260);
  }

  let check = isLooping();

  if (window.innerWidth >= 800 && window.innerWidth < 1500) {
    //
    console.log("under construction");
  }

  if (window.innerWidth < 500) {
    fill(22, 39, 220);
    triangle(15, 180, window.innerWidth - 50, 5, window.innerWidth, 210);
    //
    //rectangle decorative
    push(); // Start a new drawing state
    //translate(0, 0);
    fill(22, 39, 220);
    rotate(PI / 8.8);
    rect(80, 180, window.innerWidth, 180);
    pop(); // Restore original state
    //
    fill(22, 39, 220);
    ellipse(100, 560, 150, 150);
    //
    fill(22, 39, 220);
    triangle(35, 750, window.innerWidth, 500, 285, 750);
  }
  //noLoop();
  console.log(mouseX, mouseY);
}

function windowResized() {
  console.log("resize");
  resizeCanvas(window.innerWidth, window.innerHeight - window.innerHeight / 5);
}

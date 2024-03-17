console.log(window.innerHeight, window.innerWidth);
let pg;

let x = window.innerWidth;
let y = window.innerHeight;

function setup() {
  const canvas = createCanvas(
    window.innerWidth,
    window.innerHeight - window.innerHeight / 5.6
  );
  canvas.parent("canvas");
  canvas.background(255);

  let projectsLink = createA("#menu", "projects");
  projectsLink.position(700, 150);
  projectsLink.class("link projects");

  let instaLink = createA("https://google.com", "instagram", "_blank");
  instaLink.position(670, 730);
  instaLink.class("link insta");
  pg = createGraphics(400, 250);
}

function draw() {
  background(255);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);

  if (window.innerWidth >= 1200) {
    //Projects triangle
    fill(22, 39, 220);
    triangle(350, 135, 1000, 5, 1045, 210);

    //rectangle decorative
    push(); // Start a new drawing state
    //translate(0, 0);
    fill(22, 39, 220);
    rotate(PI / 8.5);
    rect(200, 0, 920, 200);
    pop(); // Restore original state

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

    textSize(25);
    fill("limegreen");

    // projecs
    //translate();
    let angle = radians(-10); // Rotate by 45 degrees
    rotate(angle);
    textAlign(CENTER, CENTER);
    text("projects", 780, 110);

    //
    // Create a button and place it beneath the canvas.
    let buttonContacts = createButton("contact");
    buttonContacts.position(500, 600);
    buttonContacts.class("btn intro-btn contact");

    // Create a button and place it beneath the canvas.
    let buttonAbout = createButton("about me");
    buttonAbout.position(
      // window.innerWidth - window.innerWidth / 4,
      // window.innerHeight - window.innerHeight / 4
      1200,
      800
    );
    buttonAbout.class("btn intro-btn about");

    // Translate the origin to the center of the canvas
    //translate(0, 0);
    textSize(25);

    // Rotate the text by radians

    let angle4 = radians(15);
    rotate(angle4);
    text("Hi, this is Kris ", 400, 200);
    text("Balkan raised, Berlin-based", 480, 230);
    text("designer and illustrator", 455, 260);
  }

  let check = isLooping();
  console.log("check", check);

  if (window.innerWidth >= 800 && window.innerWidth < 1500) {
    //
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
  noLoop();
  console.log(mouseX, mouseY);
}

function windowResized() {
  console.log("resize");
  resizeCanvas(window.innerWidth, window.innerHeight - window.innerHeight / 5);
}

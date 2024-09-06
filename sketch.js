let s1, s2, s3, s4, s5, s6;
let p1, p2, p3, p4, p5, p6;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
  angleMode(DEGREES);
  fill(255);
  GUI()
}

function draw() {
  background(150, 50, 20, 80);

  noFill();
  strokeWeight(4);

  translate(width / 2, height / 2);
  for (let n = 0; n < s1.value(); n++) {
    stroke(150 + n * 20, 100 + n * 5, 50);
    beginShape();
    for (let i = 0; i < 360; i += s3.value()) {
      let rad = map(
        sin(i * s2.value() + frameCount),
        -1,
        1,
        s4.value(),
        s5.value()
      );
      let x = rad * cos(i);
      let y = rad * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    rotate(frameCount * s6.value());
  }
}
function GUI() {
  s1 = createSlider(1, 10, 5, 1).position(10, 415).size(200);
  s1.parent("container");
  p1 = createP("Number of Elements").position(250, 400);
  p1.parent("container");

  s2 = createSlider(2, 8, 5, 1).position(10, 440).size(200);
  s2.parent("container");
  p2 = createP("Number of Parts").position(250, 425);
  p2.parent("container");

  s3 = createSlider(3, 30, 3, 3).position(10, 465).size(200);
  s3.parent("container");
  p3 = createP("Number of Fragments").position(250, 450);
  p3.parent("container");

  s4 = createSlider(50, 300, 100, 10).position(10, 490).size(200);
  s4.parent("container");
  p4 = createP("Min Radius").position(255, 475);
  p4.parent("container");

  s5 = createSlider(50, 300, 200, 10).position(10, 515).size(200);
  s5.parent("container");
  p5 = createP("Max Radius").position(250, 500);
  p5.parent("container");

  s6 = createSlider(0.1, 1, 0.1, 0.05).position(10, 540).size(200);
  s6.parent("container");
  p6 = createP("Rotation Speed").position(250, 525);
  p6.parent("container");
}

function windowResized() {
  resizeCanvas(400, 400);
}

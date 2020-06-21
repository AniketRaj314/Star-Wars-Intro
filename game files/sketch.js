let font, lines, string, width, height, y;

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
    string = loadStrings('space.txt');
}

function setup() {
    width = innerWidth;
    height = innerHeight;
    lines = join(string, '\n');
    createCanvas(width, height, WEBGL);
    y = height / 2;
}

function draw() {
    background(0);
    fill(238, 213, 75);
    textFont(font);
    textSize(width * 0.04);
    textAlign(CENTER);
    let w = width * 0.6;
    rotateX(PI / 4);
    text(lines, -width / 4 - width * 0.04, y, w, height * 10);

    y -= 1;
}
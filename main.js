var particales = [];
var no = 1;

function setup() {
    // body...
    createCanvas(window.innerWidth, window.innerHeight);
    for (var i = 0; i < no; i++) {
        particales.push(new particale());
    }
    //background(0);
}

function draw() {
    // body...
    background(0);
    for (var j = 0; j < particales.length; j++) {
        particales[j].show();
        particales[j].update();
    }
}

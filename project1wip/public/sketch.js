var enterWord
var submitWord
var wordSearched
var x
var y
var diameter = 15;
var speed = -1;

// function setup() {
// 	enterWord = createInput('Search for a word on Twitter');
// 	submitWord = createButton('search');
// 	submitWord.mousePressed(searchForWord);
// 	loadJSON();
// }

// function searchForWord() {
// 	wordSearched = enterWord.value();
// 	console.log(wordSearched);
// }


function setup() {
  createCanvas(1300, 600);
  noStroke();
  background(255, 255, 153);
  frameRate(0.5);
}

function draw() {
  loadJSON("/statuses", drawData);
}


function drawData(data) {
  console.log(data);
  background(255);
  var i;

  console.log(data.length);

  for (i=0; i<data.length; i++) {
    x = random(width);
    y = random(height);
    // x = x + speed;
    ellipse(x, y, diameter, diameter);
    fill(255, 255, 153);
    console.log(i);
  }
  // if (i === (data.length - 1)) {
  //   drawData();
  // }

}






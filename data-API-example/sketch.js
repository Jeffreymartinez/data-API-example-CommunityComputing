
let spaceData;
let spaceData2;

function setup() {
  createCanvas(600, 600);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
  loadJSON('http://api.open-notify.org/iss-now.json', gotData2, 'jsonp');
}

function gotData(data) {
  spaceData = data;
}

function gotData2(data2) {
  spaceData2 = data2;
}

function draw() {
  background(0);

  fill(255);
  text("How many people are in space right now?", 100,100);
  if (spaceData) {
    text(spaceData.number, 150,125);
  }

  fill(255);
  text("What are their names", 100,150);
  if (spaceData) {
    let y=175
    for (let i=0; i<3; i++) {
      text(spaceData.people[i].name, 150,y);
      y=y+25
    }
  }

  fill(255);
  text("Here is the location of the ISS", 100,250);
  if(spaceData2) {
    text(spaceData2.iss_position.longitude, 150,275);
    text(spaceData2.iss_position.latitude, 150,300);
  }

}

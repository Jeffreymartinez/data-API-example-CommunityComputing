var weather;

function setup() {
  createCanvas(1300, 700);
  loadJSON(
    'https://api.openweathermap.org/data/2.5/weather?id=4276543&APPID=001b0f58045147663b1ea518d34d88b4',
    gotData
  );
}

function gotData(data) {
  weather = data;
}

function draw() {
  background('Black');
  textSize(55);
  fill("White")
  text("Weather for Oakland CA. 94611", 250,49);
  textSize(21);
  text("Represented by areas of circles", 500, 70);
  textSize(21);
  fill("white");
  text("Key:", 1000,200);
  if (weather) {
    fill("purple");
    ellipse(600, 300, weather.main.temp_min, weather.main.temp_min);
    fill("orange");
    ellipse(340, 240, weather.main.temp_max/2, weather.main.temp_max/2);
    fill("Indigo");
    ellipse(500, 400, weather.main.temp, weather.main.temp);
    fill("Green");
    ellipse(400, 400, weather.main.humidity, weather.main.humidity);
    fill("Blue");
    ellipse(700, 200, weather.coord.lon, weather.coord.lon);
    fill("red");
    ellipse(500, 400, weather.coord.lat, weather.coord.lat);
    fill("pink");
    ellipse(250, 300, weather.wind.speed, weather.wind.speed);
    fill("yellow");
    ellipse(800, 500, weather.visibility/50, weather.visibility/50);

    textSize(25);
    stroke("white");
    strokeWeight(3);
    fill("Indigo");
    text("main temp: "+weather.main.temp, 1000,230);
    fill("Green");
    text("main Humidity: "+weather.main.humidity, 1000,260);
    fill("Blue");
    text("longitude: "+weather.coord.lon, 1000,290);
    fill("Red");
    text("latitude: "+weather.coord.lat, 1000,320);
    fill("pink");
    text("wind speed: "+weather.wind.speed, 1000, 350);
    fill("yellow");
    text("visibility/50: "+weather.visibility/50, 1000, 380);
    fill("purple");
    text("min temp: "+weather.main.temp_min, 1000, 410);
    fill("orange");
    text("max temp/2: "+weather.main.temp_max/2, 1000, 440);
  }
}

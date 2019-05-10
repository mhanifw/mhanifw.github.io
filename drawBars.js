//5K
function drawBars5K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(120, 230, 11);
var selected = color(6, 206, 144);

//Draw Title
push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('The first 5K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len5K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif5K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time5K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//10K
function drawBars10K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(41, 227, 42);
var selected = color(43, 203, 162);

//Draw Title
push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('From 5 to 10K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len10K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
 
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif10K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time10K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//15K
function drawBars15K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(43, 203, 162);
var selected = color(41, 225, 240);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('From 10 to 15K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len15K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif15K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time15K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//20K
function drawBars20K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(41, 225, 240);
var selected = color(1, 158, 242);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('From 15 to 20K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len20K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif20K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time20K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//Half
function drawBarshalf(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(1, 158, 242);
var selected = color(12, 58, 193);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('20K to half', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].lenhalf, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].difhalf + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].timehalf + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//25K
function drawBars25K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(12, 58, 193);
var selected = color(232, 51, 242);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('Half to 25K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len25K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif25K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time25K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//30K
function drawBars30K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(232, 51, 242);
var selected = color(252, 105, 105);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('From 25 to 30K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len30K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif30K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time30K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//35K
function drawBars35K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(252, 105, 105);
var selected = color(250, 179, 73);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('From 30 to 35K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len35K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif35K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time35K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//40K
function drawBars40K(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(250, 179, 73);
var selected = color(242, 227, 54);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('From 35 to 40K', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].len40K, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].dif40K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].time40K + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}

//Finish
function drawBarsFinish(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor = color(242, 227, 54);
var selected = color(120, 230, 11);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('The final push', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map(runnerList[i].lenfinish, 0, 3600, leftEdge, rightEdge);
  var y = map(i, a, b, chartTop, chartBottom);  
  
  //Draw positions
  push();
  fill(0);
  textSize(7);
  textAlign(RIGHT);
  text(runnerList[i].position, leftEdge - 8, y + 4); 
  pop();
  
  //Draw rectangles
  noStroke();
  fill(barcolor);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len + 5, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(selected);
    rect(leftEdge, y, len, 7); 
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].diffinish + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].timefinish + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(selected);
  rect(WIDE*0.805, HIGH*0.5, 240, 10);
  rect(WIDE*0.805, HIGH*0.73, 240, 10);
  textFont(fontbold, 16);
  fill(0);
  text('Finished at:', WIDE*0.805, HIGH*0.55);
  text('Age:', WIDE*0.805, HIGH*0.59);
  text('Check time:', WIDE*0.805, HIGH*0.63);
  text('Total time:', WIDE*0.805, HIGH*0.67);
  text('Pace:', WIDE*0.805, HIGH*0.71);
}




//MouseHover
function mouseHover(x1, x2, y1, y2) {
  if (mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2) {
    return true;
  }
  else {
    return false;
  }
}

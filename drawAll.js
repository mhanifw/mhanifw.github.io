//Draw All
function drawBarsAll(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor1 = color(120, 230, 11);
var barcolor2 = color(41, 227, 42);
var barcolor3 = color(43, 203, 162);
var barcolor4 = color(41, 225, 240);
var barcolor5 = color(1, 158, 242);
var barcolor6 = color(12, 58, 193);
var barcolor7 = color(232, 51, 242);
var barcolor8 = color(252, 105, 105);
var barcolor9 = color(250, 179, 73);
var barcolor10 = color(242, 227, 54);
var selected = color(150);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('A hollistic view', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), 0, 3600*6, leftEdge, rightEdge);
  var len2 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K), 0, 3600*6, leftEdge, rightEdge);
  var len3 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K), 0, 3600*6, leftEdge, rightEdge);
  var len4 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K), 0, 3600*6, leftEdge, rightEdge);
  var len5 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K), 0, 3600*6, leftEdge, rightEdge);
  var len6 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf), 0, 3600*6, leftEdge, rightEdge);
  var len7 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K), 0, 3600*6, leftEdge, rightEdge);
  var len8 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K), 0, 3600*6, leftEdge, rightEdge);
  var len9 = map((runnerList[i].len5K + runnerList[i].len10K), 0, 3600*6, leftEdge, rightEdge);
  var len10 = map((runnerList[i].len5K), 0, 3600*6, leftEdge, rightEdge);
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
  fill(barcolor10);
  rect(leftEdge, y, len, 7);
  fill(barcolor9);
  rect(leftEdge, y, len2, 7);
  fill(barcolor8);
  rect(leftEdge, y, len3, 7);
  fill(barcolor7);
  rect(leftEdge, y, len4, 7);
  fill(barcolor6);
  rect(leftEdge, y, len5, 7);
  fill(barcolor5);
  rect(leftEdge, y, len6, 7);
  fill(barcolor4);
  rect(leftEdge, y, len7, 7);
  fill(barcolor3);
  rect(leftEdge, y, len8, 7);
  fill(barcolor2);
  rect(leftEdge, y, len9, 7);
  fill(barcolor1);
  rect(leftEdge, y, len10, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge, len, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(255);
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
  fill(100);
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

//Draw All Normalized
function drawBarsMap(a, b){

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.725;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.955;
//Colors
var barcolor1 = color(120, 230, 11);
var barcolor2 = color(41, 227, 42);
var barcolor3 = color(43, 203, 162);
var barcolor4 = color(41, 225, 240);
var barcolor5 = color(1, 158, 242);
var barcolor6 = color(12, 58, 193);
var barcolor7 = color(232, 51, 242);
var barcolor8 = color(252, 105, 105);
var barcolor9 = color(250, 179, 73);
var barcolor10 = color(242, 227, 54);
var selected = color(150);

push();
fill(240);
stroke(200);
rect(0, 0, (rightEdge + 2.2 * leftEdge), 50);
pop();

push();
textFont(fontbold, 24);
noStroke();
fill(0);
text('Mapped to 100%', leftEdge, chartTop - 40);
pop();

//Map charts
  for (var i = a; i < b; i++){
  var len = map((runnerList[i].len5K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len2 = map((runnerList[i].len5K + runnerList[i].len10K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len3 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len4 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len5 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len6 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len7 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len8 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K + runnerList[i].len35K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len9 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K + runnerList[i].len35K + runnerList[i].len40K), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  var len10 = map((runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K + runnerList[i].len35K + runnerList[i].len40K + runnerList[i].lenfinish), 0, (runnerList[i].len5K + runnerList[i].len10K + runnerList[i].len15K + runnerList[i].len20K + runnerList[i].lenhalf + runnerList[i].len25K + runnerList[i].len30K +  runnerList[i].len35K +  runnerList[i].len40K + runnerList[i].lenfinish), leftEdge, rightEdge);
  
  
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
  fill(barcolor10);
  rect(leftEdge, y, len10, 7);
  fill(barcolor9);
  rect(leftEdge, y, len9, 7);
  fill(barcolor8);
  rect(leftEdge, y, len8, 7);
  fill(barcolor7);
  rect(leftEdge, y, len7, 7);
  fill(barcolor6);
  rect(leftEdge, y, len6, 7);
  fill(barcolor5);
  rect(leftEdge, y, len5, 7);
  fill(barcolor4);
  rect(leftEdge, y, len4, 7);
  fill(barcolor3);
  rect(leftEdge, y, len3, 7);
  fill(barcolor2);
  rect(leftEdge, y, len2, 7);
  fill(barcolor1);
  rect(leftEdge, y, len, 7);
  
  //Highlight if hover 
  if (mouseHover(leftEdge + 4, (len10) - 4, y - 1.5, y + 1.5)) {
    //Highlight rectangle
    fill(255);
    rect(leftEdge, y, (len10) , 7); 
    
//print(len);   
    //Draw data texts
    textFont(fontlight, 16);
    fill(0);
    text('# ' + runnerList[i].position, WIDE*0.875, HIGH*0.55);
    text(runnerList[i].age + ' years old', WIDE*0.835, HIGH*0.59);
    text(runnerList[i].time5K + ' ', WIDE*0.875, HIGH*0.63);
    text(runnerList[i].timefinish + ' ', WIDE*0.87, HIGH*0.67);
    text(runnerList[i].pace + ' ', WIDE*0.84, HIGH*0.71);
    }  
  }
//Format Texts
  fill(100);
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

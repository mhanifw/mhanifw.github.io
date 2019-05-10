//Parse through the data and create objects for each row

function runner(row) {
  this.age = row.getNum('Age');
  this.gender = row.getString('Sex');
  this.time5K = row.getString('5Ktime');
  this.len5K = row.getNum('5Ksec');
  this.dif5K = row.getString('5Kdif');
  this.time10K = row.getString('10Ktime');
  this.len10K = row.getNum('10Ksec');
  this.dif10K = row.getString('10Kdif');
  this.time15K = row.getString('15Ktime');
  this.len15K = row.getNum('15Ksec');
  this.dif15K = row.getString('15Kdif');
  this.time20K = row.getString('20Ktime');
  this.len20K = row.getNum('20Ksec');
  this.dif20K = row.getString('20Kdif');
  this.timehalf = row.getString('Halftime');
  this.lenhalf = row.getNum('Halfsec');
  this.difhalf = row.getString('Halfdif');
  this.time25K = row.getString('25Ktime');
  this.len25K = row.getNum('25Ksec');
  this.dif25K = row.getString('25Kdif');
  this.time30K = row.getString('30Ktime');
  this.len30K = row.getNum('30Ksec');
  this.dif30K = row.getString('30Kdif');
  this.time35K = row.getString('35Ktime');
  this.len35K = row.getNum('35Ksec');
  this.dif35K = row.getString('35Kdif');
  this.time40K = row.getString('40Ktime');
  this.len40K = row.getNum('40Ksec');
  this.dif40K = row.getString('40Kdif');
  this.timefinish = row.getString('Finishtime');
  this.lenfinish = row.getNum('Finishsec');
  this.diffinish = row.getString('Finishdif');
  this.pace = row.getString('Pace');
  this.position = row.getNum('Position'); 
}

//Screen resolution
function applyAspect() {
  let aspectX = width / WIDE;
  let aspectY = height / HIGH;
  aspectScale = min(aspectX, aspectY);
  let h = floor(aspectScale * HIGH);
  aspectTop = (height - h) / 2;
  let w = floor(aspectScale * WIDE);
  aspectLeft = (width - w) / 2;
  translate(aspectLeft, aspectTop);
  scale(aspectScale, aspectScale);
}

///draw minute marks
function drawMinute(){
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.75;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.965;

for (var i = 0; i < 7; i++){
var hour = [ ' 0" ', ' 10" ', ' 20" ', ' 30" ', ' 40" ', ' 50" ', ' 60" ' ]
var linex = map(i, 0, 6, leftEdge, rightEdge);
push();
stroke(200);
line(linex, chartTop - 24, linex, height);
textFont(fontlight, 12);
textAlign(CENTER);
text(hour[i], linex, chartBottom +10); 
pop();
}

}

//draw hour marks
function drawHour(){
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.75;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.965;  

for (var i = 0; i < 7; i++){
var hour = [ '0h', '1h', '2h', '3h', '4h', '5h', '6h' ]
var linex = map(i, 0, 6, leftEdge, rightEdge);
push();
stroke(200);
line(linex, chartTop - 24, linex, height);
textFont(fontbold, 12);
textAlign(CENTER);
text(hour[i], linex, chartBottom +10); 
pop();
}
}

//draw hour marks
function drawPercentage(){
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.75;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.965;  

for (var i = 0; i < 7; i++){
var percent = [ '0%', ' ', ' ', '50%', ' ', ' ', '100%' ]
var linex = map(i, 0, 6, leftEdge, rightEdge);
push();
stroke(200);
line(linex, chartTop - 24, linex, height);
textFont(fontbold, 12);
textAlign(CENTER);
text(percent[i], linex, chartBottom +10); 
pop();
}
}

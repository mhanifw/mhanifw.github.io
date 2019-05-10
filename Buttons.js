function drawButtons() {

var baseX = WIDE*0.1925;
var baseY = HIGH*0.02;

button5K = createButton('0 - 5K');
button5K.position(baseX, baseY);

button10K = createButton('5 - 10K');
button10K.position(baseX + 59, baseY);

button15K = createButton('10 - 15K');
button15K.position((baseX + (60 * 2)), baseY);

button20K = createButton('15 - 20K');
button20K.position((baseX + (60 * 3)+ 5), baseY);

buttonhalf = createButton('20 - Half');
buttonhalf.position((baseX + (60 * 4)+ 12), baseY);

button25K = createButton('Half - 25K');
button25K.position((baseX + (60 * 5)+ 20), baseY);

button30K = createButton('25 - 30K');
button30K.position((baseX + (60 * 6)+ 36), baseY);

button35K = createButton('30 - 35K');
button35K.position((baseX + (60 * 7)+ 46), baseY);

button40K = createButton('35 - 40K');
button40K.position((baseX + (60 * 8)+ 58), baseY);

buttonFinish = createButton('Finish');
buttonFinish.position((baseX + (60 * 9)+ 71), baseY);

buttonAll = createButton('Overview');
buttonAll.position((baseX + (60 * 10)+ 90), baseY);

buttonMap = createButton('Mapped');
buttonMap.position((baseX + (60 * 11)+ 106), baseY);

buttonFemale = createButton('Female runners');
buttonFemale.position(WIDE*0.805, HIGH*0.915);

buttonMale = createButton('Male runners');
buttonMale.position(WIDE*0.88 + 50, HIGH*0.915);

}

function ButtonsBackground() {
  
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
var barcolor11 = color(100);
var barcolor12 = color(255);
  
//Buttons Background
push();
noStroke();
rectMode(CENTER);

var baseX = WIDE*0.21;
var baseY = HIGH*0.034;

fill(barcolor1);
rect(baseX, baseY, 60, 30);

fill(barcolor2);
rect(baseX + 60, baseY, 63, 30);

fill(barcolor3);
rect(baseX + ((2*60)+6), baseY, 70, 30);

fill(barcolor4);
rect(baseX + ((3*60)+12), baseY, 70, 30);

fill(barcolor5);
rect(baseX + ((4*60)+ 18), baseY, 70, 30);

fill(barcolor6);
rect(baseX + ((5*60)+ 30), baseY, 76, 30);

fill(barcolor7);
rect(baseX + ((6*60)+ 42), baseY, 70, 30);

fill(barcolor8);
rect(baseX + ((7*60)+ 52), baseY, 71, 30);

fill(barcolor9);
rect(baseX + ((8*60)+ 64), baseY, 73, 30);

fill(barcolor10);
rect(baseX + ((9*60)+ 70), baseY, 60, 30);

fill(barcolor11);
rect(baseX + ((10*60)+ 97), baseY, 80, 30);

fill(barcolor12);
rect(baseX + ((11*60)+ 110), baseY, 73, 30);

pop();
}

function draw5K(){
drawBars5K(0, 100);
drawMinute();
}

///Draw Bars for Female

//drawBars5K(0, 100);
//drawBars10K(0, 100);
//drawBars15K(0, 100);
//drawBars20K(0, 100);
//drawBarshalf(0, 100);
//drawBars25K(0, 100);
//drawBars30K(0, 100);
//drawBars35K(0, 100);
//drawBars40K(0, 100);
//drawBarsfinish(0, 100);
//drawBarsAll(0,100);
//drawBarsAllnormalized(0,100);

///Draw Bars for Male
//drawBars5K(100, 200);
//drawBars10K(100, 200);
//drawBars15K(100, 200);
//drawBars20K(100, 200);
//drawBarshalf(100, 200);
//drawBars25K(100, 200);
//drawBars30K(100, 200);
//drawBars35K(100, 200);
//drawBars40K(100, 200);
//drawBarsfinish(0, 200);
//drawBarsAll(100,200);
//drawBarsAllnormalized(100,200);

///Draw Axis

//drawMinute();
//drawHour()
//drawPercentage();

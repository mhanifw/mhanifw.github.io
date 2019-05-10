//To store runner list
let runnerList = [];
var runnerCount = 0;

//To keep aspect ratio
let aspectTop, aspectLeft;
let aspectScale = 1;
//const WIDE = 1920;
//const HIGH = 946;
const WIDE = 1440;
const HIGH = 736;

//To store fonts
let fontbold;
let fontlight;

//To store table
let data;

//Boundaries
var leftEdge = WIDE*0.025;
var rightEdge = WIDE*0.75;
var chartTop = HIGH*0.1;
var chartBottom = HIGH*0.965;

//To store buttons
let button5K;
let button10K;
let button15K;
let button20K;
let buttonhalf;
let button25K;
let button30K;
let button35K;
let button40K;
let buttonFinish;
let buttonAll;
let buttonMap;
let buttonFemale;
let buttonMale;

//To store booleans
var show5K = 0;
var show10K = 0;
var show15K = 0;
var show20K = 0;
var showhalf = 0;
var show25K = 0;
var show30K = 0;
var show35K = 0;
var show40K = 0;
var showFinish = 0;
var showAll = 0;
var showMap = 0;

//Gender booleans
var showFemale = 0;
var showMale = 1;

function preload() {
  
  //load fonts
  fontbold = loadFont('assets/Bitter-Bold.ttf');
  fontlight = loadFont('assets/Bitter-Regular.ttf');
  
  //loadTable and create objects from tableLoaded
  data = loadTable('data/runnersdata.csv', 'csv', 'header', tableLoaded);
}

function setup() {
createCanvas(WIDE, HIGH);
print('window width: ' + WIDE);
print('window height: ' + HIGH);
background(240);
print(runnerList);

//Buttons
drawButtons();
}

function draw() {
  applyAspect();
  background(240);
 
  
  //draw 'Indicator'
  push();
  textFont(fontbold, 10);
  text('Sorted by finish position. Hover mouse for details', leftEdge - 20, chartTop - 10); 
  pop();



///Draw conditions

  //5K
  if (show5K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars5K(0, 100);
    drawMinute();
  }
   else if(show5K == 1 && showFemale == 0 && showMale == 1){
    background(240);
    drawBars5K(100, 200);
    drawMinute();
  }

  
  //10K
  if (show10K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars10K(0, 100);
    drawMinute();
  }
   else if(show10K == 1 && showFemale == 0 && showMale == 1){
    background(240);
    drawBars10K(100, 200);
    drawMinute();
  }
  
  //15K
  if (show15K == 1 && showFemale == 1 && showMale == 0){
    drawBars15K(0, 100);
    drawMinute();
  }
   else if(show15K == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBars15K(100, 200);
    drawMinute();
  }

  
  //20K
  if (show20K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars20K(0, 100);
    drawMinute();
  }
   else if(show20K == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBars20K(100, 200);
    drawMinute();
  }

  
  //Half
  if (showhalf == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBarshalf(0, 100);
    drawMinute();
  }
   else if(showhalf == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBarshalf(100, 200);
    drawMinute();
  }

  
  //25K
  if (show25K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars25K(0, 100);
    drawMinute();
  }
   else if(show25K == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBars25K(100, 200);
    drawMinute();
  }

  
  //30K
  if (show30K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars30K(0, 100);
    drawMinute();
  }
   else if(show30K == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBars30K(100, 200);
    drawMinute();
  }

  
  //35K
  if (show35K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars35K(0, 100);
    drawMinute();
  }
   else if(show35K == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBars35K(100, 200);
    drawMinute();
  }

  
  //40K
  if (show40K == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBars40K(0, 100);
    drawMinute();
  }
   else if(show40K == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBars40K(100, 200);
    drawMinute();
  }

  
 //Finish
  if (showFinish == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBarsFinish(0, 100);
    drawMinute();
  }
   else if(showFinish == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBarsFinish(100, 200);
    drawMinute();
  } 

  
  //All
  if (showAll == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBarsAll(0, 100);
    drawHour();
  }
   else if (showAll == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBarsAll(100, 200);
    drawHour();
  }

  
 //Map
  if (showMap == 1 && showFemale == 1 && showMale == 0){
    background(240);
    drawBarsMap(0, 100);
    drawPercentage();
  }
   else if (showMap == 1 && showFemale == 0 && showMale == 1){
    background(240);
     drawBarsMap(100, 200);
    drawPercentage();
  }


//Line separator
stroke(0);
line(WIDE*0.78, 0, WIDE*0.78, HIGH);

//Title
textFont(fontbold, 32);
noStroke();
fill(0);
text('How people run in the Boston Marathon?', WIDE*0.805, HIGH*0.05, 270, 300);

//Paragraph
let desc = 'The Boston Marathon is an annual long distance running event hosted by several cities in greater Boston in eastern Massachusetts, United States. Its course runs from Hopkinton in southern Middlesex County to Copley Square in Boston. Every year, it attracts more than 12,000 local and international runners. Lets see how do they manage their energy throughout the long distance feat.';
    textFont(fontlight, 12);
    text(desc, WIDE*0.805, HIGH*0.25, 250, 300);
    
//Gender

//Paragraph
let desc2 = 'In Boston marathon, people run with their gender group. Click below to see how they perform.';
    textFont(fontlight, 12);
    text(desc2, WIDE*0.805, HIGH*0.79, 250, 300);

textFont(fontlight, 16);
noStroke();
fill(0);
text('Show runner by gender:', WIDE*0.805, HIGH*0.88, 270, 300);

//Buttons Background color
ButtonsBackground();

//Button Pressed
button5K.mousePressed(do5K);
button10K.mousePressed(do10K);
button15K.mousePressed(do15K);
button20K.mousePressed(do20K);
buttonhalf.mousePressed(dohalf);
button25K.mousePressed(do25K);
button30K.mousePressed(do30K);
button35K.mousePressed(do35K);
button40K.mousePressed(do40K);
buttonFinish.mousePressed(doFinish);
buttonAll.mousePressed(doAll);
buttonMap.mousePressed(doMap);
buttonFemale.mousePressed(doFemale);
buttonMale.mousePressed(doMale);
}

//Button activation

//Male & Female
function doFemale(){
  if (showFemale == 0){
    showFemale = 1;
    showMale = 0;
  }
}

function doMale(){
  if (showMale == 0){
    showFemale = 0;
    showMale = 1;
  }
}


//5K
function do5K() {
  if (show5K == 0) {
  show5K = 1;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show5K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

//10K
function do10K() {
  if (show10K == 0) {
  show5K = 0;
  show10K = 1;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show10K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

//15K
function do15K() {
  if (show15K == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 1;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show15K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

//20K
function do20K() {
  if (show20K == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 1;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show20K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}
//Half
function dohalf() {
  if (showhalf == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 1;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (showhalf == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}
//25K
function do25K() {
  if (show25K == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 1;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show25K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

//30K
function do30K() {
  if (show30K == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 1;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show30K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}
//35K
function do35K() {
  if (show35K == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 1;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show35K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}
//40K
function do40K() {
  if (show40K == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 1;
  showFinish = 0;
  showAll = 0;
  showMap = 0;
  } else if (show40K == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

//Finish
function doFinish() {
  if (showFinish == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 1;
  showAll = 0;
  showMap = 0;
  } else if (showFinish == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

//All
function doAll() {
  if (showAll == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  } else if (showAll == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}
//Map
function doMap() {
  if (showMap == 0) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 0;
  showMap = 1;
  } else if (showMap == 1) {
  show5K = 0;
  show10K = 0;
  show15K = 0;
  show20K = 0;
  showhalf = 0;
  show25K = 0;
  show30K = 0;
  show35K = 0;
  show40K = 0;
  showFinish = 0;
  showAll = 1;
  showMap = 0;
  }
}

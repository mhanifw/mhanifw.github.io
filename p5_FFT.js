//Load song
function preload(){
  sound = loadSound('assets/canikickit.mp3');
}

function setup(){
  var cnv = createCanvas(600,300);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(1.0);
}

function draw(){
  background(0);

  var spectrum = fft.analyze();
  noStroke();
  fill(240, 52, 52,20);
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, width/2, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    ellipse(x, height/2, width / spectrum.length+10, h )
  }

  var waveform = fft.waveform();
  noFill();
  stroke(38, 194, 129);
  strokeWeight(1);
  beginShape();
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width/2);
    var y = map( waveform[i], -1, 1, 0, height);
    //vertex(x,y);
    //vertex(x+2,y-2);
    ellipse(x,y,2,2,2);
  }
  endShape();
  
  fill(255,255,255);
  text('A Tribe Called Quest - Can I Kick it?', 6, 12);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

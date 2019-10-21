
let input;
let analyzer;
let color;

function setup() {
  createCanvas(200, 200);
  colorMode(HSB, 255);


  input = new p5.AudioIn();

  input.start();
  
  fft = new p5.FFT();
  
  fft.setInput(input);
  
}

function draw() {
  //background(volume * 255);

  let volume = input.getLevel();
  
  console.log(volume);
  
  let hVal = map(volume, 0, 0.01, 0, 255);
  let sVal = map(volume, 0, 0.05, 0, 255);
  
  
  
  background(hVal, sVal, 255);
  
  

  let threshold = 0.001;
  let spectrum = fft.analyze();
  if (volume > threshold) {
    stroke(235);
    fill(volume*25000, volume*25000, volume*1195); 
   
    ellipse(width/2,height/2, volume* 2500, volume * 2500);
    console.log();
  }
   //let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}



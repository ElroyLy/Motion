let img;

function preload() {

  // Load the image
  img = loadImage("https://maxonassets.imgix.net/images/News/20240226_Exploring-the-%E2%80%98INVISIBLE%E2%80%99-03.jpg?fm=webp&auto=format,compress&w=1920&h=1080&ar=16:9&fit=clip&crop=faces&q=80");

}

function setup() {

  createCanvas( windowWidth , windowHeight);
  frameRate(30);
  
}

function draw() {
  
  background(0); // Set background to black
  img.resize( windowWidth    ,  windowWidth /img.width  * img.height  )
  //image(img, 0, 0); // Display the loaded image

  let textChars = "☻☺▲▼♠♣♦♥■⌂♂♀♪♫";  //qwertyuiooopasdfg,!@#$%^&*() _hjklzxcvbnm.\\
  let textLength = textChars.length;
  
  let cellwidth = 18;
  let cellheight = cellwidth;
  let textwidth = windowWidth/cellwidth;
  let textheight = windowHeight/cellheight;
  let N

  for (let row = 0; row < textheight; row++) {
    for (let col = 0; col < textwidth; col++) {
      
      N = noise(  row , col , row+col  ) * textLength
      
      randomSeed(     frameCount*50+row+col+col*row +N )   // frameCount*50+row+col+col*row +

      let randomIndex = floor( random(textLength) );
      let character = textChars.charAt(randomIndex);
      let x = col * cellwidth;
      let y = row * cellheight;

      a = img.get(x,y)
      fill(a);

      text(character, x, y, 50);
    }
    
  }

 
}


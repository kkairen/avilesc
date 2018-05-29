// Events Created in Javascript

// Find Object w/Event
var image = document.getElementById("myPicture");
var music = new Audio("http://www.songsforteaching.com/cathybollinger/s/peekaboo.mp3");

// Function for Event

function replaceImage(){
  image.src="http://a4.mzstatic.com/us/r1000/119/Purple/ff/40/6a/mzl.xltxhbev.png";
  image.style.width="300px";
  music.play();
}

function fixImage(){
  image.src="http://cms.tigertalesbooks.com/uploads/f60780c1a8f6a990fede76f9214d86e2.jpg";
  image.style.width="100px";
  music.pause();
}

// Assign Function to Object

image.addEventListener("mouseover", replaceImage, false);
image.addEventListener("mouseout", fixImage, false);

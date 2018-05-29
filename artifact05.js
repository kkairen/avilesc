var myImages =["images/FishermanAtSea.jpg","images/ModernRomeCampoVaccino.jpg","images/787px-Joseph_Mallord_William_Turner_011.jpg","images/Joseph_Mallord_William_Turner_-_Bell_Rock_Lighthouse_-_Google_Art_Project.jpg", "images/Wreckers_Coast_of_Northumberland.jpg"];

var captionImages =["Fisherman at Sea","Modern Rome Campo Vaccino","Der Brand der Houses of Parliament","Bell Rock Lighthouse","Wreckers Coast of Northumberland"];

// Position in Aaray, Current Image
var index=0; 

// Updates Image, Updates alt, Updates Caption Text
function updateImage(){
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt= captionImages[index];
  document.getElementById("caption").textContent = captionImages[index]; 
} 

// Moving Past Images
function next(){
  if (myImages.length == index+1)
    index=0;
  else
    index++;
 
  updateImage();
} 


function back(){
  if (index===0)
    index=myImages.length-1;
  else
    index--;

  updateImage();
} 

var nextButton = document.getElementById("next"); 
var backButton = document.getElementById("back"); 

nextButton.addEventListener("click",next,false); 
backButton.addEventListener("click",back,false);

function autoSlide(){
  if (document.getElementById("auto").checked)
    next(); 
}


setInterval(autoSlide,2000); // Next

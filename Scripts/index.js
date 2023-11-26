// SLIDING TRANSITION SCRIPT
let slideIndex = 0;
showSlides(slideIndex);
setInterval(showSlides, 5000);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activem", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activem";
}

// SLIDING Menu Script
var slideshows = document.querySelectorAll('[datacomponent="slideshow"]');

slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .drinkies`)

  var index = 0, time = 5000;
  slides[index].classList.add('active');  

  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}

//Sliding for menu script
let indexSlide = 1;
showMenu(indexSlide);

// Next/previous controls
function plusSlides(n) {
  showMenu(indexSlide += n);
}

function showMenu(n) {
  let i;
  let slides = document.getElementsByClassName("drinkies");
  if (n > slides.length) {indexSlide = 1}
  if (n < 1) {indexSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[indexSlide-1].style.display = "flex";
}
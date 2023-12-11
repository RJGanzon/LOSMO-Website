//HEADER SCRIPT
const headerE1 = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    headerE1.classList.add('header-scrolled');
  }
  else if (window.scrollY <= 200) {
    headerE1.classList.remove('header-scrolled');
  }
});

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

//Change icon on hero button
var buttons = document.querySelectorAll('.hero__button');
var temp = "";
            buttons.forEach(a => {
                a.addEventListener('mouseenter', e => {
                  console.log(e.target.id);
                  var image = "Images/" + e.target.id + "2.png";
                      var img = a.querySelector('img'); 
                      temp = img.src;
                      img.src = image;
                })
                a.addEventListener('mouseleave', e => {
                  console.log(e.target.id);
                      var img = a.querySelector('img'); 
                      img.src = temp;
                })
            })

//For faq accordion
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", panelDisplay);
    }

    function panelDisplay() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "inline-block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "inline-block";
        }
    }

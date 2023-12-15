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
        if(this.id === 'choosetable') {
          
          if (panel.style.maxHeight === "fit-content") {
            this.style.margin = "0.2rem 0";
            panel.style.maxHeight = "0.1rem";
            panel.style.padding = "0 1.2rem"; 
            setTimeout(function () {
            panel.style.display = "none";
            }.bind(this), 1);

        } else {
          panel.style.display = "inline-block";
          setTimeout(function () {
          panel.style.maxHeight = "fit-content";
          panel.style.padding = "1.2rem";
          this.style.margin = "0.2rem 0";
          panel.style.color = "white";  
        }.bind(this), 1);
        }

        } else {
          if (panel.style.maxHeight === "fit-content") {
            this.style.margin = "0 0 1rem";
            panel.style.maxHeight = "0.1rem";
            panel.style.padding = "0 1.2rem"; 
            setTimeout(function () {
            panel.style.display = "none";
            }.bind(this), 1);

        } else {
          panel.style.display = "inline-block";
          setTimeout(function () {
          panel.style.maxHeight = "fit-content";
          panel.style.padding = "1.2rem";
          this.style.margin = "0";
          panel.style.color = "white";  
        }.bind(this), 1);
        }
        }
        
    }

//reservation

    document.addEventListener('DOMContentLoaded', function () {

            var table = document.querySelectorAll('.table');
            table.forEach(function (image) {
                image.addEventListener('click', function (e) {
                    if (image.classList.contains('standingsquare')) {
                        document.getElementById('output').innerText = ' Intimate and cozy, the seated cocktail table is perfect for small gatherings or date nights. With a limited seating capacity of 2 to 4 individuals, it offers an exclusive setting for guests to enjoy their drinks and conversation.';
                    } else if (image.classList.contains('sittingcircle')) {
                        document.getElementById('output').innerText = 'Designed for a more dynamic social experience, the standing cocktail table accommodates a slightly larger group of 4 to 5 guests. Ideal for mingling, this table encourages a lively atmosphere where attendees can enjoy drinks and snacks while standing comfortably.';
                    } else if (image.classList.contains('sittingsquare')) {
                        document.getElementById('output').innerText = 'The square table provides a versatile setting for groups of 5 to 6 individuals. Well-suited for both casual and formal occasions, it offers a balanced mix of intimacy and sociability. Guests can gather around this table to share a meal or engage in conversations, making it a flexible choice for various events.';
                    }
                    var number = e.target.id;
                    document.getElementById('table').innerHTML = "Reservation: Table # " + number;
                });
            });
        });

        function checkEvent(num){
          if(num == 0){
              document.getElementsByClassName("panel purpose-form")[0].style.maxHeight = "0.1rem";
              document.getElementsByClassName("panel purpose-form")[0].style.padding = "0 1rem";
              document.getElementsByClassName("accordion purpose")[0].innerHTML = "Seated Cocktail Table: 2-4 PAX";
              document.getElementsByClassName("accordion purpose")[0].style.margin = "0.2rem 0";
              document.getElementsByClassName("panel purpose-form")[0].style.display = "none";
  
          } else if (num == 1) { 
              document.getElementsByClassName("panel purpose-form")[0].style.maxHeight = "0.1rem";
              document.getElementsByClassName("panel purpose-form")[0].style.padding = "0 1rem";
              document.getElementsByClassName("accordion purpose")[0].innerHTML = "Standing Cocktail Table: 4-5 PAX";
              document.getElementsByClassName("accordion purpose")[0].style.margin = "0.2rem 0";
              document.getElementsByClassName("panel purpose-form")[0].style.display = "none";
          } else { 
            document.getElementsByClassName("panel purpose-form")[0].style.maxHeight = "0.1rem";
            document.getElementsByClassName("panel purpose-form")[0].style.padding = "0 1rem";
            document.getElementsByClassName("accordion purpose")[0].innerHTML = "Seated Table: 5-6 PAX";
            document.getElementsByClassName("accordion purpose")[0].style.margin = "0.2rem 0";
            document.getElementsByClassName("panel purpose-form")[0].style.display = "none";
        }
      }
      function resettable() {
        document.getElementById("choosetable").innerHTML = "Choose a table:";
   
      }


      function changeWindowsize() {
        if (window.innerWidth < 660) {
            resetoutput();
        }  else {
            resettable();
        }
    }

    window.addEventListener("resize", changeWindowsize);

    function resetoutput() { 
        document.getElementById('table').innerHTML = "Reservation: ";
        document.getElementById('output').innerHTML = "Want to Avoid the Hassle? Get a Table in Advance! Provide the needed details below and pick your preferred table. Enjoy the Night without waiting, Welcome to Losmo!";
        document.getElementsByClassName("panel purpose-form")[0].style.maxHeight = "0.1rem";
        document.getElementsByClassName("panel purpose-form")[0].style.padding = "0 1rem";
        document.getElementsByClassName("accordion purpose")[0].style.margin = "0.2rem 0";
        document.getElementsByClassName("panel purpose-form")[0].style.display = "none";
    }
    
    function checkReservation(){
        var check = document.getElementById("choosetable").innerHTML;

        if(check == "Choose a table:"); {
          alert("Please Select your table.")
          event.preventDefault();
        }
      }
    
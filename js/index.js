//importing all methods and variables from another module.js
import * as name from "./methods.js";
//craeting events handlers for all the events can be occured by the user:
window.onscroll = function() {name.scrollFunction()};
name.menu_btn.addEventListener('click',name.showMenu);
name.mybutton.addEventListener('click',name.topFunction);









//slid show code:-
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
var slider = document.querySelector(".features");
var slider_slides = slider.querySelectorAll(".features-item");
var slider_controls = slider.querySelectorAll(".slider-control");
var slider_start = 0;

for(var i = 0; i < slider_controls.length; i++) {
  slider_controls[i].addEventListener("click", changeSlide.bind(slider_controls[i], i));
}

function changeSlide(id){
  event.preventDefault();

  for(var i = 0; i < slider_slides.length; i++) {
    slider_slides[i].classList.remove("active-slide");
    slider_controls[i].classList.remove("active-slide");
  }

  slider_slides[id].classList.add("active-slide");
  slider_controls[id].classList.add("active-slide");

  slider_start = id;
}

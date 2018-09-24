var popup = document.querySelector(".write-us");
var link = document.querySelector(".popup-open");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".write-us-form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=text]");
var isStorageSupport = true;
var storage = {
  username: "",
  email: ""
};

try {
  storage.username = localStorage.getItem("username");
  storage.email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-on");

  if (storage) {
    username.value = storage.username;
    email.value = storage.email;
    text.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-on");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-on")) {
      popup.classList.remove("write-us-on");
      popup.classList.remove("modal-error");
    }
  }
});

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

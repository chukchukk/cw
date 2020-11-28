var slideIndex = 0;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  var temp = n;
  if(temp == 3){
    temp = 0;
    slideIndex = 0;
  }
  showSlides(slideIndex = temp);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-inside");
  var dots = document.getElementsByClassName("dot_slider");
  if (n >= slides.length) {
  slideIndex = n = 0;
  }
  if (n < 0) {
  slideIndex = n = slides.length -1
  }
  console.log(n);
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.background = "grey";
  }
  dots[n].style.background = "green";
  slides[slideIndex].style.display = "block";
}
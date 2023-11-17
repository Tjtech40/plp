let slideIndex =0;
showSlide();

function showSlide() {
    let i;
    let slide = document.getElementsByClassName(slide_show);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); 

}
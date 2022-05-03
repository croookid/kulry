// Image Slider

var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

var currentSlide = 0;

setInterval(function() {
    var from = -(innerWidth * currentSlide);
    var to = from - innerWidth;
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide++;
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 1000);


// top button
const pageTop = document.querySelector('#pageTop')
window.addEventListener("scroll", function(){
    let y = window.pageYOffset;
    if(y > 400){
      pageTop.style.opacity = '1';
      pageTop.style.bottom = '15px';
    }else{
      pageTop.style.opacity = '0';
      pageTop.style.bottom = '-58px';
    }
  })

// qbn button

const qnb = document.getElementById('qnb')
window.addEventListener("scroll", function(){
    let y = Number(window.pageYOffset);
    if(y > 470){
        qnb.style.top = y  + 'px';
    }else{
        qnb.style.top = '512px';
    }
  })

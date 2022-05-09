// Image Slider


var slider = document.querySelector('#slider');
var slides = document.querySelector(".slides")
var slide = slides.querySelectorAll('.slide');
var sliderButton = document.querySelectorAll('.slider-button')


var currentSlide = 0;
var currentPx = 0
document.querySelector('.slider-numbering').innerHTML = `${slide.length-1}/${slide.length-1}`

//rightslider
let imgSlider = function() {
  currentPx = slide[0].scrollWidth 
  var from = -(currentPx * (currentSlide));
  var to = from - currentPx;
  slides.animate({
      marginLeft: [from + "px", to + "px"]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  currentSlide++;
  document.querySelector('.slider-numbering').innerHTML = `${currentSlide}/${slide.length-1}`
  if (currentSlide === (slide.length-1)) {
      currentSlide = 0;
  }
  
}

//leftslider
let imgSliderLeft = function() {
  currentPx = slide[0].scrollWidth 
  var from = -(currentPx * (currentSlide));
  var to = from + currentPx;
  slides.animate({
      marginLeft: [from + "px", to + "px"]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  currentSlide--;
  if (currentSlide === (0)) {
    currentSlide = slide.length-1;
}
  document.querySelector('.slider-numbering').innerHTML = `${currentSlide}/${slide.length-1}`


  
}

//interval
let interval = setInterval(imgSlider, 1000);
slider.addEventListener('mouseover', function(){
  clearInterval(interval)
  sliderButton.forEach((e)=>{
    e.style.opacity = 1;
  })
})
slider.addEventListener('mouseout', function(){
  interval = setInterval(imgSlider, 1000)
  sliderButton.forEach((e)=>{
    e.style.opacity = 0;
  })
})
sliderButton[0].addEventListener('click', imgSliderLeft)
sliderButton[1].addEventListener('click', imgSlider)

let pressed = false;
let startx;
let startmargin
let x;
let currentMarginLeft;

slider.addEventListener('mousedown', (e)=>{
  pressed = true;
  startmargin = window.getComputedStyle(document.querySelector(".slides")).marginLeft;
  startx = e.offsetX
})

window.addEventListener('mouseup', ()=>{
  pressed = false;
})

slides.addEventListener('mousemove', (e)=>{
  if(!pressed) return;
  x = e.offsetX 
  currentMarginLeft = parseInt(startmargin, 10) + (x-startx)
  slides.animate({
    marginLeft: [startmargin , currentMarginLeft + "px"]
}, {
    duration: 0.00000000000000001,
    iterations: 1,
    fill: "both"
})
})
slides.addEventListener('mouseup', (e)=>{
  console.log(1)
  if ((x-startx) > (parseInt(currentPx, 10)) * 0.1){
    imgSliderLeft();
  }
  if (-(x-startx) > parseInt(currentPx, 10) * 0.1){
    imgSlider();
  }
  if (Math.abs(x-startx) < (parseInt(currentPx, 10)) * 0.1){
    slides.animate({
      marginLeft: [currentMarginLeft + "px" , startmargin]
  }, {
      duration: 0.00000000000000001,
      iterations: 1,
      fill: "both"
  })
  }
} 
)

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

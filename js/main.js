

function imgSlider(anything){
document.querySelector('.pepsi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}


let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
menuToggle.classList.toggle('active');
navigation.classList.toggle('active');
}

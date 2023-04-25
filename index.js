let balon1 = document.querySelector('.box1');
let balon2 = document.querySelector('.box2');
let fara = document.querySelector('.fara');
let pavorot = document.querySelector('.pavorot');
let tarqal_tarqal = document.querySelector('.tarqal');
let maymun = document.querySelector('.maymun');

function playy(){
    balon1.style.animationPlayState = 'running';
    balon2.style.animationPlayState = 'running';
    
}

function stop(){
    balon1.style.animationPlayState = 'paused';
    balon2.style.animationPlayState = 'paused';
}

function eshik(){
    tarqal_tarqal.play()
    fara.style.animationPlayState ='running';
    pavorot.style.animationPlayState = 'running';
    maymun.style.opacity ='100';
    maymun.style.transform ='scale(1.1)';
    balon1.style.animationPlayState = 'paused';
    balon2.style.animationPlayState = 'paused';
}

function balon_1(){
    balon1.style.animationPlayState = 'paused';
}
function balon_2(){
    balon2.style.animationPlayState = 'paused';
}
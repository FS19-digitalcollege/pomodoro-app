let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('click', function(){
        removeActive();
        lis[i].classList.add('active');
        ul.style = `--left: ${(i * 120) + 8}px`;
    });
}

function removeActive(){
    for(let i = 0; i < lis.length; i++){
        lis[i].classList.remove('active');
    }
}

function desenhaSegundos(angulo){
    let context = segundos.getContext('2d');
    // context.globalCompositeOperation = 'destination-out';
    context.beginPath();
    context.arc(50,50,50,angulo*Math.PI,1.5*Math.PI);
    context.fillStyle = '#FF0000';
    context.fill();
    context.stroke();
}

let inicio = 0;
setInterval(function(){
    inicio = inicio + .1;
    desenhaSegundos(inicio);
}, 1000);

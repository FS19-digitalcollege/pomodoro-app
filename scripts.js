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

let config = document.querySelector('.configuracoes');
settings.onclick = function(){
    config.classList.add('active');
}

fecharSettings.onclick = function(){
    config.classList.remove('active');
}

let tempo1 = Number(localStorage.getItem('tempo1')) || 0;
let tempo2 = Number(localStorage.getItem('tempo2')) || 0;
let tempo3 = Number(localStorage.getItem('tempo3')) || 0;

confirmar.onclick = function(){
    tempo1 = pomodoroTime.value;
    tempo2 = shortTime.value;
    tempo3 = longTime.value;
    localStorage.setItem('tempo1', tempo1);
    localStorage.setItem('tempo2', tempo2);
    localStorage.setItem('tempo3', tempo3);
};

state.onclick = function(){
    contaSegundos();
}

function contaSegundos(){
    let segundos = 0;
    let minutos = 0;
    setInterval(function(){
        if(segundos < 59){
            segundos = segundos + 1;
            hora.innerHTML = segundos;
        }else{
            segundos = 0;
        }
    }, 1000);
}


// function desenhaSegundos(angulo){
//     let context = segundos.getContext('2d');
//     context.beginPath();
//     context.arc(150,75,70,0,angulo*Math.PI);
//     context.lineWidth = 4;
//     context.strokeStyle = "blue";
//     context.stroke();
//     context.closePath();
//     if(angulo > 2){
//         context.save();
//         context.globalCompositeOperation = 'destination-out';
//         context.beginPath();
//         context.clearRect(150,75,70,760,380);
//         context.arc(150,75,70,0,0);
//         context.restore();
//         // context.closePath();
//     }
// }

// let inicio = 0;
// let pedaco = 1.5 / 60;
// setInterval(function(){
//     if(inicio <= 2){
//         inicio = inicio + pedaco;
//     }else{
//         inicio = pedaco
//     }
//     desenhaSegundos(inicio);
//     console.log(inicio);
// }, 100);

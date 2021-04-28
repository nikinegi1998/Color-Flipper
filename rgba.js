const span = document.querySelector('h2 span');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    let code = 'rgba(';

    for(var i=1; i<=3; i++){
        code+= randomNumber();
        code+=',';
    }
    code =code.substr(0,code.length-1);
    span.textContent = code+')';
    document.body.style.backgroundColor=code;
})

function randomNumber(){
    return Math.floor(Math.random()*255);
}
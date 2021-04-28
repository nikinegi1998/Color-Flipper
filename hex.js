const color=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const span = document.querySelector('h2 span');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    let code = '#';

    for(var i=1; i<=6; i++){
        code+= color[randomNumber()];
        
    }
    span.textContent = code;
    document.body.style.backgroundColor=code;
})

function randomNumber(){
    return Math.floor(Math.random()*15);
}
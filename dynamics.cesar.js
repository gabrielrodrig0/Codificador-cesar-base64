const ajudaBtn = document.querySelector(".bloco-ajuda");
const opcoes = document.querySelector(".opcoes-de-ajuda");
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('.close-overlay');

/* function abreAjuda (){
opcoes.classList.toggle('menuAberto');
}
ajudaBtn.addEventListener('click', abreAjuda); */

ajudaBtn.addEventListener('click', ()=>{

    overlay.classList.remove("hidden");
    opcoes.classList.remove("hidden");

})

closeOverlay.addEventListener('click', ()=>{

    overlay.classList.add("hidden");
    opcoes.classList.add("hidden");
})

overlay.addEventListener('click', ()=>{

    overlay.classList.add("hidden");
    opcoes.classList.add("hidden");
})
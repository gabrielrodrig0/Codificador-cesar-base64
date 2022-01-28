
/*Dinâmica da página inicial*/

/*Ao passar o mouse na opção cesar, temos uma alteração no background do body*/

const cesarDiv = document.querySelector('.cesar');
const body =  document.querySelector('body');

function cesarAppears(){
    body.classList.toggle('background-cesar');
}

function cesarDisappears(){
    body.classList.toggle('background-cesar');
}

cesarDiv.addEventListener('mouseover', cesarAppears);
cesarDiv.addEventListener('mouseout', cesarDisappears);

/*Ao passar o mouse na opção 64, temos uma alteração no background do body*/

const base64Div = document.querySelector('.base64');

function base64Appears(){
    body.classList.toggle('background-base64');
}
function base64Disappers (){

    body.classList.toggle('background-base64');
}

base64Div.addEventListener("mouseover", base64Appears);
base64Div.addEventListener("mouseout", base64Disappers);
let textArea1 =  document.querySelector(".textarea1");
let textArea2 =  document.querySelector(".textarea2");
let cript =  document.getElementById("criptografa");
let decript = document.getElementById("descriptografa");
let limpar =  document.getElementById("limpa");


cript.addEventListener("click", ()=>{

    if (textArea1.value===""){
        alert("Digite algo");
    }
    let string = textArea1.value;
    let criptografar = btoa(string);
    textArea2.innerHTML = criptografar;
})

decript.addEventListener("click", ()=>{

    if (textArea1.value===""){
        alert("Digite algo");
    }

    let string1 =  textArea1.value;
    let descriptografar = atob(string1);
    textArea2.innerHTML = descriptografar;

})

/*Limpeza de inputs*/

limpar.addEventListener('click', ()=>{

    let inputTexto1 = document.getElementById('inputText');
    let outputTexto2 = document.getElementById('outputText'); 
 
    inputTexto1.innerHTML='';
    outputTexto2.innerText='';

})
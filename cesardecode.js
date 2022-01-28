/*Botão usado para descriptografar*/

let botaoDecript = document.getElementById('descriptografa');

/*Função que se ativa ao clicar no botão selecionado*/

function descriptografar (inputTexto, numero){

let outputTexto = document.getElementById('outputText');
inputTexto = document.getElementById('inputText');
numero = Number(document.getElementById('numero').value);
let nova = '';
const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

/*Verificação de texto no input*/
if (inputTexto.value===''){
    alert('Digite alguma coisa!');
}

const alfaReverso = alfa.reverse();

    for (let c=0; c<inputTexto.value.length; c++){
        
    
        if (inputTexto.value[c]===' '){
         nova+=' ';
          
        } 
        else {
    
          for (let d=0; d<alfaReverso.length; d++){

                if (alfa[d]===inputTexto.value[c]){
    
          /*Problema de overflow*/
                if ((d+numero)>(alfaReverso.length-1)){

                    nova+= alfaReverso[Math.floor((d+numero)%alfaReverso.length)];
           
                }
          /*Sem overflow*/
          else {
            nova+= alfaReverso[d+numero];
          }
                }
         }
        }
        
    }
        
        outputTexto.value = nova;

}

botaoDecript.addEventListener('click', descriptografar);
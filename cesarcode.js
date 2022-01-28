/*Botao usado para criptografar*/

let botaoCript = document.getElementById('criptografa');

/*Função que se ativa ao clicar no botão selecionado*/

function criptografar (inputTexto, numero){

  let outputTexto = document.getElementById('outputText');
  inputTexto = document.getElementById('inputText');
  numero = Number(document.getElementById('numero').value);
  let nova = '';
  const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


  /*Verificação de texto no input*/
  if (inputTexto.value===''){
      alert('Digite alguma coisa!');
  }

  /*Operação de incremento*/
    
    
  for (let a=0; a<inputTexto.value.length; a++){

    if (inputTexto.value[a]===' '){
      nova+=' ';
    } 
    
    else {
      for (let b=0; b<alfa.length; b++){
        if (alfa[b]===inputTexto.value[a]){

        /*Problema de overflow*/
        if ((b+numero)>(alfa.length-1)){

          nova+= alfa[Math.floor((b+numero)%alfa.length)];
        
        }

        /*Sem overflow*/
        else {
        nova+= alfa[b+numero];
        }
        }
      }
    }
  }

  outputTexto.value = nova;

}
botaoCript.addEventListener('click', criptografar);

/*Limpeza da caixa de texto */

let botaoLimpar = document.getElementById('limpa');

botaoLimpar.addEventListener('click', ()=>{

   let inputTexto1 = document.getElementById('inputText');
   let outputTexto2 = document.getElementById('outputText'); 

   inputTexto1.value='';
   outputTexto2.value='';

});
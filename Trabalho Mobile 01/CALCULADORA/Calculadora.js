var Numero1  = 0;
var Numero2  = 0;
var Operacao = '+';

function setNumero1(input){
    if (Numero1 = +input.value)
    console.log('Numero 1', Numero1)
}

function setNumero2(input){
    Numero2 = +input.value
    console.log('Numero 2', Numero2)
}

function setOperacao(select){
    Operacao = select.value
    console.log('Operacao', Numero2)
}

function calcular(){
    console.log(Numero1,Operacao,Numero2);
    var resultado;
  
    switch(Operacao){
        case '+':
            resultado = Numero1 + Numero2;
            break;
        case '-':
            resultado = Numero1 - Numero2;
            break;
        case '*':
            resultado = Numero1 * Numero2;
            break;
        case '/':
            resultado = Numero1 / Numero2;
            break;
    }
    console.log('Resultado', resultado);

    const spanResultado = document.getElementsByTagName('span')[0];
    console.log('spanResultado:' , spanResultado);

    if (spanResultado.firstChild) {
        spanResultado.removeChild(spanResultado.firstChild);
      }

    var textResultado = document.createTextNode(resultado);
    console.log('TextResultado:' , textResultado);
    spanResultado.appendChild(textResultado);
    
}



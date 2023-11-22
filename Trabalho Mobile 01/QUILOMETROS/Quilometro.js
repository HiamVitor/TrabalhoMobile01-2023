var Distancia  = 0;
var Litros  = 0;

function setDistancia(input){
    Distancia = +input.value
    console.log('Distancia', Distancia)
}

function setLitros(input){
    Litros = +input.value
    console.log('Qtd de litros', Litros)
}

function calcularquilometro(){
    var resultado;
    var classificacao;

    if (Litros !== 0) {
        resultado = (Distancia / Litros) + " Km/l";
    } else {
        resultado = ("Não é possível dividir por zero!");
    }
        console.log('Resultado:', resultado);

        const spanResultado = document.getElementsByTagName('span')[0];
        console.log('spanResultado:' , spanResultado);
    
        if (spanResultado.firstChild) {
            spanResultado.removeChild(spanResultado.firstChild);
        }
    
        var textResultado = document.createTextNode(resultado);
        console.log("textResultado: ", textResultado);
    
        spanResultado.appendChild(textResultado);

        var valorclassificacao = (Distancia / Litros);
    
        if (Litros <= 0 ){
            classificacao = "" 
        } else if (valorclassificacao > 0 && valorclassificacao < 10 ) {
            classificacao = "GASTADOR";
        } else if (valorclassificacao >= 10 && valorclassificacao <= 13) {
            classificacao = "NORMAL";
        } else if (valorclassificacao > 13)
            classificacao = "ECONÔMICO";
    
        console.log('Classificação:', classificacao);

        const spanClassificacao = document.getElementsByTagName('span')[1];
        console.log('spanClassificacao:' , spanClassificacao);

        if (spanClassificacao.firstChild) {
            spanClassificacao.removeChild(spanClassificacao.firstChild);
        }

        var textResultado2 = document.createTextNode(classificacao);
        console.log("textResultado2: ", textResultado2);

        spanClassificacao.appendChild(textResultado2);
        
}

function enableCalc() {
    var value1 = document.getElementById("inputDistancia").value;
    var value2 = document.getElementById("inputLitros").value;
  }
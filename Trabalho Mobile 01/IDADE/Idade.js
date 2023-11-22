var Ano  = 0;
var AnoAtual  = 2023;

function setAno(input){
    Ano = +input.value
    console.log('Ano', Ano)
}

function calcularidade(){
    var resultado;
    var classificacao;

    if (Ano <= AnoAtual) {
        resultado = (AnoAtual - Ano) + " anos - ";
    } else {
        resultado = ("Ano digitado maior que o atual(2023)!");
    }
        console.log('Resultado:', resultado);

        const spanIdade = document.getElementsByTagName('span')[0];
        console.log('spanIdade:' , spanIdade);
    
        if (spanIdade.firstChild) {
            spanIdade.removeChild(spanIdade.firstChild);
        }
    
        var textResultado = document.createTextNode(resultado);
        console.log("textResultado: ", textResultado);
    
        spanIdade.appendChild(textResultado);

        var valorclassificacao = (AnoAtual - Ano);
    
        if (valorclassificacao < 0 ){
            classificacao = "" 
        } else if (valorclassificacao <= 12 ) {
            classificacao = "Criança";
        } else if (valorclassificacao >= 13 && valorclassificacao <= 17) {
            classificacao = "Adolescente";
        } else if (valorclassificacao >= 18 && valorclassificacao <= 59){
            classificacao = "Adulto";
        } else classificacao = "Idoso";

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



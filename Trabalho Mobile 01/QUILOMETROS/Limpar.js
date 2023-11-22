
document.getElementById('Limpar').onclick = function(){
    document.getElementById('inputDistancia').value = "";
    document.getElementById('inputLitros').value = "";
    
    var spanResultado =  document.getElementById('spanResultado');
    if (spanResultado.firstChild) {
      spanResultado.removeChild(spanResultado.firstChild);
    }

    var spanClassificacao =  document.getElementById('spanClassificacao');
    if (spanClassificacao.firstChild) {
      spanClassificacao.removeChild(spanClassificacao.firstChild);
    }

}

function enableClear() {
  var value1 = document.getElementById("inputDistancia").value;
  var value2 = document.getElementById("inputLitros").value;
}
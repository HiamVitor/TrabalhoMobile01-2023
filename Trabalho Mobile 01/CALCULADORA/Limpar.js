
document.getElementById('Limpar').onclick = function(){
    document.getElementById('inputNumero1').value = "";
    document.getElementById('inputNumero2').value = "";
    
    var spanResultado =  document.getElementById('spanResultado');
    if (spanResultado.firstChild) {
        spanResultado.removeChild(spanResultado.firstChild);
    }

    document.getElementById('SelectOpereacao').value = '+';

    toggleResult(false);
    enableCalc();
    operacaoChange = false;
    enableClear();
}

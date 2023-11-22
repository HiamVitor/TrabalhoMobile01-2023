document.getElementById('Limpar').onclick = function(){
  document.getElementById('inputAno').value = "";
  
  var spanIdade =  document.getElementById('spanIdade');
  if (spanIdade.firstChild) {
    spanIdade.removeChild(spanIdade.firstChild);
  }

  var spanClassificacao =  document.getElementById('spanClassificacao');
  if (spanClassificacao.firstChild) {
    spanClassificacao.removeChild(spanClassificacao.firstChild);
  }

}

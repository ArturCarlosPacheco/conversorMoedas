function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5.24;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real: R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEmEuro() {
    var valorElementoEuro = document.getElementById("valorEuro");
    var valorEuro = valorElementoEuro.value;
    var valorEmEuroNumerico = parseFloat(valorEuro);
    var valorEmRealParaEuro = valorEmEuroNumerico * 6.2;
  
    var elementoValorConvertidoEuro = document.getElementById(
      "valorConvertidoEmEuro"
    );
    var valorConvertidoEuro = "O resultado em real : R$" + valorEmRealParaEuro;
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  }
  
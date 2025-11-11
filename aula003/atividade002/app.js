function fnConverterValor(){
    let valorDigitado = 0, total = 0
    valorDigitado = document.getElementById("valor").value
    total = valorDigitado * 5.29
    document.getElementById("valorConvertido").innerText = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

// 1-Como colocar o resultado do formato R$ XX,XX
// 2-Como mostrar o resultado daconversão de dolar e euro
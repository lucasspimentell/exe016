function contar() {

    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var resultado = document.getElementById("resultado");

    var num1 = Number(inicio.value);
    var num2 = Number(fim.value);
    var p = Number(passo.value);

    if (num1=="" && num2=="" && p == ""){
        alert("insira um número")
    }

    if (num1=="0" || num2=="0" || p == "0"){
        alert("zero não é valido")
    }
    

    while (num1 <= num2) {

        resultado.innerHTML = resultado.innerHTML + "👉"+ num1 //auto atribuição, a cada loop ele mostra o resultado da atribuição de num1 += p
        num1+=p // auto atribuição simplificada
        /*estou atribuindo ao valor de num1 = num1 + p para que a cada loop seja adicionado o valor que esta em p*/
       
    }
    resultado.innerHTML = resultado.innerHTML + "🏁"
   
}
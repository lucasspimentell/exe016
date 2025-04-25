function contar() {

    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var resultado = document.getElementById("resultado");

    var num1 = Number(inicio.value);
    var num2 = Number(fim.value);
    var p = Number(passo.value);

    if (num1 == "" && num2 == "" && p == "") {
        alert("insira um número")
    }

    if (num1 == "0" || num2 == "0" || p == "0") {
        alert("zero não é valido")
    }

    resultado.innerHTML = "" //limpar o resultado anterior

    if (num1 < num2) {
        resultado.innerHTML = "contando: "
        //contagem crescente
        while (num1 <= num2) {

            resultado.innerHTML = resultado.innerHTML + "👉" + num1 //auto atribuição, a cada loop ele mostra o resultado da atribuição de num1 += p
            num1 += p // auto atribuição simplificada
            /*estou atribuindo ao valor de num1 = num1 + p para que a cada loop seja adicionado o valor que esta em p*/

        }

    } else {

        resultado.innerHTML = "contando: "
        for (var num = num1; num >= num2; num -= p/*esse num-= vai decrementar no caso vai diminuir o valor de num de acordo com o numero colocado em p*/) {

            resultado.innerHTML += `${num} 👉`

        }
    }




    resultado.innerHTML = resultado.innerHTML + "🏁"

}
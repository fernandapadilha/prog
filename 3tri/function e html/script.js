let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
})

function soma(a, b) {
    resultado.textContent = (a + b);
}

let btSubtracao = document.querySelector("#btSubtracao");
btSubtracao.addEventListener("click", function () {
    subtração(Number(valor1.value), Number(valor2.value));
})

function subtração(a, b) {
    resultado.textContent = (a - b);
}

let btMultiplicacao = document.querySelector("#btMultiplicacao");
btMultiplicacao.addEventListener("click", function () {
    multiplicação(Number(valor1.value), Number(valor2.value));
})

function multiplicação(a, b) {
    resultado.textContent = (a * b);
}

let btDivisao = document.querySelector("#btDivisao");
btDivisao.addEventListener("click", function () {
    divisão(Number(valor1.value), Number(valor2.value));
})

function divisão(a, b) {
    resultado.textContent = (a / b);
}



/*valor1.addEventListener("keyup", function(){
    somar(Number(valor1.value), Number(valor2.value));
});

valor2.addEventListener("keyup", function(){
    somar(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}*/
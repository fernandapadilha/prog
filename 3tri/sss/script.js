function clq1() {
    alert("vc clicou no botão 1")
}

let bt2 = document.getElementById('bt2');
bt2.addEventListener("click", clq2);

function clq2(){
    alert(`Voce clicou o botão 2`)
}

let valor1 = document.querySelector('#valor1');
let valor2= document.querySelector('#valor2');
let resultado =document.querySelector('#resultado');

valor1.addEventListener('keyup', function(){
    somar(Number(valor1.value), Number(valor2.value));
});

valor2.addEventListener('keyup', function(){
    somar(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
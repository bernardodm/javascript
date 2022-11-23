/*
function soma(valor1,valor2){
    return valor1 + valor2;
}

function realParaDolar (real,dolar){
    return real*dolar;
}

function alertaOla (){
    alert ("Olá, pessoal");
}

function paraCelsius (valor){
    return (5/9) * (valor - 32);
}

var x = paraCelsius(77);

var total = soma (5,5)

alert (total)

var y = realParaDolar(10, 5.08);

document.getElementById("texto").innerHTML = total;
*/


function clicou (){
    document.body.style.backgroundColor = "blue";
}

function clicou2 (){
    alert ("evento de clique duplo");
}

function viraVermelho (){
    let div = document.getElementById("mouse");
    div.style.backgroundColor = "red";
}

function voltaAzul (){
    let div = document.getElementById("mouse");
    div.style.backgroundColor = "blue";
}

function press (){
    let input = document.getElementById("campo");
    input.style.backgroundColor = "red";

}

function solta (){
    let input = document.getElementById("campo");
    input.style.backgroundColor = "yellow";
}



/*COMANDOS DO indexedDB.HTML*/

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

/*
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

const lista = [
    "arroz",
    "feijão",
    "macarrão",
    "leite"
];

const lista1 = [
    "batata",
    "beterraba",
    "repolo"
];

const listao = lista.concat (lista1); //Junta duas matrizes

const comida = lista.slice (0,2); //divide duas matrizes da casa onde inicia até a casa onde para, nesse caso é para mostrar só a acasa 0 e 1

lista.sort (); //Usar de forma alfabética

const nume = [
    40,
    10,
    20,
    50,
    30 
]

alert (nume.sort (function (a,b) {return a-b})); //colocar numeros em ordem crescente





function maiornume(array){ //Colocar o maior número
    return Math.max.apply(null, array);//
}//
//
document.getElementById("texto").innerHTML = maiornume(nume);//



lista1.pop(); //apagar o último da lista

//Para mostrar o total de itens na matriz, basta utilizar o lista.length
//alert (lista.length);
//Para acrescentar um item na matriz, basta utilizar o lista.push("item"), assim, entrará mais um na lista
*/
/*
var hora = new Date().getHours();

if (hora < 12) {
    alert ("Bom dia");
} else if (hora < 18) {
    alert ("Boa tarde");
} else {
    alert ("Boa noite")
}
*/






/*COMANDOS IF E ELSE */
/*
function verificar() {
    let nome = document.getElementById("inome").value;

    if (nome == "" || nome == null){
        document.getElementById("texto").innerHTML = "o campo não pode ser vazio";
    } else {
        document.getElementById("texto").innerHTML = "Tudo Certinho";
    }
}

*/


/*
function verificaCor() {
    let cor = document.getElementById("cor").value;

switch (cor) {
    case "azul":
        document.body.style.backgroundColor = "blue";
        break;
    case "vermelho":
        document.body.style.backgroundColor = "red";
        break;
    case "amarelo":
        document.body.style.backgroundColor = "yellow";
        break;
    default:
        document.getElementById("texto").innerHTML = "Nenhuma cor disponível para " + cor;

}
}
*/

//function ativarContagem() {
//    document.getElementById('tempo').innerHTML = "começou a contar!";
//    //ativa a função apenas uma vez quando der o tempo especificado
//    tempo = setTimeout (function(){
//        document.getElementById('tempo').innerHTML = "executou";
//    }, 1000);
//}


function ativarContagem(){
    tempo = setInterval (function(){
       var cronometro = document.getElementById('tempo').innerHTML; 
       var soma = parseInt(cronometro) + 1;
       document.getElementById('tempo').innerHTML = soma;
       alert ("executou")
    }, 1000);
}


function pararContagem() {
   clearInterval(tempo);
//    document.getElementById('tempo').innerHTML = "parou a contagem";
//
}


function ativarRegress(){
    time = setInterval (function(){
       var cronometro = document.getElementById('time').innerHTML; 
       var diminui = parseInt(cronometro) - 1;

       if (diminui === 0) {
            document.getElementById('time').innerHTML = "Tempo esgotado";
            pararRegress()
       } else {
            document.getElementById('time').innerHTML = diminui;
       }

    }, 1000);
}



function pararRegress() {
   clearInterval(time);
//    document.getElementById('tempo').innerHTML = "parou a contagem";
//
}


let hoje = new Date();
let venc = new Date(2022, 10, 30);

if (hoje > venc) {
    alert ("venceu");
} else {
    alert ("ok");
}
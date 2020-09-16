
/**** aula 1 ***//*
var nome = "Dayan Monteiro";
var idade = 33;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLocaleUpperCase());
toLocaleUpperCase deixa tudo em maiúscula / para minuscula toLowerCase

//alert(frase.replace("Japão" , "Brasil")); */

/*** aula 2 parte 1 */
/*
var lista = ["morango", "laranja", "banana"];
lista.push("uva"); /*(inclui mais um item)
lista.pop(); (retira item)

console.log(lista);
// lista.length mostra quantos itens em sua lista
// se eu usar lista.reverse ele mostra os itens da lista de trás pra frente
console.log(lista.toString()); /* cria uma string com as informações e perde a informação de arrey
console.log(lista.join('-')); /* ele transforma em string mas retira a virgula entre cada item e posso inserir o q eu quiser ('-') para separar os elementos */

/*** aula 2 parte 2 */
/*
var frutas = [ {nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"} ]
console.log(frutas);
alert(frutas[1].nome);*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
/*

/******Condicionais, laços de repetição e date ***/

/* Condicionais
var idade = prompt ("Qual sua idade");
var idade = 18;
if (idade >= 18){
    alert("maior de idade");   
} else {
    alert("menor de idade");
}; */

/* laço
var count = 0;
while (count <= 5){
    console.log(count);
    alert (count);
    count++;
}*/
/* repetiçao
var count;
for(count =0; count <=5; count++){
    alert(count);
}*/

/*date
var d = new Date();
alert(d);
/*alert(d.getDate( )); 
alert(d.getMinutes());
alert(d.getSeconds()) etc*/
/*
var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
lista.push(“Polônia”);
lista.pop(“Inglaterra”);*/


/***** aula desenvolvendo paginas web */
/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

**************************************

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}*/

/*
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
********************************************/

/*
function clicou(){
    alert("Obrigado por clicar");
}*/


 /*   
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
   window.open("https://www.instagram.com/");
   // window.location.href = "https://www.instagram.com/";
}*/

let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = 0; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
    




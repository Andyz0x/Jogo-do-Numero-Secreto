let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let contadorDeCliques = 0;
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function telaInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
telaInicial();

function imprimirNoConsole(funcao){
    console.log(funcao); 
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que o seu chute!');
        } else { 
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
  
   //contadorDeCliques++;
    //console.log(chute == numeroSecreto);
    //imprimirNoConsole('O numero secreto é ' + numeroSecreto); 
    //imprimirNoConsole('Você clicou um total de ' + contadorDeCliques + ' vez(es).');
   
}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    telaInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/////////////////

/*Atividades
1o-Criar uma função que exibe "Olá, mundo!" no console.

2Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4Criar uma função que recebe três números como parâmetros e retorna a média deles.

5Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo */

/*
//1o
function exibirMensagemNoConsole() {
    console.log('Olá, mundo!');
}
exibirMensagemNoConsole();

//2o
function exibirMensagemNoConsoleComNome(nome) {
    console.log('Olá, ' + nome); 
}
exibirMensagemNoConsoleComNome('Igor');

//3o
function dobraNumero(numero){
    console.log('O número escolhido foi ' + numero + ' e o dobro dele é ' + (numero*2));
}
dobraNumero(35);
//4o
function mediaDeNumeros(numero1, numero2, numero3) {
    console.log(parseInt((numero1 + numero2 + numero3)/3))
}
mediaDeNumeros(10,20,30);
//5o
function checaNumeroMaior(numero1, numero2) {
    if(numero1 > numero2){
        console.log('O número maior é ' + numero1);
    }else if(numero1 < numero2){
        console.log('O número maior é ' + numero2);
    }else{
        console.log('Os dois números são iguais!');
    }
}
checaNumeroMaior(20,30);
//6o
function multiplicaPorEleMesmo(numero){
    console.log('O número escolhido foi ' + numero + '. E a mutiplicação do número por ele mesmo é ' + numero*numero);
}
multiplicaPorEleMesmo(10);
*/

////////////////
/*
//Desafio hora da pratica


//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoImc(altura, peso){
 let imc = peso / altura * altura;
 return imc;
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero){
    let resultado = 1;
    let contador = 1;
    while(contador <=numero){
        resultado *= contador;
        contador++;
    }
    return resultado;
}

let resultadoFatorial = fatorial(3);
console.log(`O resultado fatorial de 3 é ${resultadoFatorial}`);
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dolarReal(valor){
    let real = valor * 4.80;
    return real;
}

let dolarConvertido = dolarReal(11.5);
console.log(`O valor em Real é de R$ ${dolarConvertido}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaAreaPerimetroRetangulo(altura, largura){
    let area = altura*largura;
    let perimetro = altura * 2 + largura * 2;

return console.log(`A área da sala é de ${area}M² e o perimetro é de ${perimetro}M.`)
}
calculaAreaPerimetroRetangulo(10, 20);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculaAreaPerimetroCircular(raio){
    let area = (raio * raio) * 3.14;
    let perimetro = (raio + raio) *  3.14;

    return console.log(`A area do circulo é de ${area} e o seu perimetro é de ${perimetro}`);
}
calculaAreaPerimetroCircular(10);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    let contador = 0;
    while(contador <= numero){
        let resultado = numero * contador; 
        console.log(`${numero} x ${contador} = ${resultado}`);
        contador++;
    }
}
tabuada(5);
*/


//AULA 4 - Listas
/*
let numerosSorteados = [1, 2];
let linguagens = ['javascript', 'java', 'python'];
console.log(numerosSorteados.length);
console.log(linguagens[0]);
*/
/*
//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao.length);
console.log(linguagensDeProgramacao);
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao.length);
console.log(linguagensDeProgramacao);
//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes = ['Igor', 'Glaucia', 'João', 'Théo'];
console.log(`O primeiro nome da lista é ${nomes[0]}`);
//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(`O segundo nome é ${nomes[1]}`);
//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let ultimoNome = nomes.length - 1; 
console.log(`O ultimo nome é ${nomes[ultimoNome]}`);
*/
// function digaOla(){
//     return "Olá, mundo!";
// }

// let mensagem = digaOla()

// console.log(mensagem);



// function multiply(a, b) {
//   return a * b;
// }

// let n1 = Number(prompt("Digite o primeiro número:"))
// let n2 = Number(prompt("Digite o segundo número:"))

// let resultado = multiply(n1,n2)
// console.log(resultado)


function verificarPar(a){
    if(a % 2 === 0){
        alert("Seu número é par")
    }
    else{
        alert("Seu número é ímpar")
    }
}

let n1 = Number(prompt("Digite um número:"))
verificarPar(n1)
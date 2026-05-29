const input = require ("readline-sync")

let num1 = input.questionInt("Qual e o primeiro numero ")
let num2 = input.questionInt("Qual e o segundo numero ")

console.log("soma = " + (num1 + num2))
console.log("subtracao = " + (num1 - num2))
console.log("multiplicacao = " + (num1 * num2))

if(num2 === 0) {
    console.log("valor invalido")
} else {
    console.log("divisao = " + (num1 / num2))
}
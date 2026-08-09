const input = require("readline-sync")

function somar(a, b) {
    return a+b;
}

function subtrair(a, b) {
    return a-b;
}

function multiplicar(a, b) {
    return a*b
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

let a = input.questionInt("digite um valor = ")
let b = input.questionInt("digite outro valor = ")

console.log("soma = ", somar(a,b))
console.log("subtração = ", subtrair(a,b))
console.log("multiplicação = ", multiplicar(a,b))
console.log("divisão = ", dividir(a,b))
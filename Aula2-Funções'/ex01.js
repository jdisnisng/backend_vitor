const input = require("readline-sync")

function somar(a, b) {
    let c = a + b
    return c;
}

function subtrair(a, b) {
    let c = a - b
    return c;
}

function multiplicar(a, b) {
    let c = a * b
    return c;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    c = a / b
    return c;
}

let a = input.questionInt("digite um valor = ")
let b = input.questionInt("digite outro valor = ")

console.log("soma = ", somar(a,b))
console.log("subtração = ", subtrair(a,b))
console.log("multiplicação = ", multiplicar(a,b))
console.log("divisão = ", dividir(a,b))
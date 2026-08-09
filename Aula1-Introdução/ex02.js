const input = require("readline-sync")

let a = input.questionInt("digite um numero = ")
let b = input.questionInt("agora outro = ")

console.log(`Soma = ${a+b}`)
console.log(`Subtração = ${a-b}`)
console.log(`Multiplicação = ${a*b}`)

if(b === 0) {
    console.log(`Divisão = ${a/b}`)
}
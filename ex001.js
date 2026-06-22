const input = require("readline-sync")

let C = input.questionFloat("Digite alguma temperatura em graus celsius: ")

console.log(`Essa mesma temperatura em fahrenheit é igual a: ${C * 1.8 + 32}`)
console.log("Olá, mundo!");
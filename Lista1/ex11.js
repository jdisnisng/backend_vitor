const input = require("readline-sync")

function podeVotar(idade) {
    return idade >= 16;
}

let idade = input.questionInt("Digite sua idade: ")

console.log(podeVotar(idade))
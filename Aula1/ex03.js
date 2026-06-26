const input = require("readline-sync")

let soma = 0
let nota = 0

for(let i=0; i<5; i++) {
    nota = input.questionFloat("digite a nota: ")
    soma = nota + soma
}

let media = soma/5

if(media>7) {
    console.log("Aprovado!")
} else if(media>5) {
    console.log("Recuperação...")
} else {
    console.log("Reprovado")
}
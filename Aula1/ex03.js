const input = require ("readline-sync")

let soma = 0

for (let i = 0; i < 5; i++) {
    let nota = input.questionInt(`digite o valor da nota `)
    soma = soma + nota
}

let media = soma / 5

if(media >= 7) {
    console.log(`aprovado,media final: ${media.toFixed(1)}`)
} else if (media >= 5) {
    console.log(`recuperação, media final: ${media.toFixed(1)}`)
} else {
    console.log(`reprovado, media final: ${media.toFixed(1)}`)
}
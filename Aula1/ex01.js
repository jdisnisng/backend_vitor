const input = require ("readline-sync")

let nome = input.question ("qual seu nome? ")
let idade = input.questionInt ("qual sua idade? ")
let cidade = input.question ("qual sua cidade? ")

console.log (`Oi meu nome é ${nome}, eu tenho ${idade} anos, e more em ${cidade}`)
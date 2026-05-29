const input = require ("readline-sync")

let impar = 0
let par = 0

for(let i=0; i<10; i++) {
    let num = input.questionInt(`digite o ${i+1} valor: `)

    if(num % 2 === 0) {
        par++
    } else {
        impar++
    }   
}

console.log(`dentro da lista numerica existem ${par} numeros pares e ${impar} numeros impares`)
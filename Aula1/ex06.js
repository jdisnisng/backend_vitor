const input = require("readline-sync")

const numeroSecreto = 42;
let tentativa = 0;

while (tentativa !== numeroSecreto) {
    tentativa = input.questionInt("Adivinhe o numero:");

    if (tentativa > numeroSecreto) {
        console.log("O numero é menor.");
    } else if (tentativa < numeroSecreto) {
        console.log("O numero é maior.");
    } else {
        console.log("Parabens! Voce acertou!");
    }
}
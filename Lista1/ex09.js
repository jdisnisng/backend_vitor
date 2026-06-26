const input = require("readline-sync")

function min(a, b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

let a = 1
let b = 2

console.log(`o menor deles eh ${min(a,b)}`)
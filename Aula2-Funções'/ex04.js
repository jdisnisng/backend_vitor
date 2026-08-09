function executarOperacao(a, b, operacao) {
    console.log(operacao(a, b));
}

executarOperacao(10, 3, (a, b) => a + b);
executarOperacao(10, 3, (a, b) => a * b);
executarOperacao(10, 3, (a, b) => a - b);
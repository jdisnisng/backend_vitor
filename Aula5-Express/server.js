const express = require('express');

const app = express();

const produtos = [
    { id: 1, nome: "Teclado", preco: 109.90 },
    { id: 2, nome: "Mouse", preco: 55.90 },
    { id: 3, nome: "Fone de ouvido", preco: 23.50 },
    { id: 4, nome: "Monitor", preco: 599.90 }
];

app.use(express.json()); 

app.get('/sobre', (req, res) => {
    res.json({
        nome: "Vitor",
        disciplina: "DS",
        ano: "Segundo ano do Ensino Médio",
    });
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/status', (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor online."
    });
})

app.get('/produtos/caros', (req, res) => {
    const produtosCaros = produtos.filter(produto => produto.preco > 100);

    res.json(produtosCaros);
});

app.listen(3000, () => {
    console.log("Exercicio 01: http://localhost:3000/sobre");
    console.log("Exercicio 02: http://localhost:3000/produtos")
    console.log("Exercicio 03: http://localhost:3000/status")
    console.log("Exercicio 04: http://localhost:3000/produtos/caros")
});
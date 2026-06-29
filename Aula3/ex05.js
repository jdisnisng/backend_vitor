const readline = require("readline-sync");

const produtos = [];

for (let i = 1; i <= 3; i++) {
    const nome = readline.question(`Digite o nome do produto: `);
    const preco = Number(readline.question(`Digite o preco do produto: `));

    produtos.push({
        nome: nome,
        preco: preco
    });
}

const produtosCaros = produtos.filter(produto => produto.preco > 20);

console.log("\nProdutos com preço acima de R$ 20,00:");

for (const produto of produtosCaros) {
    console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco}`);
}
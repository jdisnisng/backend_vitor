const produtos = [
    { id: 1, nome: "PS5", preco: 3400 },
    { id: 2, nome: "Steam Deck", preco: 6000 },
    { id: 3, nome: "PC Gamer", preco: 2200 },
    { id: 4, nome: "Pc com linux", preco: 49 }
];

const produto = produtos.find(p => p.id === 3);

console.log("Nome do produto:", produto.nome);

const produtosCaros = produtos.filter(p => p.preco > 50);

console.log("\nProdutos acima de R$ 50,00:");
for (const p of produtosCaros) {
    console.log(`Nome: ${p.nome} | Preço: R$ ${p.preco}`);
}
const produtos = [
    { id: 1, nome: "PS5", preco: 3400 },
    { id: 2, nome: "Steam Deck", preco: 6000 },
    { id: 3, nome: "PC Gamer", preco: 2200 },
    { id: 4, nome: "Pc com linux", preco: 49 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(`nome = ${produtos[i].nome}, preco = ${produtos[i].preco}\n`);
}

produtos.push({ id: 5, nome: "Xbox Series S", preco: 2600 });

console.log(`novo tamanho do array: ${produtos.length}`);
let produtos = [
    { id: 1, nome: "Teclado", preco: 80 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Monitor", preco: 120 },
    { id: 4, nome: "Notebook", preco: 2500 },
    { id: 5, nome: "Cabo HDMI", preco: 30 }
];

let produtoId3 = produtos.find(p => p.id === 3);
console.log("Produto com id 3:", produtoId3);

let caros = produtos.filter(p => p.preco > 100);
console.log("Produtos acima de 100:", caros);

let nomes = produtos.map(p => p.nome);
console.log("Nomes dos produtos:", nomes);

produtos.forEach(p => {
    console.log(`ID: ${p.id} | Nome: ${p.nome} | Preço: R$ ${p.preco}`);
});
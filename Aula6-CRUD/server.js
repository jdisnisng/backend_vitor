const express = require("express")
const app = express()

app.use(express.json())

let produtos = [
    { id: 1, nome: "PC", preco: 2700.00 },
    { id: 2, nome: "Mouse", preco: 89.90 }
]

let proximoCodigo = 3

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const codigo = Number(req.params.id)
    const item = produtos.find(p => p.id === codigo)

    if (!item) {
        return res.status(404).json({
            erro: "Produto não encontrado."
        })
    }

    res.json(item)
})

app.post('/produtos/produtoNovo', (req, res) => {

    const produtoAdicionado = {
        id: proximoCodigo,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(produtoAdicionado)
    proximoCodigo++

    res.status(201).json(produtoAdicionado)
})

app.put('/produtos/:id', (req, res) => {
    const codigo = Number(req.params.id)
    const item = produtos.find(p => p.id === codigo)

    if (!item) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        })
    }

    item.nome = req.body.nome
    item.preco = req.body.preco

    res.json(item)
})

app.delete('/produtos/:id', (req, res) => {
    const codigo = Number(req.params.id)
    const item = produtos.find(p => p.id === codigo)

    if (!item) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        })
    }

    produtos = produtos.filter(p => p.id !== codigo)

    res.json({
        mensagem: "Produto removido com êxito!"
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
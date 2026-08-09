const alunos = [
    { id: 1, nome: "Ana", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 6.0 },
    { id: 3, nome: "Carlos", nota: 7.0 },
    { id: 4, nome: "Daniela", nota: 9.2 },
    { id: 5, nome: "Eduardo", nota: 5.8 }
];

const resultado = alunos.map(aluno => ({
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));

console.log(resultado);
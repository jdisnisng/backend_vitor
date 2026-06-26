let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carla", nota: 7 },
    { nome: "Diego", nota: 6 },
    { nome: "Eva", nota: 9 }
];

// map() adicionando a situação
let alunosComSituacao = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log("Alunos com situação:", alunosComSituacao);

// filter() para aprovados
let aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");

console.log("Quantidade de aprovados:", aprovados.length);

// média geral da turma
let somaNotas = alunos.reduce((total, aluno) => total + aluno.nota, 0);
let media = somaNotas / alunos.length;

console.log("Média da turma:", media.toFixed(2));
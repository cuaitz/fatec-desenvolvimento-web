let alunos = [
    {nome: 'Augusto', nota1: 10, nota2: 10},
    {nome: 'Foo', nota1: 1, nota2: 2},
    {nome: 'Bar', nota1: 3, nota2: 4},
    {nome: 'Baz', nota1: 5, nota2: 6},
    {nome: 'Qux', nota1: 7, nota2: 8},
];

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

alunos = alunos.map((aluno) => {
    aluno.media = calcularMedia(aluno.nota1, aluno.nota2);  // adc media nos cara
    return aluno;
});
let aprovados = alunos.filter((aluno) => aluno.media >= 6); // filtra os com media positiva
let media = alunos.reduce((acc, n) => acc + n.media, 0) / alunos.length; // tira a media da sala

console.log(`Alunos (${alunos.length}): `);
for (const aluno of alunos) {
    console.log(`Nome: ${aluno.nome} | Nota 1: ${aluno.nota1.toFixed(2)} | Nota 2: ${aluno.nota2.toFixed(2)} | Media: ${aluno.media.toFixed(2)}`);
}

console.log(`Aprovados (${aprovados.length}): `);
for (const aluno of aprovados) {
    console.log(`Nome: ${aluno.nome} | Nota 1: ${aluno.nota1.toFixed(2)} | Nota 2: ${aluno.nota2.toFixed(2)} | Media: ${aluno.media.toFixed(2)}`);
}

console.log(`Media da turma: ${media.toFixed(2)}`);



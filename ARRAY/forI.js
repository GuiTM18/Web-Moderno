const alunos = [
    {nome: 'Pedro', nota: 7.8},
    {nome: 'Davi', nota: 6},
    {nome: 'Mana', nota: 8.5},

];

let total = 0

for(i = 0; i < alunos.length; i++){ //navega por todos alunos e dps soma a nota deles com o i
    total += alunos[i].nota
    console.log(total)
}
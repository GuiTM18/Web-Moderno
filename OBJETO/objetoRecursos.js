const cidade = {
    nome: 'Gandu',
    cep: '45450-000',
    estado: 'BA'
}

console.log(Object.keys(cidade)); // MOSTRA APENAS OS ELEMENTOS DO OBJETO
console.log(Object.values(cidade)); // MOSTRA APENAS OS VALORES QUE COMPÕES O OBJETOQ
console.log(Object.entries(cidade)); // MOSTRA O OBJETO EM FORMA DE ARRAY

Object.defineProperty(cidade, 'pais', {
    enumerable: true,
    writable: false,
    value: 'Brazil'
})

cidade.pais = "Brasil"
console.log(cidade.pais)
console.log(Object.keys(cidade))
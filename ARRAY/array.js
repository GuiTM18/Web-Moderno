let aprovados = ['Guilherme', 'Vagner', 'Ana'];
console.log(aprovados);

aprovados[3] = 'Gu'
console.log(aprovados);

console.log(aprovados[0]); //Guilherme
console.log(aprovados[1]); //Vagner

aprovados.push('Moana') //Adciona um valor no ultimo elemento do array
console.log(aprovados[4]); // Moana

aprovados[7] = 'Larissa' // ele pula as casas que não estão com valor e adcionar na posição 7 
console.log(aprovados); //As casas sem valor no array se torna underfined

aprovados.sort() //Sort é responsável por desembaralhar o array e deixar tudo na respectiva ordem
console.log(aprovados)

console.log(aprovados.length) // o Length determina o tamanho do array, quantos elementos tem

aprovados = ['Andre', 'Lucas', 'Pedro']

aprovados.pop() // Remove o ultimo elemento do array
aprovados.shift() // Remove o primeiro elemento do array
console.log(aprovados)
aprovados.unshift('Jorginho', 'Luan') //Adciona elemntos no inicio do array
console.log(aprovados)

aprovados = ['Juan', 'Savio', 'Renan', 'Malu', 'Stefane', 'Omar', 'Matheus']
aprovados.splice(1, 2) // ele deleta os valores do array, e também tem a função de adicionar mais valores
//(1 =(o primeiro numero é o qual array excluir, ele meio que seleciona) ,2)
//(1, 2 =(ele pega apartir do elemento selecionado e exclui os proximos a direita dependendo do numero))
//(1, 2, 'Assim que faz para adicionar mais valores')

console.log(aprovados) //  [ 'Juan', 'Malu', 'Stefane', 'Omar', 'Matheus' ]

let outrosAprovados = aprovados.slice(2)// Slice = pedaço, ele corta o array e deixa o outro restante de acordo com o indice definido
console.log(outrosAprovados) // [ 'Stefane', 'Omar', 'Matheus' ]



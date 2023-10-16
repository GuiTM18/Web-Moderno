const fabricantes = ["Bmw", "Audi", "Mercedes-Benz", "Jaguar"]

function mostre(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
}

fabricantes.forEach(mostre)
fabricantes.forEach(fabricantes => console.log(fabricantes)) 

/*
SAIDA DE CODIGO:

1: Bmw
2: Audi
3: MercedesBenz
4: Jaguar

Bmw
Audi
MercedesBenz
Jaguar

*/
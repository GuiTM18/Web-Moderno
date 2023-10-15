const fabricantes = ["Bmw", "Audi", "MercedesBenz"]

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

Bmw
Audi
MercedesBenz

*/
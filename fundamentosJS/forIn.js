const pessoa = {
    nome: 'Gui',
    idade: 18,
    altura: 170,
    peso: 68
}

for (atributo in pessoa) {
    console.log(atributo, pessoa[atributo])
}

/*
SAIDA DE CODIGO:

nome Gui
idade 18
altura 170
peso 68


*/
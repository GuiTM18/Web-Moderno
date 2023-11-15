function esperarTempo(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('executando promise...')
            resolve()
        }, tempo)
    })
}

function retornaValor(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 100)
    })
}


async function executar() {

    let valor = await retornaValor()

    await esperarTempo(1000)
    console.log(`Executando.. ${valor}`)

    await esperarTempo(1000)
    console.log(`Executando.. ${valor + 1}`)

    await esperarTempo(1000)
    console.log(`Executando.. ${valor + 2}`)

    return valor + 3
 
}

executar().then(console.log)


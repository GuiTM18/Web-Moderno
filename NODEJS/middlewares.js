const mid1 = (context, next) => {
    context.valor = 'midd1'
    next()
}
const mid2 = (context, next) => {
    context.valor2 = 'midd2'
    next()
}
const mid3 = (context) => {
    context.valor3 = 'midd3'
}

const exec = (context, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](context, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const context = {}
exec(context, mid1, mid2, mid3)
console.log(context)
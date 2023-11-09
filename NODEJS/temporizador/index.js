const scheduler = require('node-schedule')

const tarefa1 = scheduler.scheduleJob('*/5 * 20 * * 3', function(){
    console.log('Executando tarefa1!', new Date().getSeconds())
    // */x = a cada, *, *, *, *, * = segundo, minuto, hora, dia, mês, dia da semana
}) 


setTimeout(function(){
    tarefa1.cancel
    console.log('Cancelando tarefa')
}, 20000)

const regra = new scheduler.RecurrenceRule()
regra.dayOfWeek = [new scheduler.Range(1, 5)] // O dia da semana é representado de 0 a 6 domingo 0 e sucessivamente
regra.hour = 20
regra.second = 15

const tarefa2 = scheduler.scheduleJob(regra, function(){
    console.log('Executando tarefa2!', new Date().getSeconds())
})
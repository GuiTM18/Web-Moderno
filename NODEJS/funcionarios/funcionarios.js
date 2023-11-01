//CONSOME A API DO GITHUB COM AXIOS, E MOSTRA OS PRIMEIROS 5 USUARIOS DO GITBUB COM FILTER

const url = 'https://api.github.com/users'
const axios = require('axios')

axios.get(url).then(response => {
    const users = response.data
    console.log(users.filter(function(e){
        if (e.id <= 5){
            return e
        }
    }))
})


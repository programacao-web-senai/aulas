const http = require('https')

const url = 'https://jsonplaceholder.typicode.com/todos'
http.get(url, res => {
    res.on('data', dados => {
        console.log(JSON.parse(dados))
    })    
})
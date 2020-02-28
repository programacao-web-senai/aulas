const http = require('https')
const url = 'https://jsonplaceholder.typicode.com/todos'

const buscaTarefa1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('buscando tarefa 1...')                        
            resolve(buscaTarefa(1))
        }, 1000);
    })
}

const buscaTarefa2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('buscando tarefa 2...')
            resolve(buscaTarefa(2))
        }, 1000);
    })
}

const buscaTarefa3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('buscando tarefa 3...')
            resolve(buscaTarefa(3))
        }, 1000);
    })
}

const buscaTarefa = (cod) => {
    let tarefa = ''
    http.get(`${url}/${cod}`, res => {
        res.on('data', dados => {
            this.tarefa = JSON.parse(dados)
        })    
    })
    return this.tarefa
}

const listaTarefas = async () => {
    let tarefas = []
    tarefas.push(await buscaTarefa1())
    tarefas.push(await buscaTarefa2())
    tarefas.push(await buscaTarefa3())
    return tarefas
}

const obterLista = listaTarefas().then(tarefas => console.log(tarefas))
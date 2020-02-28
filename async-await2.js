const http = require('https')
const url = 'https://jsonplaceholder.typicode.com/todos'

const funcionario1 = () => {
    return new Promise((resolve, reject) => {
        func1 = buscaFunc(1)
        setTimeout(() => {
            console.log('buscando funcionario 1...')                        
            resolve(func1)
        }, 1000);
    })
}

const funcionario2 = () => {
    return new Promise((resolve, reject) => {
        func2 = buscaFunc(2)
        setTimeout(() => {
            console.log('buscando funcionario 2...')
            resolve(func2)
        }, 1000);
    })
}

const funcionario3 = () => {
    return new Promise((resolve, reject) => {
        func3 = buscaFunc(3)
        setTimeout(() => {
            console.log('buscando funcionario 3...')
            resolve(func3)
        }, 1000);
    })
}

const buscaFunc = (cod) => {
    let func = ''
    http.get(`${url}/${cod}`, res => {
        res.on('data', dados => {
            this.func = JSON.parse(dados)
        })    
    })
    return this.func
}

const listaFuncionarios = async () => {
    let funcs = []

    funcs.push(await funcionario1())
    funcs.push(await funcionario2())
    funcs.push(await funcionario3())

    return funcs
}

const obterLista = listaFuncionarios().then(funcs => console.log(funcs))
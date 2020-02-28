// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

const axios = require('axios').default
let listaTarefas = []


axios.get('https://jsonplaceholder.typicode.com/todos/')
.then(function (response) {
    trataRetorno(response)
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.finally(function () {
    // always executed
})

const trataRetorno = (todos) => {
    listaTarefas = todos.data
    concluidas = listaTarefas.filter(tarefa => tarefa.completed)
    console.table(concluidas)
}
console.log('não para')
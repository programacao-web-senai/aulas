//https://www.luiztools.com.br/post/programacao-assincrona-em-nodejs-callbacks-e-promises/

const successCallback = _ => console.log('terminou busca')
const failureCallback = _ => console.log('busca falhou')

const buscaCPF = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 11)
    
    let retorno = setTimeout(_ => { 
        if (num > 5) {
            resolve('teste')             
        } else {
            reject('teste')
        }
    }, 5000)
})

buscaCPF.then((res) => {
    successCallback()
}, rej => {
    failureCallback()
})

console.log("e o programa continua rodando..")
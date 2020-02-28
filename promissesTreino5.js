/**
 * buscando os emails para montar o dashboard
 */

buscaEmails = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('Emails recuperados! continuar dashboard!')                
            } else {
                reject('Ocorreu um erro na leitura dos emails!')
            }
        }, 3000)
    })
}

let dashboard = buscaEmails().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
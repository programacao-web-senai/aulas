sucesso = false

let buscaEmails = new Promise((resolve, reject) => {
    //rotina para buscar os emails do servidor...
    console.log('Aguarde... buscando os emails')
    
    //só para simular o tempo de buscar os emails do servidor
    setTimeout(_ => {
        if (sucesso) {
            resolve()
        } else {
            reject()
        }
    }, 3000)

})

let emails = buscaEmails.then(resolve => {
    buscouEmails()
}, reject => {
    FalhouEmails()
})

buscouEmails = () => console.log('Emails carregados com sucesso!')
FalhouEmails = () => console.log('Ocorreu um erro. Emails não foram carregados!')
console.log('o sistema não para pra esperar o carregamento dos emails!')
let uploadOK = true

let upload = new Promise((resolve, reject) => {
    //código para fazer upload de arquivo...

    setTimeout(() => {
        if (uploadOK) {
            resolve(true)
        } else {
            reject(false)
        }        
    }, 3000);

})

let enviarArquivo = upload.then(res => {
    uploadSucesso()
}, rej => {
    uploadFalha()
})

const uploadSucesso = _ => console.log('Upload concluído com sucesso!')
const uploadFalha = _ => console.log('Upload falhou!')

console.log('O programa não para pra esperar a conclusão do upload!')
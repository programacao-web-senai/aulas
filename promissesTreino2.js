let contaFunc = 0

let cronometro1 = function () {
    return new Promise((resolve, reject) => {
        contaFunc++
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

let cronometro2 = function() {
    return new Promise((resolve, reject) => {
        contaFunc++
        setTimeout(()=> {
            resolve()
        }, 3000)
    })    
} 
    
const sucesso = _ => console.log(`promisse ${contaFunc} concluida com sucesso!!`)
const falha = _ => console.log(`ocorreu um erro na promisse ${contaFunc}!`)

let startCronometro = cronometro1().then(_ => {
    console.log(`promisse ${contaFunc} concluida com sucesso!!`)
    return cronometro2()
}).then(_ => {
    console.log(`promisse ${contaFunc} concluida com sucesso!!`)
})

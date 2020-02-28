let percent = 0

let cronometro = new Promise((resolve, reject) => {
    let temporizador = setInterval(() => {
        percent++
        //console.log(percent)
        process.stdout.write('#')
        if (percent >= 10) {
            clearInterval(temporizador)
            resolve(true)
        }
    }, 1000)
})

cronometro.then(res => {
    sucesso()
}, reject => {
    falha()
})

const sucesso = _ => console.log('\nTerminou com sucesso!')
const falha = _ => console.log('\nTerminou com falha!')
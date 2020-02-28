let moeda = 0
let cronometro = 0

let sorteio = new Promise((resolve, reject) => {
    moeda = Math.random() * 10
    console.log("processando...\n")
    let start = setInterval(() => {
        cronometro++
        process.stdout.write('#')

        if (cronometro >= 4) {
            clearInterval(start)
            if (moeda >= 4.9) {
                resolve()
            } else {
                reject()
            }            
        }

    }, 1000);
})

let comecar = sorteio.then(res => {
    cara()
}, rej => {
    coroa()
})

cara = _ => console.log('\ndeu cara!')
coroa = _ => console.log('\ndeu coroa!')

console.log('o programa segue seu fluxo..')
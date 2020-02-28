/**
 * 1 - levantar
 * 2 - escovar os dentes
 * 3 - tomar café
 */

const levantar = function () {
    let comSono = true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!comSono) {
                resolve('Bora!! 🤩')
            } else {
                reject(Error('Hoje não vou trabalhar... 😴'))
            }
        }, 3000)
    })
}

const escovarDentes = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dentes limpos! 😁')
        }, 4000)
    })
}

const tomarCafe = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('Café tomado! Bora trabalhar! 🚴‍♂️') 
        }, 5000);
    })
}

let trabalhar = levantar().catch((err) => {
    console.log(err)
}).then((res) => {
    console.log(res)
    return escovarDentes()
}).then((res) => {
    console.log(res)
    return tomarCafe()
}).then((res) => {
    console.log(res)
})
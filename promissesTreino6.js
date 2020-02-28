/**
 * separar o feijao
 * lavar
 * preparar o tempeiro
 * cozinhar
 */

const separaFeijao = function () {
    feijaoVelho = true

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!feijaoVelho) {
                resolve(true)
            } else {
                resolve(false)
            }
        }, 2000);
    })
}

const lavar = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Feijão lavado! 🚿')  
        }, 2000);
    })
}

let almoco = separaFeijao().catch(err => console.log(err)).then((res) => {
    if (!res) {
        console.log('Feijão velho! compra outro... 🤮')  
    } else {
        return lavar()
    }
}).then((res) => {
    console.log(res)
})
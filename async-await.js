/**
 * acordar
 * tomar banho
 * tomar café
 */

let sono = true 

const acordar = function () {
    return new Promise((resolve, reject) => {
        console.log('dormindo... 😴')
        setTimeout(() => {
            if (!sono) {
                resolve('acordei... 😤')
            } else {
                reject('com sono ainda... 😤')
            }
        }, 4000)
    })
}

const tomarBanho = function () {
    return new Promise((resolve, reject) => {
        console.log('tomando banho... 🚿')
        setTimeout(() => {
            resolve('banho tomado... 😜')
        }, 3000);
    })
}

let comecarDia = async () => {
    try {
        const acorde = await acordar()
        const tomeBanho = await tomarBanho()    
        return 'pronto pro trabalho'        
    } catch (error) {
        console.log(error)        
    }
}

comecarDia().then(res => console.log('sucesso'))
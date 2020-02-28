class Pessoa {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    saudacao() {
        console.log(`Olá, me chamo ${this.nome}. tenho ${this.idade} anos!`)
    }
}

module.exports = { Pessoa }
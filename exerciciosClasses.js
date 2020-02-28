class contaCorrente {
    constructor(saldo, cliente) {
        this.saldo = saldo,
        this.cliente = cliente
        console.log(`Nova conta criada para a pessoa ${this.cliente.nome}`)
    }

    depositar(valor) {
        this.saldo += valor
        console.log(`Novo saldo: ${this.saldo}`)
    }

    sacar = function (valor) {
        if (this.saldo - valor >= 0) {
            this.saldo -= valor
            console.log(`Novo saldo: ${this.saldo}`)            
        } else {
            console.log(`Saldo insuficiente`)
        }
    }
}

class contaEspecial extends contaCorrente {
    constructor(cliente, limite) {
        super(0, cliente)
        this.limite = limite
    }

    sacar = function (valor) {
        if ((this.saldo + this.limite) - valor >= 0) {
            this.saldo -= valor
            console.log(`Novo saldo conta especial: ${this.saldo}`)            
        } else {
            console.log(`Saldo insuficiente`)
        }
    }
}

class cliente {
    constructor(nome) {
        this.nome = nome
    }
}

module.exports = { contaEspecial, cliente }
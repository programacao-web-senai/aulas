class Esporte {
    constructor(nome, regras) {
        this.nome = nome,
        this.regras = regras
    }

    static instrucoes = "informe o nome e as regras do esporte para cadastrar corretamente."

    informacoesEporte() {
        return {
            Nome: this.nome,
            Regras: this.regras
        }
    }
}

console.log(Esporte.instrucoes)

class Futebol extends Esporte {
    constructor(nome, regras, numJogadores) {
        super(nome, regras)
        this.numJogadores = numJogadores
    }
    
    informacoesEporte() {
        return {
            Nome: this.nome,
            Regras: this.regras,
            numeroJogadores: this.numJogadores
        }
    }
}

const futebol = new Futebol("futebol", "quem marca mais gol vence", 11)
console.table(futebol.informacoesEporte())

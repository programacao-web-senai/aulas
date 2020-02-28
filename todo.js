class secretaria {
    constructor() {
        this.turmas = [],
        this.alunos = []
    }

    cadastrarTurma(turma) {
        this.turmas.push(turma)
    }

    cadastrarAluno(aluno) {
        this.alunos.push(aluno)
    }
}

class aluno {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    set aniversario(ano) {
        return `Seu aniversário é em: ${ano}`
    }
}

let william = new aluno('william', 43)

class turma {
    constructor(nome, anoConclusao) {
        this.nome = nome,
        this.anoConclusao = anoConclusao
    }
}

let desSoftware = new turma('TDES2019V1', 2020)

let senai = new secretaria()
senai.cadastrarTurma(desSoftware)
senai.cadastrarAluno(william)

console.log(william.aniversario(1975))
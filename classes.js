class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(this.nome + ' emite um barulho.');
    }

    static falarGenerico() {
        console.log('todo cachorro fala!')
    }
}

class Cachorro extends Animal {
    constructor(nome, comida) {
        super(nome)
        this.comida = comida
    }
    falar() {
        console.log(`olá, sou um cão. meu nome é ${this.nome}. eu gosto de comer ${this.comida}`);
    }
}

let cachorro = new Cachorro('Mat', 'osso');
cachorro.falar();
// console.log(cachorro.nome)
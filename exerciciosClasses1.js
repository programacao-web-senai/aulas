let banco = require('./exerciciosClasses.js')

let william = new banco.cliente('William Chenta')
let contaWilliam = new banco.contaEspecial(william, 100)
contaWilliam.depositar(50)
contaWilliam.sacar(150)
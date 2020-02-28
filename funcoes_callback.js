console.clear()

let numeros = [1,2,3,4,5,6,7,8,9,10]

let impares = numeros.filter((num) => num % 2 != 0)
console.log(impares)

let dobro = numeros.map((num) => num * 2)
console.log(dobro)

let somatorio = numeros.reduce((anterior, atual)  => anterior + atual)
console.log(somatorio)
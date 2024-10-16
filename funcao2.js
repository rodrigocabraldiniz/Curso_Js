// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 4)

// Armazenando uma Funcao Arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 4))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao( 7, 8))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
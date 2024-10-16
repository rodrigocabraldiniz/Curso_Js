// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(5, 5)
imprimirSoma(5)
imprimirSoma(5, 6, 7, 8, 9, 10)

// Funcao com Retorno
function soma(a, b = 4) {
    return a + b
}

console.log(soma(7, 8))
console.log(soma(7))
console.log(soma())
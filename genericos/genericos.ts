function echo(objeto: any) {
    return objeto
}

console.log(echo('Joao'))
console.log(echo(27))
console.log(echo({nome: 'João'}))


//Usando generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'João', idade: 27}).nome)

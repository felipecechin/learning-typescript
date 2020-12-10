//string
let nome: string = 'João'
console.log(nome)
//nome = 28 erro

let idade: number = 27
idade = 27.5
console.log(idade)

let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = '27'
// console.log(typeof minhaIdade)

//array
let hobbies: any[] = ['Cozinhar', 'Futebol']
console.log(hobbies)
console.log(typeof hobbies)

hobbies = [100]
// hobbies = 100 erro
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ['Av principal', 99, '']
console.log(endereco)

endereco = ['Rua importanten', 1006, 'bloco A']
console.log(endereco)

//enums
enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul = 2, //2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)


//funções
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2.6, 5))


//tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// console.log(calculo())
calculo = multiplicar
console.log(calculo(5, 6))


//objetos
let usuario: { nome: string, idade: number } = {
    nome: 'Joao',
    idade: 27
}
console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    nome: 'Maria',
    idade: 31
}
//Alias
type Funcionario = { nomes: string[], baterPonto: (num: number) => string }
let funcionarios: Funcionario = {
    nomes: ['Felipe', 'Alfredo'],
    baterPonto: (num: number) => {
        if (num <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}


let funcionarios2: Funcionario = {
    nomes: ['Carlos', 'Bia'],
    baterPonto: (num: number) => {
        if (num <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionarios.baterPonto(10))

//Union Typs
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

//Checando tipos
let valor = false
if (typeof valor == 'number') {
    console.log('number')
} else {
    console.log(typeof valor)
}

//never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 5,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome')
        }
        if (this.preco <= 0) {
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()


let altura = 12
//altura = null
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '99934312',
    tel2: null
}

console.log(contato1)

let podeSerNulo = null //tipo any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

type ContaBancaria = { saldo: number, depositar: (v: number) => void }
type Correntista = { nome: string, contaBancaria: ContaBancaria, contatos: string[] }

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)

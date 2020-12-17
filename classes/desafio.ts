// Exercício 1 - Classe
class Moto {
    public nome: string
    public velocidade: number

    constructor(nome: string, velocidade: number = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }

    buzinar() {
        console.log('Toooooooooot!')
    }

    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
class Objeto2D {
    protected base: number = 0
    protected altura: number = 0

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

var retangulo = new Retangulo(5, 7)
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(value: string) {
        if (value.length >= 3) {
            this._primeiroNome = value;
        } else {
            this._primeiroNome = '';
        }
    }
}

let estagiario = new Estagiario()
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

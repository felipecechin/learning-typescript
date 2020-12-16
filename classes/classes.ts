class Data {
    //Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os ()
casamento.ano = 2017
console.log(casamento)


class DataEsperta {
    //Público por padrão
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os ()
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off): ${this.precoComDesconto()}`
    }

    precoComDesconto(): string {
        return (this.preco - (this.preco * this.desconto)).toFixed(2)
    }
}

const prod1 = new Produto('opa', 4)
console.log(prod1.resumo())

const prod2 = new Produto('opa', 4.20, 0.06)
console.log(prod2.resumo())
console.log(prod2.precoComDesconto())

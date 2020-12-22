import {Data} from "../classes/classes";

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


//Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 6.7]
avaliacoes.push(8.6)
// avaliacoes.push('5.4')
console.log(avaliacoes)


//Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 4])
imprimir<string>(['Ana', 'Bia'])
imprimir<{ nome: string, idade: number }>([
    {nome: 'Fulano', idade: 22},
    {nome: 'Criano', idade: 35}
])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    {nome: 'Fulano', idade: 22},
    {nome: 'Criano', idade: 35}
])


//Tipo genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

//Classe com generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {
    }

    abstract executar(): R
}


// console.log(new OperacaoBinaria('Bom', 'Dia').executar())
// console.log(new OperacaoBinaria(1, 2).executar())
// console.log(new OperacaoBinaria(3, 'Opa').executar())
// console.log(new OperacaoBinaria({}, {}).executar())
class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3, 4).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }

}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar())

//Desafio classe Fila
//Atributo: fila (Array)
//Métodos: entrar, próximo, imprimir
class Fila<T extends number | string> {
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro;
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Gui', 'Ana');
fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())

fila.imprimir();

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// const outraFila = new Fila<boolean>(true, false);

//Desafio Mapa
//Array de objetos (Chave/valor) -> itens
//Métodos: obter(Chave), colocar({C,V})
//limpar(), imprimir()

//SOLUÇÃO 1 DO DESAFIO
// class Mapa<T, U> {
//     itens: { chave: T, valor: U }[] = []
//
//     obter(chave: T): U | null {
//         const valor = this.itens.filter(obj => {
//             return obj.chave == chave
//         })
//         return valor.length > 0 ? valor[0].valor : null;
//     }
//
//     colocar(dic: { chave: T, valor: U }): void {
//         let ok: boolean = false;
//         this.itens.filter(obj => {
//             if (obj.chave === dic.chave) {
//                 ok = true;
//                 obj.valor = dic.valor;
//             }
//         });
//         if (!ok) {
//             this.itens.push(dic);
//         }
//     }
//
//     imprimir(): void {
//         console.log(this.itens)
//     }
//
//     limpar(): void {
//         this.itens = [];
//     }
//
// }
//
// const mapa = new Mapa<number, string>()
// mapa.colocar({chave: 1, valor: 'Pedro'})
// mapa.colocar({chave: 2, valor: 'Rebeca'})
// mapa.colocar({chave: 3, valor: 'Maria'})
// mapa.colocar({chave: 1, valor: 'Gustavo'})
//
// console.log(mapa.obter(2))
// mapa.imprimir()
// mapa.limpar()
// mapa.imprimir()

type Par<C, V> = { chave: C, valor: V }

class Mapa<C, V> {
    itens: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave)
        if (encontrado) {
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>()
    }

    imprimir() {
        console.log(this.itens)
    }

}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: 'Pedro'})
mapa.colocar({chave: 2, valor: 'Rebeca'})
mapa.colocar({chave: 3, valor: 'Maria'})
mapa.colocar({chave: 1, valor: 'Gustavo'})

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()


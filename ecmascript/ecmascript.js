"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco'; //var ou é global ou é definida em função
    //let é definido dentro do bloco
    console.log(acao);
}
const cpf = '123.456.789.-99';
// cpf = '434.434.432-54'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => {
    return n1 - n2;
};
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('João');
//this
// function normalComThis() {
//     console.log(this)
// }
//
// const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
//
// normalComThisEspecial()
//
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
//
// const arrowComThisEspecial = arrowComThis.bind({nome: 'Joao'})
// arrowComThisEspecial()
//Parâmetros padrão
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva();
//Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); //spread
const turmaA = ['João', 'Maria', 'Fernando'];
const turmaB = ['Fernando', 'Lorena', ...turmaA];
console.log(turmaB);
//rest
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 5);
console.log(numeros);
console.log(retornarArray(...numbers));
//Rest & spread (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (array)
const caracteristicas = ['Motor', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// const [w, z] = [2, 3]
//Destructuring (objeto)
const item = {
    nome: 'SSD',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
// const nomeItem = item.nome
// const preco = item.preco
const { nome: n, preco, caracteristicas: { w } } = item;
console.log(n);
console.log(preco);
console.log(w);
const usuarioID = 'Suporte';
const notificacoes = '9';
const boasVindas = `Boas vindas ${usuarioID}, 
Notificações ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
//Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promise');
        }, 3000);
    });
}
esperar3sPromise().then(dado => console.log(dado));
function examplePromise() {
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(personagem => personagem.films)
        .then(films => fetch(films[0]))
        .then(resFilm => resFilm.json())
        .then(filme => console.log(filme))
        .catch(res => console.log(res));
}
examplePromise();
function examplePromiseAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let resultado = yield fetch('https://swapi.dev/api/people/1/');
            let res = yield resultado.json();
            res = yield res.films;
            res = yield fetch(res[0]);
            res = yield res.json();
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    });
}
examplePromiseAsyncAwait();
//# sourceMappingURL=ecmascript.js.map
"use strict";
//string
var nome = 'João';
console.log(nome);
//nome = 28 erro
var idade = 27;
idade = 27.5;
console.log(idade);
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)
//array
var hobbies = ['Cozinhar', 'Futebol'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100 erro
console.log(hobbies);
// tuplas
var endereco = ['Av principal', 99, ''];
console.log(endereco);
endereco = ['Rua importanten', 1006, 'bloco A'];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
//any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(2.6, 5));
//tipo função
var calculo;
// calculo = digaOi
// console.log(calculo())
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
var usuario = {
    nome: 'Joao',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    nome: 'Maria',
    idade: 31
};
var funcionarios = {
    nomes: ['Felipe', 'Alfredo'],
    baterPonto: function (num) {
        if (num <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
var funcionarios2 = {
    nomes: ['Carlos', 'Bia'],
    baterPonto: function (num) {
        if (num <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionarios.baterPonto(10));
//Union Typs
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
//Checando tipos
var valor = false;
if (typeof valor == 'number') {
    console.log('number');
}
else {
    console.log(typeof valor);
}
//never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 5,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
var altura = 12;
//altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '99934312',
    tel2: null
};
console.log(contato1);
var podeSerNulo = null; //tipo any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);

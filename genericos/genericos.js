"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Joao'));
console.log(echo(27));
console.log(echo({ nome: 'João' }));
//Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
//# sourceMappingURL=genericos.js.map
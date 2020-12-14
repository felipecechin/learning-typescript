"use strict";
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
//# sourceMappingURL=ecmascript.js.map
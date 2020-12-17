"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
const PI = 2.99;
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(4, 5));
console.log(PI);
//# sourceMappingURL=namespaces.js.map
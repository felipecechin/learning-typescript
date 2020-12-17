namespace Geometria {
    export namespace Area {
        const PI = 3.14

        export function circunferencia(raio: number) {
            return PI * Math.pow(raio, 2)
        }

        export function retangulo(base:number, altura:number):number {
            return base*altura
        }
    }
}


const PI = 2.99
console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(4, 5))

console.log(PI)

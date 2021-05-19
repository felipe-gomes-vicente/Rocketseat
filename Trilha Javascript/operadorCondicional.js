/* Operadoor Condicional (Ternário)

Dependendo da condição, nós recebemos valores diferentes

Condição então valor 1 se não valor 2
Condition ? value1 : value2
 */

// Café da manhã top
let pao = true
let queijo = false

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
const niceBreakfastTwo = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)
console.log(niceBreakfastTwo)

// Maior de 18 pode ou não dirigir carro
let age = 16
const canDrive = age >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive)
/* Expressões e Operadores
  
  - Expressions
  - Operators
    Binary
    Unary
    Ternary
*/
let number = 1

console.log(++number)
console.log(--number)
console.log(true ? 'alo' : 'nada')
console.log(false ? 'alo' : 'nada')

/* new
  
  * left-hand-side expression
  * criar um novo objeto
 */

let name = new String('Felipe')
name.surName = 'Vicente'
let age = new Number(23)
console.log(name.surName, age)

let date = new Date('2021-05-18')
console.log(date)

/* Operadores unários 
  typeof
  delete
*/

const person = {
  name: 'Felipe',
  age: 25,
}

delete person.age

console.log(person)
/*
Object

*Propriedade / atributos
* Funcionalidades / Métodos

{ propriedade: "valor" }
*/

console.log({}) // objecto vazio

console.log({
  name: "Felipe", // propriedade 
  idade: 26,
  andar: function(){
    console.log('andar')
  }
}) 

const person = {
  name: 'Felipe', // propriedade 
  age: 27,
  weight: 88.6,
  isAdmin: true
}

console.log(person)
console.log(person.name) // aqui foi chamado apenas o valor da propriedade name
console.log(person.age) // aqui foi chamado apenas o valor da propriedade age
console.log(`${person.name} tem ${person.age} anos.`)
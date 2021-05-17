/**
 * Array (vetores)
 * Array é um tipo de lista
 * Agrupamento de dado
 * 
 * (pode ter quebra de linha)
 * 
 */

console.log([
  "Leite",
  "Ovos",
  2, 
  3
])

const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]

// acessar valores dentro do Array 
console.log(animals)
console.log(animals[0]) // lista começa a contar do zero 
console.log(animals.length) // qual seria o valor
console.log(animals[2]) // ao chamar o animal retornar um objeto
console.log(animals[2].name) // retorna a propriedade do objeto

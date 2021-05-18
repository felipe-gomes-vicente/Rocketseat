// Manipulando String e Arrays

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma
posição do array. Depois disso, transforme o array em um texto e onde eram 
espaços, coloque _
*/ 

let phrase = "Eu quero viver"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a frase by Robin
console.log(phrase.includes(" by Robin"))

// Criar Array com constructor
let constructorArray = new Array('a', 'b', 'c')
console.log(constructorArray)

// Contar elementos de um array
console.log([
  "a",
  {type: "array"},
  function() { return "alo"},
].length)

console.log(["a", "b", "c"].length) // simplificado

// Transformar uma cadeia de caracteres em elementos de um array
let world = "manipulação"
console.log(Array.from(world))


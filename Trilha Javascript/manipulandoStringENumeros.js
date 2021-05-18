// Manipulando Strings e números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let world = "Paralelepipedo"

let varNumber = 1234
console.log(world.length)
console.log(String(varNumber).length)

// Transformar String em Número e Número em String
let string = "567"
console.log(Number(string))
let number = 765
console.log(String(number))
let numberBreak = 434.2343
console.log(numberBreak.toFixed(2)) // retornar os dois ultimos numeros
console.log(numberBreak.toFixed(2).replace(".", ",")) // trocar ponto por virgula retornar como string

let varWorld = "Programar é muito bacana!"
console.log(varWorld.toUpperCase()) // caixa alta
console.log(varWorld.toLowerCase()) // minusculo 
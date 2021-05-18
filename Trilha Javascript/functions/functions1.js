// function expression
// function anonymous

let total = 0;

//parâmetros (parameters)
const sum = function(number1, number2) {
  let total = number1 + number2 // sempre declarar a variavel pois senão afetará o projeto inteiro
  return total
}
//console.log(number1) não funcionara forá da função sem return

// sum(2, 3) // arguments - argumentos

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${number1}, ${number2}`) // não será somado pois existe a função
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total) // esta retornando apenas o variavel let forá da função
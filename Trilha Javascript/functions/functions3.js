//function hoisting

sayMyName()

function sayMyName() {
  console.log('Felipe')
}

// não sofrera elevação dessa forma
myName()

const myName = function() {
  console.log('Teste')
}

// arrow function, a forma mais moderna de escrever uma função
const sayMyName = () => {
  console.log('Felipe')
} 

sayMyName( )

// outra forma moderna de escrever uma função passando parametros
const sayMyName = (name) => {
  console.log(name)
} 

sayMyName('Felipe')

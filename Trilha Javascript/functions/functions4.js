// callback function

function sayMyName(name) {
  console.log(name)
  console.log('antes de executar a função callback')

  name()
  
  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

// outra forma
/*
function sayMyName(name) {
  console.log('antes de executar a função callback')
  
  function name() {
    console.log('estou em uma callback')
  }

  name()

  console.log('depois de executar a callback')
}

sayMyName()
*/

/*
  Function() Constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}
const felipe = new Person("Felipe")
const yume = new Person("Yume")
console.log(felipe)
console.log(yume)
console.log(felipe.walk())
console.log(yume.walk())

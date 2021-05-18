// Exemplo Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana ', 'maça')

console.log(copo)

// function scope

let subject = 'create video'

function createThink(subject) { //ao declarar um argumento não sera sobrescrito
  subject = 'study'
  return subject
}

console.log(createThink(subject))
console.log(subject)

let title;

function createTitle() {
  title = 'newTitle'
  return title
}

console.log(title)
console.log(createTitle())
console.log(title)
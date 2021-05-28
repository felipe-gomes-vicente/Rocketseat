/* Transformar notas escolares

Crie um algoritmo que transforme as notas dp sistema numérico para sistema de 
notas em caracteres tipo  A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F
*/

function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60 && score >= 0

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota Inválida"
  }

  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))


/*

let score = 90
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {
  scoreFinal = "A"
} else if (scoreB) {
  scoreFinal = "B"
} else if (scoreC) {
  scoreFinal = "C"
} else if (scoreD) {
  scoreFinal = "D"
} else if (scoreF) {
  scoreFinal = "F"
} else {
  scoreFinal = "Nota Inválida"
}

console.log(scoreFinal)
*/

/*

let nota1 = 90
let nota2 = 92
let nota3 = 80
let nota4 = 88
let nota5 = 99
let notaFinal = (nota1 + nota2 + nota3 + nota4 + nota5)/ 5

if(notaFinal > 90) {
  console.log('Nota A', notaFinal)
} else if(notaFinal >= 80) {
  console.log('Nota B', notaFinal)
} else if(notaFinal >= 70) {
  console.log('Nota C', notaFinal)
}else if(notaFinal >= 60) {
  console.log('Nota D', notaFinal)
} else {
  console.log('Nota F', notaFinal)
}
*/
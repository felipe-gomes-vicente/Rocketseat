// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima ?
console.log(`É do tipo `, typeof weight) //é undefined

/* 3. Declare uma variável e atribua valores para cada um dos dados:
  * name: String
  * age: Number(integer)
  * stars: Number(float)
  * isSubscribed: Boolean
 */
let varName = 'Felipe'
let varAge = 20
let stars = 6.1
let isSubscribed = true

/* 4. A variável student abaixo é que tipo de dados?
 é um objeto
  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.2 Mostre no console a seguinte mensagem:
    <name de idade <age> pesa <weight> kg.
  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade
  do objeto.
 */

let student = {
  name: 'Felipe',
  age: 20,
  weight: 62.4,
  isSubscribed: true,
}
console.log(`A variável é um`, typeof student) // objeto
console.log(`${student.name}, idade: ${student.age} anos, pesa ${student.weight}kg.`)

/*5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum
valor, ou seja, somente o Array vazio.
*/
let varArray = [] // array vazio

/* 6. Reatribua valor para variável acima, colocando dentro dela o objeto student
da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir
ele no Array)
 */
varArray = [
  student
]
console.log(varArray)

/* 7. Coloque no console o valor da posição zero do Array acima */
console.log(varArray[0])

/* 8. Crie um novo student e coloque na posição 1 do Array students */
const yume = {
  name: 'Yume',
  age: 21,
  weight: 60.1,
  isSubscribed: true,
}

varArray = [
  student,
  yume
]
console.log(varArray)

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? 
Após sua resposta, rode o código e veja se você acertou.
  console.log(a)
  var a = 1
 */
// vai imprimir undefined porque a variavel ainda não foi criada antes do console.log
//vai sofrer um hoisting, com a variavel let porém não terá esse efeito
  console.log(a)
  var a = 1

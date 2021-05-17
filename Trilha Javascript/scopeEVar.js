/**
 *  #Scope
 * Escopo determina a visibilidade de alguma variável no JS
 * 
 */

/* #Block statement
```js
//vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer código 
  
} // aqui fechando o bloco
```
*/

// # O bloco, também criará um novo escopo. Chamamos de `block-scoped`

console.log('> existe x antes do bloco?', x) // sim mais não foi definido (hoisting)
{
  // var é global
  var x = 0 
}

console.log('> existe x depois do bloco?', x) // sim a variavel já foi declara na linha anterior...
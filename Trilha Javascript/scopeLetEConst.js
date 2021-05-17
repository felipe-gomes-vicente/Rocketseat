/*
const e let são locais e só funcionam no escopo onde foi criada
*/

{
  //console.log('> existe y ', y) # não possivel antes da variavel let
  let y = 0
  console.log('> existe y dentro do bloco ', y)
}
// console.log('> existe y depois do bloco ', y) # não é possível fora do escopo

let x = 1;
{
  x = 2
  console.log('> existe x dentro do bloco ', x)
}
console.log('> existe x fora do bloco ', x) // sim entrou dentro do escopo e trouxe atualizado com o valor 2

const r = 3;
{ 
  { 
    {
      const r = 4;
      console.log('> existe r dentro do escopo' , r) // constante não existe sera necessario declarar dentro do escopo 

    } 
  } 
}

console.log('> existe r depois do bloco ?', r)
// throw

function sayMyName(name = '') {
  if (name === '') {
    //throw new Error("")
    throw 'Nome é obrigatório'
  }

  console.log(name)
}

// Try ... catch
try {
  sayMyName('Felipe')
} catch (e) {
  console.log(e)
}

console.log('após  ao try/catch')
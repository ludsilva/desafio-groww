//Consumindo os dados de uma API
fetch('https://safe-sierra-45694.herokuapp.com/user')
    .then(T => T.json())
    .then(console.log)
//Funcionou!!! Retornou um objeto em json

//Criar uma função que retorne o nome do usuário e sua idade


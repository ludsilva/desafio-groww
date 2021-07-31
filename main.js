//Chamar os dados da API e armazenar em uma variável

let data = '';
async function readApi(){
    let url = 'https://safe-sierra-45694.herokuapp.com/user';
    try{
        let response = await fetch(url);
        data = await response.json();
    }catch(err){
        console.log(err);
    }
}

readApi();

async function main(){
    await readApi();
    retornarNomeIdade(data);
}
main();

//Criar uma função que retorne o nome do usuário e sua idade
/*
const url = 'https://safe-sierra-45694.herokuapp.com/user';

function retornarNomeIdade(url){
    console.log(`O nome do usuário é ${url["nome"]}`);
}

// retornarNomeIdade();
*/

function retornarNomeIdade(data){
    console.log(`Usuário: ${data.usuario} e idade: ${data.idade}`);
}
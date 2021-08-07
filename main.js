"use strict";
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

    typeOfDocumentAndNumber(data);
    enderecoCompleto(data);
    taxaEDataEntrega(data);
    nomeValoreQtde(data);
    qtdeProdutosVendidos(data);
    processaCompra(data);
    statusELinkPagamento(data);
}
main();

//Criar uma função que retorne o nome do usuário e sua idade

const retornarNomeIdade = (data) => {
    console.log(`Usuário: ${data.usuario} e idade: ${data.idade}`);
}

//Criar uma função que retorna o tipo de documento e o número dele.
const typeOfDocumentAndNumber = (data) => {
    console.log(`Tipo do documento: ${data.documentType}. Número do documento: ${data.documentNumber}.`)
}

//Criar uma função que retorna o endereço completo para entrega do produto
const enderecoCompleto = (data) => {
    const { 
        transacao: {
          shipping: {
            address: { 
              street, street_number, city, state, country, zipcode 
            }, 
          }, 
        }, 
    } = data; 
    let message = `Endereço de entrega: \n${street}, n ${street_number}, cidade: ${city}, estado: ${state}. \nCEP: ${zipcode}. País: ${country}`
    console.log(message);
}; //P.S.: aqui eu tentei desestruturar o json, porque achei que ia ficar "deselegante" usar a notação de ponto em todas as propriedades

// Criar uma função que retorna o valor da taxa de entrega e a data de entrega
const taxaEDataEntrega = (data) => {
    const {transacao: {shipping: {fee, delivery_date }, }, } = data;
    let message = `Valor da entrega: R$ ${fee}. \nData da entrega: ${delivery_date}`;
    console.log(message);
};

//  Criar uma função que retorna o nome do produto, o valor e a quantidade vendida
const nomeValoreQtde = (data) => {
    const {transacao: {items: {[0]: {title, quantity}, }, }, } = data; 
    let message = `Produto: ${title}. \nQuantidade: ${quantity}.`;
    console.log(message);
};

//  Criar uma função que retorna a quantidade de produtos sendo vendidas
const qtdeProdutosVendidos = (data) => {
    console.log(`Quantidade vendida: ${data.transacao.items[0].quantity}`);
}
// Criar uma função que processa uma compra (Quando chamar essa função, diminuir o total de itens para venda)
function processaCompra(data){
    const {links_pagamento: {items: {[0]: {quantity}, }, }, } = data;
    if (data.transacao.status == "autorizado"){
        data.links_pagamento.items[0].quantity = quantity - data.transacao.items[0].quantity;
    }
    return console.log(`Quantidade de itens: ${data.links_pagamento.items[0].quantity}`);
}
//  Criar uma função que retorna o status e o link para o pagamento
function statusELinkPagamento(data){
    const {links_pagamento: {status, url},} = data;
    return console.log(`Status: ${status} \nLink de pagamento: ${url}`);
}   
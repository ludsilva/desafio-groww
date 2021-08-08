"use strict";
//Chamar os dados da API e armazenar em uma variável

let data = "";
async function readApi() {
  let url = "https://safe-sierra-45694.herokuapp.com/user";
  try {
    let response = await fetch(url);
    data = await response.json();
  } catch (err) {
    console.log(err);
  }
}
readApi();

async function main() {
  await readApi();
  //retornarNomeIdade(data);
  //typeOfDocumentAndNumber(data);
  //enderecoCompleto(data);
  //taxaEDataEntrega(data);
  //nomeValoreQtde(data);
  //qtdeProdutosVendidos(data);
  //processaCompra(data);
  //statusELinkPagamento(data);
  //retornarStatus(data);
  //valorCompraQtPago(data);
  //refund(data);
  //cartaoCredito(data);
  //aprovaReprova(data);
  //comprador(data);
  //compradorTel(data);
  //retornaDadosEmpresa(data)
  //retornaCartao(data);
  //retornaStatusConta(data);
  //retornaBanco(data);
  //retornaSaldo(data);
  //retornaEmprestimo(data);
  //retornaSimulacao(data);
}
main();
/*LUDMILA*/
/*
console.log("###LUDMILA###");
//Criar uma função que retorne o nome do usuário e sua idade
const retornarNomeIdade = (data) => {
    console.log(`Usuário: ${data.nome} e idade: ${data.idade}`);
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

//Criar uma função que retorna o valor da taxa de entrega e a data de entrega
const taxaEDataEntrega = (data) => {
    const {transacao: {shipping: {fee, delivery_date }, }, } = data;
    let message = `Valor da entrega: R$ ${fee}. \nData da entrega: ${delivery_date}`;
    console.log(message);
};

//Criar uma função que retorna o nome do produto, o valor e a quantidade vendida
const nomeValoreQtde = (data) => {
    const {transacao: {items: {[0]: {title, quantity}, }, }, } = data; 
    let message = `Produto: ${title}. \nQuantidade: ${quantity}.`;
    console.log(message);
};

//Criar uma função que retorna a quantidade de produtos sendo vendidas
const qtdeProdutosVendidos = (data) => {
    console.log(`Quantidade vendida: ${data.transacao.items[0].quantity}`);
}

//Criar uma função que processa uma compra (Quando chamar essa função, diminuir o total de itens para venda)
function processaCompra(data){
    const {links_pagamento: {items: {[0]: {quantity}, }, }, } = data;
    if (data.transacao.status == "autorizado"){
        data.links_pagamento.items[0].quantity = quantity - data.transacao.items[0].quantity;
    }
    return console.log(`Quantidade de itens: ${data.links_pagamento.items[0].quantity}`);
}

//Criar uma função que retorna o status e o link para o pagamento
function statusELinkPagamento(data){
    const {links_pagamento: {status, url},} = data;
    return console.log(`Status: ${status} \nLink de pagamento: ${url}`);
}   
*/
/*NATHÁLIA*/
//Criar uma função que retorna o status de uma compra
/*
function retornarStatus(data){
    console.log(`Status da compra: ${data.transacao.status}.`);
}

//Criar uma função que informa o valor da compra e quanto já foi pago.
function valorCompraQtPago(data){
    var valor = data.transacao.valor; 
    var valorF = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    console.log(valorF);
}

//Criar uma função que, caso seja ativada, cria um refund(alterar o valor do refunded_amount para o valor paid_amount, e o valor paid_amount deverá ser 0)
//"refunded_amount": 0 --> 1000
//"paid_amount": 1000 --> 0
function refund(data){
if(data.transacao.status === "autorizado"){
        var refund = data.transacao.refunded_amount + data.transacao.valor;
        console.log(refund);
        
        var paid = data.transacao.valor - refund;
        console.log(paid);        
    }
}

//Criar uma função que retorna o Valor do cartão de crédito da transação( Nome, número e se está aprovado)
function cartaoCredito(data){
    var name = data.transacao.card_holder_name;
    var number = data.transacao.card_digits;
    var approved = data.transacao.is_approved;
    if(approved === null){
        approved = "Cartão não aprovado";
    }
    console.log(`Nome: ${name} \nNúmero: ${number} \nCartão: ${approved}`);
}

//Criar uma função que aprova ou reprova o valor da compra( Alterar o valor is_approved para true ou false, dependendo do parâmetro da função)
function aprovaReprova(data){
    if(data.transacao.valor < data.transacao.refunded_amount){
    data.transacao.is_approved = false; 

    }
    console.log(data.transacao.is_approved);
    console.log("entrou");
}   
    
//Criar uma função que retorna o nome do comprador, o País e o e-mail
function comprador(data){
    console.log(`Nome do comprador: ${data.transacao.customer.name} \nPaís: ${data.transacao.customer.country} \nEmail: ${data.transacao.customer.email}`);
}

//Criar uma função que retorna o telefone do comprador
function compradorTel(data){
    var phone = data.transacao.customer.phone;
    console.log(`Telefone do comprador: ${phone}`);
}
*/

/*LARISSA*/

//Criar uma função que retorne o tipo de documento da empresa, o número do documento e o nome fictício.
/* 
function retornaDadosEmpresa(data) {
  let tipoDocumento = data.documentType;
  let numeroDocumento = data.documentNumber;
  let nome = data.nomeFicticio;
  console.log(
    `Tipo de documento: ${tipoDocumento} \nNúmero do documento: ${numeroDocumento} \nNome Ficticio: ${nome}  `
  );
}

//Criar uma função que retorna o número e a marca do cartão de crédito

function retornaCartao(data) {
  let numero = data["cartões"].digitos;
  let marca = data["cartões"].marca;
  console.log(
    `Número do cartão de crédito: ${numero} \nBandeira do cartão de crédito: ${marca}`
  );
}

//Criar uma função que retorna se a conta está ativa

function retornaStatusConta(data) {
  let status;
  data.conta_ativa[0] ? (status = "Ativa") : (status = "Inativa");
  console.log(`Status da conta: ${status}`);
}

//Criar uma função que retorna nome, número e agencia do banco

function retornaBanco(data) {
  let nome = data.banco.nome;
  let numero = data.banco.numero_conta;
  let agencia = data.banco.agencia;
  console.log(
    `Nome do banco: ${nome} \nNúmero da conta: ${numero} \nAgência: ${agencia} `
  );
}

//Criar uma função que retorna O saldo em conta e o valor limite(lis) da conta

function retornaSaldo(data) {
  let saldo = data.banco.saldo_em_conta;
  let limite = data.banco.limite;
  console.log(`Saldo disponível: ${saldo} \nValor limite da conta: ${limite}`);
}

//Criar uma função que retorna o valor de empréstimo solicitado

function retornaEmprestimo(data) {
  let emprestimoValor = data.emprestimo.valor;
  console.log(`Valor do empréstimo solicitado: ${emprestimoValor}`);
}

//Criar uma função que calcula o valor total(mensalidade x amortização) do pagamento do emprestimo
function retornaSimulacao(data) {
  let total = data.emprestimo.mensalidade * data.emprestimo["amortização"];
  console.log(`Total do pagamento do empréstimo: ${total}`);
}
 */
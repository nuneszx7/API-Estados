/********************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: João Pedro
 * Versão: 1.0
 * 
 *******************************************************************/
const MESSAGE_ERRO = {status: false, status_code: 500, development: 'João Pedro Teodoro Nunes Correia'}
const dados = require ('./estados_cidades.js')



//Função que retorna todos os estados
const getAllEstados = function () {
    
    let message = {status: true, status_code: 200, development: 'João Pedro Teodoro Nunes Correia', uf: []}

    dados.listaDeEstados.estados.forEach(function (item){
        message.uf.push(item.sigla)
    })

    console.log(message)

}

//Função que retorna um estado pesquisando por sua sigla
const getEstadoBySigla = function (sigla) {

    

}

//Retorna a capital de um estado ao buscar por uma sigla
const getCapitalBySigla = function (sigla) {

    

}

//Retorna os estados de uma região
const getEstadosByRegiao = function (regiao) {

    

}

//Verifica as capitais do país, retornando uma lista de estados que já tiveram uma capital
const getVerifyCapitaisDoPais = function () {

    

}

//Retorna as cidades de um estado ao buscar por uma sigla
const getCidadesBySigla = function (sigla) {

    

}


getAllEstados()
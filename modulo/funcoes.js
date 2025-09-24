/********************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: João Pedro
 * Versão: 1.0
 * 
 *******************************************************************/
const MESSAGE_ERRO = { status: false, status_code: 500, development: 'João Pedro Teodoro Nunes Correia' }
//Import do arquivo de estados e cidades
const dados = require('./estados_cidades.js')



//Função que retorna todos os estados
const getAllEstados = function () {

    //Variável de base para o cabeçalho da API
    let message = { status: true, status_code: 200, development: 'João Pedro Teodoro Nunes Correia', uf: [] }

    //Loop
    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })

    //Para adicionar um elemento novo no JSON
    message.quantidade = message.uf.length

    //Para remover um atributo de um JSON
    //delete message.status

    if (message.uf.length > 0)
        return message // Verdadeira 200
    else
        return MESSAGE_ERRO // Falsa 500 
}

//Função que retorna um estado pesquisando por sua sigla
const getEstadoBySigla = function (sigla) {

    let uf = sigla
    let estadoEstado = {}

    //Verificar se a sigla informada é válida
    if (uf === undefined || uf.trim() === '' || uf.length !== 2 || !isNaN(uf)) {
        return { status_code: 400, message: 'A sigla do estado não é válida, não foi informada ou não tem 2 caracteres.' }
    }

    //Busca o estado usando find, que é mais eficiente pois para no primeiro encontrado
    let estado = dados.listaDeEstados.estados.find(estado => estado.sigla.toUpperCase() === uf.toUpperCase())

    if (estado) {
        //Monta o estado em JSON
        estadoEstado = {
            status_code: 200,
            uf: estado.sigla,
            descricao: estado.nome,
            capital: estado.capital,
            regiao: estado.regiao
        }
    } else {
        //Monta o JSON de erro, informando que o estado "não existe" ou que a sigla está errada
        estadoEstado = { status_code: 404, message: 'Nenhum estado encontrado com a sigla informada.' }
    }

    return estadoEstado
}

//Retorna a capital de um estado ao buscar por uma sigla
const getCapitalBySigla = function (sigla) {

    let uf = sigla
    let estadoCapital = {}

    let capital = dados.listaDeEstados.estados.capital.find(estado => estado.sigla.toUpperCase() === uf.toUpperCase())

    if (capital) {
        //Monta o estado das capitais em JSON
        estadoCapital = {
            status_code: 200,
            uf: capital.sigla,
            descricao: capital.nome,
            capital: estado.capital,
            regiao: capital.regiao
        }

    }else {
        //Monta o JSON de erro, informando que o estado "não existe" ou que a sigla está errada
        estadoCapital = { status_code: 404, message: 'Nenhum estado encontrado com a sigla informada.' }
    }

    return estadoCapital

}

//Retorna os estados de uma região
const getEstadosByRegiao = function (regiao) {

    let estados = regiao
    let estadosRegiao = []

    let estadosDessaRegiao = dados.listaDeEstados.estados.find(estado => estado.regiao.toUpperCase() === estados.toUpperCase())

    if (estadosDessaRegiao) {

        estadosRegiao = {
            status_code: 200,
            uf: estado.sigla,
            descricao: estado.nome,
            capital: estado.capital,
            regiao: estado.regiao
        }
    }else {
        estadosRegiao = {status_code: 404, message: 'Nenhum estado encontrado com a região informada.'}
    }

    return estadosRegiao

}

//Verifica as capitais do país, retornando uma lista de estados que já tiveram uma capital
const getVerifyCapitaisDoPais = function () {



}

//Retorna as cidades de um estado ao buscar por uma sigla
const getCidadesBySigla = function (sigla) {



}

//console.log(getAllEstados())

module.exports = {

    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao

}

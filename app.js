/********************************************************************
 * Objetivo: EndPoints referentes a API de estados e cidades
 * Data: 15/09/2025
 * Autor: João Pedro
 * Versão: 1.0
 * 
 * Observações: Instalação do Express, Cors, Body-Parser
 * npm install express      --save
 * npm cors    express      --save
 * npm install body-parser  --save
 *******************************************************************/


//Import das dependências da API
const express       = require('express')       //Responsável pela API 
const cors          = require('cors')          //Responsável pelas Permissões da API (APP)
const bodyParser    = require('body-parser')   //Responsável por gerenciar a chegada dos dados da API com o front

const dados         = require('./modulo/funcoes.js')

//Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

//Criando uma instância de uma classe do express
const app = express()

//Configuração de permissões 
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET') //Verbos permitidos
    //Carrega as configurações no CORS da API
    app.use(cors())
    next()  //Próximo, carregar os próximos EndPoints
})

//Request -> Chegada de dados na API
//Response -> Retorno de dados na API

//ENDPOINTS
app.get('/v1/estados', function(request, response){

    //Pesquisa na função de estados 
    let estados = dados.getAllEstados()
    //Retorna o status code
    response.status(estados.status_code)
    //Retorna o JSON
    response.json(estados)

})

app.get('/v1/estado/:sigla', function(request, response){

    let uf = request.params.sigla
    let estado = dados.getEstadoBySigla(uf)
    response.status(estado.status_code)
    response.json(estado)

})

app.get('v1/estado/capital/:sigla', function(request, response){

    let uf = request.params.sigla
    let capital = dados.getCapitalBySigla(uf)
    response.status(capital.status_code)
    response.json(capital)


})

app.get('/v1/estados/regiao/:id', function(request, response){

    let sigla = request.query.uf
    let estado = request.query.estado
    let regiao = request.query.regiao
    let id = request.params.id
    console.log(sigla)
    console.log(estado)
    console.log(regiao)
    console.log(id)

})


//Start na API
app.listen(PORT, function(){

    console.log('API aguardando requisições...')

})
// const http = require('http');
// const moment = require('moment');
// const fs = require('fs')

// //Importar filmes
// const filmes = require('./filmes')
// console.log(filmes)



// Importar base de dados do arquivo catalogo.js
const catalogo = require('./database/catalogo')

// adicionar objeto ao catalogo de filmes
function adicionarFilme(codigo,titulo,duracao,atores,anoDeLancamento,emCartaz){
    return catalogo.push({codigo,titulo,duracao,atores,anoDeLancamento,emCartaz})
}
// adicionar objeto ao catalogo de filmes pelo codigo
function buscarFilme(codigo){
    // pos = catalogo.map(function(e) {return e.codigo }).indexOf(codigo) // perguntar ao professor
    // return pos
    return catalogo.findIndex((filme)=>filme.codigo == codigo)

}
// alterar propriedade emCartaz do objeto pelo codigo
function alterarStatusEmCartaz(codigo,funcao){
    // pos = buscarFilme(codigo)
    pos = funcao(codigo)
    catalogo[pos].emCartaz = !catalogo[pos].emCartaz
}
let listarTodosOsFilmes = () =>{
    console.log("Filmes no Catálogo")
    catalogo.forEach(function(filme){
        console.log(filme.titulo)
    })
}
let listarFilmesEmCartaz = () => {
    console.log("\nFilmes em Cartaz")

    catalogo.forEach(function(elemento){
        elemento.emCartaz? console.log(elemento.titulo):''
    })
}
// opção criar a função e chama-la
let isLongaDuracao = (filme) => filme.duracao >= 120

let listarFilmesLongaDuracao = () => {
    let filmesLongaDuracao = catalogo.filter(isLongaDuracao)
    console.log("\nFilmes de Longa Duração")
    filmesLongaDuracao.forEach(function(filme){
        console.log(filme.titulo)
    })
}


adicionarFilme(004,"Era uma Vez",100,["Merylin Monroe","John Travolta","Amelie"],2021,false)

alterarStatusEmCartaz(4,buscarFilme)

listarTodosOsFilmes()
listarFilmesEmCartaz()
listarFilmesLongaDuracao()
    // Metodo iterativo buscar filme
    // for(let i=0;i<catalogo.length;i++){
    //     if(catalogo[i].codigo==codigo){
    //         return i
    //     }
    // }


//     Método Iterativo listar filmes
//     for (let i=0;i<catalogo.length;i++){
//         console.log(i+1+' - '+catalogo[i].titulo)
//     }


    // Método antigo listar emcartaz
    // for (let i=0;i<catalogo.length;i++){
    //     catalogo[i].emCartaz ? console.log(catalogo[i].titulo+'\n') : ''
    // }
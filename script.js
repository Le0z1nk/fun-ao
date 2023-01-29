function mensagem(){
    console.log("essa é uma mensagem")
}
mensagem()

let noome = "Leo"
function nome(Leonardo){
    console.log(`Meu nome é ${Leonardo}`)
}
nome(noome)

let coisas = function (nome_, idade, musica ){
console.log(`Meu nome é ${nome_}, tenho ${idade} e gosto de ${musica}`)
}
coisas("Leonardo", "18", "EDM")

let arte = function (filme, musica_){
    console.log(`Eu gosto de ${filme} e ouço ${musica_}`)
}
arte("Wall-e", "Childish Gambino - Fells Like Summer")

function triplo(numero){
    return numero * 3
}
console.log(triplo(6))

let algo = true
function verificar(){
  console.log(algo)  
}
verificar()
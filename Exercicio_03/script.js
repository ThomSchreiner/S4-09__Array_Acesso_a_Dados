
let nomeDosCompetidores = [
    "Maria", 
    "Heric", 
    "Roberta", 
    "Rafael", 
    "Lucas"
]
let posicoesDoPodio = [1,2,3,4,5]

function competidoresNoPodio(competidores, posicoes, numeroDePosicoes) {
    let cont = 0
    while (cont < numeroDePosicoes){
        let podio = (`${posicoes[cont]}º lugar no pódio é ${competidores[cont]}`)
        console.log(podio)
        cont++    
    }
}

competidoresNoPodio(nomeDosCompetidores, posicoesDoPodio, posicoesDoPodio.length)

var nomeHeroi = 'Felipao'
var qtdVitoria = 200
var qtdDerrota = 1

let saldoVitorias = calculaSaldo(qtdVitoria, qtdDerrota)
let nivel = verificaNivel(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);


function calculaSaldo(vitoria, derrota) {
    let saldo = vitoria - derrota
    return saldo
}


function verificaNivel(saldo) {
let nivel = ""
    if (saldo >= 0 && saldo <= 10) {
        nivel = 'Ferro';
    } else if (saldo <= 20) {
        nivel = 'Bronze';
    } else if (saldo <= 50) {
        nivel = 'Prata';
    } else if (saldo <= 80) {
        nivel = 'Ouro';
    } else if (saldo <= 70) {
        nivel = 'Diamante';
    } else if (saldo <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
return nivel

}



/** //TODO:
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
 */
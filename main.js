function Animal(nome) {
    this.nome = nome
    this.Falar = function() {
        console.log("Meu nome é: " + this.nome)
        console.log("Minha espécie é: " + this.especie)
        console.log("Minha comida favorita é: " + this.comidaFavorita)
    }
}

function Especie(nome, especie) {
    this.especie = especie
    Animal.call(this, nome)
}

function ComidaFavorita(nome, especie, comidaFavorita) {
    this.comidaFavorita = comidaFavorita
    Especie.call(this, nome, especie)
}

const animal1 = new ComidaFavorita("Rex", "Cachorro", "Osso")
const animal2 = new ComidaFavorita("Mingau", "Gato", "Peixe")
const animal3 = new ComidaFavorita("Pipoca", "Coelho", "Cenoura")

animal1.Falar()
console.log() /*quebra de linha*/
animal2.Falar()
console.log() /*quebra de linha*/ 
animal3.Falar()


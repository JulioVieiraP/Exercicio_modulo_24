function Animal(nome, especie, comidaFavorita) {
    this.nome = nome
    this.especie =  especie
    this.comidaFavorita = comidaFavorita
    this.Falar = function() {
        console.log("Meu nome é: " + this.nome)
        console.log("Minha espécie é: " + this.especie)
        console.log("Minha comida favorita é: " + this.comidaFavorita)
    }
}

function Cachorro(nome, especie, comidaFavorita) {
    Animal.call(this, nome, especie, comidaFavorita);
}

function Gato(nome, especie, comidaFavorita) {
    Animal.call(this, nome, especie, comidaFavorita)
}

function Coelho(nome, especie, comidaFavorita){
    Animal.call(this, nome, especie, comidaFavorita)
}

const cachorro = new Cachorro("Rex", "Cachorro", "Osso")
const gato = new Gato("Mingau", "Gato", "Peixe")
const coelho = new Coelho("Pipoca", "Coelho", "Cenoura")

cachorro.Falar()
console.log() // quebra de linha
gato.Falar()
console.log() // quebra de linha
coelho.Falar()



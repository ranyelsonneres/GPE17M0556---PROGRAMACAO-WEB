//objetos
const pessoa = {
    nome: "Fulano",
    idade: 23,
    altura: 1.65
};

console.log(pessoa);

let pessoa2 = {};
pessoa2.nome = "Ciclano";
pessoa2.signo = "Touro";
console.log(pessoa2);

const carro = new Object();
carro.marca = "toyota";
carro.ano = 2023;
console.log(carro);

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

let p1 = new Pessoa("João", 25);
let p2 = new Pessoa("Maria", 23);

console.log(p1.nome);
console.log(p2);

class Animal {
    constructor(nome, tutor) {
        this.nome = nome;
        this.tutor = tutor;
    }

    emitirSom(){
        return `O ${this.nome} tem como tutor: ${this.tutor}`;
    }
}

let gato = new Animal("Fofinho", "Fulano");
let cachorro = new Animal("Rex", "Ciclano");

console.log(gato.emitirSom());
console.log(cachorro.emitirSom());



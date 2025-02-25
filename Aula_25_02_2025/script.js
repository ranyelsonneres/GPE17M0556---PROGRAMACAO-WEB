//alert("Olá mundo!");

console.log("Olá mundo!");

//variaveis
var animal = "gato";
console.log(animal);

//let
let nome = "Fulano";
console.log(nome);

//const
const valor = 10;
//valor = 20;

console.log(valor);

var numero = 10;
console.log(numero);
numero = 20;

//template literal
console.log(`O ${animal} possui ${numero} meses de vida.`);

//verificar o tipo
console.log(typeof animal);
console.log(typeof numero);

//comparação
console.log(5 == "5"); //igualdade
console.log(5 === "5"); //estritamente igual

console.log(5 != "5"); //desigualdade
console.log(5 !== "5"); //estritamente desigual

//dados de entrada (input)
var nomeCompleto = window.prompt("Digite o nome: ");
var idade = parseFloat(window.prompt("Digite a idade: "));

console.log(typeof idade);

console.log(`Olá ${nomeCompleto} você possui ${idade} ano(s).`);







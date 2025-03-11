//buscar elemento
var meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

var paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

console.log(paragrafo1[2].textContent);

for(let i=0; i < paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

var paragrafo2 = document.getElementsByTagName("p");
for(let i=0; i < paragrafo2.length;i++){
    console.log(paragrafo2[i].textContent);
}

var cabecalho1 = document.querySelector(".cabecalho");
console.log(cabecalho1.textContent);

var cabecalho2 = document.querySelectorAll(".cabecalho");
console.log(cabecalho2);

//acesso ao conteúdo dos elementos HTML
//var nome = window.prompt("Nome: ");
var nome = "Pedro";

document.getElementById("paragrafo1").textContent = `Olá, ${nome}`;
document.getElementById("paragrafo2").innerHTML = "<h3>Texto alterado!</h3>";


//eventos
var botao1 = document.getElementById("botao1");

botao1.onclick = function(){
    botao1.textContent = "Ciclado!";
    botao1.style.backgroundColor = "green";
    alert("Clicou!");
}

var botao2 = document.getElementById("botao2");

botao2.addEventListener("mouseover", function(){
    botao2.style.backgroundColor = "red";
})

botao2.addEventListener("mouseout", function(){
    botao2.style.backgroundColor = "";
})

botao2.addEventListener("click", function(){
    alert("Você clicou!");
})

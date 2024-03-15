const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba.conteudo")

for(let i=0;i < botoes.length;i++){
botoes[i].onclick = function(){
}
for(let j=0; j<botoes.length; j++)
 textos[j].classList.remove("ativo");
 botoes[j].classList.remove("ativo");

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
 }
}

 const contadores = document.querySelectorAll(".contador");
 const tempoObjetivo1 = new date("2024-12-05T00:00:00")

const filtro = document.getElementById("inFiltro");

filtro.addEventListener("input", function(){
    filtroNome();
})

function filtroNome(){
    let nome = document.getElementById("inFiltro").value;
    let nomeFiltrado = [];
    for(let i = 0; i < candidados.length; i++){
        if(candidados[i].toLowerCase().includes(nome.toLowerCase())){
            nomeFiltrado.push(candidados[i]);
        }
    }
    listaCandidatos.innerHTML = "";
    for(let i = 0; i < nomeFiltrado.length; i++){
        let cadaCandidato = document.createElement('li');
        cadaCandidato.innerHTML = `Candidato: ${nomeFiltrado[i]} CPF: ${CPF[i]} Data de Nascimento:  ${nascimento[i]} Pontuação: ${pontuacao[i]} Aprovação: ${aprovado[i]}`;
        listaCandidatos.appendChild(cadaCandidato);
    }
}

const filtro = document.getElementById("inFiltro");
const selectFiltro = document.getElementById("sltFiltro");
const listaCandidatos = document.getElementById("listaCandidatos");

filtro.addEventListener("input", function(){
    const filtroSelecionado = selectFiltro.value;

    if(filtroSelecionado === "Nome"){
        filtroNome();
    }else if(filtroSelecionado === "Data de Nascimento"){
        filtroDtNasc();
    }
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


function filtroDtNasc(){
    let dtNascimento = document.getElementById("inFiltro").value;
    let dtNascimentoFiltrado = [];
    for(let i = 0; i < nascimento.length; i++){
            if(nascimento[i].toLowerCase().includes(dtNascimento.toLowerCase())){
                dtNascimentoFiltrado.push(nascimento[i]);
            }
    }
    
    listaCandidatos.innerHTML = "";
    for(let i = 0; i < dtNascimentoFiltrado.length; i++){
        let cadaCandidato = document.createElement('li');
        cadaCandidato.innerHTML = `Candidato: ${candidados[i]} CPF: ${CPF[i]} Data de Nascimento:  ${dtNascimentoFiltrado[i]} Pontuação: ${pontuacao[i]} Aprovação: ${aprovado[i]}`;
        listaCandidatos.appendChild(cadaCandidato);
    }
}
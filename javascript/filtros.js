const inFiltro = document.getElementById("inFiltro");
const sltFiltro = document.getElementById("sltFiltro");
const listaCandidatos = document.getElementById("listaCandidatos");

inFiltro.addEventListener("input", function(){
    const filtroSelecionado = sltFiltro.value;

    if(filtroSelecionado === "Nome"){
        filtroNome();
    }else if(filtroSelecionado === "Data de Nascimento"){
        filtroDtNasc();
    }
})

function filtroNome(){
    let nome = document.getElementById("inFiltro").value;
    let nomeFiltrado = [];
    let CPFFiltrado = [];
    let  nascimentoFiltrado = [];
    let pontuacaoFiltrado = [];
    let aprovadoFiltrado = [];

    for(let i = 0; i < candidados.length; i++){
        if(candidados[i].toLowerCase().includes(nome.toLowerCase())){
            nomeFiltrado.push(candidados[i]);
            CPFFiltrado.push(CPF[i]);
            nascimentoFiltrado.push(nascimento[i]);
            pontuacaoFiltrado.push(pontuacao[i]);
            aprovadoFiltrado.push(aprovado[i]);
        }
    }
    listaCandidatos.innerHTML = "";
    for(let i = 0; i < nomeFiltrado.length; i++){
        let cadaCandidato = document.createElement('table');
        cadaCandidato.innerHTML = `Candidato: ${nomeFiltrado[i]} CPF: ${CPFFiltrado[i]} Data de Nascimento:  ${nascimentoFiltrado[i]} Pontuação: ${pontuacaoFiltrado[i]} Aprovação: ${aprovadoFiltrado[i]}`;
        listaCandidatos.appendChild(cadaCandidato);
    }
}


function filtroDtNasc(){
    let dtNascimento = document.getElementById("inFiltro").value;
    let dtNascimentoFiltrado = [];
    let CPFFiltrado = [];
    let pontuacaoFiltrado = [];
    let aprovadoFiltrado = [];
    let nomeFiltrado = [];
    for(let i = 0; i < nascimento.length; i++){
            if(nascimento[i].toLowerCase().includes(dtNascimento.toLowerCase())){                
                dtNascimentoFiltrado.push(nascimento[i]);
                CPFFiltrado.push(CPF[i]);
                pontuacaoFiltrado.push(pontuacao[i]);
                aprovadoFiltrado.push(aprovado[i]);
                nomeFiltrado.push(candidados[i]);
            }
    }
    
    listaCandidatos.innerHTML = "";
    for(let i = 0; i < dtNascimentoFiltrado.length; i++){
        let cadaCandidato = document.createElement('table');
        cadaCandidato.innerHTML = `Candidato: ${nomeFiltrado[i]} CPF: ${CPFFiltrado[i]} Data de Nascimento:  ${dtNascimentoFiltrado[i]} Pontuação: ${pontuacaoFiltrado[i]} Aprovação: ${aprovadoFiltrado[i]}`;
        listaCandidatos.appendChild(cadaCandidato);
    }
}



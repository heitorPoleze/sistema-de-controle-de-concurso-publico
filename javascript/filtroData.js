//const listaCandidatos = document.getElementById("listaCandidatos");

//const filtro = document.getElementById("inFiltro");

filtro.addEventListener("input", function(){
    filtroDtNasc();
})

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
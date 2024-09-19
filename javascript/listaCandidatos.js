const listaCandidatos = document.getElementById("listaCandidatos");


function listagem (){
        for(let i = 0; i < pontuacao.length; i++){
            /*console.log(
                `Lista de participantes: Candidato: ${candidados[i]} CPF: ${CPF[i]} Data de Nascimento:  ${nascimento[i]} Pontuação: ${pontuacao[i]} Aprovação: ${aprovado[i]}`
            );*/
            let cadaCandidato = document.createElement('li');
            cadaCandidato.innerHTML = `Candidato: ${candidados[i]} CPF: ${CPF[i]} Data de Nascimento:  ${nascimento[i]} Pontuação: ${pontuacao[i]} Aprovação: ${aprovado[i]}`;
            listaCandidatos.appendChild(cadaCandidato);
        }
    };

window.onload = function(){
    aprovacao();
    listagem();
}
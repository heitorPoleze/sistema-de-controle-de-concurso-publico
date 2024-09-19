const outListaCandidatos = document.getElementById("listaCandidatos");


function listagem (){         
        criaLegenda();             
        for(let i = 0; i < pontuacao.length; i++){

            let tr = document.createElement('tr');
    
            let tdCandidato = document.createElement('td');
            let tdCPF = document.createElement('td');
            let tdNascimento = document.createElement('td');
            let tdPontuacao = document.createElement('td');
            let tdAprovado = document.createElement('td');
        
            tdCandidato.textContent = candidados[i];
            tdCPF.textContent = CPF[i];
            tdNascimento.textContent = nascimento[i];
            tdPontuacao.textContent = pontuacao[i];
            tdAprovado.textContent = aprovado[i];
        
            tr.appendChild(tdCandidato);
            tr.appendChild(tdCPF);
            tr.appendChild(tdNascimento);
            tr.appendChild(tdPontuacao);
            tr.appendChild(tdAprovado);
        
            outListaCandidatos.appendChild(tr);
        }
    };

    function criaLegenda(){
        let trLegenda = document.createElement('tr');
    
            let tdCandidato = document.createElement('td');
            let tdCPF = document.createElement('td');
            let tdNascimento = document.createElement('td');
            let tdPontuacao = document.createElement('td');
            let tdAprovado = document.createElement('td');
        
            tdCandidato.textContent = `Candidato`;
            tdCPF.textContent = `CPF`;
            tdNascimento.textContent = `Data de Nascimento`;
            tdPontuacao.textContent = `Pontuação`;
            tdAprovado.textContent = `Classificação`;
        
            trLegenda.appendChild(tdCandidato);
            trLegenda.appendChild(tdCPF);
            trLegenda.appendChild(tdNascimento);
            trLegenda.appendChild(tdPontuacao);
            trLegenda.appendChild(tdAprovado);

            outListaCandidatos.appendChild(trLegenda);
    }

window.onload = function(){
    aprovacao();
    listagem();
}

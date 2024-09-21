const outDezMelhores = document.getElementById("outDezMelhores");

//declarando variáveis para usar na função desafio()
let vetPontuacaoDecrescente = [...pontuacao];
let vetCandidadosDecrescente = [...candidados];
let vetCPFDecrescente = [...CPF];
let vetNascimentoDecrescente = [...nascimento];
let vetAprovadoDecrescente = [];


function desafio (){
    aprovacao();
    vetAprovadoDecrescente = [...aprovado];

// USANDO FOR DENTRO DE FOR PRA UM PERCORRER O OUTRO VETOR E OUTRO PRA QUE A CADA VEZ QUE PERCORRE UM DADO DO VETOR FAZER A VERIFICACAO(especificada embaixo)
    for(let i = 0; i < vetPontuacaoDecrescente.length; i++){
        for(let j = 0; j < vetPontuacaoDecrescente.length; j++){
            //VERIFICACAO SE O VETOR PERCORRIDO É MENOR QUE O VETOR SUBSEQUENTE
            if (vetPontuacaoDecrescente[j] < vetPontuacaoDecrescente[j+1]){
                //SE FOR MAIOR, POSIÇÃO MUDARÁ PRA PRÓXIMA (se era a primeira posição, inverterá com a segunda) e por aí vai até o primeiro for percorrer todo o vetor
                let posicaoNota = vetPontuacaoDecrescente[j];
                vetPontuacaoDecrescente[j] = vetPontuacaoDecrescente[j+1];
                vetPontuacaoDecrescente[j+1] = posicaoNota;

                let posicaoCandidados = vetCandidadosDecrescente[j];
                vetCandidadosDecrescente[j] =  vetCandidadosDecrescente[j+1];
                vetCandidadosDecrescente[j+1] = posicaoCandidados;

                let posicaoCPF = vetCPFDecrescente[j];
                vetCPFDecrescente[j] = vetCPFDecrescente[j+1];
                vetCPFDecrescente[j+1] = posicaoCPF;

                let posicaoNascimento = vetNascimentoDecrescente[j];
                vetNascimentoDecrescente[j] = vetNascimentoDecrescente[j+1];
                vetNascimentoDecrescente[j+1] = posicaoNascimento;

                let posicaoAprovado = vetAprovadoDecrescente[j];
                vetAprovadoDecrescente[j] = vetAprovadoDecrescente[j+1];
                vetAprovadoDecrescente[j+1] = posicaoAprovado;
            }
        }
    };
        
         //FOR PRA LIMITAR PARA APENAS OS QUE TEM AS 10 MAIORES NOTAS

        let paragrafo = `
        <tr>
            <td> Candidato </td>
            <td> CPF </td>
            <td> Data de Nascimento </td>
            <td> Pontuação </td>
            <td> Classificação </td>
        </tr>`
         
    for(let i = 0; i < 10; i++){
       
         paragrafo += `<tbody>
                            <tr>
                            <td> ${vetCandidadosDecrescente[i]} </td>
                            <td> ${vetCPFDecrescente[i]} </td>
                            <td> ${vetNascimentoDecrescente[i]} </td>
                            <td> ${vetPontuacaoDecrescente[i]} </td>
                            <td> ${vetAprovadoDecrescente[i]} </td>
                            </tr>
                         </tbody>`;

        outDezMelhores.innerHTML = paragrafo;
    }
}


window.onload = function(){
    aprovacao();
    desafio();
    
};
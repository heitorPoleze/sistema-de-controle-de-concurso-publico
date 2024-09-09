
const candidados = ['TIRZA TABITA DA SILVA COSTA','SAMELA MIRANDA SIQUEIRA DE SOUZA','LUIZ RICARDO DA SILVA','IVETE PEREIRA DA SILVA LEMOS','PATRICIA HELENA DE SOUZA','NATHALIA FERRAZ SCHIRMER','ALESSANDRO LIMA DOS SANTOS','HELOISA MORAES','AMANDA RAFAELA BARBOSA DE ABREU SILVA','JULIANA LEMOS JOAQUIM','CLAUDIA DOS SANTOS DE CARVALHO','JULIANA SALVAGNO','RENATA MARIA NOGUEIRA SANTOS IVO','BRUNA DE OLIVEIRA GIGLI','JOSEANE CHIARADIA DA SILVA','CINTIA EURIDES DE OLIVEIRA BOTELHO','JOCIMAR ALEX DE ABREU','FELIPE DE ANDRADE FORTES DA SILVA','RAFAELLA MIRELA DOS SANTOS','ADAN ALVES MOREIRA','EDILAINE CRISTINA DE OLIVEIRA DOMICIANO','PAULA GNAN','JULIO DE MATTOS E ALENCASTRE SOARES','DOUGLAS RIBEIRO DA SILVA','CARLOS EDUARDO APARECIDO REZENDE','IVAN LUIS LEONI DE PAULA','ANA CRISTINA DE QUEIROZ','JENIFER CRISTINA DE MATOS','DAMARIS DE FARIA ARAUJO','TAMIRES ROBERTA DA SILVA GONÇALVES DOS SANTOS','MONISE CRISTINA PEREIRA COELHO','LIGIA MARIA FERNANDES RANGEL','ELISA VENANCIO DE OLIVEIRA','RENATA CRISTINA SANTOS OLIVEIRA','SANDRA BASSINI PORTELLA','RAFAEL ALBERTO PAPARELI','MARIA EDUARDA SILVA MERA','LUIS AUGUSTO SEVERINO','MARIA TEREZA OLIVEIRA BATISTA','FLAVIO RICARDO CIRINO','LEONARDO PLAZA LIMA','LARISSA BUENO DE FARIA','ANA PAULA SIQUEIRA DA SILVA','JULIANA BORGES DA SILVA','JOANA APARECIDA FIGUEIRA COELHO','VINICIUS RODRIGUES RIBEIRO','RODRIGO OLIVEIRA MONTEIRO SANTOS','LUCAS FONSECA NEVES','LUCAS MARCELINO PETRONILHO','MICHEL LOURENÇO ALVES NUNES','TAMIRES CAROLINE MADUREIRA','TAYNA VALERIA DA SILVA MOSTARDA','JOAO MARCOS MOREIRA SILVA','THAIS CAROLINA GOMES DE OLIVEIRA','KAROLINE RIBEIRO REI','TATIANE ASCENÇAO DE OLIVEIRA MANARESI','ROSY GONÇALVES PINHEIRO','NATHALIA GADIOLI B. COURI DE OLIVEIRA','CARLOS EDUARDO DA SILVA MOREIRA RAMOS','CAUANE VICENTINI FERREIRA DE MATTOS','ANTONIO CARLOS ANTUNES SANTOS','CLARA ELIZAH DA SILVA CASSIANO','CAMILA APARECIDA BASTOS','WELLINGTON FERNANDES DE LIMA','JESSICA DAYANE MACEDO DE LIMA','GABRIEL RENAN DOS SANTOS','MARIA EDUARDA CRUZ','MARIA MARIANE DE ALMEIDA BORGES','GABRIEL DE SOUZA LEITE','GIOVANNA DOS SANTOS REIS','GABRIEL FRANCISCO TOME','HEMELLY GLEICE GUIMARÃES MALAQUIAS','BRUNNA DE PAULA OLIVEIRA','GLEYCE ANNE DE CASTRO SANTOS','JULIA HERRERA PIMENTEL','NICOLI THAIS DA SILVA','NELLISE BAILON','ISABELLA MENEZES PEDROSO','CARINA DA SILVA BUENO','VALERIA SOUZA DOS SANTOS','JOAO PEDRO ANDREA NUNES','JEAN GREGORIO DA SILVA','LAIS RAMOS DE CAMPOS','THAYNA JASMINI WALTER ANTONIO','LUCAS NUNES DA SILVA','LETICIA DOS SANTOS LOPES','KARINA NATALIA RIBEIRO DE ALMEIDA','MARIA EDUARDA REZENDE BRASIL VIEIRA','REBECA LEMOS QUARESMA DE OLIVEIRA','BRUNO FERNANDO MACHADO','MARIA SILVIA VALERIO FERREIRA','THAIS PEREIRA SANTOS','ALAN MARQUES PEREIRA','DEIVID SERGIO DE SOUZA','VITOR CARDOSO MONTANARO NOCERA','VICTOR HUGO MORGADO SANTOS','DANIELLE CRISTINA MATOS DOS SANTOS','THAIMARA DA SILVA PRADO','DANIELLY MARQUES DANTAS VIEIRA','SARA MIRIA SILVA','ANDERSON DE OLIVEIRA SILVA LEAL'];

const CPF = ['035482042-79','045330969-05','088446578-05','092815438-69','098681808-99','121622827-20','122098908-88','122108918-84','128436227-27','145846327-31','199066588-86','217977828-78','229726628-65','234023758-00','273232048-01','283472038-06','302848608-32','325155738-60','331282478-89','334792788-50','345492108-26','347072238-26','348013258-82','352393518-05','360193318-73','364995618-78','366369178-06','366794338-51','368478278-58','373706178-58','377853028-39','380350018-41','383030538-92','386515188-46','391867198-40','392012318-22','393288938-01','396822418-39','399347178-40','401818158-26','405487558-09','406538888-05','407371538-06','409255398-64','412972168-22','413185128-83','414981778-24','416144838-41','419503018-85','420262128-05','421012368-42','423400698-07','425084748-94','427524148-70','428965158-52','429117328-80','430115468-00','431001658-88','434127598-48','434600328-12','435177038-42','435355108-64','439090998-31','440800598-33','442378338-01','442564248-14','446518028-42','447874968-08','448669618-21','456938568-01','457004048-93','457988218-03','458261728-00','458544818-71','458614038-05','459778498-50','460970358-02','461037008-50','463249498-42','463251168-44','464726558-71','464900748-85','466176098-08','470151428-48','471713538-50','475452398-90','476436988-56','476498248-02','479283898-35','490421398-03','493901898-96','494344528-48','495317418-67','495691768-68','496964108-08','502777188-64','503668508-30','508130348-84','516665408-03','522801258-38','838493785-00'];

const nascimento = ['01/02/1995','25/04/1997','25/06/1965','20/09/1960','17/08/1970','25/04/1987','09/03/1973','14/05/1975','08/10/2000','30/07/1992','03/05/1977','15/12/1980','03/07/1987','25/03/1992','10/10/1977','07/05/1974','09/03/1982','31/07/1986','12/05/1988','13/10/1984','07/10/1984','10/07/1987','20/07/1983','09/08/1984','29/12/1986','07/06/1990','06/01/1988','10/02/1988','06/11/1988','28/06/1987','03/06/1991','09/09/1993','01/04/1989','05/06/1989','08/09/1988','23/04/1993','10/12/1989','23/02/1996','23/01/1992','21/09/1990','13/10/1990','24/09/1992','30/10/1991','03/07/1994','19/05/1992','19/05/1997','17/08/1992','02/06/1995','19/11/1994','20/05/1994','08/04/1994','28/08/1995','03/05/1998','20/03/1992','06/09/1994','28/10/1993','14/11/1995','21/04/1994','28/03/1995','11/03/1997','20/09/1995','07/08/1996','21/10/1997','24/02/1999','02/04/1995','09/01/1995','05/08/1999','22/06/1997','19/11/1996','07/10/1998','04/07/1996','14/11/1997','30/03/1999','06/02/1998','25/06/1998','29/03/1997','09/03/1999','23/03/1998','27/03/1997','17/06/1998','02/06/1998','18/09/1997','30/08/2000','29/07/1996','06/09/2001','19/05/1999','29/08/1999','30/09/1997','05/12/1998','01/09/1999','25/01/2001','12/03/2001','24/02/2000','14/11/2001','23/03/1999','19/10/1999','21/11/1998','17/09/2000','20/05/2002','28/02/2002','16/10/1986'];

const pontuacao = [831,814,725,1248,1234,1227,1244,723,750,1178,1047,874,1223,1187,1042,1049,1038,1240,1007,1033,1243,1009,1035,870,1236,995,1218,716,1217,1017,1203,974,1211,861,1002,851,999,823,1202,1205,989,1165,715,962,979,812,1170,708,960,1161,841,1151,898,1192,1159,966,1137,1163,689,932,1146,939,684,789,948,957,769,803,707,1095,1130,1119,1084,1111,891,914,779,1103,923,801,699,1122,760,945,743,1074,1072,904,690,884,746,745,1064,739,1093,764,799,758,730,1058,1026];

const aprovado = [];

//verifica se o candidato está aprovado ou não
function aprovacao(){
    for(let i = 0; i < pontuacao.length; i++){
        if (pontuacao[i] < 900){
            aprovado.push("Desclassificado(a)");
        }else{
            aprovado.push("Classificado (a)");
        }
    }
}

function listagem (){
        aprovacao();
        for(let i = 0; i < pontuacao.length; i++){
            console.log(
                `Lista de participantes: Candidato: ${candidados[i]} CPF: ${CPF[i]} Data de Nascimento:  ${nascimento[i]} Pontuação: ${pontuacao[i]} Aprovação: ${aprovado[i]}`
            );
        }
    };

//Um filtro de “nome”, onde o usuário pode digitar o nome do candidato, atualizando a listagem e exibindo apenas os candidatos que tiverem o conteúdo do filtro em seus nomes
function filtrarNome(){
    const filtro = document.getElementById('nomeCandidato').value.toLowerCase();
    const candidatosFiltrados = [];

    for(let i = 0; i < candidados.length; i++){
        if(candidados[i].toLowerCase().includes(filtro)){
            candidatosFiltrados.push(candidados[i]);
        }
    }
}

//declarando variáveis para usar na função desafio()
let vetDecrescente = [...pontuacao];
let vetCandidadosDecrescente = [...candidados];
let vetCPFDecrescente = [...CPF];
let vetNascimentoDecrescente = [...nascimento];
let vetAprovadoDecrescente = [...aprovado];
const vetDezMaiores = [];

function desafio(){
    aprovacao();
// USANDO FOR DENTRO DE FOR PRA UM PERCORRER O OUTRO VETOR E OUTRO PRA QUE A CADA VEZ QUE PERCORRE UM DADO DO VETOR FAZER A VERIFICACAO(especificada embaixo)
    for(let i = 0; i < vetDecrescente.length; i++){
        for(let j = 0; j < vetDecrescente.length; j++){
            //VERIFICACAO SE O VETOR PERCORRIDO É MENOR QUE O VETOR SUBSEQUENTE
            if (vetDecrescente[j] < vetDecrescente[j+1]){
                //SE FOR MAIOR, POSIÇÃO MUDARÁ PRA PRÓXIMA (se era a primeira posição, inverterá com a segunda) e por aí vai até o primeiro for percorrer todo o vetor
                let posicaoNota = vetDecrescente[j];
                vetDecrescente[j] = vetDecrescente[j+1];
                vetDecrescente[j+1] = posicaoNota;

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
    }

    /*for(let i = 0; i < pontuacao.length; i++){
        for(let j = 0; j < pontuacao.length; j++){
            if (pontuacao[j] < pontuacao[j+1]){
                let posicaoNota = vetDecrescente[j];
                vetDecrescente[j] = vetDecrescente[j+1];
                vetDecrescente[j+1] = posicaoNota;
                
                candidadosDados.push({
                    nome: candidados[i],
                    cpf: CPF[i],
                    nascimento: nascimento[i],
                    pontuacao: vetDecrescente[i],
                    aprovado: aprovado[i]
                });
            }
            }
        }*/
    //FOR PRA LIMITAR PARA APENAS OS QUE TEM AS 10 MAIORES NOTAS
    for(let i = 0; i < 10; i++){

        //ARMAZENANDO VARIOS VETORES EM UM SÓ (OBEJETO)
        vetDezMaiores.push({
            candidato: vetCandidadosDecrescente[i],
            cpf: vetCPFDecrescente[i],
            nascimento: vetNascimentoDecrescente[i],
            pontuacao:vetDecrescente[i],
            aprovado: vetAprovadoDecrescente[i]
        });

    }
    console.log(vetDezMaiores);
}
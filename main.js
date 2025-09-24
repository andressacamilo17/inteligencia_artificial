const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [ {
    enunciado: "Após se formar no ensino médio, você decide seguir carreira na medicina. Qual é a sua principal motivação?",
    alternativas: [
        { 

            texto: "Ajudar as pessoas e ter um impacto positivo na vida delas.",
            afirmacao: "Você sempre teve um forte desejo de cuidar dos outros e fazer a diferença na saúde das pessoas."
        },
        {
         texto: "A estabilidade e o prestígio da profissão médica." ,
         afirmacao: "Você se sentiu atraído pelos benefícios e reconhecimento que a profissão médica oferece"
        }
    ]
},
{
    enunciado: "Durante a faculdade de medicina, você se depara com a complexidade do coração humano e as cirurgias cardíacas. O que mais te impressiona?",
    alternativas: [
        {
     texto:   "A precisão e a habilidade necessárias para operar um órgão tão vital.",
     afirmacao:"A complexidade técnica e a responsabilidade da cirurgia cardiovascular despertaram sua paixão."
    },
     {
      texto:   "A tecnologia e os equipamentos avançados usados nos procedimentos.",
      afirmacao: "Você se fascinou com a tecnologia de ponta que torna essas cirurgias possíveis."   
    }   
    ]
},
{ 
enunciado:"No seu primeiro ano de residência em cirurgia cardiovascular, você precisa escolher um foco de estudo. Qual caminho você segue?",
alternativas: [
    {

       texto: "Cirurgia de revascularização do miocárdio, para tratar artérias do coração.",
       afirmacao: "Você dedicou-se ao tratamento de doenças coronárias, salvando vidas de pacientes com infarto."
    },
       {
           texto:"Cirurgia de reparo de válvulas, para restaurar o fluxo sanguíneo do coração.",
           afirmacao: "Você se especializou em cirurgias de válvulas, melhorando a qualidade de vida de muitos pacientes."
        }
]
},
{
    enunciado: "Um paciente com uma doença rara precisa de uma cirurgia complexa. A decisão é sua: o que fazer?",
    alternativas: [
        {
          texto:  "Seguir o protocolo padrão, mesmo com os riscos conhecidos.",
          afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
        },
        {
         texto:   "Consultar a equipe para encontrar uma abordagem inovadora e personalizada.",
         afirmacao: "Sua colaboração e busca por novas abordagens levaram à descoberta de uma técnica que beneficiou o paciente e outros no futuro."
        }
    ]
},
   {
enunciado: "Após anos de sucesso, você é convidado a palestrar sobre sua experiência. Qual a mensagem principal que você quer transmitir aos futuros cirurgiões?",
    alternativas: [
        {
          texto:  "Falar sobre os desafios da carreira e a importância do sacrifício pessoal",
          afirmacao: "Você transmitiu a ideia de que a cirurgia cardiovascular exige dedicação extrema e superação de obstáculos."
        },
        {
            texto:"Destacar a importância da empatia com o paciente e do trabalho em equipe.",
            afirmacao: "Você enfatizou que o sucesso na cirurgia cardiovascular não depende apenas de habilidade, mas também de compaixão e colaboração."
        }
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta(){
   if(atual >= perguntas.length){
    mostraResultado();
    return;
   } 
    perguntaAtual =  perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);

    }
    
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " " ;
    atual++;
mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Sua jornada como cirurgião cardiovascular...";
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta()



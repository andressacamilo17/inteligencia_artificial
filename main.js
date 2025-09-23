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
         texto:   "Criar uma imagem utilizando um gerador de imagem de IA",
         afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
        }
    ]
},
   {
enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
        {
          texto:  "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
          afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
        },
        {
            texto:"O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final."
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
    caixaPerguntas.textContent = "Em 2049....";
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta()



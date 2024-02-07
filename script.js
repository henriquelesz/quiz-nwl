const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: ["Brasília", "Rio de Janeiro", "São Paulo"],
    correta: 0,
  },
  {
    pergunta: "Quem é o autor de 'Romeu e Julieta'?",
    respostas: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior planeta do nosso sistema solar?",
    respostas: ["Terra", "Júpiter", "Vênus"],
    correta: 1,
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    correta: 2,
  },
  {
    pergunta: "Qual é a capital do Japão?",
    respostas: ["Tóquio", "Seul", "Pequim"],
    correta: 0,
  },
  {
    pergunta: "Quem descobriu a gravidade?",
    respostas: ["Isaac Newton", "Galileu Galilei", "Albert Einstein"],
    correta: 0,
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: ["Atlântico", "Índico", "Pacífico"],
    correta: 2,
  },
  {
    pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
    respostas: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    correta: 0,
  },
  {
    pergunta: "Quantos continentes existem na Terra?",
    respostas: ["5", "6", "7"],
    correta: 2,
  },
  {
    pergunta: "Qual é o elemento mais abundante na crosta terrestre?",
    respostas: ["Oxigênio", "Silício", "Alumínio"],
    correta: 1,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

perguntas.forEach((item) => {
  const quizItem = template.content.cloneNode(true); // Clone do conteúdo dentro de template
  quizItem.querySelector("#pergunta").textContent = item.pergunta; // Adiciona ou span #pergunta a pergunta do nosso objeto

  item.respostas.forEach((item) => {
    const quizRespostas = quizItem.querySelector("ul li").cloneNode(true); // Clona o conteúdo de dentro da li
    quizRespostas.querySelector("span").textContent = item; //
    quizItem.querySelector("ul").appendChild(quizRespostas);
  });

  quizItem.querySelector("ul li").remove();

  quiz.appendChild(quizItem);
});

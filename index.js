const btnInteraction = function (event) {
  elemento = event.target;
  elemento.classList.toggle("buttonColored");
};

const btnSelector = function () {
  const risposte = document.querySelectorAll(".button-answer");
  risposte.forEach((element) => element.addEventListener("click", btnInteraction));
  const btnAvanti = document.getElementById("btnAvanti");
  console.log(btnAvanti);
  btnAvanti.setAttribute("onclick", "nextQuestion(event)");
};
btnSelector();

const containerDomandeRisposte = [
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym CDN stand for in terms of networking?",
    correct_answer: "Content Delivery Network",
    incorrect_answers: ["Content Distribution Network", "Computational Data Network", "Compressed Data Network"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these people was NOT a founder of Apple Inc?",
    correct_answer: "Jonathan Ive",
    incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
];

let y = 1;
let contatoreClickAvanti = 0;
const nextQuestion = function () {
  const domande = document.querySelector("h1");
  domande.innerText = containerDomandeRisposte[contatoreClickAvanti].question;
  const questionNumber = document.querySelector("h3 span");
  questionNumber.innerText = "QUESTION" + y;
  contatoreClickAvanti += 1;
  y += 1;
  const risposte = document.querySelectorAll(".button-answer");
  for (let i = 0; i < risposte.length; i++) {
    risposte[i].classList.remove("buttonColored");
  }
  cambiaRisposte();
};
for (let n = 0; n < 10; n++) {
  containerDomandeRisposte[n].incorrect_answers.push(containerDomandeRisposte[n].correct_answer);
  // console.log(containerDomandeRisposte[n].incorrect_answers);
}
let h = 0;
const cambiaRisposte = function () {
  let arrayRisposte = [];
  const risposte = document.querySelectorAll(".button-answer");
  arrayRisposte = containerDomandeRisposte.map((element) => element.incorrect_answers);
  console.log(arrayRisposte);
  let x = 0;

  for (let j = 0; j < arrayRisposte.length; j++) {
    if (arrayRisposte[j].length == 2) {
      n = 2;
    } else {
      n = 4;
    }
  }
  for (let w = 0; w < n; w++) {
    risposte[x].innerText = " ";
    risposte[x].innerText = arrayRisposte[h][w];
    x += 1;
  }
  h += 1;
};

const btnSelector = function () {
  const risposte = document.querySelectorAll(".button-answer");
  risposte.forEach((element) => element.setAttribute("onclick", "btnInteraction(event)"));
  const btnAvanti = document.getElementById("btnAvanti");
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
const buttonDaEliminare = document.querySelector(".answers2");
buttonDaEliminare.style.display = "none";
let h = 1;
const cambiaRisposte = function () {
  let arrayRisposte = [];
  const risposteButton = document.querySelectorAll(".button-answer");
  const buttonDaEliminare = document.querySelector(".answers2");
  console.log(buttonDaEliminare);

  arrayRisposte = containerDomandeRisposte.map((element) => element.incorrect_answers);
  let x = 0;
  for (let w = 0; w < 4; w++) {
    risposteButton[w].innerText = " ";
  }
  if (arrayRisposte[h].length == 2) {
    n = 2;
    buttonDaEliminare.style.display = "none";
  } else {
    n = 4;
    buttonDaEliminare.style.display = "block";
  }

  console.log(n);
  for (let w = 0; w < n; w++) {
    risposteButton[x].innerText = " ";
    risposteButton[x].innerText = arrayRisposte[h][w];
    x += 1;
  }
  h += 1;
};
let intervallo;
let countDown = 60;
const graficoTorta = function () {
  let seconds = document.getElementById("seconds");
  let ss = document.getElementById("ss");
  let secDot = document.querySelector(".dots-sec_dot");

  // Imposta il valore di countdown a 60 secondi
  let s = countDown; // Imposta il valore iniziale dei secondi al valore di countdown

  seconds.innerText = s; // Mostra il valore iniziale dei secondi
  intervallo = setInterval(function () {
    s--;

    seconds.innerText = s; // Aggiorna il valore dei secondi

    ss.style.strokeDashoffset = 385 + (385 * s) / countDown;
    ss.style.stroke = "#00FFFF";

    if (s === 0) {
      clearInterval(intervallo); // Ferma il timer quando raggiunge 0
    }
  }, 1000);
};

let y = 2;
let contatoreClickAvanti = 1;
const nextQuestion = function () {
  const domande = document.querySelector("h1");
  const buttonAvanti = document.getElementById("btnAvanti");
  domande.innerText = containerDomandeRisposte[contatoreClickAvanti].question;
  const questionNumber = document.querySelector("h3 span");
  questionNumber.innerText = "QUESTION" + y;

  y += 1;
  if (y == 10) {
    buttonAvanti.innerHTML = '<a href="result.html">Risultati</a>';
  }
  const risposte = document.querySelectorAll(".button-answer");
  for (let i = 0; i < risposte.length; i++) {
    risposte[i].classList.remove("buttonColored");
  }
  cambiaRisposte();
  console.log(contatoreClickAvanti);
  contatoreClickAvanti += 1;
  clearInterval(intervallo);
  countDown = 61;
  graficoTorta();
};

for (let n = 0; n < 10; n++) {
  containerDomandeRisposte[n].incorrect_answers.push(containerDomandeRisposte[n].correct_answer);
}

let counter = 0;
const risposteGiuste = [];
const risposteSbagliate = [];
const btnInteraction = function (event) {
  elemento = event.target;
  elemento.classList.toggle("buttonColored");
  if (elemento.innerText === containerDomandeRisposte[counter].correct_answer) {
    console.log("risposta giusta");
    risposteGiuste.push(elemento.innerText);
  } else {
    console.log("risposta sbagliata");
    risposteSbagliate.push(elemento.innerText);
  }
  counter += 1;
  if (counter === 10) {
    console.log(risposteGiuste);
  }
  return risposteGiuste, risposteSbagliate;
};

graficoTorta();

// creare pagina dinamica di result

const btnInteraction = function (event) {
  elemento = event.target;
  elemento.classList.toggle("buttonColored");
};

const btnSelector = function () {
  const risposte = document.querySelectorAll(".button-answer");
  risposte.forEach((element) => element.addEventListener("click", btnInteraction));
  const btnAvanti = document.getElementById("btnAvanti");
  btnAvanti.setAttribute("onclick", "nextQuestion(event)");
};
btnSelector();

const containerDomandeRisposte = {
  question: "How can i create a checkbox in html?",
  correct_answer: " asdasdasdasda",
  incorrect_answers: ["ciao", "bella", "addio"],

  question1: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
  correct_answer1: "1000",
  incorrect_answers1: ["512", "1024", "500", "1000"],

  question2: "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
  correct_answer2: "False",
  incorrect_answers2: ["True"],

  question3: "What wa the name of the security vulnerability found in Bash in 2014?",
  correct_answer3: "Shellshock",
  incorrect_answers3: ["Heartbleed", "Bashbug", "Stagefright"],

  question4: "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
  correct_answer4: "True",
  incorrect_answers4: ["False"],

  question5: "The programming language &#039;Swift&#039; was created to replace what other programming language?",
  correct_answer5: "Objective-C",
  incorrect_answers5: ["C#", "Ruby", "C++"],

  question6: "What five letter word is the motto of the IBM Computer company?",
  correct_answer6: "Think",
  incorrect_answers6: ["Click", "Logic", "Pixel"],

  question7:
    "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
  correct_answer7: "False",
  incorrect_answers7: ["True"],

  question8: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
  correct_answer8: "C#",
  incorrect_answers8: ["Java", "C++", "Objective-C"],

  question9: "The logo for Snapchat is a Bell.",
  correct_answer9: "False",
  incorrect_answers9: ["True"],
};

let y = 0;
const nextQuestion = function (event) {
  let contatoreClickAvanti = 0;
  const randNum = Math.floor(Math.random() * 10);
  const domande = document.querySelector("h1");
  let x = 0;
  while (x != 1 && y < 9) {
    const randNum = Math.floor(Math.random() * 10);
    if (randNum < 10 && randNum != 0) {
      contatoreClickAvanti = randNum;
      x = 1;
      y += 1;
    }
  }
  str = "question" + contatoreClickAvanti;
  domande.innerText = containerDomandeRisposte[str];
  const questionNumber = document.querySelector("h3 span");
  console.log(questionNumber);
  console.log();
  questionNumber.innerText = "QUESTION" + (y + 1);
};

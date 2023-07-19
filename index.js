let seconds = document.getElementById("seconds");
let ss = document.getElementById("ss");
let secDot = document.querySelector(".dots-sec_dot");

let countDown = 59; // Imposta il valore di countdown a 60 secondi
let s = countDown; // Imposta il valore iniziale dei secondi al valore di countdown

seconds.innerHTML = s; // Mostra il valore iniziale dei secondi

let x = setInterval(function () {
  s--;

  seconds.innerHTML = s; // Aggiorna il valore dei secondi

  ss.style.strokeDashoffset = (440 * s) / countDown;
  ss.style.stroke = "#00FFFF";

  if (s === 0) {
    clearInterval(x); // Ferma il timer quando raggiunge 0
  }
}, 1000);

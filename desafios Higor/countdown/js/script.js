import Countdown from "./countdown.js";

const tempoParaOWWB = new Countdown("13 August 2020 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);

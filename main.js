"use strict";
let turno = 0;
const tablero = [];

function btnPulsado(e, i) {
  turno++;
  const btn = e.target;
  const color = turno % 2 ? "salmon" : "palegreen";
  btn.style.background = color;
  tablero[i] = color;
  if (ganar()) {
    alert("Enhorabuena jugador " + color);
  }
}

function ganar() {
  if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
    return true;
  }
  if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
    return true;
  }
  if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
    return true;
  }
  if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
    return true;
  }
  if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
    return true;
  }
  if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
    return true;
  }
  if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
    return true;
  }
  if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
    return true;
  }
}

document
  .querySelectorAll("td")
  .forEach((btn, i) => btn.addEventListener("click", (e) => btnPulsado(e, i)));

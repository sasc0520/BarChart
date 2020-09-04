"use strict";

const arr = [];
const queueSize = customers();
let allBars = document.querySelectorAll(".bar");
start();

for (let i = 0; i < 40; i++) {
  arr.push(customers());
}

function start() {
  loop();
  visualizingBars();
  setTimeout(start, 1000);
}

function visualizingBars() {
  for (let i = 0; i < 40; i++) {
    allBars[i].style.height = arr[i] * 15 + "px";
    allBars[i].style.backgroundColor = randomColour();
  }
}

function loop() {
  arr.push(customers());
  arr.shift();
}

function customers() {
  return Math.floor(Math.random() * 32);
}

function randomColour() {
  let letters = "0123456789ABCDEF";
  let colour = "#";
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

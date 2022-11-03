
// HTML selector variables

const btnIncrease = document.querySelector("#btn-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

let valueEl = document.querySelector("#value");

// Create
let val = valueEl.innerText;

btnIncrease.addEventListener('click', () => {
    valueEl.innerText = ++val;
});

btnDecrease.addEventListener('click', () => { 
    valueEl.innerText = --val;
});

btnReset.addEventListener('click', () => {
    valueEl.innerText = 0;
    val = '';
}) 

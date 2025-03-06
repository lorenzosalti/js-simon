// variabili creazione numeri
const randoms = [];
const minNumber = 1;
const maxNumber = 50;

// variabili elementi html
const numbersListElement = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const countdownElement = document.getElementById('countdown');
let count = 3;
const inputNumbersGroup = document.getElementById('input-group');

// creazione e visualizzazione dei numeri randomici
for (i = 0; i < 5; i++) {
  const currentNumber = getRandom(minNumber, maxNumber);
  randoms.push(currentNumber);
  console.log(currentNumber);

  numbersListElement.innerHTML += `<li class="random-number">${currentNumber}</li>`;
}

console.log(randoms);

// funzione asincrona a intervallo per generare countdown temporizzato
const countdown = setInterval(function () {
  countdownElement.innerText = count;
  count--;
  if (count < 0) {
    countdownStop(countdown);
  }
}, 1000);

answersForm.addEventListener('submit', function (event) {

  event.preventDefault();

  const inputNumbers = document.querySelectorAll('input.form-control');
  const inputs = inputNumbers.value;
  console.log(inputs);
})






// genera un numero intero random tra min e max inclusi
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// nasconde i numeri random, mostra il form e interrompe la temporizzazione
function countdownStop(clear) {
  numbersListElement.classList.add('d-none');
  answersForm.classList.remove('d-none');
  clearInterval(clear);
}
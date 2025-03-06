// variabili generali
const randoms = [];
const minNumber = 1;
const maxNumber = 50;
const userInputs = [];
const correctNumbers = [];
let count = 30;

// variabili elementi html
const numbersListElement = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const countdownElement = document.getElementById('countdown');
const inputNumbersGroup = document.getElementById('input-group');
const inputNumbers = document.querySelectorAll('input.form-control');
const message = document.getElementById('message');


// creazione e visualizzazione dei numeri randomici
for (i = 0; i < 5; i++) {
  const currentNumber = getRandom(minNumber, maxNumber);
  randoms.push(currentNumber);
  console.log(currentNumber);

  numbersListElement.innerHTML += `<li class="random-number">${currentNumber}</li>`;
}

// console.log(randoms);

// funzione asincrona a intervallo per generare countdown temporizzato
const countdown = setInterval(function () {
  countdownElement.innerText = count;
  count--;
  if (count < 0) {
    countdownStop(countdown);
  }
}, 1000);

// evento di submit del form
answersForm.addEventListener('submit', function (event) {

  event.preventDefault();

  for (let i = 0; i < inputNumbers.length; i++) {

    // inserimento degli input in un array
    const currentInput = inputNumbers[i];
    const currentInputInt = parseInt(currentInput.value);
    userInputs.push(currentInputInt);

    // push dei numeri inseriti presenti anche in randoms
    if (randoms.includes(currentInputInt)) {
      correctNumbers.push(currentInputInt);
    }
  }

  // cambio colore del testo in base ai numeri indovinati
  if (correctNumbers.length > 0) {
    message.classList.remove('text-danger');
    message.classList.add('text-success');
  } else {
    message.classList.add('text-danger');
    message.classList.remove('text-success');
  }

  // inserimento del risultato
  message.innerText = `Hai indovinato ${correctNumbers.length} numeri! (${correctNumbers})`;

  // azzeramento degli array relativi agli input utente
  userInputs.splice(0, userInputs.length);
  correctNumbers.splice(0, correctNumbers.length);

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
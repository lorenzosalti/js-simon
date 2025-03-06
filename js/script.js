// variabili creazione numeri
const randoms = [];
const minNumber = 1;
const maxNumber = 50;

// variabili elementi html
const numbersListElement = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');


// creazione e visualizzazione dei numeri randomici
for (i = 0; i < 5; i++) {
  const currentNumber = getRandom(minNumber, maxNumber);
  randoms.push(currentNumber);
  console.log(currentNumber);

  numbersListElement.innerHTML += `<li class="random-number">${currentNumber}</li>`;
}

console.log(randoms);



// setTimeout(countdownStop, 10_000, 10);




//genera un numero intero random tra min e max inclusi
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function countdownStop(clear) {
  numbersListElement.classList.add('d-none');
  answersForm.classList.remove('d-none');
  clearInterval(clear);
}
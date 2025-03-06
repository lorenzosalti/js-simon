const randoms = [];
const minNumber = 1;
const maxNumber = 50;




for (i = 0; i < 5; i++) {
  const currentNumber = getRandom(minNumber, maxNumber);
  randoms.push(currentNumber);
  console.log(currentNumber);
}

console.log(randoms);







//genera un numero intero random tra min e max inclusi
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
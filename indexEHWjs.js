const calculate = document.querySelector('.calculate');
const check = document.querySelector('.check');
const input = document.querySelector('.input');


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);

calculate.textContent = `${firstNumber} * ${secondNumber}`;

check.addEventListener('click', () => {
    if ((firstNumber * secondNumber) === Number(input.value)) {
        alert('Congadulation, your answer right!');
      
      firstNumber = getRandomNumber(1, 9);
      secondNumber = getRandomNumber(1, 9);
      calculate.textContent = `${firstNumber} * ${secondNumber}`;
      check.style.backgroundColor = "green";

    } else {
      alert("wrong! don't cry babe, just try again :) ");
    }
  
  input.value = '';
  input.focus();
});
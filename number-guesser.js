document.querySelector('.ok-button-js')
  .addEventListener('click', () => {
    addNumber();
  });
document.querySelector('.js-number-guess-quest-input')
  .addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addNumber();
    }
  })

let randomNumber = Math.floor(Math.random() * 100);

function addNumber () {
  const numberGuessQuest = document.querySelector('.js-number-guess-quest-input');
  const numberGuess = document.querySelector('.js-number-guess');

  const value = numberGuessQuest.value;
  if (value != "") {
    if (value == randomNumber) {
      numberGuess.innerHTML = `<p style="
      color: green;
      font-size: 18px;
      font-weight: bold;
      ">Eltaláltad!</p>`;
    }else if (value < randomNumber){
      numberGuess.innerHTML = `${value} kisebb a kitalált számnál`;
    }else if(value > randomNumber) {
      numberGuess.innerHTML = `${value} nagyobb a kitalált számnál`;
    };
    numberGuessQuest.value = "";
  }
}

function resetNumber() {

}
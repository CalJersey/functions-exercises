function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

function promptGuess(){
  guess = prompt('Guess Heads or Tails:');
  return guess;
}

function updateResult(str){
  document.getElementById('result').innerHTML = str;
}

function play(){
  promptGuess();
  updateResult(coinFlip());
}

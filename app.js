var userNum = Math.floor(Math.random()*10+1)
console.log(userNum);
var attemptsLeft = 7;
function checking(){
    var inputGuess = document.getElementById("userNum").value
    console.log(inputGuess);
if(inputGuess <1 || inputGuess>10){
 var check =document.getElementById("result").innerHTML='Please enter a number between 1 to 10!'
 console.log(check);
 
}
else{
    // attemptsLeft--;
    document.getElementById("attempts").innerHTML='attempts left :'+attemptsLeft
}
attemptsLeft--;
if (attemptsLeft >= 0) {
  document.getElementById('attempts').innerHTML = 'Attempts left: ' + attemptsLeft;
} else {
  document.getElementById('attempts').innerHTML = 'Attempts left: 0';
}
if(userNum==inputGuess){
document.getElementById("result").innerHTML='Congratulations🎉🥳! You Guessed the Number'
document.getElementById('userNum').disabled = true;
document.getElementById('Check').disabled = true;
document.getElementById('attempts').innerHTML = 'You won! Attempts left: 0';
alert("Congratulation !\n 🎉🥳")
}
else if (attemptsLeft == 0) {
    document.getElementById('result').innerHTML = 'Game over😢! The number was ' + userNum;
    document.getElementById("userNum").disabled=true;
    document.getElementById("Check").disabled=true;
  }
  else if(inputGuess<userNum){
document.getElementById("result").innerHTML='Your Guess is too low !'
  }
  else{
    document.getElementById("result").innerHTML='Your Guess is too high !'
  }
}

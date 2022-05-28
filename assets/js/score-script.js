var userScore = localStorage.getItem('user score');
var displayScore = document.getElementById("score");
var userName = document.getElementById('initials');
var scoreSubmit = document.getElementById('score-submit');
var initalsInput = document.getElementById('initials-input');
displayScore.textContent = userScore;

//scoreSubmit.addEventListener("click", localstorage.setItem(userName, userScore));


//document.getElementById('highscore.html').addEventListener('score-submit', function (events) {
  //  event.preventDefault();
    //localStorage.setItem(userName.value, userScore); 
//})

scoreSubmit.onclick = saveData;

function saveData(){
  var input = document.getElementById("highscore");
  localStorage.setItem(initialsInput, userScore);
  var storedValue = localStorage.getItem(initialsInput);
}
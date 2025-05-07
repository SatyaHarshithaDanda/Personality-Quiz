/*Add your JavaScript here*/
var introvertScore = 0 //store the introvert score
var extrovertScore = 0 //store the extrovert score

var questionCount = 0 //store the number of answers clicked on

var result = document.getElementById("result");
var restart = document.getElementById("restart");


var q1a1 = document.getElementById("q1a1")
var q1a2 = document.getElementById("q1a2")

var q2a1 = document.getElementById("q2a1")
var q2a2 = document.getElementById("q2a2")

var q3a1 = document.getElementById("q3a1")
var q3a2 = document.getElementById("q3a2")


q1a1.addEventListener("click", extrovert);
q1a2.addEventListener("click", introvert);

q2a1.addEventListener("click", introvert);
q2a2.addEventListener("click", extrovert);

q3a1.addEventListener("click", introvert);
q3a2.addEventListener("click", extrovert);

restart.addEventListener("click", restartQuiz);

function introvert() {
  introvertScore += 1;
  questionCount += 1;
  if(questionCount==1){
    q1a2.style.backgroundColor = '#096d65';
    }
   
   else if(questionCount==2){
     q2a1.style.backgroundColor = '#096d65';
   }
   else if (questionCount == 3){
     q3a1.style.backgroundColor = '#096d65';
     updateResult();
   }
    console.log("questionCount = " + questionCount + "\t" + " introvertScore = " + introvertScore);
}

function extrovert() {
  extrovertScore += 1;
  questionCount += 1;
  if(questionCount==1){
    q1a1.style.backgroundColor = '#096d65';
    }
   
   else if(questionCount==2){
     q2a2.style.backgroundColor = '#096d65';
   }
   else if (questionCount == 3){
     q3a2.style.backgroundColor = '#096d65';
     updateResult();
   }
    console.log("questionCount = " + questionCount + "\t" + " extrovertScore = " + extrovertScore);
}
//GET REULT / RESTART
function updateResult() {
  if (extrovertScore >= 2) {
    result.innerHTML = "You are an extrovert!";
    console.log("You are an extrovert!")
  } else if (introvertScore >= 2) {
    result.innerHTML = "You are an introvert!";
    console.log("You are an introvert!")
  }
}

function restartQuiz() {
  result.innerHTML = "You are an...";
  questionCount = 0;
  extrovertScore = 0;
  introvertScore = 0;
  resetBtn();
  console.log("questionCount = " + questionCount + "\t" + "introvertScore = " + introvertScore + "\t" + "extrovertScore = " + extrovertScore);
}

function resetBtn(){
  q1a1.style.backgroundColor = '#b2e0dc';
  q1a2.style.backgroundColor = '#b2e0dc';
  q2a1.style.backgroundColor = '#b2e0dc';
  q2a2.style.backgroundColor = '#b2e0dc';
  q3a1.style.backgroundColor = '#b2e0dc';
  q3a2.style.backgroundColor = '#b2e0dc';
}


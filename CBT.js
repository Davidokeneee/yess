let questions = [
  {question:'what is the capital of nigeria', options:['london','lagos','abuja'], correctanswer:'abuja'},
  {question:'who is the governor of lagos', options:['Babajide sanwo-olu','Sunny abacha','Akinwunmi ambode'], correctanswer:'babajide sanwo-olu'},
  {question:'who was the first president of Nigeria', options:['Nnamdi azikwe','bola ahmed tinubu','samuel eto'], correctanswer:'Nnamdi azikwe'}
];

let currentQuestionIndex = 0;
let userScore = 0;

function loadQuestion() {
 let questioncontainer = document.getElementById('question-container');
 let currentquestion = questions[currentQuestionIndex];  
 questioncontainer.innerHTML = `<h2>${currentquestion.question}</h2>
   <ul>${currentquestion.options.map(option => `<li onclick="selectoptions('${option}')">${option}</li>`).join("")}</ul>`;
}

function selectoptions(selectedoption) {
 sessionStorage.setItem("selectedOption", selectedoption);
}

function nextQuestion() {
   const selectedOption = sessionStorage.getItem("selectedOption");
   const currentQuestion = questions[currentQuestionIndex];

   // Check if the selected option is correct
   if (selectedOption === currentQuestion.correctanswer) {
       userScore++;
   }

   // Move to the next question or end the test
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
       sessionStorage.removeItem("selectedOption"); // Clear the selected option for the next question
       loadQuestion();
   } else {
       endTest();
   }
}

function endTest() {
 alert(`Test Completed!\nYour Score: ${userScore}/${questions.length}`);
 // Optionally, you can send the user's score to a server for storage or further analysis.
}

// Initial load
loadQuestion();

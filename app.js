
/*-------------------------------- Constants --------------------------------*/
// two arrays - one for flags + one for cities 
const citiesArray = [

    {
        image: "Cities/london.jpg",
        answers: ["New York", "London", "Beijing"],
        correctAnswer: "London"

    },
    {
        image: "Cities/Paris.jpg",
        answers: ["Paris", "Madrid", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        image: "Cities/capetown.jpg",
        answers: ["Cape Town", "Barcelona", "Rio de Janeiro"],
        correctAnswer: "Cape Town"
    },
    {
        image: "Cities/Berlin.avif",
        answers: ["Copenhagen", "Berlin", "Sydney"],
        correctAnswer: "Berlin"
    },
]
 

const flagsArray = [
    {
        image:"Flags/Ireland.webp",
        answers: ["Ireland", "France", "Italy"],
        correctAnswer: "Ireland"

    },
    {
        image: "Flags/France.gif",
        answers: ["Hungary", "France", "Japan"],
        correctAnswer: "France"
    },
    {
        image: "Flags/Vietnam.gif",
        answers: ["Canada", "Vietnam", "Australia"],
        correctAnswer: "Vietnam"
    },
]
/*-------------------------------- Variables --------------------------------*/
let chosenArray = [];
let currentQuestionIndex = 0
let score = 0
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector("#start-page");
const categoryPage = document.querySelector("#categories-page");
const quizContainer = document.querySelector(".quiz-container");
const citiesOption = document.querySelector("#cities-option")
const flagsOption = document.querySelector("#flags-option")
const questionButtons = document.querySelectorAll(".questions-button")
const questionImage = document.querySelector("#questions-image")
const nextButton = document.querySelector(".next-button")
const scoreElement = document.querySelector(".score span")
const finalScoreContainer = document.querySelector("#final-score-container")
const finalScoreSpan = document.querySelector("#final-score")
const restartBtn = document.querySelector("#restart-btn")
/*-------------------------------- Functions --------------------------------*/

function showCategoryPage() {
    startPage.style.display = "none";       
    categoryPage.style.display = "block";   
  }

 function categoryOptions(category) {
    categoryPage.style.display ="none";
    quizContainer.style.display = "block";

    chosenArray = category === "citiesQuiz" ? citiesArray : flagsArray 

    displayQuestion();
    
}

function displayQuestion() {
    const question = chosenArray[currentQuestionIndex]; 
    console.log('Displaying question:', question)

 
    questionImage.src = question.image

  
    questionButtons.forEach((button, index) => {
        button.innerHTML = question.answers[index]
        console.log(question.answers[index])
   })
  
}


function updateScoreDisplay() {
    scoreElement.innerHTML = score; 
}


function revealAnswer(event) {
    const userAnswer = event.target.innerHTML;
    const correctAnswer = chosenArray[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        event.target.style.backgroundColor = "green";
        score += 100; 
        updateScoreDisplay();
    } else {
        event.target.style.backgroundColor = "red";
    }

 function resetButtonColour() {
    questionButtons.forEach(button => {
    button.style.backgroundColor = "";
    });

    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < chosenArray.length) {
            resetButtonColour();
            displayQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    finalScoreContainer.style.display = "flex";
    finalScoreSpan.innerHTML = score;
}

function restartQuiz() {
    updateScoreDisplay();
    finalScoreContainer.style.display = "none";
    startPage.style.display = "flex";
}



// Event Listeners 

startBtn.addEventListener('click', showCategoryPage);

citiesOption.addEventListener('click', () => categoryOptions("citiesQuiz"));

flagsOption.addEventListener('click', () => categoryOptions("flagsQuiz"));

questionButtons.forEach((button) => button.addEventListener('click', revealAnswer));

restartBtn.addEventListener('click', restartQuiz);




/*-------------------------------- Constants --------------------------------*/
// two arrays - one for flags + one for cities 
const citiesArray = [

    {
        image: "../Cities/london.jpg",
        answers: ["New York", "London", "Beijing"],
        correctAnswer: "London"

    },
    {
        image: "../Cities/Paris.jpg",
        answers: ["Paris", "Madrid", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        image: "../Cities/capetown.jpg",
        answers: ["Cape Town", "Barcelona", "Rio de Janeiro"],
        correctAnswer: "Cape Town"
    },
    {
        image: "../Cities/Berlin.avif",
        answers: ["Copenhagen", "Berlin", "Sydney"],
        correctAnswer: "Berlin"
    },
]
 

const flagsArray = [
    {
        image:"../Flags/Ireland.webp",
        answers: ["Ireland", "France", "Italy"],
        correctAnswer: "Ireland"

    },
    {
        image: "../Flags/France.gif",
        answers: ["Hungary", "France", "Japan"],
        correctAnswer: "France"
    },
    {
        image: "../Flags/Vietnam.gif",
        answers: ["Canada", "Vietnam", "Australia"],
        correctAnswer: "Vietnam"
    },
]
/*-------------------------------- Variables --------------------------------*/
let chosenArray = [];
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector("#start-page");
const categoryPage = document.querySelector("#categories-page");
const quizContainer = document.querySelector("#quiz-container");
const citiesOption = document.querySelector(".cities-option")
const flagsOption = document.querySelector(".flags-option")
/*-------------------------------- Functions --------------------------------*/

function showCategoryPage() {
    startPage.style.display = "none";       
    categoryPage.style.display = "block";   
  }

 function categoryOptions(category) {
    categoryPage.style.display ="none";
    quizContainer.style.display = "block";

      if (category === "citiesQuiz") {
        chosenArray = citiesArray;
    } else if (category === "flagsQuiz") {
        chosenArray = flagsArray;
    }

    displayQuestion();
}


function displayQuestion() {
    const question = chosenArray[0]; 
    

}





//question: "./images/..name"

// forEach method. function for each element in array

// Event Listeners 

startBtn.addEventListener('click', showCategoryPage);

citiesOption.addEventListener('click', () => categoryOptions("citiesQuiz"));

flagsOption.addEventListener('click', () => categoryOptions("flagsQuiz"));


// Category Buttons 


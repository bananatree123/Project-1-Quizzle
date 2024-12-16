// Start Game Button
/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector("#start-btn");
const startPage = document.querySelector("#start-page");
const categoryPage = document.querySelector("#categories-page");
const quizContainer = document.querySelector("#quiz-container");
const citiesOption = document.querySelector(".cities-option")
const flagOption = document.querySelector(".flag-option")
/*-------------------------------- Functions --------------------------------*/
startBtn.addEventListener('click', () => {
startPage.style.display = "none";
categoryPage.style.display ="block";
})

categoryPage.addEventListener("click", () => {
    categoryPage.style.display = "none";     
    quizContainer.style.display = "block";    
})



// Category Buttons 


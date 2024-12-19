# Quizzle 

![Quizzle](<README Images/QuizzleGame.png>)
![Quizzle](<README Images/QuestionImage.png>)

README for Quizzle 


Quizzle is a game where the user has a choice of two categories "Cites" and "Flags". Once they have selected their chosen category they are taken to a quiz where they have to guess what they see in the image displayed, the player is given three different choices. If the player get the answer right they receive 100 points, once the player has answered all the questions they will see their final score and the option to play again. 

I chose this game because it gave me a chance to practice some key programming concepts, I also think a quiz game is fun and engaging for both the user and the developer. 

### Deployment Link 

### Timeframe 

This was a solo project where we had to make a game over the course of a week. 

### Technologies Used 
HTML
CSS
JavaScript

### Planning 

- Wireframes 
![Quizzle](<README Images/Wireframe1.png>)
![Quizzle](<README Images/Wireframe2.png>)

- Pseudocode 

User clicks Start Game Button
Make element visible with css 
Create a button with a class “Start Game!”
Use querySelector 
Cache the start button element 
Add a click event to the start button element 
Create start game element function 
Start game button hidden (css)
Category buttons visible (css)

User clicks one category 

Two buttons with classes named “Flags” + “Cities”
Two arrays of objects assigned to two different variables ..target each one based on which category has been clicked 
Use query selector
Cache each button element 
Add a click event to both buttons
Category buttons hidden (css)
Display div container of the category quiz

Clicks “cities” 
Clicking cities - starts game and
Const getElementById
Page with img, score, three buttons(possible answers), Timer
Define Choices- create an array of objects to represent answer / index of correct answer and compare against other possible answers from that same object, store image 
We can compare with an if statement if the correct answer === possible answer if === (apply green) or else (red)
Once user has answered question , next object should appear**
Score appears 

User clicks on an answer
Create a function that shows the results and use if/else statement and displays red or green border style.color
Target classList, score+= 100, and then target the scoreElement.innerHTML


Create div for congratulations you won! + You Lost! 
Use the visible / hidden (css)

### Attributions


### Build/Code Process
Monday
- Find Images for game, cities and flags. 
- Create quiz container with 5 divs: Start page, Categories page, Questions page, Score box, Final score container
- Create the buttons inside of these divs
- Buttons for starting the game, choosing a category, answers to questions and start again 
- CSS for the size and placement of my buttons within the quiz container 

Tuesday 
- Give start game button an id, cache and create a function to show and hide it, add an event listener so when clicked the button is hidden 
- Do this with Category Page button and apply a function which then hides the category page once the user has selected a category. 
- Create two different arrays of objects, Cities Array and Flags Array. 



### Challenges 

- Organizing my questions and answers

A problem I faced was organizing my questions, ensuring my image and answers were properly stored, my solution was to use an array of object to so my questions were structured properly. 

![Quizzle](<README Images/ArrayObjectsQuestions.png>)

- Displaying Questions and Answers 

Another challenge I faced was showing the different images and answers in the quiz and implementing a function and loop to do this. I found it difficult applying the different questions within their rightful buttons but using innerHTML and forEach loop I was able to do this. 

![Quizzle](<README Images/DisplayingQuestions.png>)

- Organising the interface of the game

My game required organsing the different buttons, sizing images and applying a lot of CSS to make sure everything was in the right place and to ensure the game looked engaging and easy for the user to interact with. 

- Displaying the next Question 

Inititally I struggled writing the code to move onto the next question once the player had selected their answer but by using currentQuestionIndex++ and an if statement I was eventually able to make this work. I added an additional setTimeout function which allowed the question to move onto the next after 1000ms. 

![Quizzle](<README Images/DisplayingNextQuestion.png>)

### Wins 




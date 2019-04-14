$(document).ready(function() {
// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// Event listeners 
    // hide timer
    $("#time-remaining").hide();
    // start game
    $(".start").on("click", gameStart);
  
});
//create an object containing variables needed:
    var intervalId;
        timer = 30;
        breakTimer = 5;
        correctAnswer = 0;
        wrongAnswer = 0;
        unanswered = 0;
        currentQuestion = 0;
        triviaGame =[{question: "What year did Nintendo start making video games?",
                     choices: ["1973", "1987", "2010", "1983"],
                     answer: [0, "1973"]},
                    {question: "In what game did Mario make his first appearance?",
                     choices: ["Super Mario Bros.", "Donkey Kong", "Duck Hunt", "Mario Kart 64"],
                     answer: [1, "Donkey Kong"]},
                    {question: "What was Mario's name before his name was Mario?",
                     choices: ["Punchman", "Plumber Man", "Jumpman", "Carpenter Man"],
                     answer: [2, "Jumpman"]},
                    {question: "What did Nintendo do before video games?",
                     choices: ["Playing Cards", "Love Hotels", "Baseball", "Watches"],
                     answer: [0, "Playing Cards"]},
                    {question: "What is the name of the enemy that kidnaps Princess Peach?",
                     choices: ["Kamek", "Lakitu", "Yoshi", "Bowser"],
                     answer: [3, "Bowser"]}];

                     console.log(triviaGame);
    // functions for the trivia game

    // this function starts the game
    function gameStart(){
        // display and start timer; show time-remaining div
        run();
        // hide start button
        $('.start').hide();
        // display question and choices
        $('#questions').show;
        var questionP = $('<p>');
        questionP.addClass('question');
        questionP.attr("data-question", triviaGame[currentQuestion].question);
        questionP.text(triviaGame[currentQuestion].question);
        $('#questions').append(questionP);

        $('#choices').show;
        for (let i = 0; i < triviaGame[currentQuestion].choices.length; i++){
            var choicesButton = $('<button>');
            choicesButton.addClass('options');
            choicesButton.attr('data-choices', triviaGame[currentQuestion].choices[i]);
            choicesButton.attr('answer', triviaGame[currentQuestion].answer[1]);
            choicesButton.text(triviaGame[currentQuestion].choices[i]);
            $('#choices').append(choicesButton);
        }
         // listen for users choices
        $('.options').on("click", function choicesCheck(){
            
         // check user choices if correct or not
         
            // if choice equals answer increment correctAnswer
            var userInput = $(this).attr('data-choices');
            console.log("userInput: " + userInput)

            var answer = $(this).attr('answer');
            console.log("answer: " + answer)

            if (userInput == answer){
                correctAnswer++;
                $('#questions').hide();
                $('#choices').hide();
                $('#results').show();
                stop();
            // display winning image for 5 seconds in results div
            var victoryImage = $('<img>');
            victoryImage.attr("src", "assets/images/200px-Mario_Victory_Pose_Artwork_-_Super_Mario_64.png");
            $('#results').append(victoryImage);
            victoryTimer();
            // move to next question
            }
            
            // else if choice !== correctAnswer increment wrongAnswer
            else if (userInput !== triviaGame[currentQuestion].answer[0]){
                wrongAnswer++;
                var wrongAnswer = $('<p>');
                wrongAnswer.addClass('wrong');
                wrongAnswer.attr("data-wrong", triviaGame[currentQuestion].answer[1]);
                wrongAnswer.text(triviaGame[currentQuestion].answer[1]);
                $('#results').append(answer);
                $('#questions').hide();
                $('#choices').hide();
                $('#results').show();
            }
            // display text that user is incorrect and show correctAnswer in results div
            // move to next question
            
            currentQuestion++;
            if(currentQuestion >= triviaGame.length){
                currentQuestion = 0;

            }
        });
    }
    
    
    

    function nextQuestion(){
        // clear results div
        // display next question and choices
        // display and start reset timer 20 seconds
        // check user choices if correct or not

    }
    function endgameResults(){
        // when final question answered, in results div
        // display scores of the following
        // correctAnswer: 
        // wrongAnswer: 
        // unanswered: 
        // gameReset button to bring user back to start
    }

    function gameReset (){
        // clear results div 
        // hide time-remaining div
        // show start button 
        // correctAnswer: 0,
        // wrongAnswer: 0,
        // unanswered: 0,
        // setCounter = 0,
        // timer: 20,
    }
    
// timer functions
function run() {
    $('.start').hide();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $('#time-remaining').show();
  }

function decrement(){
    timer--;
        $("#time-remaining").html("<h2>" + timer + "</h2>");
    
        if (timer === 0){
            stop();
            endgameResults();
        }
}
function stop() {
    clearInterval(intervalId);
}
function victoryTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(pause, 1000);
    $('#time-remaining').show();
}
function pause(){
    breakTimer--;
}






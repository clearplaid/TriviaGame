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
    $(".start").on("click", triviaGame.gameStart);
    // check users choices
    $(document).on("click", ".choices", triviaGame.choicesCheck);
});
//create an object containing variables needed:
    var triviaGame = {
        correctAnswer: 0,
        wrongAnswer: 0,
        unanswered: 0,
        timer: 20,
        
        currentQuestion: 0,
        qaBundle: [{question: "What year did Nintendo start making video games?",
                     choices: ["1973", "1987", "2010", "1983"],
                     answer: 0},
                    {question: "In what game did Mario make his first appearance?",
                     choices: ["Super Mario Bros.", "Donkey Kong", "Duck Hunt", "Mario Kart 64"],
                     answer: 1},
                    {question: "What was Mario's name before his name was Mario?",
                     choices: ["Punchman", "Plumber Man", "Jumpman", "Carpenter Man"],
                     answer: 2},
                    {question: "What did Nintendo do before video games?",
                     choices: ["Playing Cards", "Love Hotels", "Baseball", "Watches"],
                     answer: 0},
                    {question: "What is the name of the enemy that kidnaps Princess Peach?",
                     choices: ["Kamek", "Lakitu", "Yoshi", "Bowser"],
                     answer: 3}],

        questions: {
            q1: "What year did Nintendo start making video games?",
            q2: "In what game did Mario make his first appearance?",
            q3: "What was Mario's name before his name was Mario?",
            q4: "What did Nintendo do before video games?",
            q5: "What is the name of the enemy that kidnaps Princess Peach?",
        },
        choices: {
            c1: ["1975", "1987", "2010", "1983"],
            c2: ["Super Mario Bros.", "Donkey Kong", "Duck Hunt", "Mario Kart 64"],
            c3: ["Punchman", "Plumber Man", "Jumpman", "Carpenter Man"],
            c4: ["Playing Cards", "Love Hotels", "Baseball", "Watches"],
            c5: ["Kamek", "Lakitu", "Bowser", "Yoshi"],
        },
        answers: {
            a1: "1973",
            a2: "Donkey Kong",
            a3: "Jumpman",
            a4: "Playing Cards",
            a5: "Bowser",
        },
    
    // methods for the trivia game

    // this method starts the game
    gameStart: function(){
        // hide start button
        $('.start').hide();
        // display question and choices
        var question1 = triviaGame.qaBundle[0].question;
        $('#questions').text(question1);

        var choices = triviaGame.qaBundle[0].choices;

        for (let i=0; i<choices.length; i++){
            var choiceButton = $('<button>').text(triviaGame.qaBundle[0].choices[i]); 
            choiceButton.addClass('choices');
            $('#choices').append(choiceButton);
        }
        // display and start timer; show time-remaining div
        $('time-remaining').show();
        // check user choices if correct or not
        
      
    },

    choicesCheck: function(){
        // if choice equals answer increment correctAnswer
        if (choiceButton === triviaGame.qaBundle[0].answer){
            $('#results').text("Woo-hoo!");
        }
        // display winning image for 5-10 seconds in results div
        // move to next question
        // else if choice !== correctAnswer increment wrongAnswer
        // display text that user is incorrect and show correctAnswer in results div
        // move to next question
        // else timer runs out increment unanswered
        // display text time ran out and show correctAnswer in results div
    },

    nextQuestion: function(){
        // clear results div
        // display next question and choices
        // display and start reset timer 20 seconds
        // check user choices if correct or not

    },
    endgameResults: function(){
        // when final question answered, in results div
        // display scores of the following
        // correctAnswer: 
        // wrongAnswer: 
        // unanswered: 
        // gameReset button to bring user back to start
    },

    gameReset: function(){
        // clear results div 
        // hide time-remaining div
        // show start button 
        // correctAnswer: 0,
        // wrongAnswer: 0,
        // unanswered: 0,
        // setCounter = 0,
        // timer: 20,
    },
    
}
console.log(triviaGame)




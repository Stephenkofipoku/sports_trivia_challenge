// Get the instruction button element
const instructionButton = document.getElementById('instruction-button');

// Get the modal overlay element
const modalOverlay = document.getElementById('modal-overlay');

// Get the close modal button element
const closeModalButton = document.getElementById('close-modal');

// Function to toggle the visibility of the modal overlay
function toggleModal() {
    modalOverlay.style.display = modalOverlay.style.display === 'none' ? 'flex' : 'none';
}

// Function to display a random history question
function displayRandomHistoryQuestion() {
    questionArea.textContent = randomQuestion.question;

    for (let i = 0; i < randomQuestion.options.length; i++) {
        const option = randomQuestion.options[i];
        const optionElement = document.createElement('span');
        optionElement.textContent = option;
        optionElement.setAttribute('data-index', i);
        questionArea.appendChild(optionElement);
    }
}

// Display a random history question initially
displayRandomHistoryQuestion();

// Get the question area element
const questionArea = document.querySelector('.question-area');

// Get the answer box element
const answerBox = document.getElementById('answer-box');

// Get the submit answer button element
const submitButton = document.querySelector('.btn--answer');

// Get the score elements
const scoreElement = document.getElementById('score');
const incorrectElement = document.getElementById('incorrect');

// Set the initial score and incorrect answer count
let score = 0;
let incorrect = 0;

// History questions and answers
const historyQuestions = [
    {
        question: "Which country won the first FIFA World Cup in 1930?",
        options: ["Brazil", "Uruguay (Correct)", "Germany"],
        correctAnswer: 1,
    },
    {
        question: "Who holds the record for the most home runs in a single MLB season?",
        options: ["Babe Ruth", "Barry Bonds (Correct)", "Hank Aaron"],
        correctAnswer: 1,
    },
    {
        question: "Which athlete won the most Olympic gold medals in history?",
        options: ["Usain Bolt", "Michael Phelps (Correct)", "Carl Lewis"],
        correctAnswer: 1,
    },
    {
        question: "Who was the first African-American to play in Major League Baseball?",
        options: ["Jackie Robinson (Correct)", "Hank Aaron", "Willie Mays"],
        correctAnswer: 0,
    },
    {
        question: "Which team won the first Super Bowl in 1967?",
        options: ["Green Bay Packers (Correct)", "Dallas Cowboys", "New England Patriots"],
        correctAnswer: 0,
    },
];

// Wait for the DOM to finish loading before starting the game
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {
    let score = 0;
    let historyQuestions = [];

    function checkAnswer(selectedIndex) {
        if (selectedIndex === historyQuestions[0].correctIndex) {
            incrementScore();
        }
        displayHistoryQuestion();
    }

    function calculateCorrectAnswer(question) {
        return question.options[question.correctIndex];
    }

    function incrementScore() {
        score++;
        document.getElementById('score').textContent = score;
    }

    function displayHistoryQuestion() {
        const questionArea = document.getElementById('question');
        const optionsArea = document.getElementById('options');
        const question = historyQuestions.shift();

        questionArea.textContent = question.question;

        optionsArea.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn');
            button.addEventListener('click', () => checkAnswer(index));
            optionsArea.appendChild(button);
        });
    }

    fetch('https://api.myjson.com/bins/1gwnal')
        .then(response => response.json())
        .then(data => {
            historyQuestions = data.questions;
            displayHistoryQuestion();
        });
}

runGame();

function checkAnswer() { }

function calculateCorrectAnswer() { }

function incrementScore() { }

function incrementWrongAnswer() { }

function displayHistoryQuestion() { }

function displayRulesQuestion() { }

function displayRecordsQuestion() { }

function displayTeamsQuestion() { }

function displayQuotesQuestion() { }
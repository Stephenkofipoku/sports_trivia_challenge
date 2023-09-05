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

// Add event listeners to the instruction button and close modal button
instructionButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);

// Get the question area element
const questionArea = document.querySelector('.question-area');

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
        options: ["Brazil", "Uruguay", "Germany"],
        correctAnswer: 1,
    },
    {
        question: "Who holds the record for the most home runs in a single MLB season?",
        options: ["Babe Ruth", "Barry Bonds", "Hank Aaron"],
        correctAnswer: 1,
    },
    {
        question: "Which athlete won the most Olympic gold medals in history?",
        options: ["Usain Bolt", "Michael Phelps", "Carl Lewis"],
        correctAnswer: 1,
    },
    {
        question: "Who was the first African-American to play in Major League Baseball?",
        options: ["Jackie Robinson", "Hank Aaron", "Willie Mays"],
        correctAnswer: 0,
    },
    {
        question: "Which team won the first Super Bowl in 1967?",
        options: ["Green Bay Packers", "Dallas Cowboys", "New England Patriots"],
        correctAnswer: 0,
    },
];

// Function to display a random history question
function displayRandomHistoryQuestion() {
    const randomQuestion = historyQuestions[Math.floor(Math.random() * historyQuestions.length)];

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

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const randomQuestion = historyQuestions[Math.floor(Math.random() * historyQuestions.length)];

    if (selectedIndex === randomQuestion.correctAnswer) {
        incrementScore();
        alert("Correct answer!");
    } else {
        incrementIncorrect();
        alert("Wrong answer!");
    }

    // Display a new random history question
    displayRandomHistoryQuestion();
}

// Function to increment the score
function incrementScore() {
    score++;
    scoreElement.textContent = score;
}

// Function to increment the incorrect answer count
function incrementIncorrect() {
    incorrect++;
    incorrectElement.textContent = incorrect;
}

// Add event listeners to options
questionArea.addEventListener('click', (event) => {
    const selectedIndex = event.target.getAttribute('data-index');

    if (selectedIndex !== null) {
        checkAnswer(parseInt(selectedIndex));
    }
});
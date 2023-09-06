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

let currentQuestionIndex = 0;

// Function to display a random history question
function displayRandomHistoryQuestion() {
    const randomQuestionIndex = Math.floor(Math.random() * historyQuestions.length);
    const randomQuestion = historyQuestions[randomQuestionIndex];

    // Clear previous options
    questionArea.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = randomQuestion.question;
    questionArea.appendChild(questionElement);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');

    for (let i = 0; i < randomQuestion.options.length; i++) {
        const option = randomQuestion.options[i];
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.setAttribute('data-index', i);
        optionElement.addEventListener('click', handleAnswerSelection);
        optionsContainer.appendChild(optionElement);
    }

    questionArea.appendChild(optionsContainer);

    // Store the index of the current question
    currentQuestionIndex = randomQuestionIndex;
}

// Display a random history question initially
displayRandomHistoryQuestion();

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const question = historyQuestions[currentQuestionIndex];

    if (selectedIndex === question.correctAnswer) {
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

// Function to handle answer selection
function handleAnswerSelection(event) {
    const selectedIndex = parseInt(event.target.getAttribute('data-index'));
    checkAnswer(selectedIndex);
}

// Get the submit button element
const submitButton = document.getElementById('submit-button');

// Add event listener to the submit button
submitButton.addEventListener('click', handleAnswerSubmission);

// Function to handle answer submission
function handleAnswerSubmission() {
    // Check if an answer has been selected
    const selectedOption = questionArea.querySelector('.option.selected');
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
        checkAnswer(selectedIndex);
        // Remove the selected class from the option
        selectedOption.classList.remove('selected');
    } else {
        alert("Please select an answer.");
    }
}

// Add event listeners to options for selection
questionArea.addEventListener('click', (event) => {
    const selectedOption = event.target;
    if (selectedOption.classList.contains('option')) {
        const allOptions = questionArea.querySelectorAll('.option');
        allOptions.forEach((option) => {
            option.classList.remove('selected');
        });
        selectedOption.classList.add('selected');
    }
});
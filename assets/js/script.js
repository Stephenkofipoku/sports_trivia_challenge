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

// Sports rules and regulations questions
const rulesQuestions = [
    {
        question: "What happens if a player receives two yellow cards in a single match?",
        options: [
            "The player is sent off with a red card",
            "The player is suspended for the next match",
            "The player is allowed to continue playing"
        ],
        correctAnswer: 0,
    },
    {
        question: "How many times can a tennis player hit the ball before it must cross the net?",
        options: [
            "Once",
            "Twice",
            "Three times"
        ],
        correctAnswer: 0,
    },
    {
        question: "In a 100-meter sprint, what happens if an athlete false starts?",
        options: [
            "The athlete is disqualified",
            "The race is restarted",
            "The athlete receives a time penalty"
        ],
        correctAnswer: 0,
    },
    {
        question: "How long can a player hold the ball without dribbling in basketball?",
        options: [
            "3 seconds",
            "5 seconds",
            "8 seconds"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the maximum number of clubs a golfer is allowed to carry in their bag during a round?",
        options: [
            "10 clubs",
            "14 clubs",
            "18 clubs"
        ],
        correctAnswer: 1,
    },
];

// Sports records and statistics questions
const recordsQuestions = [
    {
        question: "Who holds the record for the most home runs in a single MLB season?",
        options: [
            "Babe Ruth",
            "Barry Bonds",
            "Hank Aaron"
        ],
        correctAnswer: 1,
    },
    {
        question: "Which basketball player has the highest career points per game average in the NBA?",
        options: [
            "Michael Jordan",
            "LeBron James",
            "Wilt Chamberlain"
        ],
        correctAnswer: 2,
    },
    {
        question: "Which soccer player has scored the most goals in FIFA World Cup history?",
        options: [
            "Lionel Messi",
            "Cristiano Ronaldo",
            "Miroslav Klose"
        ],
        correctAnswer: 2,
    },
    {
        question: "Who holds the record for the most Olympic gold medals won by an athlete?",
        options: [
            "Usain Bolt",
            "Michael Phelps",
            "Simone Biles"
        ],
        correctAnswer: 1,
    },
    {
        question: "Which NFL quarterback has the most career passing yards?",
        options: [
            "Peyton Manning",
            "Tom Brady",
            "Drew Brees"
        ],
        correctAnswer: 2,
    },
];

// Sports teams and logos questions
const teamsQuestions = [
    {
        question: "Which city is home to the team with a logo featuring a bear wearing a helmet?",
        options: ["Chicago", "New York", "Los Angeles"],
        correctAnswer: 0,
    },
    {
        question: "The team with a logo of a horse is based in which city?",
        options: ["Denver", "Seattle", "Miami"],
        correctAnswer: 0,
    },
    {
        question: "Which city is represented by the team with a logo featuring a roaring lion?",
        options: ["Detroit", "Dallas", "Atlanta"],
        correctAnswer: 0,
    },
    {
        question: "The team with a logo of a pirate is based in which city?",
        options: ["Pittsburgh", "San Francisco", "New Orleans"],
        correctAnswer: 0,
    },
    {
        question: "Which city is home to the team with a logo featuring a basketball and a crown?",
        options: ["Sacramento", "Cleveland", "Houston"],
        correctAnswer: 1,
    },
];

// Sports quotes and sayings questions
const quotesQuestions = [
  {
    question: "Which athlete is known for the quote: 'I've failed over and over and over again in my life. And that is why I succeed.'?",
    options: ["Michael Jordan", "Serena Williams", "Tom Brady"],
    correctAnswer: 0,
  },
  {
    question: "Which sport is associated with the quote: 'It's not whether you get knocked down, it's whether you get up.'?",
    options: ["Boxing", "Soccer", "American football"],
    correctAnswer: 0,
  },
  {
    question: "Which athlete is known for the quote: 'You miss 100% of the shots you don't take.'?",
    options: ["Wayne Gretzky", "LeBron James", "Usain Bolt"],
    correctAnswer: 0,
  },
  {
    question: "Which sport is associated with the quote: 'Hard work beats talent when talent doesn't work hard.'?",
    options: ["Basketball", "Swimming", "Track and field"],
    correctAnswer: 0,
  },
  {
    question: "Which athlete is known for the quote: 'The difference between the impossible and the possible lies in a person's determination.'?",
    options: ["Muhammad Ali", "Simone Biles", "Roger Federer"],
    correctAnswer: 0,
  },
];

let currentQuestionIndex = 0;
let currentGameType = historyQuestions; // Set the default game type to history

// Function to display a random question
function displayRandomQuestion() {
    const randomQuestionIndex = Math.floor(Math.random() * currentGameType.length);
    const randomQuestion = currentGameType[randomQuestionIndex];

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
displayRandomQuestion();

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const question = currentGameType[currentQuestionIndex];

    if (selectedIndex === question.correctAnswer) {
        incrementScore();
        alert("Correct answer!");
    } else {
        incrementIncorrect();
        alert("Wrong answer!");
    }

    // Display a new random question
    displayRandomQuestion();
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
        checkAnswerSubmission(selectedIndex);
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

// Get the game type buttons
const historyButton = document.getElementById('history');
const rulesButton = document.getElementById('rules');
const recordsButton = document.getElementById('records');
const teamsButton = document.getElementById('teams');

// Add event listeners to game type buttons
historyButton.addEventListener('click', () => {
    currentGameType = historyQuestions;
    displayRandomQuestion();
});

rulesButton.addEventListener('click', () => {
    currentGameType = rulesQuestions;
    displayRandomQuestion();
});

recordsButton.addEventListener('click', () => {
    currentGameType = recordsQuestions;
    displayRandomQuestion();
});

teamsButton.addEventListener('click', () => {
    currentGameType = teamsQuestions;
    displayRandomQuestion();
});
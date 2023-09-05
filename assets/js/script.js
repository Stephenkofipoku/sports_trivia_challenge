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

// Add event listener to the instruction button
instructionButton.addEventListener('click', toggleModal);

// Add event listener to the close modal button
closeModalButton.addEventListener('click', toggleModal);

// Wait for the DOM to finish loading before starting the game
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

function runGame() {}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayHistoryQuestion() {}

function displayRulesQuestion() {}

function displayRecordsQuestion() {}

function displayTeamsQuestion() {}

function displayQuotesQuestion() {}
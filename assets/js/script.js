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
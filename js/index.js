// Grab all key elements
const keys = document.querySelectorAll('.key');

// Grab the display element
const display = document.querySelector('.display');

// Initialize the text that the user is typing
let typedText = "";

// Function to handle key press
function handleKeyPress(e) {
    const key = e.target.textContent;

    // Handle backspace
    if (e.target.classList.contains('backspace')) {
        typedText = typedText.slice(0, -1);
    } 
    // Handle spacebar
    else if (e.target.classList.contains('space')) {
        typedText += " ";  // Add a space
    } 
    else {
        // Add the pressed key to the typed text
        typedText += key;
    }

    // Update the display with the typed text
    display.textContent = typedText || "Start typing...";

    // Add 'pressed' class for animation
    e.target.classList.add('pressed');

    // Remove the 'pressed' class after the animation ends
    setTimeout(() => {
        e.target.classList.remove('pressed');
    }, 200);
}

// Add event listeners to each key
keys.forEach(key => {
    key.addEventListener('click', handleKeyPress);
});

function updateCharacterCount() {
    const text = document.getElementById('text').value;
    const charCount = text.length;
    document.getElementById('char-count').textContent = `${charCount}/500 Characters`;
}

function submitFeedback() {
    const feedback = document.getElementById('text').value;
    if (feedback.length === 0) {
        alert('Please enter your feedback before sending.');
    } else {
        // Logic to send feedback goes here
        alert('Feedback sent successfully!');
    }
}

// Add event listener to the back arrow
document.querySelector('.back-arrow').addEventListener('click', function() {
    window.history.back();  // Go back one step in the browser history
});
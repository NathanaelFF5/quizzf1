document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get all checkboxes with the name "ecuries"
    var checkboxes = document.querySelectorAll('input[name="ecuries"]:checked');

    // Extract the values of the checked checkboxes
    var selectedValues = Array.from(checkboxes).map(function(checkbox) {
        return checkbox.value;
    });

    // Define the correct answers
    var correctAnswers = ["red_bull", "ferrari", "aston_martine", "mercedes", "mclaren"];

    // Check if selected values match correct answers
    var isCorrect = selectedValues.every(function(value) {
        return correctAnswers.includes(value);
    });

    // Display feedback based on correctness
    var feedback = document.createElement('h3');
    if (isCorrect && selectedValues.length === correctAnswers.length) {
        feedback.innerHTML = "Bravo, vous avez trouvé les bonnes écuries !";
    } else {
        feedback.innerHTML = "Bien essayé ... mais non.";
    }

    // Create and append the "Continuer" button regardless of correctness
    var continueButton = document.createElement('button');
    continueButton.innerHTML = "Continuer";
    continueButton.className = "continuerButton";  // Add the class for styling
    continueButton.onclick = function() {
        window.location.href = 'page4.html';
    };

    // Append the feedback and button to the body
    document.body.appendChild(feedback);
    document.body.appendChild(continueButton);
});

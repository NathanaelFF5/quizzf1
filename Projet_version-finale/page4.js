document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected pilot from the dropdown
    var selectedPilot = document.querySelector('select').value;

    // Define the correct answer
    var correctAnswer = "lewis_hamilton"; // Assuming this is the correct answer

    // Display feedback based on correctness
    var feedback = document.createElement('h3');
    if (selectedPilot === correctAnswer) {
        feedback.innerHTML = "Bravo, vous avez choisi le meilleur pilote de tous les temps !";
    } else {
        feedback.innerHTML = "Bien essayé, mais la réponse correcte est Lewis Hamilton.";
    }

    // Create and append the "Continuer" button
    var continueButton = document.createElement('button');
    continueButton.innerHTML = "Continuer";
    continueButton.className = "continuerButton";  // Add the class for styling
    continueButton.onclick = function() {
        window.location.href = 'page5.html'; // Replace 'page5.html' with the next page
    };

    // Append the feedback and button to the body
    document.body.appendChild(feedback);
    document.body.appendChild(continueButton);
});

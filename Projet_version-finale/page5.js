document.addEventListener('DOMContentLoaded', function() {
    function showFeedback() {
        // Remove the previous feedback message if it exists
        var previousFeedback = document.querySelector('.feedback-message');
        if (previousFeedback) {
            previousFeedback.remove();
        }

        // Get the rating form and the rating value
        var ratingForm = document.querySelector('.rating');
        var ratingValue = document.querySelector('input[name="star-radio"]:checked');

        // Check if a rating is selected
        if (ratingValue) {
            ratingValue = parseInt(ratingValue.value);

            // Display different messages based on the inverted rating
            var feedbackMessage = document.createElement('p');
            feedbackMessage.className = 'feedback-message'; // Add a class for easy removal
            if (ratingValue == 1) {
                feedbackMessage.innerHTML = "Je vois que nous sommes sur la même longueur d'onde !";
            } else if (ratingValue == 2) {
                feedbackMessage.innerHTML = "Allez c'est quoi une étoile de plus !";
            } else if (ratingValue == 3) {
                feedbackMessage.innerHTML = "Pas besoin d'être timide !";
            } else if (ratingValue == 4) {
                feedbackMessage.innerHTML = "Je ne suis pas d'accord avec ça !";
            } else {
                feedbackMessage.innerHTML = "Quel manque d'honnêteté !";
            }

            // Append the feedback to the body
            document.body.appendChild(feedbackMessage);
        }
    }

    // Call the showFeedback function when the user interacts with the page
    document.addEventListener('click', showFeedback);
});

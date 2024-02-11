document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var selectedValue = document.querySelector('input[name="pneus"]:checked');

    if (selectedValue) {
        var feedback = document.createElement('h3');
        feedback.innerHTML = (selectedValue.value === "soft") ? "Bravo vous avez trouvé la bonne réponse !" : "Dommage, le talent n'est pas donné à tout le monde !";
        document.body.appendChild(feedback);

        var continuerButton = document.createElement('button');
        continuerButton.className = "continuerButton";
        continuerButton.innerHTML = "Continuer";
        continuerButton.onclick = function() {
            window.location.href = 'page3.html';
        };
        document.body.appendChild(continuerButton);
    } else {
        var feedback = document.createElement('h2');
        feedback.innerHTML = "Veuillez sélectionner une réponse.";
        document.body.appendChild(feedback);
    }
});

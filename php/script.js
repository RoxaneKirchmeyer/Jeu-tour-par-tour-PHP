///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const restartButton = document.getElementById('restartButton');

    // Ajout d'un gestionnaire d'événements 'click' au bouton de redémarrage
    restartButton.addEventListener('click', function (event) {
        // Empêche le comportement par défaut du bouton (par exemple, le rechargement de la page)
        event.preventDefault();
    });

    // Ajout d'un gestionnaire d'événements 'submit' au formulaire pour empêcher la soumission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const playButton = document.getElementByClass('playButton');

// Ajout d'un gestionnaire d'événements 'click' au bouton de redémarrage
playButton.addEventListener('click', function (event) {
    // Empêche le comportement par défaut du bouton (par exemple, le rechargement de la page)
    event.preventDefault();
});

// Ajout d'un gestionnaire d'événements 'submit' au formulaire pour empêcher la soumission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez les boutons d'attaque
    var attaqueJoueur1Button = document.querySelector('[name="attaque_joueur1"]');
    var attaqueJoueur2Button = document.querySelector('[name="attaque_joueur2"]');

    // Fonction pour activer et désactiver les boutons en alternance
    function alternerBoutons() {
        attaqueJoueur1Button.disabled = !attaqueJoueur1Button.disabled;
        attaqueJoueur2Button.disabled = !attaqueJoueur2Button.disabled;
    }

    // Ajoutez un gestionnaire d'événement pour alterner les boutons après chaque clic
    attaqueJoueur1Button.addEventListener('click', function () {
        alternerBoutons();
        // Définissez un délai de 1000 millisecondes (1 seconde) pour réactiver le bouton du joueur 1
        setTimeout(function () {
            attaqueJoueur1Button.disabled = false;
        }, 1000);
    });

    attaqueJoueur2Button.addEventListener('click', function () {
        alternerBoutons();
        // Définissez un délai de 1000 millisecondes (1 seconde) pour réactiver le bouton du joueur 2
        setTimeout(function () {
            attaqueJoueur2Button.disabled = false;
        }, 1000);
    });
});
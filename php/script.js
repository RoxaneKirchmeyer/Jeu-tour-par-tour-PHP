const player1 = {
    nom: "Player 1",
    pointsDeVie: 40,
    attaque: null,
    estEnAttente: true,
    selectedClass: selectedClasses
};

const player2 = {
    nom: "Player 2",
    pointsDeVie: 40,
    attaque: null,
    estEnAttente: false,
    selectedClass: selectedClasses
};

// Récupération de l'element dans l'HTML
const containerFight = document.getElementById('container-fight');

// Création de la div pour le player 1 
const player1Div = document.createElement('div');
player1Div.id = 'player1';
// Création du titre de player 1
const player1Title = document.createElement('h2');

// Création de la div des sorts de player1
const player1Spells = document.createElement('div');
player1Spells.id = 'player1-spells';

player1Div.appendChild(player1Title);
player1Div.appendChild(player1Spells);

// Création du div pour le player 2
const player2Div = document.createElement('div');
player2Div.id = 'player2';
// Création du titre de player 2
const player2Title = document.createElement('h2');
// Création de la div des sorts de player2
const player2Spells = document.createElement('div');
player2Spells.id = 'player2-spells';

player2Div.appendChild(player2Title);
player2Div.appendChild(player2Spells);

// Ajout des divs des joueurs dans le container-fight
containerFight.appendChild(player1Div);
containerFight.appendChild(player2Div);

// Création de la div résultat
const resultatDiv = document.getElementById('resultat');

// Création de la div de sélection des classes des personnages
const selectionClasseDiv = document.createElement('div');
selectionClasseDiv.id = 'selection-classe';
const title = document.createElement('h2');
title.textContent = 'Choisissez votre classe :';
selectionClasseDiv.appendChild(title);


// Création de l'overlay
const overlay = document.createElement('div');
overlay.classList.add('overlay');

// fin création éléments HTML

// Debut du jeu

function jouerTour(joueurActif, adversaire, degatsInfliges) {
    // Réduit les points de vie de l'adversaire par la quantité de dégâts infligés
    adversaire.pointsDeVie -= degatsInfliges;
    // Génère un message décrivant l'attaque et les dégâts infligés à l'adversaire
    let message = `${joueurActif.nom} attaque! ${adversaire.nom} perd ${degatsInfliges} points de vie. Points de vie restants : ${adversaire.pointsDeVie}`;
    // Affiche le message dans un élément HTML spécifié par la variable resultatDiv
    resultatDiv.textContent = message;
}

function afficherEtatDesJoueurs() {
    // Crée des chaînes de caractères décrivant l'état actuel des joueurs avec leur nom et leurs points de vie
    const joueur1 = `${player1.nom}: ${player1.pointsDeVie} points de vie`;
    const joueur2 = `${player2.nom}: ${player2.pointsDeVie} points de vie`;

    // Crée deux éléments <p> pour afficher les informations des joueurs
    const p1 = document.createElement("p");
    // Assigne la chaîne de caractères du joueur 1 au premier paragraphe
    p1.textContent = joueur1;
    const p2 = document.createElement("p");
    // Assigne la chaîne de caractères du joueur 2 au deuxieme paragraphe
    p2.textContent = joueur2;

    // Ajoute les éléments <p> contenant les informations des joueurs à l'élément HTML spécifié par resultatDiv
    resultatDiv.appendChild(p1);
    resultatDiv.appendChild(p2);
}

function choisirSort(sort, joueur) {
    // Détermine le joueur actif et l'adversaire en fonction du numéro de joueur passé en paramètre
    const joueurActif = joueur === 1 ? player1 : player2;
    const adversaire = joueur === 1 ? player2 : player1;

    // Vérifie si le joueur actif est en attente et si le jeu n'est pas terminé
    if (joueurActif.estEnAttente && !jeuTermine()) {

        // Récupère les dégâts du sort sélectionné par le joueur
        const degatsDuSort = joueurActif.selectedClass.sorts[sort - 1].damage;

        // Calcule les dégâts infligés à l'adversaire
        const degatsInfliges = joueurActif.attaque + degatsDuSort;
        console.log(degatsDuSort)
        // Effectue l'action du tour : attaque de joueurActif sur adversaire avec les dégâts spécifiés
        jouerTour(joueurActif, adversaire, degatsInfliges);
        // Met à jour l'affichage de l'état des joueurs après l'action
        afficherEtatDesJoueurs();
        // Met à jour les états d'attente des joueurs pour le tour suivant
        joueurActif.estEnAttente = false;
        adversaire.estEnAttente = true;
        // Vérifie si le jeu est terminé après cette action
        verifierFinDuJeu();

        // Désactiver les sorts du joueur actif
        desactiverSortsJoueur(joueur);

        // Active les sorts du prochain joueur si le jeu n'est pas terminé
        if (!jeuTermine()) {
            activerSortsJoueur(joueur === 1 ? 2 : 1);
        }
    }

    function jeuTermine() {
        // Vérifie si les points de vie de l'un des joueurs (player1 ou player2) sont inférieurs ou égaux à zéro
        return player1.pointsDeVie <= 0 || player2.pointsDeVie <= 0;
    }


    function verifierFinDuJeu() {
        // Vérifie si le joueur 1 a perdu en vérifiant si ses points de vie sont inférieurs ou égaux à zéro
        if (player1.pointsDeVie <= 0) {
            // Si le joueur 1 a perdu, crée un message indiquant sa défaite
            let message = "Player 1 a perdu !";
            // Affiche le message de défaite dans l'élément HTML resultatDiv
            resultatDiv.textContent = message;
            // Désactive les sorts du joueur 1
            desactiverSortsJoueur(1);
            // Affiche le résultat final du jeu avec le message de défaite
            afficherResultatFinal(message);
            // Vérifie si le joueur 2 a perdu en vérifiant si ses points de vie sont inférieurs ou égaux à zéro
        } else if (player2.pointsDeVie <= 0) {
            // Si le joueur 2 a perdu, crée un message indiquant sa défaite
            let message = "Player 2 a perdu !";
            // Affiche le message de défaite dans l'élément HTML resultatDiv
            resultatDiv.textContent = message;
            // Désactive les sorts du joueur 2
            desactiverSortsJoueur(2);
            // Affiche le résultat final du jeu avec le message de défaite
            afficherResultatFinal(message);
        }
    }

    function afficherResultatFinal() {
        // Crée un nouvel élément <p> pour afficher le résultat final
        const resultatFinal = document.createElement("p");
        // Crée des chaînes de caractères indiquant les points de vie restants des deux joueurs
        const pvPlayer1 = `${player1.nom} : ${player1.pointsDeVie} points de vie`;
        const pvPlayer2 = `${player2.nom}: ${player2.pointsDeVie} points de vie.`;

        // Formate et assigne le contenu de l'élément <p> avec les informations sur les points de vie des joueurs
        resultatFinal.textContent = `Résultat final : ${pvPlayer1}, ${pvPlayer2}`;
        // Ajoute l'élément <p> contenant le résultat final à l'élément HTML spécifié par resultatDiv
        resultatDiv.appendChild(resultatFinal);
    }


    function desactiverSortsJoueur(joueur) {
        // Sélectionne tous les éléments de classe CSS correspondant aux boutons du joueur spécifié
        const sortsJoueur = document.querySelectorAll(`.bouton-joueur${joueur}`);
        // Pour chaque élément correspondant aux sorts du joueur
        sortsJoueur.forEach(sort => {
            // Désactive le bouton en le rendant non cliquable
            sort.disabled = true;
        });
    }

    function activerSortsJoueur(joueur) {
        // Sélectionne tous les éléments de classe CSS correspondant aux boutons du joueur spécifié
        const sortsJoueur = document.querySelectorAll(`.bouton-joueur${joueur}`);
        // Pour chaque élément correspondant aux sorts du joueur
        sortsJoueur.forEach(sort => {
            // Active le bouton en le rendant cliquable
            sort.disabled = false;
        });
    }

    afficherEtatDesJoueurs();

    // Sélectionne tous les éléments HTML qui ont la classe CSS '.bouton-joueur1' (boutons associés au joueur 1)
    const sortsJoueur1 = document.querySelectorAll('.bouton-joueur1');
    // Pour chaque élément correspondant aux boutons du joueur 1
    sortsJoueur1.forEach(sort => {
        // Ajoute un écouteur d'événements 'click' à chaque bouton
        sort.addEventListener('click', () => {
            // Lorsque le bouton est cliqué, appelle la fonction choisirSort avec le numéro du sort et le numéro du joueur (ici, 1)
            choisirSort((sort.dataset.sort), 1);
        });
    });

    // Sélectionne tous les éléments HTML qui ont la classe CSS '.bouton-joueur2' (boutons associés au joueur 2)
    const sortsJoueur2 = document.querySelectorAll('.bouton-joueur2');
    // Pour chaque élément correspondant aux boutons du joueur 2
    sortsJoueur2.forEach(sort => {
        // Ajoute un écouteur d'événements 'click' à chaque bouton
        sort.addEventListener('click', () => {
            // Lorsque le bouton est cliqué, appelle la fonction choisirSort avec le numéro du sort et le numéro du joueur (ici, 2)
            choisirSort((sort.dataset.sort), 2);
        });
    });






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
}
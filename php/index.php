<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combat au tour par tour</title>
</head>

<body>
    <?php
    // l'objectif est d'utiliser les classes de PHP et la POO pour instancier vos personnages qui vont se battre dans votre jeu.
    // Il faut que le projet soit bien séparé dans plusieurs fichiers différents
    // Il faut absoluement utiliser javascript pour éviter que la page se raffraichisse (event prevent default lors de l'appuie du bouton submit)

    include 'jeu.php';
    include 'classes/base.php';
    include 'classes/mage.php';
    include 'classes/guerrier.php';
    include 'classes/pretre.php';
    include 'classes/chasseur.php';


    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['select_class'])) {
        $selected_class = $_POST['class'];
        // Crée une instance de la classe sélectionnée
        switch ($selected_class) {
            case 'chasseur':
                $joueur = new Chasseur(18, 20, 18);
                break;
            case 'mage':
                $joueur = new Mage(15, 15, 20);
                break;
            case 'guerrier':
                $joueur = new Guerrier(20, 18, 15);
                break;
            case 'pretre':
                $joueur = new Pretre(15, 15, 20);
                break;
            default:
                // Gestion d'erreur ou comportement par défaut si une classe inconnue est sélectionnée
                break;
        }
    }


    // Affiche le formulaire de sélection de classe s'il n'y a pas encore de joueur sélectionné
    if (!isset($joueur)) {
    ?>
        <form method="post">
            <label for="class">Choisissez votre classe :</label>
            <select name="class" id="class">
                <option value="chasseur">Chasseur</option>
                <option value="mage">Mage</option>
                <option value="guerrier">Guerrier</option>
                <option value="pretre">Prêtre</option>
            </select>
            <button type="submit" name="select_class" class="playButton">Sélectionner</button>
        </form>

    <?php
    } else {
        // Affiche les caractéristiques et l'attaque spéciale du joueur sélectionné
        echo '<h2>' . ucfirst($selected_class) . '</h2>';
        echo '<h3>Stats de base</h3>' . $joueur->conc() . '<br>';
        echo '<h4>Attaque spéciale : </h4>' . $joueur->attakSpec();
        echo '<br> <hr>';
    }
    ?>
    <script src="script.js"></script>
</body>

</html>
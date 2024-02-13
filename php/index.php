<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fight !</title>
</head>


<body>
    <h1>Champ de Bataille d'Azeroth : Affrontements Héroïques</h1>

    <div id="container-fight"></div>

    <div id="resultat"></div>



    <script src="script.js"></script>
</body>
<?php
// l'objectif est d'utiliser les classes de PHP et la POO pour instancier vos personnages qui vont se battre dans votre jeu.
// Il faut que le projet soit bien séparé dans plusieurs fichiers différents
// Il faut absoluement utiliser javascript pour éviter que la page se raffraichisse (event prevent default lors de l'appuie du bouton submit)
include 'classes/base.php';
include 'classes/guerrier.php';
include 'classes/mage.php';
include 'classes/chasseur.php';
include 'classes/pretre.php';

?>
<form>
    <button type="submit" id="restartButton">Relancer le jeu</button>
</form>

</html>
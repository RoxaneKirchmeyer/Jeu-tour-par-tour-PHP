<?php
// Initialisation des points de vie si les variables cachées n'existent pas
$joueur1_pv = isset($_POST['joueur1_pv']) ? $_POST['joueur1_pv'] : 100;
$joueur2_pv = isset($_POST['joueur2_pv']) ? $_POST['joueur2_pv'] : 100;

// Si une attaque est effectuée par le joueur 1
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['attaque_joueur1'])) {
    // Calcul des dégâts
    $degats = 5;
    
    // Application des dégâts au joueur 2
    $joueur2_pv -= $degats;

    $attaque_joueur1_disabled = 'disabled';
    
    // Vérification si le joueur 2 est mort
    if ($joueur2_pv <= 0) {
        $fin_du_jeu = true;
        echo "Joueur 1 a gagné!";
    }
}

// Si une attaque est effectuée par le joueur 2
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['attaque_joueur2'])) {
    // Calcul des dégâts
    $degats = 5;
    
    // Application des dégâts au joueur 1
    $joueur1_pv -= $degats;

    $attaque_joueur2_disabled = 'disabled';
    
    // Vérification si le joueur 1 est mort
    if ($joueur1_pv <= 0) {
        $fin_du_jeu = true;
        echo "Joueur 2 a gagné!";
    }
}

// Si le jeu n'est pas terminé, mettre à jour les variables cachées
if (!isset($fin_du_jeu) || !$fin_du_jeu) {
    $joueur1_pv_hidden = '<input type="hidden" name="joueur1_pv" value="' . $joueur1_pv . '">';
    $joueur2_pv_hidden = '<input type="hidden" name="joueur2_pv" value="' . $joueur2_pv . '">';
} else {
    // Si le jeu est terminé, ne pas inclure les variables cachées
    $joueur1_pv_hidden = '';
    $joueur2_pv_hidden = '';
}
?>

<h1>Combat au tour par tour</h1>
<form method="post">
    <button type="submit" name="attaque_joueur1" <?php echo isset($attaque_joueur1_disabled) ? 'disabled' : ''; ?>>Attaquer Joueur 2</button>
    <?php echo $joueur1_pv_hidden; ?>
    <?php echo $joueur2_pv_hidden; ?>
</form>


<form method="post">
    <button type="submit" name="attaque_joueur2" <?php echo isset($attaque_joueur2_disabled) ? 'disabled' : ''; ?>>Attaquer Joueur 1</button>
    <?php echo $joueur1_pv_hidden; ?>
    <?php echo $joueur2_pv_hidden; ?>
</form>

<div>
    <?php 
    // Affichage des points de vie
    echo "Joueur 1 PV: " . $joueur1_pv . "<br>";
    echo "Joueur 2 PV: " . $joueur2_pv . "<br>";
    ?>
</div>
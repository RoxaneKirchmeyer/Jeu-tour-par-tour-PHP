<?php 
class Pretre extends Personnage
{
    public function attakSpec()
    {
        return "Flammes sacrées";
    }
}

// $pretre = new Pretre(15, 15, 20);
// echo '<h2>Prêtre</h2>';
// echo '<h3>Stats de base</h3>' . $pretre->conc() . '<br>';
// echo '<h4>Attaque spéciale : </h4>' . $pretre->attakSpec();
// echo '<br> <hr>';

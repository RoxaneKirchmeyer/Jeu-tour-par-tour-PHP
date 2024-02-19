<?php
class Chasseur extends Personnage
{
    public $fleche_explo;
    
    public function __construct($pv, $def, $pa, $fleche_explo)
    {
        parent::__construct($pv, $def, $pa);
        $this->fleche_explo = $fleche_explo;
    }
    public function attakSpecName()
    {
        return "Flèche explosive";
    }
    public function attakSpec($ennemi)
    {
        $ennemi->pv -= $this->fleche_explo;
    }
}
?>
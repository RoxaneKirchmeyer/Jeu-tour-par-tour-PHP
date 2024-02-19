<?php

class Pretre extends Personnage
{
    public $flammes_sacrees;

    public function __construct($pv, $def, $pa, $flammes_sacrees)
    {
        parent::__construct($pv, $def, $pa);
        $this->flammes_sacrees = $flammes_sacrees;
    }

    public function attakSpecName()
    {
        return "Flammes sacrées";
    }
    public function attakSpec($ennemi)
    {
        $ennemi->pv -= $this->flammes_sacrees;
    }
}
?>
<?php
class Mage extends Personnage
{
    public $expl_pyro;
    
    public function __construct($pv, $def, $pa, $expl_pyro)
    {
        parent::__construct($pv, $def, $pa);
        $this->expl_pyro = $expl_pyro;
    }
    public function attakSpecName()
    {
        return "Explosion pyrotechnique";
    }
    public function attakSpec($ennemi)
    {
        $ennemi->pv -= $this->expl_pyro;
    }
    
}
?>

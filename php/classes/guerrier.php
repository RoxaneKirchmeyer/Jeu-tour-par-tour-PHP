<?php
class Guerrier extends Personnage
{
    public $execution;
    
    public function __construct($pv, $def, $pa, $execution)
    {
        parent::__construct($pv, $def, $pa);
        $this->execution = $execution;
    }
    public function attakSpecName()
    {
        return "Execution";
    }
    public function attakSpec($ennemi)
    {
        $ennemi->pv -= $this->execution;
    }
}
?>

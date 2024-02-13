<?php
class Personnage
{

    // Attributs
    public $pv = 20;
    public $def = 20;
    public $pa = 20;


    // Constructor
    public function __construct($pv, $def, $pa)
    {
        $this->pv = $pv;
        $this->def = $def;
        $this->pa = $pa;
    }

    // Getters
    public function getPv()
    {
        return $this->pv;
    }
    public function getDef()
    {
        return $this->def;
    }
    public function getPa()
    {
        return $this->pa;
    }

    // Setters
    public function setPv($pv)
    {
        $this->pv = $pv;
    }
    public function setDef($def)
    {
        $this->def = $def;
    }
    public function setPa($pa)
    {
        $this->pa = $pa;
    }

    // Methods
    public function conc()
    {
        return "Points de vie : " . $this->pv . "<br>" . "Défense : " . $this->def . "<br>" . "Points d'attaque : " . $this->pa . "";
    }
}
?>
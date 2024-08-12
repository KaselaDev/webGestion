<?php
  class web extends DBAbstract{

    public $nombre;

    function __construct(){
      parent::__construct();
      
      $consulta = $this->query("SELECT * from webs")[0];

      $this->nombre = $consulta["titulo"];

    }

  }
?>
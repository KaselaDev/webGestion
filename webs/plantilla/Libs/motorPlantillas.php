<?php
  class generarPlantilla{
      
    public $buffer;
		private $vista;
		private $error;
		private $errno;

    function __construct($view){
      $this->view = $view;

      if (!file_exists("Views/".$view."View.html")) {
        echo "No se encontro la vista <b>".$view."</b>";
        exit();
      }

      $this->buffer = file_get_contents("Views/".$view."View.html");

    }

    function setVars($vars){
      
      foreach ($vars as $key => $content) {
        
        if($this->testVar($key)){
          $this->buffer = str_replace("{{".$key."}}", $content, $this->buffer);
        }else{
					echo "No existe en la vista la variable <b>$key</b>";
					exit();
				}

      }

    }

    function testVar($name){
			return strpos($this->buffer, $name);
		}

    function print(){
			echo $this->buffer;
		}

  }
  
?>
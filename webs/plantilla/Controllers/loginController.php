<?php

  $webData = new web();

  $vars = ["nombre" => $webData->nombre];

  $tpl = new generarPlantilla("login");

  $tpl->setVars($vars);

  if (isset($_GET['email'])) {
    $user = new User();
    if ($user->login($_GET['email'],$_GET['pass'],$idWeb)) {
      var_dump($_SESSION);
      
      header("Location: ?slug=dashboard".$_SESSION[$idWeb]["rol"]);
    }
    
  }
    
  $tpl->print();

?>
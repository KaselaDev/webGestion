<?php
    
    $vars = ["nombre" => $webData->nombre, "username" => $_SESSION[$idWeb]['username']];
    
    $tpl = new generarPlantilla("dashboard");

    $tpl->setVars($vars);

    $tpl->print();

?>
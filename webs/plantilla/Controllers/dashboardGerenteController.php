<?php
    
    $vars = ["nombre" => $webData->nombre, "username" => $_SESSION[$idWeb]['username']];
    
    $tpl = new generarPlantilla("dashboardGerente");

    $tpl->setVars($vars);

    $tpl->print();

?>
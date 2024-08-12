<?php

    $webData = new web();

    $vars = ["nombre" => $webData->nombre];

    $tpl = new generarPlantilla("landing");

    $tpl->setVars($vars);

    echo "<hr><br><br><br>";

    $tpl->print();

?>
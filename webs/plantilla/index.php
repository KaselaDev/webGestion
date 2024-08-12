<?php
  /**
   * Variables de configuracion de web
   */
  $idWeb = 1;

  require_once "./Controllers/registro.php";
  require_once "./Libs/motorPlantillas.php";
  require_once "./Models/DBAbstract.php";
  require_once "./Controllers/head.php";
  require_once "./Models/user.php";
  require_once "./Models/web.php";
  session_start();
  var_dump($_SESSION);
  echo '<br><a href="?slug=login">login</a>';
  
  $webData = new web();

  if (isset($_SESSION['username'])) {
    registro($_SESSION['username']);
  }else{
    registro("userAnonimo");
  }

  $session = "landing";

  if(isset($_GET['slug'])){
    $session = $_GET['slug'];
  }else{
    if (!file_exists("./Controllers/".$session."Controller.php")) {
      $session = "error404";
    }else{
      $controller_gerente = ["landing","register","logout","dashboardGerente"];
    
      $controller_empleado = ["landing","empleadoPanel","logout"];
    
      $Controller_anonimo = ["login","landing"];
    
      switch (isset($_SESSION['rol'])) {
        case 'gerente':
          $Controller_test = $controller_gerente;
          $default_session = "dashboardGerente";
          break;
        case 'empleado':
          $Controller_test = $controller_empleado;
          $default_session = "empleadoPanel";
          break;
        default:
          $Controller_test = $Controller_anonimo;
          $default_session = "landing";
          break;
      }
      $validAccess = false;
      foreach ($Controller_test as $value) {
        if ($value == $session) {
          $validAccess = true;
        }
      }
      if (!$validAccess) {
          $session = $default_session;
      }
    }
  }
  require './Controllers/'.$session.'Controller.php';
?>
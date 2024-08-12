<?php
  class User extends DBAbstract{

    function login($email,$pass,$idWeb){
      $this->logout();
      $consulta = $this->query("SELECT * FROM `usuarios` WHERE email='".$_GET['email']."';")[0];
      if(empty($consulta)){
        echo "El email es invalido";
				exit();
      }

      if ($consulta['idWeb'] != $idWeb) {
        echo "El email es invalido";
				exit();
      }

      if (md5($pass) != $consulta['clave']) {
        echo "La clave es invalido";
        exit();
      }else{
        $_SESSION[$idWeb]["username"] = $consulta["nombre"];
        $_SESSION[$idWeb]["rol"] = $consulta["rol"];
        $_SESSION[$idWeb]["idUsuario"] = $consulta["idUsuario"];

        return true;
      }
      
    }

    function logout(){
      if (isset($_SESSION)) {
        session_unset();
        session_destroy();
      }
    }
  }
?>
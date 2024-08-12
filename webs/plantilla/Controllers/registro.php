<?php
    /**
     * Realiza un registro del usuario guardando fecha, ip, usuario, sistema operativo, navegador y a la pagina que accedio
     * @param NULL 
     * @return NULL
    */
    function registro($user){
        
        $fecha_registro = date('Y-m-d H:i:s', strtotime('-3 hours', strtotime(date('Y-m-d H:i:s'))));
        (isset($user))?($user_registro=$user):($user_registro="userAnonimo");

        // Obtener el user agent del cliente
        $user_agent = $_SERVER['HTTP_USER_AGENT'];

        // Función para obtener el sistema operativo desde el user agent
        function obtenerSistemaOperativo($user_agent) {
            $sistemas_operativos = array(
                '/windows nt 11/i'      => 'Windows 11',
                '/windows nt 10/i'      => 'Windows 10',
                '/windows nt 6.3/i'     => 'Windows 8.1',
                '/windows nt 6.2/i'     => 'Windows 8',
                '/windows nt 6.1/i'     => 'Windows 7',
                '/windows nt 6.0/i'     => 'Windows Vista',
                '/windows nt 5.2/i'     => 'Windows Server 2003/XP x64',
                '/windows nt 5.1/i'     => 'Windows XP',
                '/windows xp/i'         => 'Windows XP',
                '/windows nt 5.0/i'     => 'Windows 2000',
                '/windows me/i'         => 'Windows ME',
                '/win98/i'              => 'Windows 98',
                '/win95/i'              => 'Windows 95',
                '/win16/i'              => 'Windows 3.11',
                '/macintosh|mac os x/i' => 'Mac OS X',
                '/mac_powerpc/i'        => 'Mac OS 9',
                '/linux/i'              => 'Linux',
                '/ubuntu/i'             => 'Ubuntu',
                '/iphone/i'             => 'iPhone',
                '/ipod/i'               => 'iPod',
                '/ipad/i'               => 'iPad',
                '/android/i'            => 'Android',
                '/blackberry/i'         => 'BlackBerry',
                '/webos/i'              => 'Mobile'
            );
        
            foreach ($sistemas_operativos as $regex => $sistema_operativo) {
                if (preg_match($regex, $user_agent)) {
                    return $sistema_operativo;
                }
            }
        
            return 'Desconocido';
        }

        // Función para obtener el navegador desde el user agent
        function obtenerNavegador($user_agent) {
            $navegadores = array(
                '/msie/i'      => 'Internet Explorer',
                '/edge/i'      => 'Edge',
                '/firefox/i'   => 'Firefox',
                '/safari/i'    => 'Safari',
                '/chrome/i'    => 'Chrome',
                '/opera/i'     => 'Opera',
                '/netscape/i'  => 'Netscape',
                '/maxthon/i'   => 'Maxthon',
                '/konqueror/i' => 'Konqueror',
                '/mobile/i'    => 'Handheld Browser'
            );
        
            foreach ($navegadores as $regex => $navegador) {
                if (preg_match($regex, $user_agent)) {
                    return $navegador;
                }
            }
        
            return 'Desconocido';
        }

        // Obtener el sistema operativo y el navegador del usuario actual
        $sistema_operativo_registro = obtenerSistemaOperativo($user_agent);
        $navegador_registro = obtenerNavegador($user_agent);
        $ip_registro=$_SERVER['REMOTE_ADDR'];

        //  *|fecha|ip|user|sistema operativo+navegador|pagina
        $registro = "*|$fecha_registro|$ip_registro|$user_registro|$sistema_operativo_registro|$navegador_registro|".$_SERVER['REQUEST_URI'];
        file_put_contents("./Models/registro.csv","$registro\n", FILE_APPEND);
    }
?>
<?php
  mysqli_report(MYSQLI_REPORT_OFF);

	define("HOST", "localhost");
	define("USER", "KaselaSQL");
	define("PASS", "Sc091005");
	define("DB", "webGestion");

  class DBAbstract{

		public $db;

		function __construct(){

			$this->connect();

		}

		function connect(){
			
			$this->db = new mysqli(HOST, USER, PASS, DB);	

			
			if($this->db->connect_errno){
				echo "Se produjo un error en la conexion: <br>".$this->db->connect_errno;

				exit();
			}
		}

		function query($sql){
			
			$this->connect();

			$response = $this->db->query($sql);

			if($this->db->errno){
				echo "Ocurrio un error: ".$this->db->error;
				exit();
			}

			$dml = strstr($sql, " ", true);

			switch ($dml) {
				case 'SELECT':
				case 'DESCRIBE':
				case 'CALL':
						return $response->fetch_all(MYSQLI_ASSOC);
					break;
				
				default:
						return true;
					break;
			}

		}
  }
?>
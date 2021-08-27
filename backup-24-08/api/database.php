<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, X-Request-With, Accept');

define('DB_HOST', 'localhost');
define('DB_USER', 'ubijourn_nursing_journal');
define('DB_PASS', 'nursing@2021');
define('DB_NAME', 'ubijourn_nursing');

function connect()
{
  $connect=mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
  return $connect;
}
$con = connect();
?>
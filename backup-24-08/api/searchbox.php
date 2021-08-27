<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Request-With, Content-Type, Accept");
require 'database.php';
$data =[];
$rawData = file_get_contents("php://input");

function RemoveSpecialChar($str) {
    $res = str_replace( array("'" ), '__ampersandsign#39;', $str);
    return $res;
    }
$str1 = RemoveSpecialChar($rawData); 
 $sql =  "select * from articles where keywords like '%$str1%' or authors like '%$str1%' or title like '%$str1%' or doi like '%$str1%'";
if($result = mysqli_query($con, $sql)){
  foreach ($result as $key) {
     $data[] = $key;
  }
  echo json_encode($data);
}else{
  http_response_code(404);
}
 ?>
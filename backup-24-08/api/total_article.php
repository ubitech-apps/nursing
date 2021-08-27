<?php
require_once 'database.php';

$data = [];

$sql = "SELECT count(*) as total FROM articles";

if ($result = mysqli_query($con, $sql)) {
	$row = mysqli_fetch_assoc($result);
    $data = $row;
   
    echo json_encode($data);
} else {
    http_response_code(404);
}
?>
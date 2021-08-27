<?php
require_once 'database.php';
$data = [];
$sql = "SELECT * FROM indexing_abstracting_master WHERE status=1";
if ($result = mysqli_query($con, $sql)) {
	$i = 0;
	while ($row = mysqli_fetch_assoc($result)) {
		$data[$i]['id'] = $row['id'];
		$data[$i]['image'] = $row['image'];
		$data[$i]['status'] = $row['status'];
		$data[$i]['link'] = $row['link'];
	    $i++;
	}
    echo json_encode($data);
} else {
    http_response_code(404);
}
?> 
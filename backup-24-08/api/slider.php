<?php
require_once 'database.php';

$data = [];

$sql = "SELECT * FROM sliderimages";

if ($result = mysqli_query($con, $sql)) {
	$i = 0;
	while ($row = mysqli_fetch_assoc($result)) {

		$data[$i]['image'] = $row['img_name'];
		$data[$i]['img_path'] = $row['img_path'];

    	$data[$i]['description'] = html_entity_decode ($row['description']);

	    $i++;
	}
    echo json_encode($data);
} else {
    http_response_code(404);
}
?> 
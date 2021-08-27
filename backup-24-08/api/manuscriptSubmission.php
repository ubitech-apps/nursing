<?php
require_once 'database.php';

$data = [];

$sql = "SELECT * FROM page_master WHERE page_id = 3743";

if ($result = mysqli_query($con, $sql)) {
	$row = mysqli_fetch_assoc($result);
    $data['page_id'] = $row['page_id'];
    $data['page_title'] = $row['page_title'];
    $data['page_content'] = html_entity_decode ($row['page_content']);
    echo json_encode($data);
} else {
    http_response_code(404);
}
?>
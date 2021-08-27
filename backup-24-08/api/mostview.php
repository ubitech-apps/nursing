<?php
require_once 'database.php';
$sql="SELECT A.*, IM.* FROM articles A , issue_master IM WHERE A.issue_id=IM.issue_id ORDER BY `view` DESC LIMIT 10";
$data = array();
if($result = mysqli_query($con, $sql)){
    foreach ($result as $key) {
        $data[] = $key;
    }
    echo json_encode($data);
}else{
    http_response_code(404);
}
?>
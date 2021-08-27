<?php
require_once 'database.php';

$data = array();
$sql="SELECT t.category_name,t.category_id,A.article_id FROM category_master t, articles A Where t.category_id= A.article_category group by category_name";
$result = mysqli_query($con, $sql);
$i=0;
while ($key=mysqli_fetch_assoc($result)) {
	$data[$i]['category_name'] = $key['category_name'];

	$data[$i]['category_id'] = $key['category_id'];
	$i++;
}
echo json_encode($data);
?>
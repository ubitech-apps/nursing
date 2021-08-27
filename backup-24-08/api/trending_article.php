<?php
require_once 'database.php';

$data = array();
$sql="SELECT * FROM articles ORDER BY view DESC LIMIT 4";
$result = mysqli_query($con, $sql);

$i=0;

while($row = mysqli_fetch_assoc($result)){


	$data[$i]['article_id']=$row['article_id'];

	$data[$i]['title']=$row['title'];

	$data[$i]['authors']=$row['authors'];

	$data[$i]['graphic']=$row['graphic'];



	$i++;
}
echo json_encode($data);
?>
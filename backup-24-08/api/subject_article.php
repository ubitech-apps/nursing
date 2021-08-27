<?php
require 'database.php';
$data =[];
$heading =[];
$id = isset($_REQUEST['id'])?$_REQUEST['id']:'';
$sql="SELECT C.category_name, C.category_id FROM articles A ,category_master C where article_category=$id and A.article_category=C.category_id group by C.category_name";
$result = mysqli_query($con, $sql);
$i=0;
while($row = mysqli_fetch_assoc($result)){
	$heading[$i]['category_name']=$row['category_name'];
	$sql1 = "SELECT A.*,A.supplementary, DATE_FORMAT(A.publish_date,'%e %b %Y') as formatted FROM articles A ,category_master C WHERE A.article_category='".$row['category_id']."' and A.article_category=C.category_id";
	$result1 = mysqli_query($con, $sql1);
	$j=0;
	while ($row1 = mysqli_fetch_assoc($result1)) {

		$data[$j]=$row1;
		
		$j++;
	}
	$heading[$i]['data']=$data;
	unset($data);
	$i++;
}
echo json_encode($heading);
?>
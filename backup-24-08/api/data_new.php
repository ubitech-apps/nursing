<?php

require_once 'database.php';

$heading = array();

$data = array();

$sql = "SELECT category_id, category_name FROM articles A , issue_master IM , article_type C WHERE A.issue_id=IM.issue_id and IM.issue_status= 'current' and C.category_id = A.article_type group by category_name";

$result = mysqli_query($con, $sql);

$i=0;

while($row = mysqli_fetch_assoc($result)){

	$heading[$i]['category_name']=$row['category_name']; 


	$sql1 = "SELECT A.article_id, A.title,A.supplementary, A.authors, A.file_url, A.pages, A.keywords, A.view, A.download, A.doi, A.long_desc, A.referances, A.full_text, A.publish_date, A.graphic, DATE_FORMAT(publish_date,'%d - %M - %y') as dates FROM articles A , issue_master IM , article_type C WHERE A.issue_id=IM.issue_id and IM.issue_status= 'current' and C.category_id = A.article_type  AND A.article_type='".$row['category_id']."'";

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
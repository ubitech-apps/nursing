<?php

require_once 'database.php';

$heading = array();

$data = array();

$sql = "SELECT DATE_FORMAT(`date_publish`, '%Y') as date_publi FROM issue_master GROUP by DATE_FORMAT(`date_publish`, '%Y')  ORDER BY date_publish DESC";

$result = mysqli_query($con, $sql);

$i=0;

while($row = mysqli_fetch_assoc($result)){

	$heading[$i]['date_publish']=$row['date_publi'];

	$sql1="SELECT * FROM issue_master
	WHERE DATE_FORMAT(`date_publish`, '%Y') ='".$row['date_publi']."' and issue_status = 'Archive'";

	$result1 = mysqli_query($con, $sql1);

	$j=0;

	while ($row1 = mysqli_fetch_assoc($result1)) {

		$data[$j]['issue_id']=$row1['issue_id'];

		$data[$j]['issue_no']=$row1['issue_no'];

		$data[$j]['issue_period ']=$row1['issue_period '];

		$j++;

	}

	$heading[$i]['data']=$data;

	unset($data);

	$i++;

}

echo json_encode($heading);
 ?>
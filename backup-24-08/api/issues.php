<?php

require_once 'database.php';

$id = isset($_REQUEST['id'])?$_REQUEST['id']:'';

$heading = array();

$data = array();

$sql = "SELECT * FROM issue_master WHERE issue_status = 'Archive'  GROUP by volume " ;

$result = mysqli_query($con, $sql);

$i=0;

while($row = mysqli_fetch_assoc($result)){

	$heading[$i]['volume']=$row['volume'];

	$heading[$i]['date_publish']=$row['date_publish'];

	$heading[$i]['issue_id']=$row['issue_id'];


	$sql1 = "SELECT * FROM `issue_master` WHERE issue_status = 'Archive' AND  `volume`='".$row['volume']."'";

	$result1 = mysqli_query($con, $sql1);

	$j=0;

	while ($row1 = mysqli_fetch_assoc($result1)) {

		$data[$j]['issue_id ']=$row1['issue_id '];

		$data[$j]['number']=$row1['number'];

		$data[$j]['date_publish']=$row1['date_publish'];



		$data[$j]['volume']=$row1['volume'];

		$j++;

	}

	$heading[$i]['data']=$data;

	unset($data);

	$i++;

}

echo json_encode($heading);

?>	
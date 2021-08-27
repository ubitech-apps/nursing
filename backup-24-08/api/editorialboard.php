<?php

require_once 'database.php';

$heading = array();

$data = array();

$sql = "SELECT heading FROM editorial_board  WHERE `status`=1 group by heading";

$result = mysqli_query($con, $sql);

$i=0;

while($row = mysqli_fetch_assoc($result)){

	$heading[$i]['heading']=$row['heading'];

	$sql1 = "SELECT * FROM `editorial_board` WHERE `status`=1 AND `heading`='".$row['heading']."'";

	$result1 = mysqli_query($con, $sql1);

	$j=0;

	while ($row1 = mysqli_fetch_assoc($result1)) {

		$data[$j]['name']=$row1['name'];

		$data[$j]['department']=$row1['department'];

		$data[$j]['address']=$row1['address'];

		$data[$j]['contact']=$row1['contact'];

		$data[$j]['email']=$row1['email'];

		$data[$j]['image']=$row1['image'];

		$data[$j]['heading']=$row1['heading'];

		$j++;

	}

	$heading[$i]['data']=$data;

	unset($data);

	$i++;

}

echo json_encode($heading);

?>	
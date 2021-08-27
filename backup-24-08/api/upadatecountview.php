<?php

require 'database.php';

$id = isset($_REQUEST['id'])?$_REQUEST['id']:'';

//$con = mysqli_connect('localhost','ubijourn_innovation','material@123','ubijourn_material_innovation');

 $sql="SELECT view FROM articles WHERE article_id=$id";


 $db=mysqli_query($con,$sql);
		
	while ( $records = mysqli_fetch_array($db))
	 {
		 echo $view = $records['view']+1;


	echo  $sql2="update articles set view=$view where article_id=$id";

	  $res = mysqli_query($con,$sql2);

	}

echo json_encode($res);

?>
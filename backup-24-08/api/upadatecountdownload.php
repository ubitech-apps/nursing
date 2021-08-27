<?php
 require 'database.php';
 $id = isset($_REQUEST['id'])?$_REQUEST['id']:'';
//$con = mysqli_connect('localhost','ubijourn_innovation','material@123','ubijourn_material_innovation');
 $sql="SELECT download FROM articles WHERE article_id=$id";


$db=mysqli_query($con,$sql);

	while ( $records = mysqli_fetch_array($db))
	 {
		 $download = $records['download']+1;

	 $sql2="update articles set download = $download where article_id=$id";

	  $res = mysqli_query($con,$sql2);
	
	}

echo json_encode($res);


	exit();

?>
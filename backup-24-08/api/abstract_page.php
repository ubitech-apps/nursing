<?php
require 'database.php';

$data =[];

$id = isset($_REQUEST['id'])?$_REQUEST['id']:'';

$sql =  "SELECT A.pages,A.graphic,A.supplementary,DATE_FORMAT(publish_date,'%d - %M - %y') as dates,A.file_url,C.category_name,A.full_text,A.article_id,A.title,A.keywords,A.authors,A.issue_id,A.view,A.download,A.doi,A.long_desc,A.doiurl,IM.issue_id,IM.issue_no,IM.issue_period FROM articles A , article_type C, issue_master IM  WHERE A.article_id = $id and A.issue_id =IM.issue_id  and C.category_id = A.article_type limit 1" ;

if($result = mysqli_query($con, $sql)){
	foreach ($result as $key) {
		$data[] = $key;
	}
	echo json_encode($data);
}else{
  http_response_code(404);
}



 ?>

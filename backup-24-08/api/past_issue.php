<?php
require_once 'database.php';

 $id = isset($_REQUEST['id'])?$_REQUEST['id']:'';

$heading = array();

$data = array();

$sql = "SELECT art.category_id, art.category_name,IM.issue_no FROM `articles` A, article_type art, issue_master IM WHERE A.article_type = art.category_id AND IM.issue_id=A.issue_id AND IM.issue_status='Archive' AND A.issue_id = $id GROUP BY category_name";

$result = mysqli_query($con, $sql);

$i=0;

while ($row=mysqli_fetch_assoc($result)){

  $heading[$i]['category_name']=$row['category_name'];
  

    $sql1 = "SELECT A.article_id, A.title, A.authors, A.supplementary,A.file_url, A.pages, A.keywords, A.view, A.download, A.doi, A.long_desc, A.referances, A.full_text, A.publish_date, A.graphic, DATE_FORMAT(publish_date,'%d - %M - %y') as dates FROM articles A, article_type art, issue_master IM WHERE A.issue_id=$id AND IM.issue_status= 'Archive' AND A.issue_id = IM.issue_id AND A.article_type= art.category_id AND A.article_type= '".$row['category_id']."'";
    
    $result1 = mysqli_query($con, $sql1);

    $j=0;

    while ($row1=mysqli_fetch_assoc($result1)) {
        
        $data[$j] = $row1;

        $j++;
    }

    $heading[$i]['data']=$data;

  unset($data);

  $i++;

}
print_r(json_encode($heading));
?>
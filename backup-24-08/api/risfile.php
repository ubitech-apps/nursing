<?php
require_once ("database.php");

$article_id   = isset ($_REQUEST['article_id']) ? $_REQUEST['article_id'] : '';
$sql = "SELECT * FROM articles WHERE article_id = $article_id ORDER BY article_id LIMIT 1";
$query = mysqli_query($con, $sql);

$number='';
$volume='';
$issue_id='';
$reference='';
$doi='';
$authors='';
$title='';
$pages='';
$reference='';
$publish_date='';
$keywords=''; $abst=""; $doiurl="";
$page_end='';
$page_start='';

if(mysqli_num_rows($query)>=1)
{
    while($row = mysqli_fetch_assoc($query))
    {
        $article_id=$row['article_id'];
        $file_url=$row['file_url'];
        $issue_id = $row['issue_id'];
        $reference=$row['reference'];
        $doi=$row['doi'];
        $authors=strip_tags(html_entity_decode($row['authors']));
        $title=strip_tags(html_entity_decode($row['title']));
        $pages=$row['pages'];
        $keywords=strip_tags(html_entity_decode($row['keywords']));
        $abst=strip_tags(html_entity_decode($row['long_desc']));
        $doiurl=$row['doiurl'];
        $reference=$row['reference'];
        $publish_date=$row['publish_date'];
        $number=$row['number'];
        $volume=$row['volume'];
        $page_end=$row['page_end'];
        $page_start=$row['page_start'];
    }
}

$dbq = mysqli_query($con, "select issue_no from issue_master where issue_id=$issueid");
if( mysqli_num_rows($dbq) >=1)
{
    $records = mysqli_fetch_assoc($dbq);
    $issue_no = trim($records['issue_no']);
}

$year=($publish_date!="")?date("Y",strtotime($publish_date)):date("Y");
$articleno="mi".$article_id;
$content = "
RT Journal Article
A1 ".$authors."
T1 ".$title."
JF Materials Innovations
DO  ".$doi."
VO ".$volume."
IS ".$issue_no."
SP ".$page_start."
OP ".$page_end."
YR ".$year."
AB ".$abst."
UL http://ubitech.xyz/material_innovation/#/current-issue/abstract/".$article_id."
PN ".$pages." ";

$fp = fopen("../admin/assets/bib_files/$articleno.ris","w");
fwrite($fp,$content);
fclose($fp);

header("Location: ../admin/assets/bib_files/mi".$article_id.".ris");
?>
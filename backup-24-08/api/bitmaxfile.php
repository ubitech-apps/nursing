<?php
require_once ("database.php");

$article_id   = isset ($_REQUEST['article_id']) ? $_REQUEST['article_id'] : '';
$sql = "SELECT * FROM articles WHERE article_id = $article_id ORDER BY article_id LIMIT 1";
$query = mysqli_query($con, $sql);

$abst ='';
$volume='';
$number='';
$issue_id='';
$reference='';
$doi='';
$authors='';
$title='';
$pages='';
$reference='';
$publish_date='';
$keywords=''; $abst=""; $doiurl="";

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
$content = "@article{".$articleno.",
author = {".$authors."},
title = {".$title."},
journal = {Materials Innovations},
volume = {".$volume."},
number = {".$number."},
Issue = {".$issue_no."},
year = {".$year."},
keywords = {".$keywords."},
abstract = {".$abst."},
issn = {},
url = {http://ubitech.xyz/material_innovation/#/current-issue/abstract/".$article_id."},
doi = {".$doi."};
pages = {".$pages."}}";

$fp = fopen("../admin/assets/bib_files/$articleno.bib","w");
fwrite($fp,$content);
fclose($fp);

header("Location: ../admin/assets/bib_files/mi".$article_id.".bib");
?>
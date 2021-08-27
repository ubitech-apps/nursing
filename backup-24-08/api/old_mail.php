<?php
	require_once ("database.php");
	include("PhpMailer/class.phpmailer.php");
	$input = file_get_contents('php://input');
	$data = json_decode($input);
	$msg = 'Full Name: '.$data->name.'<br>Email Id: '.$data->email.'<br>Subject Name: '.$data->subject.'<br>Message: '.$data->message.'';
    $subject="Materials Innovations";
    $to = "lovesh@ubitechsolutions.com";
    $from="material@ubitech.xyz";
    $header  = "From: material@ubitech.xyz <material@ubitech.xyz>" . "\r\n";
    $header .= 'MIME-Version: 1.0' . "\r\n";
    $header .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $retval = mail($to,$subject,$msg,$header);
    if( $retval == true ) {
        echo 1;
    }else {
        echo 0;
    }
?>
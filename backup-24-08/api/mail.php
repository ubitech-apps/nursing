<?php

	require_once ("database.php");

	include("PhpMailer/class.phpmailer.php");

	$input = file_get_contents('php://input');

	$data = json_decode($input);

	$msg = 'Full Name: '.$data->name.'<br>Email Id: '.$data->email.'<br>Mobile: '.$data->mobile.'<br>Message: '.$data->message.'';
    
    $subject="Query for Contact us";

    $to = "publicationstnai@yahoo.com";

    $header  = "From: ".$data->name." <".$data->email.">" . "\r\n";

    $header .= 'MIME-Version: 1.0' . "\r\n";

    $header .= "Content-type: text/html; charset=iso-8859-1\r\n";

    $retval = mail($to,$subject,$msg,$header);

    if( $retval == true ) {

        echo 1;

    }else {

        echo 0;

    }

?>
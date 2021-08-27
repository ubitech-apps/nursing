<?php

require 'database.php';
include("PhpMailer/class.phpmailer.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($request) && !empty($request)){

  $journal_name="The Nursing Journal of India";
  $name = $request->name;
  $email = $request->email;
  $mobile = $request->mobile;
  $password = $request->password;
  $qualification = $request->qualification;
  $usertype = $request->usertype;
  $Tnai_number = $request->Tnai_number;
  $address = $request->address;
  $salutation = $request->salutation;

  $sql1 = "SELECT * FROM `user_login`";
  $email_in_db = mysqli_query($con, $sql1);
  $emails=array();
  $i=0;
  while($row = mysqli_fetch_assoc($email_in_db)){
    $emails[$i]=$row['Email'];
    $i++;
  }

  $key = "ubitech";
  $passwordenc = '';
  for($i=0; $i<strlen($password); $i++){
    $char = substr($password, $i, 1);
    $keychar = substr($key, ($i % strlen($key))-1, 1);
    $char = chr(ord($char)+ord($keychar));
    $passwordenc.=$char;
  }
  $passenc = base64_encode($passwordenc);

  if(in_array($email , $emails)){
    $sql ="false";
  }else{
    if($usertype == 'Author') {
    $sql = "INSERT INTO `user_login`(`pwd`,`Tnai_number`, `Type`, `Email`, `Salutation`, `First_Name`, `Qualification`, `Address`, `Mobile`, `org_id`, `user_account_type`, `group_id`, `status`) VALUES ('$passenc',$Tnai_number, '$usertype', '$email', '$salutation', '$name', '$qualification', '$address', '$mobile', '78', '3', '870', '1')";
    }
    else{
     $sql = "INSERT INTO `user_login`(`pwd`,`Tnai_number`, `Type`, `Email`, `Salutation`, `First_Name`, `Qualification`, `Address`, `Mobile`, `org_id`, `user_account_type`, `group_id`, `status`) VALUES ('$passenc',$Tnai_number, '$usertype', '$email', '$salutation', '$name', '$qualification', '$address', '$mobile', '78', '4', '872', '1')";
    }
  }
  $signup = mysqli_query($con, $sql);
  if ( $signup ) {
    $message='Dear '.$name.'<p> CONGRATULATIONS! You have successfully registered with <b>'.$journal_name.'</b> as a '.$usertype.'.</p><p>Your login credentials are: </p><p>LoginID: '.$email.'</p><p>Password: '.$password.'</p><p>Thanks !</p><p><b>Team</b> '.$journal_name.'</p>';
    $message=strip_tags($message,'<b><p><br/>');
    $subject='New Registration with '.$journal_name;
    $to = $email;
    $from = "publicationstnai@yahoo.com";
    $header = "From: $journal_name <material@ubitech.xyz>" . "\r\n";
    $header .= 'MIME-Version: 1.0' . "\r\n";
    $header .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $retval = mail ($to,$subject,$message,$header);
    if( $retval ) {
      print_r(json_encode(array("register"=>$signup)));
    }else {
      echo false;
    }
  } else {
    echo false;
  } 
}
?>
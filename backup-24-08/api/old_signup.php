<?php
require_once 'database.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $sql1 = "SELECT * FROM `user_login`";
  $email_in_db = mysqli_query($sql1);
  $emails=array();

  $i=0;
  while($row = mysqli_fetch_assoc($email_in_db)){
    $emails[$i]=$row['Email'];
    $i++;
  }

  $request = json_decode($postdata);

  $name = $request->name;
  $email = $request->email;
  $mobile = $request->mobile;
  $password = $request->password;
  $qualification = $request->qualification;
  $usertype = $request->usertype;
  $address = $request->address;
  $salutation = $request->salutation;

  $key = "ubitech";
  $passwordenc = '';
  for($i=0; $i<strlen($password); $i++){
    $char = substr($password, $i, 1);
    $keychar = substr($key, ($i % strlen($key))-1, 1);
    $char = chr(ord($char)+ord($keychar));
    $passwordenc.=$char;
  }
  $passenc = base64_encode($passwordenc);

  if(in_array($request->email , $emails)){
		$sql ="false";
  } else{
    if($request->usertype == 'Author') {
      $sql = "INSERT INTO `user_login`(`pwd`, `Type`, `Email`, `Salutation`, `First_Name`, `Qualification`, `Address`, `Mobile`, `org_id`, `user_account_type`, `group_id`, `status`) VALUES ('$passenc', '$usertype', '$email', '$salutation', '$name', '$qualification', '$address', '$mobile', '78', '3', '870', '1')";
    }
    else{
      $sql = "INSERT INTO `user_login`(`pwd`, `Type`, `Email`, `Salutation`, `First_Name`, `Qualification`, `Address`, `Mobile`, `org_id`, `user_account_type`, `group_id`, `status`) VALUES ('$passenc', '$usertype', '$email', '$salutation', '$name', '$qualification', '$address', '$mobile', '78', '4', '872', '1')";
    }
  }

  $signup = mysqli_query($con, $sql);
  echo json_encode($signup);
}
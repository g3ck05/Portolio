<?php



if(isset($_POST['Email']) && isset($_POST['Name']) && isset($_POST['Message']))
{
	$email = $_POST['Email'];
	$email = strip_tags($email);
	$email = filter_var($email, FILTER_SANITIZE_EMAIL);
	$name = $_POST['Name'];
	$name = strip_tags($name);
	$name = filter_var($name, FILTER_SANITIZE_STRING);
	$message = $_POST['Message'];
	$message = strip_tags($message);
	$message = filter_var($message, FILTER_SANITIZE_STRING);
	// the message
	$msg = "SENT BY - " .$name. " \n THEIR EMAIL - ".$email . " \n MESSAGE: \n \n ".$message;
	
	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);
	
	// send email
	if(mail("grantos10@hotmail.com",$name . " " . $email,$msg))
	{
		header('location: index.html');
	}
	else
	{
		echo 'Email failed';
	}
}

?>
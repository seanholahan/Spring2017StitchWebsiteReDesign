<?php
header('Content-type: application/json');
$errors = '';
if(empty($errors))
{
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$from_email = $request->email;
	$message = $request->message;
	$from_name = $request->name;
	$to_email = "$from_email, shholahan@gmail.com";
	$contact = "<p><strong>Name:</strong> $from_name</p>
							<p><strong>Message:</strong>";
	$content = "<p>$message</p>";
	$website = 'Angular Php Email Example';
	$email_subject = "Message from $from_name to Sean Holahan";
	$email_subject2 = "$from_name emailed you!";
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: contactseanholahan@gmail.com";

	mail($to_email,$email_subject,$email_body,$headers);

	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>

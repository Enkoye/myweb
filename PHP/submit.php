<!----------------------------------------------------------
* File Description : Submit Form PHP
*----------------------------------------------------------
*-->
<?php
	if ($_SERVER['REQUEST_METHOD'] === "POST") {
		$name = $_POST['c-name'];
		$email = $_POST['c-email'];
		$message = $_POST['c-comments'];
		$date = date('j, F Y h:i A');
		$emailBody = "
	    <html>
	    <head>
			<title>$email is contacting you</title>
	    </head>
	    <body style=\"background-color:#fafafa;\">
			<div style=\"padding:20px;\">
	        	Date: <span style=\"color:#888\">$date</span>
	        	<br>
	        	Name: <span style=\"color:#888\">$name</span>
	        	<br>
	        	Email: <span style=\"color:#888\">$email</span>
	        	<br>
	        	Message: <div style=\"color:#888\">$message</div>
	      	</div>
	    </body>
	    </html>
	  	";
	  	if(!empty($_POST['name'])||
	    !empty($_POST['email']) ||
	    !empty($_POST['comments'])){ 
	  		die();       
		}
	  	$headers =  'From: Contact Form <contact@mydomain.com>' . "\r\n" .
	        "Reply-To: $email" . "\r\n" .
	        "MIME-Version: 1.0\r\n" . 
	        "Content-Type: text/html; charset=UTF-8\r\n";
	  	$to = 'hello@sophiaross.com';
	  	$subject = 'New email from '.$name;
		
		
		if (mail($to, $subject, $emailBody, $headers)){
			echo'<script type="text/javascript">
		    alert("Message sent! You will receive a reply shortly!");
		    window.location.href="../index.html";
		    </script>';
		}
		
	 }
?>
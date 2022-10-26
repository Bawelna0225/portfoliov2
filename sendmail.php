<?php 
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$messageInput = $_POST['message'];
$date = date('Y-m-d');
$message = "
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    <title></title>
</head>
<body style='width: 100%; margin: 0; padding: 0px;'>
    <div style='font-family: sans-serif;width: min(calc(100% - 2rem), 500px); margin: 0 auto; padding: 20px; background-color: #000; color: white;'>
        <h1 style='font-weight: 100'>Message From <span style='color: orangered'>Portfolio</span></h1>
        <h3 style='color: orangered; font-weight: 500'>Subject: <span style='color: white'>$subject</span></h3>
        <p style='color: orangered'>From: <span style='color: white'>$firstName $lastName</span></p>
        <p style='color: orangered'>At: <span style='color: white'>$email</span></p>
        <p style='color: orangered'>Message: <span style='color: white'>$messageInput</span></p>
        <p style='color: orangered'>On: <span style='color: white'>$date</span></p>
    </div>
</body>
</html>";

$to = 'pawelczarnecki0225@gmail.com';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'To: ' .$to. "\r\n";
$headers .= 'From: ' .$email. "\r\n";


mail($to, $subject, $message, $headers);

echo "New Mail Recived! $headers Subject: $subject\n\r Message: $messageInput\n\r Destined for $to ";

$conn = new mysqli('localhost', '', '', '');
$query = "INSERT INTO maile VALUES(null, '$firstName $lastName', '$email', '$subject', '$messageInput', '$date')";
mysqli_query($conn, $query);
mysqli_close($conn)
?>
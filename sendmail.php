<?php 
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $messageInput = $_POST['message'];
    $date = date('Y-m-d');

    $receiver = "pawelczarnecki0225@gmail.com";
    $subject = "From: $firstName $lastName <$email>";
    $body = "Name: $firstName $lastName \nEmail: $email\nSubject: $subject\nMessage: $messageInput";
    $sender = "From: $email";
    if(mail($receiver, $subject, $body, $sender)){
        echo "Your message has been sent";
    }else{
        echo "Sorry, failed to send your message!";
    }

    $conn = new mysqli('localhost', '', '', '');
    $query = "INSERT INTO maile VALUES(null, '$firstName $lastName', '$email', '$subject', '$messageInput', '$date')";
    mysqli_query($conn, $query);
    mysqli_close($conn)
?>
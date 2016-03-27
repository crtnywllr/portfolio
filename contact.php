<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];
$contact = $_POST['contact1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $subject = $name;
        // To send HTML mail, the Content-type header must be set.
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $headers .= 'From:' . $email. "\r\n"; // Sender's Email
        $headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
        $template = '<div style="padding:50px; color:white;">Hi ' . $name . ',<br/>'
            . '<br/>Thanks for reaching out. Here is the info I received:<br/><br/>'
            . 'Name:' . $name . '<br/>'
            . 'Email:' . $email . '<br/>'
            . 'Contact No:' . $contact . '<br/>'
            . 'Message:' . $message . '<br/><br/>'
            . 'This is to let you know your message went through.'
            . '<br/>'
            . 'I will be in touch soon!</div>';
        $sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";
        // Message lines should not exceed 70 characters (PHP rule), so wrap it.
        $sendmessage = wordwrap($sendmessage, 70);
        // Send mail by PHP Mail Function.
        mail("wllr.crtny.jyc@gmail.com", $subject, $sendmessage, $headers);
        echo "Thanks for reaching out! I'll be in touch soon.";
    }
} else {
    echo "<span>* Sorry, that's not a valid email. *</span>";
}
?>

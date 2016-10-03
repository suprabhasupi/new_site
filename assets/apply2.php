<?php

// configure
$from = 'email';
$sendTo = 'contact@justchow.com';
$subject = 'Job application: Frontend Developer';
$fields = array('name' => 'Name', 'email' => 'Email', 'Resume' => 'Resume', 'phone' => 'Phone','github' => 'Github','linkedin' => 'Linkedin','message' => 'Massage' ); // array variable name => Text to appear in email
$okMessage = 'Thanks for applying for the job! We will get back to you shortly!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}

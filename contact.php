<?php
// mandrill code
// Check for empty fields
//
//  try {
//   if(empty($_POST['name'])  		||
//    empty($_POST['email']) 		||
//    empty($_POST['phone']) 		||
//    empty($_POST['message'])	||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
// 	echo "No arguments Provided!";
// 	return false;
//    }
//
// $name = $_POST['name'];
// //$email_address = $_POST['email'];
// $email = test_input($_POST["email"]);
// if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//   $emailErr = "Invalid email format";
// }
// $phone = $_POST['phone'];
// $msg = $_POST['message'];
//
//
// $mandrill = new Mandrill('aR74ZkfilNv4cvd1pY2xxw');
//
// $message = array(
//     'text' => 'test mail' ;
//     'subject' => 'New Email from Contact form',
//     'from_email' => '$email',
//     // 'html' => '<p>this is a test message with Mandrill\'s PHP wrapper!.</p>',
//     'to' => array(array('email' => 'jyothilakshmi.lakshmir@gmail.com', 'name' => 'Recipient 1')),
//     'track_opens': true,
//     'track_clicks': true,
//     'auto_text': true,
//
//   );
//
//
//     $async = false;
//     $ip_pool = 'Main Pool';
//     $result = $mandrill->messages->send($message, $async);
//     print_r($result);
//
// } catch(Mandrill_Error $e) {
//
//     echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
//
//     throw $e;
// }
//


// newcode
// // require 'vendor/mandrill/mandrill';
// try {
//     $mandrill = new Mandrill('aR74ZkfilNv4cvd1pY2xxw');
//     $message = array(
//         'html' => '<p>Example HTML content</p>',
//         'text' => 'Example text content',
//         'subject' => 'example subject',
//         'from_email' => 'jyothilakshmi.lakshmir@gmail.com',
//         'from_name' => 'Example Name',
//         'to' => array(
//             array(
//                 'email' => 'jyothilakshmi.lakshmir@gmail.com',
//                 'name' => 'Pneuma',
//                 'type' => 'to'
//             )
//         ),
//         'headers' => array('Reply-To' => 'jyothilakshmi.lakshmir@gmail.com'),
//         );
//   $async = false;
//   $result = $mandrill->messages->send($message, $async);
//   print_r($result);
//   echo ($result);
//   echo "hello";
//  console.log(hello)
// } catch(Mandrill_Error $e) {
//    // Mandrill errors are thrown as exceptions
//    echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
//    // A mandrill error occurred: Mandrill_Unknown_Subaccount - No subaccount exists with the id 'customer-123'
//    throw $e;
// }
// ?>


<?php
//configure
$from = 'email';
$sendTo = 'jyothilakshmi.lakshmir@gmail.com';
$subject = 'New message from contact form';
$fields = array('name' => 'Name','phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in email
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

//let's do the sending

try
{

  $mandrill = new Mandrill('aR74ZkfilNv4cvd1pY2xxw');
  $message = array(
      'html' => '$fields',
      'subject' => '$subject',
      'from_email' => 'jyothilakshmi.lakshmir@gmail.com',
      'from_name' => 'Name',
      'to' => array(
          array(
              'email' => 'jyothilakshmi.lakshmir@gmail.com',
              'name' => 'Pneuma',
              'type' => 'to'
          )
      ),
      'headers' => array('Reply-To' => 'jyothilakshmi.lakshmir@gmail.com'),
      );
$async = false;
$result = $mandrill->messages->send($message, $async);
print_r($result);
echo ($result);

// $emailText = "You have new message from contact form\n=============================\n";

    // foreach ($_POST as $key => $value) {
    //
    //     if (isset($fields[$key])) {
    //         $emailText .= "$fields[$key]: $value\n";
    //     }
    // }

    // mail($sendTo, $subject, $emailText, "From: " . $from);

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
?>

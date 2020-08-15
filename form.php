<?php

$email = $_POST['email'];
$comment = $_POST['comment'];

$subject = "Letter from syxgame website";

$to = "job@syxgame.ge";

$message = "Email: " . $email . "\n" . "Comment: " . $comment;

mail($to, $subject, $message);
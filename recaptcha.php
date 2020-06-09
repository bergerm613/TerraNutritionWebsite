<?php
$secret="6LdFhPcUAAAAAJL_aXcaQLsTICdZdyIzYRCr0lrx";
$response=$_POST["captcha"];

$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha_success=json_decode($verify);
if ($captcha_success->success==false) {
}
else if ($captcha_success->success==true) {
  //This user is verified by recaptcha
}
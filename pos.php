<?php
$server_name="localhost";
$user_name="tjtech";
$db_name="tjtech";
$password="1234567890";

//create connection
$conn = new mysqli($db_name,$server_name,$user_name,$password);
if($conn->connect_error()){
    die( "coonection failed");
}
sqli_close($conn);
?>
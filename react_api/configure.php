<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods:*');

header('Access-Control-Allow-Headers:*');

header('Content-Type: application/json,charset=utf-8');

$conn = mysqli_connect("localhost","root","","react_api");

?>
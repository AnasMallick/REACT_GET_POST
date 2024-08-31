<?php
include './configure.php';

$delete_id = $_GET["user_id"];
$res = mysqli_query($conn,"DELETE FROM users WHERE u_id = '$delete_id'");

if($res){
    http_response_code(200);
    echo json_encode(array("success"=> true, "message"=> "User Deleted Successfully"));
}


?>
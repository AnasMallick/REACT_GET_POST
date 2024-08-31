<?php

include './configure.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $data = json_decode(file_get_contents('php://input'),true);

    $name = $data["name"];
    $email = $data["email"];
    $pass = $data["password"];

    $result = mysqli_query($conn,"SELECT * FROM users WHERE u_email = '$email'");
    if(mysqli_num_rows($result)>0){
        http_response_code(400);
        echo json_encode(array("success"=> false ,"message" => "Email Already Exists"));
    }
    else{
        $sql = "INSERT INTO users VALUES (NULL,'$name', '$email', '$pass')";
        $res = mysqli_query($conn,$sql);
        if($res){
            http_response_code(200);
            echo json_encode(array("success" => true));
        }
        else{
            echo json_encode(array("success" => false));
        }
    }

   
    
    

     //print_r($data);
}
?>
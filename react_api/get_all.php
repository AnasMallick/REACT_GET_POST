<?php
include './configure.php';
$res = mysqli_query($conn,"SELECT * FROM users");
$data = [];
while ($row=mysqli_fetch_assoc($res)){
    $data[] = $row;
}
echo json_encode($data);

?>
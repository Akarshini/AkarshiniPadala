<?php
$servername = "localhost";
$user = "root";
$pwd = "";
$dbname = "stu_data";
$conn = new mysqli($servername,$user,$pwd,$dbname);
$connection = new mysqli("localhost","root","","student");
if($conn->connect_error){
    echo "Failed";
}else{
    echo "Connection Success";
}
?>
<?php
require_once("connection.php");
if(isset($_POST['submit']))
    {
        $studentName = $_POST['s_name'];
        $studentpassword = $_POST['s_password'];
        
            $query = " select * from student_password ";
            $result = mysqli_query($conn,$query);

if($result)
            {
                header("location:loginform.php");
            }
            else
            {
                echo '  Please Check Your Query ';
            }
}

?>
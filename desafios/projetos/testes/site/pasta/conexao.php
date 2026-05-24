<?php 
$host = "localhost";
$user = "root";
$pass = "vertrigo";
$dbname = "tutorial_imob";


$conexao = mysqli_connect ($host , $user , $pass) or die ('no conect bank');
$db = mysqli_select_db ($conexao , $dbname) or die ('no select bank'); 
?>
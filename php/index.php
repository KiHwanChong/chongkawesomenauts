<?php
//index connects to almost every core file in this project
//if the user is authenticated, it shows the navigation, if not, it shows navigation-before.
    require_once(__DIR__ . "/controller/login-verify.php");
    require_once(__DIR__ . "/view/header.php");
    if(authenticateUser()) {
        require_once(__DIR__ . "/view/navigation.php");
    } 
    if(!authenticateUser()) {
        require_once(__DIR__ . "/view/navigation-before.php");  
    }
    require_once(__DIR__ . "/controller/create-db.php");   
    require_once(__DIR__ . "/controller/read-posts.php");
    require_once(__DIR__ . "/view/footer.php");
?>


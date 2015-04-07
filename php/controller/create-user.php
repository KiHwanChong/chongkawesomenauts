<?php
    require_once(__DIR__ . "/../model/config.php");
    
    //fliter the inputs that use put... they should be proper for each category.
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    
    //salt enables the password to be encrypted to prevent from just stealing password
    $salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true) . "$";
    
    //representing password and salt
    $hashedPassword = crypt($password, $salt);
    
    $query = $_SESSION["connection"]->query("INSERT INTO users SET "
            . "email ='',"
            . "username = '$username',"
            . "password = '$hashedPassword',"
            . "salt = '$salt',"
            . "exp = 0, "
            . "exp1 = 0, "
            . "exp2 = 0, "
            . "exp3 = 0, "
            . "exp4 = 0");
    
    $_SESSION["name"] = $username;
         

    if($query){        
         //need this for Ajax on index.php 
         echo "true";
     }else{
         echo "<p>" . $_SESSION["connection"]->error . "</p>";
     }
    
<?php
//same contents as creat-user... but i add npassword (new password) for input.
 require_once(__DIR__ . "/../model/config.php");
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);       
    $npassword = filter_input(INPUT_POST, "npassword", FILTER_SANITIZE_STRING);
       
    $salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true) . "$";
    
    $hashedPassword = crypt($npassword, $salt);
    
    $query = $_SESSION["connection"]->query("SELECT salt, password, id FROM users WHERE BINARY username = '$username'");
     
     if($query->num_rows == 1) {
         $row = $query->fetch_array();
         
         //if the old password matches to the password in the table, it chooses it and update it into new password
        if($row["password"] === crypt($password, $row["salt"])) {
            $query = $_SESSION["connection"]->query("UPDATE users SET "
            . "password = '$hashedPassword',"
            . "salt = '$salt' WHERE username='$username'");
             echo "<p>Change Successful</p>";
             
         }
         else {
             echo "<p>Invalid username and password</p>";
         }
     }
     else {
         echo "<p>Invalid username and password</p>";
     }
     
     ?>

<nav>
    <ul>
        <li><a href="<?php echo $path . "index.php" ?>">Go back to home</a></li>
    </ul>
</nav>
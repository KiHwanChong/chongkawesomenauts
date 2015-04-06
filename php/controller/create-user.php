<?php
    require_once(__DIR__ . "/../model/config.php");
    
    //fliter the inputs that use put... they should be proper for each category.
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    
    //salt enables the password to be encrypted to prevent from just stealing password
    $salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true) . "$";
    
    //representing password and salt
    $hashedPassword = crypt($password, $salt);

    //selecting username from the list
    $checkU = $_SESSION["connection"]->query("SELECT username FROM users WHERE username = '$username'");
     
    //if there is one or more than one row selected, execute next line
     if($checkU->num_rows >= 1) {
         $row = $checkU->fetch_array();
         
         //if the input username and the username from the list are same, echo out already existing username
        if($row["username"] == '$username') {
             echo "<p>already existing username</p>";
             
         }
         else {
             echo "<p>already existing username</p>";
         }
     }
     //when only they don't match, insert the information into the list
     else {
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
         
         //need this for Ajax on index.php 
         echo "true";
     }
     ?>
     
<!--navigation to index page and register page to retry-->
    <nav>
    <ul>
        <li><a href="<?php echo $path . "index.php" ?>">Go back to home</a></li>
        <li><a href="<?php echo $path . "register.php" ?>">Try again</a></li>
    </ul>
    </nav>
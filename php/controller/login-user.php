<?php
    require_once(__DIR__ . "/../model/config.php");

    $arrat = array(
        'exp' => '',
        'exp1' => '',
        'exp2' => '',
        'exp3' => '',
        'exp4' => '',
    );
    
    //taking input you typed and making sure it is string
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);  
    //check if the user is on the table
    //binary makes case sensitive
    $query = $_SESSION["connection"]->query("SELECT * FROM users WHERE BINARY username = '$username'");
    
    //if number of row is one, which means there is a user matching on the list
     if($query->num_rows == 1) {
         $row = $query->fetch_array();
         
        if($row["password"] === crypt($password, $row["salt"])) {
            $_SESSION["authenticated"] = true;
            $array["exp"] = $row["exp"];
            $array["exp1"] = $row["exp1"];
            $array["exp2"] = $row["exp2"];
            $array["exp3"] = $row["exp3"];
            $array["exp4    "] = $row["exp4"];
            
            
             echo json_encode($array);
             
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
        <li><a href="<?php echo $path . "login.php" ?>">Try again</a></li>
    </ul>
</nav>
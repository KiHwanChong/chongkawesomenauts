<?php
    require_once(__DIR__ . "/../model/config.php");
    
    //nullify authenticated and direct to the index page
    unset($_SESSION["authenticated"]);
    
    session_destroy();
    header("Location: " . $path . "index.php");
    
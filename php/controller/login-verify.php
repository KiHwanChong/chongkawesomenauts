<?php
    require_once(__DIR__ . "/../model/config.php");
    
    //if the users are not authenticated, they cannot access to this page
    function authenticateUser() {
        if(!isset($_SESSION["authenticated"])) {
            return false;
        }
        else {
            if($_SESSION["authenticated"] !== true) {
                return false;
            }
            else {
                return true;
            }
        }
    }
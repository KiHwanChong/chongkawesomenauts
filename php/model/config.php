<?php
//config is like the nexus which enables pages to connect with the database
    require_once(__DIR__ . "/database.php");
    session_start();
    session_regenerate_id(true);

    $path = "/ChongKAwesomenauts/php/";

    $host = "localhost";
    $username = "root";
    $password = "root";
    $database = "awesomenauts_db";
    
    //if there is no connection of database, it sets new database and connects it
    if(!isset($_SESSION["connection"])) {        
        $connection = new Database($host, $username, $password, $database);
        $_SESSION["connection"] = $connection;
    }
    
    

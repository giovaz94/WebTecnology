<?php
    require_once("db/database.php");
    
    $dbh = new DatabaseHelper("localhost", "root", "password", "blogtw", 3306);

    // Costanti 
    define("UPLOAD_DIR", "./upload/"); 
?>
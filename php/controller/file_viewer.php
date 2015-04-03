<?php
 $filename = base64_decode($_GET['file']);
    // Check the folder location to avoid exploit
    if (dirname($filename) == '/home/user/Pictures')
        echo file_get_contents($filename);


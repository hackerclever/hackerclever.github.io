<?php
$servername = "localhost";
$username = "hacker";
$password = "mypass";
$dbname = "webtech";
$customerID = $_POST['customerID'];
$citizenID = $_POST['citizenID'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO customers (customerID,citizenID,fname,lname) VALUES ('$customerID','$citizenID','$fname','$lname')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

?>

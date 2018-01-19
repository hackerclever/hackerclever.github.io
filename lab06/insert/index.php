<!DOCTYPE html>
<html>
<head>
  <title>Test PDO</title>
</head>
<body>
  <h1>Insert customer information.</h1><br>
  <!-- <?php include 'dbms.php' ?> -->
  <form action="insert.php" method="POST">
    <strong>Customer ID</strong><input name="customerID" type="text"/><br>
    <strong>Citizen ID</strong><input name="citizenID" type="text"/><br>
    <strong>First name</strong><input name="fname" type="text"/><br>
    <strong>Last name</strong><input name="lname" type="text"/><br>
    <input type="submit">
  </form>
</body>
</html>

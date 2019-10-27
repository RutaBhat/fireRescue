<?php


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE certification
    set certificationName = ?, certificationAgency = ?, expiryPeriod = ? where certificationID = ?');

$stmt->execute([
  $_POST['certificationName'],
  $_POST['certificationAgency'],
  $_POST['expiryPeriod'],
  $_POST['certificationID']
]);
$guid=$_POST['certificationID'];
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);

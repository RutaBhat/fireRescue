<?php


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE from memberCertify
    Where enrollmentID = ?');

$stmt->execute([
  $_POST['enrollmentID']
]);

$guid=$_POST['enrollmentID'];
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../recordEnroll/?guid='.$guid);

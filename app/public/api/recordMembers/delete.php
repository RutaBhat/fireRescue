<?php


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE from member
    Where memberID = ?');

$stmt->execute([
  $_POST['memberID']
]);

$guid=$_POST['memberID'];
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../recordMembers/?guid='.$guid);

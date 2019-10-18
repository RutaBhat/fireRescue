<?php


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE member
    set firstName = ?, lastName = ?, dob = ?,
    gender = ?, radioNumber = ?, stationNumber = ?,
    email = ?, position = ?, phoneNumber = ?,
    address = ?, startDate = ?, isActive = ?
    where memberID = ?');

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['email'],
  $_POST['position'],
  $_POST['phoneNumber'],
  $_POST['address'],
  $_POST['startDate'],
  $_POST['isActive'],
  $_POST['memberID']
]);
$guid=$_POST['memberID'];
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../recordMembers/?guid='.$guid);

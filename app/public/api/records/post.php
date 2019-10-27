<?php

//step 0: Validation

//step 1: get a datase connection

$db = dbConnection::getConnection();

//step 2: create and run query

$stmt = $db->prepare(
  'INSERT INTO MemberRecord
  (id, firstName, lastName, gender, address, city, state, zipCode, workPhone, mobilePhone, radioNumber, station)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
);
$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']

]);
$patients = $stmt->fetchAll();

//step 3: convert to JSON
$json = json encode($records. JSON PRETTY PRINT);

//step 4: output
header('HTTP/1.1 303 See Other')


?>

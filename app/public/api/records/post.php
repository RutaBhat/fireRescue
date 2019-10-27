<?php



// Step 0: Validation
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO certification
    (certificationID, certificationName, certificationAgency, expiryPeriod)
  VALUES (?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['certificationName'],
  $_POST['certificationAgency'],
  $_POST['expiryPeriod']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);


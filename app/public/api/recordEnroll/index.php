<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// if (isset($_GET['guid'])) {
//   $stmt = $db->prepare(
//     'SELECT * FROM certification
//     WHERE certificationID = ?'
//   );
//   $stmt->execute([$_GET['guid']]);
// } else {
  $stmt = $db->prepare('SELECT m.firstName, m.lastName,m.dob, c.certificationName,c.certificationAgency, mc.certificationIsActive,mc.certificationStartDate,mc.certificationEndDate
FROM memberCertify mc , member m, certification c
WHERE mc.certificationID = c.certificationID
AND mc.memberID= m.memberID');
  $stmt->execute();
// }

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;

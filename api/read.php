<?php
/**
 * Returns the list of customers.
 */
require 'database.php';

$customers = [];
$sql = "SELECT id, name, address, passportid FROM customers";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $customers[$i]['id']    = $row['id'];
    $customers[$i]['name'] = $row['name'];
    $customers[$i]['address'] = $row['address'];
    $customers[$i]['passportid'] = $row['passportid'];
    $i++;
  }

  echo json_encode($customers);
}
else
{
  http_response_code(404);
}

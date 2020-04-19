<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->name) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->name));
  $address = mysqli_real_escape_string($con, trim($request->address));
  $passportid = mysqli_real_escape_string($con, trim($request->passportid));


  // Create.
  $sql = "INSERT INTO `customers`(`id`,`name`,`address`,`passportid`) VALUES (null,'{$name}','{$address}','{$passportid}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $customer = [
      'name' => $name,
      'address' => $address,
      'passportid' => $passportid,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($customer);
  }
  else
  {
    http_response_code(422);
  }
}

<?php
$servername = 'localhost';
$username = 'username';
$password = 'password';
$dbname = 'tutoring_system';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
die("Connection failed: ". $conn->connect_error);
}

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subjects = implode(',', $_POST['subjects']);
$address = $_POST['address'];
$gps_link = $_POST['gps_link'];

$sql = "INSERT INTO profiles (fullname, email, phone, subjects, address, gps_link) VALUES ('$fullname', '$email', '$phone', '$subjects', '$address', '$gps_link')";

if ($conn->query($sql) === TRUE) {
echo 'Profile created successfully!';
} else {
echo 'Error creating profile: '. $conn->error;
}

$conn->close();
?>

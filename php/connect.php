<?php

// Create connection
$conn = mysqli_connect('localhost', 'root', '', 'hospital');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize inputs
$name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : null;
$number = isset($_POST['number']) ? mysqli_real_escape_string($conn, $_POST['number']) : null;
$email = isset($_POST['email']) ? mysqli_real_escape_string($conn, $_POST['email']) : null;
$date = isset($_POST['date']) ? mysqli_real_escape_string($conn, $_POST['date']) : null;

// Debugging statements
var_dump($_POST);
echo "Name: " . $name . "<br>";
echo "Number: " . $number . "<br>";
echo "Email: " . $email . "<br>";
echo "Date: " . $date . "<br>";

// Check if all fields are filled
if ($name && $number && $email && $date) {
    // Prepare statement
    $stmt = $conn->prepare("INSERT INTO patients(name, number, email, date) VALUES(?, ?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param("ssss", $name, $number, $email, $date);
        $stmt->execute();
        echo "Appointment made successfully!!";
        $stmt->close();
    } else {
        echo "Failed to prepare the SQL statement.";
    }
} else {
    echo "All fields are required.";
}

$conn->close();
?>

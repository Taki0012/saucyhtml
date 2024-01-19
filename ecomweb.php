<!-- process_form.php -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Access the submitted form data
  $tableRows = $_POST['tableRows'];

  // Loop through each table row
  foreach ($tableRows as $row) {
    $name = $row['name'];
    $quantity = $row['quantity'];
    $price = $row['price'];
    $total = $row['total'];

    // Process the data as needed (e.g., store in a database, send an email, etc.)
    // For demonstration purposes, we'll just print the data
    echo "Name: $name, Quantity: $quantity, Price: $price, Total: $total<br>";
  }
}
?>
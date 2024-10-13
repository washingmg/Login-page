<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $data = array(
        'email' => $email,
        'password' => $password,
    );

    $json_data = json_encode($data);
    file_put_contents('users.json', $json_data);

    echo "User registered successfully!";
}
?>

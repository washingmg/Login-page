<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];

    if ($password !== $repassword) {
        echo "Passwords do not match.";
        exit();
    }

    $data = array(
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT) 
    );

    $json_data = file_get_contents('users.json');
    $users = json_decode($json_data, true);

    $users[] = $data;

    file_put_contents('users.json', json_encode($users));

    echo "User registered successfully!";
}
?>

<?php
/**
 * Created by PhpStorm.
 * User: MINH
 * Date: 6/6/2016
 * Time: 10:44 AM
 */

require_once('db.php');

if (isset($_POST['action'])) {
	$action = $_POST['action'];

	switch ($action) {
		case 'getListProduct':
			$stmt = $conn->prepare("SELECT * FROM products");
			$stmt->execute();

			$stmt->setFetchMode(PDO::FETCH_ASSOC);
			$result = $stmt->fetchAll();

			echo json_encode($result); die;
			break;
        case 'addProduct':
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];

            $sql = "INSERT INTO products (name, description, price) VALUES ('$name', '$description', '$price')";
            $result = $conn->exec($sql);
            echo $result; die;
	}
}
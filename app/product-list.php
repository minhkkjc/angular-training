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
			$stmt = $conn->prepare("SELECT * FROM product");
			$stmt->execute();

			$stmt->setFetchMode(PDO::FETCH_ASSOC);
			$result = $stmt->fetchAll();

			echo json_encode($result); die;
			break;
	}
}
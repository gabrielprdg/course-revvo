<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
require_once __DIR__ . '/../db.php';

$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

switch ($method) {
    case 'GET':
        $stmt = $pdo->query('SELECT * FROM cursos ORDER BY id');
        echo json_encode($stmt->fetchAll());
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('INSERT INTO cursos (image, title, description) VALUES (?, ?, ?) RETURNING *');
        $stmt->execute([$input['image'], $input['title'], $input['description']]);
        echo json_encode($stmt->fetch());
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('UPDATE cursos SET image=?, title=?, description=? WHERE id=? RETURNING *');
        $stmt->execute([$input['image'], $input['title'], $input['description'], $input['id']]);
        echo json_encode($stmt->fetch());
        break;
    case 'DELETE':
        $input = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('DELETE FROM cursos WHERE id=?');
        $stmt->execute([$input['id']]);
        echo json_encode(["success" => true]);
        break;
    default:
        http_response_code(405);
        echo json_encode(["error" => "Método não permitido"]);
}

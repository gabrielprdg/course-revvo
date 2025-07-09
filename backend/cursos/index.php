<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$dataFile = __DIR__ . '/data.json';

function getCursos($dataFile) {
    if (!file_exists($dataFile)) return [];
    $json = file_get_contents($dataFile);
    return json_decode($json, true) ?: [];
}

function saveCursos($dataFile, $cursos) {
    file_put_contents($dataFile, json_encode($cursos, JSON_PRETTY_PRINT));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

switch ($method) {
    case 'GET':
        echo json_encode(getCursos($dataFile));
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $cursos = getCursos($dataFile);
        $input['id'] = count($cursos) ? max(array_column($cursos, 'id')) + 1 : 1;
        $cursos[] = $input;
        saveCursos($dataFile, $cursos);
        echo json_encode($input);
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        $cursos = getCursos($dataFile);
        foreach ($cursos as &$curso) {
            if ($curso['id'] == $input['id']) {
                $curso = array_merge($curso, $input);
                break;
            }
        }
        saveCursos($dataFile, $cursos);
        echo json_encode($input);
        break;
    case 'DELETE':
        $input = json_decode(file_get_contents('php://input'), true);
        $cursos = getCursos($dataFile);
        $cursos = array_filter($cursos, function($curso) use ($input) {
            return $curso['id'] != $input['id'];
        });
        saveCursos($dataFile, array_values($cursos));
        echo json_encode(["success" => true]);
        break;
    default:
        http_response_code(405);
        echo json_encode(["error" => "Método não permitido"]);
}

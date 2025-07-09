<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$dataFile = __DIR__ . '/data.json';

function getSlides($dataFile) {
    if (!file_exists($dataFile)) return [];
    $json = file_get_contents($dataFile);
    return json_decode($json, true) ?: [];
}

function saveSlides($dataFile, $slides) {
    file_put_contents($dataFile, json_encode($slides, JSON_PRETTY_PRINT));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}

switch ($method) {
    case 'GET':
        echo json_encode(getSlides($dataFile));
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        $slides = getSlides($dataFile);
        $input['id'] = count($slides) ? max(array_column($slides, 'id')) + 1 : 1;
        $slides[] = $input;
        saveSlides($dataFile, $slides);
        echo json_encode($input);
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        $slides = getSlides($dataFile);
        foreach ($slides as &$slide) {
            if ($slide['id'] == $input['id']) {
                $slide = array_merge($slide, $input);
                break;
            }
        }
        saveSlides($dataFile, $slides);
        echo json_encode($input);
        break;
    case 'DELETE':
        $input = json_decode(file_get_contents('php://input'), true);
        $slides = getSlides($dataFile);
        $slides = array_filter($slides, function($slide) use ($input) {
            return $slide['id'] != $input['id'];
        });
        saveSlides($dataFile, array_values($slides));
        echo json_encode(["success" => true]);
        break;
    default:
        http_response_code(405);
        echo json_encode(["error" => "Método não permitido"]);
}

<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Revvo Challenge API</title>
  <style>
    body { font-family: sans-serif; background: #f7f7fa; padding: 2rem; }
    code { background: #eee; padding: 2px 6px; border-radius: 4px; }
    h1 { color: #2a7ae4; }
  </style>
</head>
<body>
  <h1>Revvo Challenge API</h1>
  <p>Bem-vindo! Use os endpoints abaixo para acessar os dados:</p>
  <ul>
    <li><code>/cursos/</code> — CRUD de cursos (GET, POST, PUT, DELETE)</li>
    <li><code>/slideshow/</code> — CRUD do slideshow (GET, POST, PUT, DELETE)</li>
  </ul>
  <p>Envie dados em <code>JSON</code> no corpo das requisições <code>POST</code>, <code>PUT</code> e <code>DELETE</code>.</p>
</body>
</html>

<?php
header('Content-Type: application/json');

$dataFile = 'data.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newSkill = isset($_POST['novaHabilidade']) ? trim($_POST['novaHabilidade']) : '';
    $newExperience = isset($_POST['novaExperiencia']) ? trim($_POST['novaExperiencia']) : '';

    if (empty($newSkill) && empty($newExperience)) {
        echo json_encode(['success' => false, 'message' => 'Preencha pelo menos um dos campos.']);
        exit;
    }   
    // Se o arquivo não existir, cria um esqueleto válido
    if (!file_exists($dataFile)) {
        file_put_contents($dataFile, json_encode(['skills' => [], 'experiences' => []]));
    }

    $fileContent = file_get_contents($dataFile);
    $data = json_decode($fileContent, true);
    
    // Garante que $data seja um array caso o arquivo estivesse corrompido ou vazio
    if (!is_array($data)) {
        $data = ['skills' => [], 'experiences' => []];
    }

    if (!isset($data['skills'])) $data['skills'] = [];
    if (!isset($data['experiences'])) $data['experiences'] = [];

    if (!empty($newSkill)) {
    $data['skills'][] = $newSkill;
    }
    if (!empty($newExperience)) {
    $data['experiences'][] = $newExperience;
    }

    if (file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode(['success' => true, 'message' => 'Dados adicionados com sucesso!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erro ao salvar os dados.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método não suportado.']);
}
?>

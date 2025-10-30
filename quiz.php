<?php
// quiz.php - Página de Quiz em OverSecurity
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OverSecurity - Quiz</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
</head>
<body>
  <?php include 'nav.php'; ?>

  <section class="hero">
    <h2>Quiz de Cibersegurança</h2>
    <p>Teste seus conhecimentos e aprenda enquanto responde!</p>
  </section>

  <main class="content">
    <!-- Botão para iniciar o quiz -->
    <button class="btn" id="startQuizBtn">Iniciar Quiz</button>

    <!-- Modal do Quiz -->
    <div class="quiz-modal" id="quiz-modal">
      <div class="quiz-content">
        <h2 class="quiz-question" id="quiz-question"></h2>
        <div class="quiz-options" id="quiz-options"></div>
        <!-- Feedback de resposta -->
        <div id="quiz-feedback" class="quiz-feedback"></div>
        <div class="quiz-buttons">
          <button id="quiz-restart" class="quiz-restart" style="display: none">Voltar a Fazer</button>
          <button id="quiz-close" class="quiz-close">Fechar</button>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <p>&copy; 2025 OverSecurity - Todos os direitos reservados</p>
  </footer>
</body>
</html>

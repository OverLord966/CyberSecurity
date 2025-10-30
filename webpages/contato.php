<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../PHPMailer/src/Exception.php';
require __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer/src/SMTP.php';

$msg = '';
$msg_class = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';

    if (!$nome || !$email || !$mensagem) {
        $msg = 'Por favor, preencha todos os campos.';
        $msg_class = 'msg-erro';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg = 'Por favor, insira um email válido.';
        $msg_class = 'msg-erro';
    } else {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'diogoamaro2001@gmail.com';
            $mail->Password = 'iddx vpck pdaj detn';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            $mail->setFrom('diogoamaro2001@gmail.com', 'OverSecurity');
            $mail->addReplyTo($email, $nome);
            $mail->addAddress('diogoamaro2001@gmail.com', 'Seu Nome');

            $mail->isHTML(false);
            $mail->Subject = 'Mensagem do site OverSecurity';
            $mail->Body = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";

            $mail->send();
            $msg = 'Mensagem enviada com sucesso!';
            $msg_class = 'msg-sucesso';
        } catch (Exception $e) {
            $msg = "Erro ao enviar mensagem: {$mail->ErrorInfo}";
            $msg_class = 'msg-erro';
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>OverSecurity - Contato</title>
  <link rel="stylesheet" href="../style.css" />
  <style>
    /* Estilo para as mensagens */
    .msg-sucesso {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
    }
    .msg-erro {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      padding: 15px;
      margin: 20px 0;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <h1 class="logo">OverSecurity</h1>
    <ul class="nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="tutoriais.html">Tutoriais</a></li>
      <li><a href="ferramentas.html">Ferramentas</a></li>
      <li><a href="quiz.html">Quiz</a></li>
      <li><a href="contato.php">Contato</a></li>
    </ul>
  </nav>

  <section class="destaques">
    <?php if ($msg): ?>
      <div class="<?php echo $msg_class; ?>">
        <?php echo htmlspecialchars($msg); ?>
      </div>
    <?php endif; ?>

    <form class="formulario" action="" method="POST">
      <h2>Tem alguma dúvida? Entre em contato!</h2>

      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" placeholder="Seu nome" required
        value="<?php echo isset($nome) ? htmlspecialchars($nome) : ''; ?>">

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="seu@email.com" required
        value="<?php echo isset($email) ? htmlspecialchars($email) : ''; ?>">

      <label for="mensagem">Mensagem:</label>
      <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem aqui..." required><?php echo isset($mensagem) ? htmlspecialchars($mensagem) : ''; ?></textarea>

      <button type="submit" class="btn">Enviar</button>
    </form>
  </section>

  <footer class="footer">
    <p>&copy; 2025 OverSecurity - Todos os direitos reservados</p>
  </footer>
</body>
</html>

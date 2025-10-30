document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const modal = document.getElementById("quiz-modal");
  const closeBtn = document.getElementById("quiz-close");
  const restartBtn = document.getElementById("quiz-restart");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");

  // Função para baralhar arrays
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const quizQuestions = [
    // [mesmas 20 perguntas que já tens aqui...]
    {
      question: "Quais das seguintes práticas ajudam a proteger contra ataques de phishing?",
      options: [
        "Ignorar atualizações de software",
        "Verificar o remetente dos e-mails antes de clicar",
        "Compartilhar senhas em redes sociais",
        "Nunca clicar em links suspeitos"
      ],
      correct: [1, 3]
    },
    {
      question: "O que é um ataque DoS?",
      options: ["Download de Software","Negação de Serviço","Distribuição Segura","Domínio Seguro"],
      correct: 1
    },
    {
      question: "Qual é o objetivo principal de um firewall?",
      options: ["Criar conexões seguras","Bloquear tráfego indesejado","Verificar vírus","Fazer backup"],
      correct: 1
    },
    {
      question: "O que significa a sigla 'VPN'?",
      options: ["Virtual Private Network","Vírus Protegido Neutralizado","Virtual Proxy Node","Verificação de Privacidade Nacional"],
      correct: 0
    },
    {
      question: "O que é phishing?",
      options: ["Tipo de firewall","Envio de e-mail fraudulento","Ataque DoS","Criptografia de dados"],
      correct: 1
    },
    {
      question: "Qual protocolo protege páginas web com HTTPS?",
      options: ["SSL/TLS","FTP","SMTP","DNS"],
      correct: 0
    },
    {
      question: "O que faz um antivírus?",
      options: ["Bloquear portas de rede","Detectar e remover malware","Gerenciar usuários","Fazer backup"],
      correct: 1
    },
    {
      question: "O que é engenharia social?",
      options: ["Criptografia avançada","Ataque baseado em enganar pessoas","Rede social privada","Técnica de firewall"],
      correct: 1
    },
    {
      question: "Qual o principal objetivo de um IDS (Sistema de Detecção de Intrusos)?",
      options: ["Fazer backup","Detectar atividades suspeitas","Gerenciar senhas","Criptografar discos"],
      correct: 1
    },
    {
      question: "O que é um trojan?",
      options: ["Software legítimo","Malware disfarçado de software útil","Tipo de criptografia","Protocolo de rede"],
      correct: 1
    },
    {
      question: "O que é um ransomware?",
      options: ["Firewall de rede","Proteção de e-mail","Rede privada virtual","Vírus que sequestra dados"],
      correct: 3
    },
    {
      question: "Qual técnica impede que invasores leiam dados em trânsito?",
      options: ["VPN","Backup","Antivírus","Firewall"],
      correct: 0
    },
    {
      question: "O que é brute force?",
      options: ["Efetuar força bruta para descobrir senhas","Tipo de firewall","Criptografia de dados","Monitoramento de rede"],
      correct: 0
    },
    {
      question: "Qual a função de um honeypot?",
      options: ["Armadilha para atrair invasores","Backups automáticos","Antivírus gratuito","Filtro de spam"],
      correct: 0
    },
    {
      question: "O que é um botnet?",
      options: ["Rede de computadores infectados","Tipo de firewall","Ataque DoS","Software de backup"],
      correct: 0
    },
    {
      question: "Qual é a utilização de um certificado digital?",
      options: ["Autenticar identidade online","Bloquear vírus","Gerar senhas","Monitorar rede"],
      correct: 0
    },
    {
      question: "O que significa “zero-day”?",
      options: ["Vulnerabilidade desconhecida e sem correção","Dia sem ataques","Antivírus offline","Backup removível"],
      correct: 0
    },
    {
      question: "Qual ferramenta é usada para pentest em redes Wi-Fi?",
      options: ["Aircrack-ng","Photoshop","Excel","Word"],
      correct: 0
    },
    {
      question: "O que é SQL Injection?",
      options: ["Ataque a banco de dados via injeção de código","Criptografia de dados","Antivírus de SQL","Backup de servidor"],
      correct: 0
    },
    {
      question: "Qual porta padrão é usada por HTTPS?",
      options: ["443","80","21","25"],
      correct: 0
    }
  ];

  // 🧠 Baralha perguntas e respostas antes de iniciar o quiz
  shuffleArray(quizQuestions);
  quizQuestions.forEach(q => {
    const original = q.options.map((opt, i) => ({ opt, index: i }));
    shuffleArray(original);
    q.options = original.map(o => o.opt);
    if (Array.isArray(q.correct)) {
      q.correct = original
        .map((o, i) => ({ i, originalIdx: o.index }))
        .filter(o => q.correct.includes(o.originalIdx))
        .map(o => o.i);
    } else {
      q.correct = original.findIndex(o => o.index === q.correct);
    }
  });

  let currentIndex = 0;
  let score = 0;

  function resetState() {
    optionsEl.innerHTML = '';
  }

  function showQuestion() {
    resetState();
    const q = quizQuestions[currentIndex];
    const multi = Array.isArray(q.correct) && q.correct.length > 1;
  
    questionEl.textContent = q.question;
  
    if (!multi) {
      // Resposta única
      q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.dataset.index = i;
        btn.addEventListener("click", () => handleSingle(i, btn));
        optionsEl.appendChild(btn);
      });
    } else {
      // Resposta múltipla
      const selectedSummary = document.createElement("div");
      selectedSummary.id = "selected-summary";
      selectedSummary.style.marginBottom = "10px";
      selectedSummary.style.fontStyle = "italic";
      selectedSummary.textContent = "Selecionadas: nenhuma";
      optionsEl.appendChild(selectedSummary);
  
      q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.dataset.index = i;
        btn.addEventListener("click", () => {
          btn.classList.toggle("selected");
          updateSelectedSummary();
        });
        optionsEl.appendChild(btn);
      });
  
      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirmar";
      confirmBtn.className = "option-btn";
      confirmBtn.addEventListener("click", handleMultiple);
      optionsEl.appendChild(confirmBtn);
  
      function updateSelectedSummary() {
        const selected = Array.from(optionsEl.querySelectorAll(".option-btn.selected"))
          .map(btn => btn.textContent);
        selectedSummary.textContent = selected.length
          ? `Selecionadas: ${selected.join(", ")}`
          : "Selecionadas: nenhuma";
      }
    }
  }
  

  function handleSingle(idx, btn) {
    const q = quizQuestions[currentIndex];
    disableOptions();
    if (idx === q.correct) {
      score++;
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect");
      const corr = document.querySelector(`.option-btn[data-index="${q.correct}"]`);
      corr && corr.classList.add("correct");
    }
    nextAfterDelay();
  }

  function handleMultiple() {
    const q = quizQuestions[currentIndex];
    const optionButtons = Array.from(optionsEl.querySelectorAll(".option-btn"))
      .filter(btn => btn.dataset.index !== undefined);

    const selected = optionButtons.filter(btn => btn.classList.contains("selected")).map(btn => +btn.dataset.index);

    disableOptions();

    selected.forEach(idx => {
      const btn = optionsEl.querySelector(`.option-btn[data-index="${idx}"]`);
      if (q.correct.includes(idx)) {
        score++;
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
      }
    });

    q.correct.forEach(idx => {
      const btn = optionsEl.querySelector(`.option-btn[data-index="${idx}"]`);
      if (btn && !btn.classList.contains("correct")) {
        btn.classList.add("correct");
      }
    });

    nextAfterDelay();
  }

  function disableOptions() {
    document.querySelectorAll(".option-btn").forEach(b => {
      b.classList.add("disabled");
      b.disabled = true;
    });
  }

  function nextAfterDelay() {
    setTimeout(() => {
      currentIndex++;
      if (currentIndex < quizQuestions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }, 1000);
  }

  function showResults() {
    resetState();
    questionEl.textContent = `Quiz concluído! Acertou ${score} de ${quizQuestions.length}.`;

    // Salva pontos no localStorage se estiver logado
    const user = window.getCurrentUser?.();
    if (user) {
      window.addScoreToUser(score);
    }

    restartBtn.style.display = "inline-block";
    closeBtn.style.display = "inline-block";
  }

  startBtn.addEventListener("click", () => {
    startBtn.style.display   = "none";
    closeBtn.style.display   = "inline-block";
    modal.style.display      = "flex";
    showQuestion();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    startBtn.style.display = "block";
    restartBtn.style.display = "inline-block";
  });

  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    restartBtn.style.display = "none";
    showQuestion();
  });
});

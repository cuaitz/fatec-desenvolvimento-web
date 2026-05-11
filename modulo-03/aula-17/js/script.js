// Variáveis globais
let perguntas = [];
let atual = 0;
let pontos = 0;

elBotao = document.getElementById('btnIniciar');
elProgresso = document.getElementById('progresso');
elPergunta = document.getElementById('pergunta');
elOpcoes = document.getElementById('opcoes');
elQuiz = document.getElementById('quiz');
elResultado = document.getElementById('resultado');

elBotao.addEventListener('click', async () => {
    // Esconder botão, mostrar quiz
    elBotao.hidden = true;
    elQuiz.hidden = false;
    // Buscar perguntas e exibir primeira
    await buscarPerguntas();
    exibirPergunta();
});

// Buscar perguntas da API
async function buscarPerguntas() {
  const url =
    'https://tryvia.ptr.red/api.php'
    + '?amount=10&type=multiple';

  try {
    const res = await fetch(url);
    const data = await res.json();
    perguntas = data.results;
  } catch (erro) {
    console.log('Erro:', erro);
  }
}

// Embaralhar array
function embaralhar(array) {
  return array
    .sort(() => Math.random() - 0.5);
}

// Montar alternativas
function getAlternativas(pergunta) {
  const todas = [
    ...pergunta.incorrect_answers,
    pergunta.correct_answer
  ];
  return embaralhar(todas);
}

function exibirPergunta() {
  const p = perguntas[atual];
  const alternativas =
    getAlternativas(p);

  // Atualizar progresso
  elProgresso.textContent =
    `${atual + 1} / ${perguntas.length}`;

  // Exibir pergunta
  elPergunta.innerHTML =
    p.question;

  // Criar botões para cada alternativa
  elOpcoes.innerHTML = '';
  alternativas.forEach((alt) => {
    const btn = document
      .createElement('button');
    btn.innerHTML = alt;
    btn.className = 'opcao';
    elOpcoes.appendChild(btn);
  });
}

// Delegação de eventos nas opções
elOpcoes.addEventListener('click',
  (e) => {
    if (!e.target.classList
      .contains('opcao')) return;

    const resposta =
      e.target.textContent;
    const correta =
      perguntas[atual].correct_answer;

    if (resposta === correta) {
      pontos++;
      e.target.classList
        .add('correta');
    } else {
      e.target.classList
        .add('errada');
    }

    // Avançar após 1 segundo
    setTimeout(() => {
      atual++;
      if (atual < perguntas.length) {
        exibirPergunta();
      } else {
        exibirResultado();
      }
    }, 1000);
  }
);

function exibirResultado() {
  // Esconder quiz, mostrar resultado
  elQuiz.hidden = true;
  elResultado.hidden = false;

  const total = perguntas.length;
  const pct =
    Math.round((pontos / total) * 100);

  let msg = 'Tente novamente!';
  if (pct >= 80) msg = 'Excelente!';
  else if (pct >= 60) msg = 'Bom trabalho!';

  elResultado.innerHTML = `
    <h2>${msg}</h2>
    <p>${pontos} de ${total} (${pct}%)</p>
    <button id="btnReiniciar">
      Jogar novamente
    </button>
  `;
    document.getElementById('btnReiniciar').addEventListener('click', async () => {
        // Resetar variáveis
        atual = 0;
        pontos = 0;
        
        // Esconder resultado, mostrar quiz
        elResultado.hidden = true;
        elQuiz.hidden = false;

        // Recarregar perguntas
        await buscarPerguntas();

        // Exibir primeira pergunta
        exibirPergunta();
    });
}

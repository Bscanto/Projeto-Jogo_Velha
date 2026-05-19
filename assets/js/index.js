let board = [];
let gameActive = false;
let currentPlayer = 'X';
let playerNames = { X: '', O: '' };
let scores = { X: 0, O: 0, tie: 0 };
let winningCombination = [];

const startButton = document.getElementById('startBtn');
const gameSection = document.getElementById('game');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');

player1Input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    startGame();
  }
});

player2Input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    startGame();
  }
});

function startGame() {
  const player1 = player1Input.value.trim();
  const player2 = player2Input.value.trim();

  if (!player1 || !player2) {
    alert('Por favor, preencha os nomes dos jogadores.');
    return;
  }

  playerNames.X = player1;
  playerNames.O = player2;
  currentPlayer = 'X';
  gameActive = true;
  winningCombination = [];

  player1Input.disabled = true;
  player2Input.disabled = true;
  startButton.disabled = true;
  gameSection.style.display = 'block';

  document.getElementById('turnInfo').textContent =
    `Vez de: ${playerNames[currentPlayer]} (${currentPlayer})`;
  updateScoreboard();
  createBoard();
}

function createBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  board = ['', '', '', '', '', '', '', '', ''];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    boardElement.appendChild(cell);
  }

  document.getElementById('result').textContent = '';
}

function handleCellClick(event) {
  const index = event.target.dataset.index;

  if (!gameActive || board[index] !== '') {
    return;
  }

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  if (checkWinner()) {
    const message = `${playerNames[currentPlayer]} (${currentPlayer}) venceu!`;
    document.getElementById('result').textContent = message;
    gameActive = false;
    scores[currentPlayer] += 1;
    highlightWinningCells();
    updateScoreboard();
    return;
  }

  if (!board.includes('')) {
    document.getElementById('result').textContent = 'Empate!';
    gameActive = false;
    scores.tie += 1;
    updateScoreboard();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('turnInfo').textContent =
    `Vez de: ${playerNames[currentPlayer]} (${currentPlayer})`;
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Linhas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Colunas
    [0, 4, 8],
    [2, 4, 6], // Diagonais
  ];

  return winConditions.some((combination) => {
    const [a, b, c] = combination;
    const result = board[a] && board[a] === board[b] && board[b] === board[c];
    if (result) {
      winningCombination = combination;
    }
    return result;
  });
}

function highlightWinningCells() {
  if (!winningCombination.length) {
    return;
  }

  winningCombination.forEach((index) => {
    const cell = document.querySelector(`.cell[data-index="${index}"]`);
    if (cell) {
      cell.classList.add('winner');
    }
  });
}

function updateScoreboard() {
  document.getElementById('scoreX').textContent = scores.X;
  document.getElementById('scoreO').textContent = scores.O;
  document.getElementById('scoreTie').textContent = scores.tie;
}

function resetBoard() {
  if (!playerNames.X || !playerNames.O) {
    alert('Comece um novo jogo antes de reiniciar o tabuleiro.');
    return;
  }

  currentPlayer = 'X';
  gameActive = true;
  winningCombination = [];
  document.getElementById('turnInfo').textContent =
    `Vez de: ${playerNames[currentPlayer]} (${currentPlayer})`;
  document.getElementById('result').textContent = '';
  createBoard();
}

function newGame() {
  gameActive = false;
  currentPlayer = 'X';
  playerNames = { X: '', O: '' };
  scores = { X: 0, O: 0, tie: 0 };
  winningCombination = [];

  player1Input.disabled = false;
  player2Input.disabled = false;
  player1Input.value = '';
  player2Input.value = '';
  startButton.disabled = false;
  gameSection.style.display = 'none';

  document.getElementById('turnInfo').textContent = '';
  document.getElementById('result').textContent = '';
  document.getElementById('board').innerHTML = '';
  updateScoreboard();
}

window.addEventListener('load', () => {
  gameSection.style.display = 'none';
  updateScoreboard();
});

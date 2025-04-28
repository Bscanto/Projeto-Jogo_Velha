# Jogo da Velha (Tic Tac Toe) em JavaScript

Este é um simples jogo da velha implementado com HTML, CSS e JavaScript. Os jogadores inserem seus nomes, e o jogo começa com o jogador "X". A cada jogada, o controle alterna entre os jogadores até que alguém vença ou ocorra um empate.

## 📦 Estrutura do Projeto

O projeto é composto por três arquivos principais:

- `index.html`: Estrutura da interface do usuário, onde os jogadores inserem seus nomes e o tabuleiro é exibido.
- `script.js`: Lógica do jogo, controle de turnos, verificação de vitória e empate, e reinício do jogo.
- `style.css` (opcional ou incluído no `head`): Estilização básica do tabuleiro e da interface.

## ✅ Funcionalidades

- Inserção dos nomes dos jogadores antes do início da partida.
- Alternância automática entre os jogadores "X" e "O".
- Verificação de condições de vitória (linhas, colunas e diagonais).
- Verificação de empate caso o tabuleiro fique cheio.
- Reinício automático ao clicar em "Reiniciar".

## 🧠 Lógica do Jogo

- O tabuleiro é representado por um array de 9 posições.
- Cada célula pode ser clicada uma vez por jogada.
- O jogo verifica a cada jogada se houve vitória ou empate.
- Exibe mensagens dinâmicas com o nome do jogador atual ou vencedor.

## 🖼️ Visual

- O tabuleiro é exibido em uma grade 3x3.
- Células são interativas e mostram o símbolo do jogador.
- Mensagens informativas indicam a vez, o vencedor ou empate.

## 🚀 Como usar

1. Abra o `index.html` em seu navegador.
2. Digite os nomes dos dois jogadores.
3. Clique em **"Iniciar Jogo"**.
4. Jogue alternadamente clicando nas células.
5. O jogo termina com uma vitória ou empate.
6. Use o botão **"Reiniciar"** para jogar novamente.

---

Divirta-se jogando!

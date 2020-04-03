{function playGame(playerInput) {

  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('wywołano displayResult')
    console.log('ruch komputera: ' + argComputerMove + ', ' + 'ruch gracza: ' + argPlayerMove);
    if (argPlayerMove == 'nieznany ruch') {
      return 'Wpisz wartości w przedziale 1 do 3!';
    } else if (argComputerMove == argPlayerMove) {
      return 'Remis!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      return 'Ty wygrywasz!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
    } else {
      return 'Komputer wygrywa!';
    }
  }
  const result = displayResult(computerMove, playerMove);
  printMessage(result);
}

function buttonClickedRock() {
  playGame(1);
}

const playRock = document.getElementById('play-rock');

playRock.addEventListener('click', buttonClickedRock);


function buttonClickedPaper() {
  playGame(2);
}

const playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', buttonClickedPaper);

function buttonClickedScisors() {
  playGame(3);
}

const playScisors = document.getElementById('play-scisors');

playScisors.addEventListener('click', buttonClickedScisors);
}
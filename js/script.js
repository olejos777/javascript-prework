{ const playGame = function (playerInput){
  clearMessages();

  const getMoveName = function (argMoveId){
    if (argMoveId == 1) {
      return 'kamień';
    } 
    if (argMoveId == 2) {
      return 'papier';
    }
    if (argMoveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  const displayResult = function (argComputerMove, argPlayerMove){
    
    if (argPlayerMove == 'nieznany ruch') {
      return 'Wpisz wartości w przedziale 1 do 3!';
    } 
    if (argComputerMove == argPlayerMove) {
      return 'Remis!';
    } 

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      return 'Ty wygrywasz!';
    } 

    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!';
    }
    
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
    } else {
      return 'Komputer wygrywa!';
    }
  }
  const result = displayResult(computerMove, playerMove);
  printMessage(result);
}


const buttonClickedRock = function () {
  playGame(1);
}

const playRock = document.getElementById('play-rock');

playRock.addEventListener('click', buttonClickedRock);

const buttonClickedPaper = function () {
  playGame(2);
}

const playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', buttonClickedPaper);

const buttonClickedScisors = function () {
  playGame(3);
}

const playScisors = document.getElementById('play-scisors');

playScisors.addEventListener('click', buttonClickedScisors);
}
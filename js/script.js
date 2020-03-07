function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } 

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
    computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if (playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

function displayResult (argComputerMove, argPlayerMove){
  console.log('wywołano displayResult')
  console.log('ruch komputera: ' + argComputerMove + ', ' + 'ruch gracza: ' + argPlayerMove);
  if (argPlayerMove == 'nieznany ruch') {
    return 'Wpisz wartości w przedziale 1 do 3!';
  } else if (argComputerMove == argPlayerMove) {
    return 'Remis!';
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    return 'Ty wygrywasz!';
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    return'Ty wygrywasz!';
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    return 'Ty wygrywasz!';
  } else {
    return 'Komputer wygrywa!';
  }
}
let result = displayResult (computerMove, playerMove);
printMessage( result);

/*if (playerMove == 'Nieznany ruch!') {
  printMessage ('Nieznany ruch!')  
} else if (computerMove == playerMove) {
  printMessage ('Remis!')  
} else if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage ('Ty wygrywasz!')
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage ('Ty wygrywasz!')
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage ('Ty wygrywasz!')
} else {
  printMessage ('Komputer wygrywa!')
}*/

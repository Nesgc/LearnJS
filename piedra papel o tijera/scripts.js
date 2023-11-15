function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    // Generar un número aleatorio entre 0 y 2
    const randomNumber = Math.floor(Math.random() * choices.length);
    // Seleccionar una opción basada en el número aleatorio
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie';
    }

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'You win!';
    }

    return  'You lose!';
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose rock, paper or scissors"); // Para navegador
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log('la pc eligio: ', computerSelection)
let computerWins = 0;
let playerWins = 0;
let round = 0;

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function userPlay() {
    let popMessage = prompt('Please enter: rock, scissors, or paper');
    let userSelection = popMessage.toLowerCase();
    return userSelection;
}

function roundPlay(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        computerWins += 0;
        playerWins += 0;
        return `IT'S A DRAW: you both selected - ${playerSelection}`;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins += 1;
        return `You chose: ${playerSelection}, and computer chose: ${computerSelection}. Rock beats Scissors!`;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins += 1;
        return `You chose: ${playerSelection}, and computer chose: ${computerSelection}. Scissors beat Paper!`;

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins += 1;
        return `You chose: ${playerSelection}, and computer chose: ${computerSelection}. Paper beats Rock`;

    } else {
        computerWins += 1;
        return `You chose: ${playerSelection}, and computer chose: ${computerSelection}. ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (round = 0; round < 5; round ++) {
        // rounds
        const computerSelection = computerPlay();
        const playerSelection = userPlay();
        console.log(roundPlay(playerSelection, computerSelection));
    }
    if (playerWins > computerWins) {
        console.log(`You win with a score of: ${playerWins}, computer loses with a score of ${computerWins}`)
    } else if (playerWins < computerWins) {
        console.log(`Computer wins with a score of ${computerWins}, player loses with a score of ${playerWins}`);
    } else {
        console.log(`It's draw: computer get ${computerWins}; player gets: ${playerWins}`)
    }
    // console.log(computerWins, playerWins);
}
game();
              
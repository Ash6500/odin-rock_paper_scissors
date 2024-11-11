
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    const computerChoice = options[Math.floor(Math.random() * options.length)];    
    return computerChoice;
}

function getHumanChoice(){
    let validInput = false;
    while (validInput == false) {
        const humanChoice = prompt('Enter your choice: ');

        if(humanChoice == null){
            continue;
        }

        const humanChoiceLower = humanChoice.toLowerCase();

        if(options.includes(humanChoice)){
            validInput = true;
            return humanChoiceLower;
        }
    }
}

function checkWinner(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        return 'Tie';
    }else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        return 'Player';
    }else{
        return 'Computer';
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    
    if(result == 'Tie'){
        return "It's a Tie!";
    }else if(result == 'Player'){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0;
    console.log('Welcome!');
    
    for (let index = 0; index < 5; index++) {
        console.log(`Round ${index+1}: `);
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if(checkWinner(playerSelection, computerSelection) == 'Player'){
            humanScore++;
        }else if(checkWinner(playerSelection, computerSelection) == 'Computer'){
            computerScore++;
        }
    }
    console.log('Game Over!');

    if(humanScore > computerScore){
        console.log('Player is the winner!');
    }else if(humanScore < computerScore){
        console.log('Computer is the winner!');
    }else{
        console.log('We have a Tie!');
    }
    
}

playGame();
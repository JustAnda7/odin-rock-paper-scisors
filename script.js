function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSOR';
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice == 'ROCK') {
        if (computerChoice == 'PAPER') {
            return 'lose';
        } else if (computerChoice == 'SCISSOR') {
            return 'win';
        } else {
            return 'tie';
        }
    } else if (playerChoice == 'PAPER') {
        if (computerChoice == 'SCISSOR') {
            return 'lose';
        } else if (computerChoice == 'ROCK') {
            return 'win';
        } else {
            return 'tie';
        }
    } else {
        if (computerChoice == 'ROCK') {
            return 'lose';
        } else if (computerChoice == 'PAPER') {
            return 'win';
        } else {
            return 'tie';
        }
    }
}

function game() {
    let player = 0;
    let computer = 0;
    let playerChoice = "";
    let computerChoice = "";
    for (let i = 0; i < 5; i++) {
        while (playerChoice == "") {
            playerChoice = prompt('Choose between rock, paper or scissor\n(Note: Don\'t think of fooling me!!)');   
        }
        computerChoice = getComputerChoice();
        let res = playRound(playerChoice, computerChoice);
        alert(res);
        if (res == 'win') {
            player++;
        } else if (res == 'lose') {
            computer++;
        }
        playerChoice = "";
    }
    alert(`Player:${player}\nComputer:${computer}`);
}

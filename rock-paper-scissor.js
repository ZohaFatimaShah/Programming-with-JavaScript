const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get the choice name based on the number
function getChoiceName(choice) {
    if (choice === 0) return 'Rock';
    if (choice === 1) return 'Paper';
    if (choice === 2) return 'Scissors';
    return 'Invalid choice';
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)) {
        return 'The player won!';
    } else {
        return 'The computer won!';
    }
}

// Get the player's choice
rl.question('Enter your choice (0 for Rock, 1 for Paper, 2 for Scissors): ', (playerInput) => {
    const player = parseInt(playerInput, 10);
    if (player !== 0 && player !== 1 && player !== 2) {
        console.log('Invalid input. Please enter 0, 1, or 2.');
        rl.close();
        return;
    }

    // Generate the computer's choice
    const computer = Math.floor(Math.random() * 3);

    // Get the names of the choices
    const playerChoice = getChoiceName(player);
    const computerChoice = getChoiceName(computer);

    // Determine and display the result
    console.log(`Player picked:      ${playerChoice}`);
    console.log(`Computer picked:    ${computerChoice}`);
    console.log(determineWinner(player, computer));

    rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// List of possible Magic 8 Ball answers
const answers = [
    "Yes - definitely.",
    "It is decidedly so.",
    "Without a doubt.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Function to get a random answer
function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

rl.question('Question: ', (question) => {
    const answer = getRandomAnswer();
    console.log(`Magic 8 Ball: ${answer}`);
    rl.close();
});

/*
We just got back from a trip to Asia, specifically China, Japan, and South Korea. When we got back we have some leftover cash:

    🇨🇳 Chinese yuan
    🇯🇵 Japanese yen
    🇰🇷 South Korean won

Create a currency.js program that starts with the amount you have in yuan, yen, and won and calculates the total in USD.

Make sure to Google the current exchange rates!

The output of the program should look like this:

What do you have left in yuan? 560
What do you have left in yen? 2455
What do you have left in won? 3280

105.5275
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you have left in yuan? ', (yuan) => {
    rl.question('What do you have left in yen? ', (yen) => {
        rl.question('What do you have left in won? ', (won) => {
            
            // Replace these values with the current exchange rates you find online
            const yuanToUsd = 0.14; // Example rate
            const yenToUsd = 0.007; // Example rate
            const wonToUsd = 0.00078; // Example rate

            const yuanInUsd = yuan * yuanToUsd;
            const yenInUsd = yen * yenToUsd;
            const wonInUsd = won * wonToUsd;

            const totalUsd = yuanInUsd + yenInUsd + wonInUsd;

            console.log(totalUsd.toFixed(4));

            rl.close();
        });
    });
});

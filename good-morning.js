/*
Create a good-morning.js program that prints a message if it's early in the day.

Define an hour variable and give it the current time of day.

Write an if statement for the following:

    If hour < 12, print “Good morning 🌞” and some of your morning routines.

After you run the code, change hour's value and run it again. Do this a few times to make sure the program is working as intended.
*/

let now = new Date()
let hour = now.getHours()


console.log(`Current date and time: ${now}`);
console.log(`Current hour (local time): ${now.getHours()}`);
console.log(`Current hour (UTC): ${now.getUTCHours()}`);
console.log(`Time zone offset (in minutes): ${now.getTimezoneOffset()}`);
console.log(`Time zone offset (in hour): ${now.getTimezoneOffset() / 60}`);
console.log(`Adjusted Current hour (UTC): ${(now.getUTCHours() - (now.getTimezoneOffset() / 60)) % 12 || 0}`);
// const period = localHour >= 12 ? 'PM' : 'AM';
if(hour < 12){
    console.log('Good morning 🌞')
}
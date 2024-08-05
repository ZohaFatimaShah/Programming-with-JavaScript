let myNumber = 4
let binary = ""

// APPPENDING - INCORRECT
// while(myNumber > 0){
//     if((myNumber % 2) == 0){
//         binary = binary.concat("0")
//     }else{
//         binary = binary.concat("1")
//     }
//     myNumber = Math.floor(myNumber/2)
// }
// console.log(binary)


// PREPENDING - CORRECT
while (myNumber > 0) {
  if (myNumber % 2 === 0) {
    binary = "0" + binary; // Prepend "0"
  } else {
    binary = "1" + binary; // Prepend "1"
  }
  myNumber = Math.floor(myNumber / 2); // Update myNumber
}

console.log(binary);
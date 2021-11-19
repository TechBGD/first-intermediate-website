// CONDITIONS

let a = 5; 

if (a){
    console.log("This code works.")
}
else {
    console.log("Run this code instead.(Condtions)")
}

// NOTES IN CONDITIONS

// === and !== 
// < and >
// <= and >=

// LOGICAL OPERATORS

let b = 10; 

if (b === 10 && b > 5) {
    console.log("\nThis number is bigger than 5")
} 

if (b === 10 || b > 6) {
    console.log("This number is bigger than 6.")
}

if (!(b === 11)){
    console.log("The number is lower than 11\n")
  }    


// SWITCH STATEMENTS 

switch (b) {
    case 10:
        console.log("This number equals with 10.");
        break;

    case 11:
        console.log("This number equals with 11.");
        break;

    default:
        console.log("Run this code anyway. (Switch Operators)");
}

// TERNARY OPERATORS

let c = 15
const AlgebraMath = (c) ? "\nHappy birthday" : "\nGood Luck"
console.log(AlgebraMath)
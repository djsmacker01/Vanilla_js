// *Variables*
// Declare a variable, assign it a boolean, and alert the value

// let booleanValue = false;
// alert(booleanValue)
// Declare a variable, reassign it to your favorite color, and console log the value

// let favoriteColor = "red"
// favoriteColor = "blue"
// console.log(`Favorite ${favoriteColor}`)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
// function sumThreeNumbers(a,b,c,d) {
//     return (a + b + c + d) / 4;
// }
// sumThreeNumbers(30,40,33,12)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

// function twoNumbers(a, b) { 
//     console.log(Math.pow(a,b));
// }
// twoNumbers(30,40)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// function booleanToString(bool, string) {
    // if (bool) {
    //     alert(String)
    // }
    // else {
    //     console.log(string)
    // }

//   bool ? alert(string) : console.log(string)
// }

//*Loops*
//Create a function that takes in a number. 
// Console log all values from 1 to that number,
// but if the number is divisible by 3 log "fizz" 
// instead of that number, if the number is divisible by 5 log "buzz" 
// instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" 
// instead of that number
function fizzBuzz(number) { 
    for (let i = 1; i < number; i++) {
        //  console.log(i)
        if (i % 3 === 0 &&  i % 5 === 0) { 
           console.log('FizzBuzz')
        }
       else if (i % 3 === 0) {
            console.log('fizz')
        }
        else if (i % 5 === 0) {
            console.log('buzz')
        }
         
        else {
            console.log(i)
        }
     } 
}
fizzBuzz(16)
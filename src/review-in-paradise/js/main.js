// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
// let favoriteFood
// favoriteFood = 'Plantain'
// alert(favoriteFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
// let strVal = 'Hello, Twitch!'
// // let res1 = strVal.splice(2, 1)
// let res = strVal.charAt(1)
// alert(res)

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

// function threeNumDiv(n1, n2, n3) {
//     let product = (n1 / n2) * n3
//     alert(product)
// }
// threeNumDiv(30,5,6)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(number) {
    let numRoot = Math.cbrt(number)
    console.log(numRoot)
}
cubeRoot(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkSummer(month) {
    let monthToLowerCase = month.toLowerCase();
    if (monthToLowerCase === 'june' || monthToLowerCase === 'july' || monthToLowerCase === 'august') { 
        alert('YAY')
    }
    else {
        alert('Boo')
    }
}
 
checkSummer('June')

//*Loops*
//Create a function that takes in a number.
// Console log every number from 1 to that number while skipping multiples of 5.
function skip5(number) { 
    for (let i = 1; i <= number; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}

skip5(20)
//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['Mad', 'Rush Hour', 'Prison Break', 'Marlin', 'Legend of the seeker']
movieTitles.forEach(movieTitle => { 
    document.querySelector('h2').innerText += movieTitle
})

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArray = [2, 4, 6, 8, 10, 12, 14]

// for (let i = 0; i < numArray.length; i++){ 

// }
numArray.forEach((item, index) => {
    numArray[index] = item + 3
})

//Find the average of all the numbers from question two

// let sum = 0

// for (let i = 0; i < numArray.length; i++){
//     sum += numArray[i]
// let res = sum / numArray.length
// }
// console.log(res)

// Add/remove items
// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// Other Array Method
// Splice: removes items, insert and replace items
// How to delete element from the Array, use delete()
let arr = ["I", "study", "JavaScript", "right", "now"]

// delete arr[0];
// arr.splice(0, 1);

arr.splice(0,3, "Let's", "dance")

alert(arr.length);
console.log(arr)

// slice Method
// It returns a new array copying to it all items from index start to end(not including end).
//  Both start and end can be negative, in that case position from array end is assumed.
let array = ["a", "b", "c", "d", "e"]

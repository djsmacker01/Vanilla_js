//Create a function that takes in an array of numbers.
// Multiply each number together and alert the product. 

function arrTwoNum(arr) {
    let product = 1
    
    // arr.forEach(element => {
    //     product *= element
    //     alert(product)
    // });

    for (let i = 0; i < arr.length; i++) { 
        product *= arr[i];
    }
}
arrTwoNum([10,20,10])
// arrTwoNum([30,80,10])


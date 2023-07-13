/*
// Write a function called calculateArea that takes two arguments, 
width and height, and returns the area of a rectangle.
// Create a function called greetUser that takes a name argument 
and returns a greeting message including the name.
// Write a function named sumArray that accepts an array of
 numbers as an argument and returns the sum of all the numbers in the array.
 */

 function calculateArea(width,height){
    area = width*height
    return area
 }
 console.log(calculateArea(15,7));


function greetUser(name){
    console.log(`Greetings and Salutations ${name}`)
}
greetUser("Stan")


let testArr = [4,9,10,20,5,1,20,30];
function sumArray(num){
    
    let sum = 0 
    for (let i = 0; i<num.length; i+=1){
        sum += num[i];
    }
    return sum
}
// console.log(sumArray(testArr));
console.log(sumArray(testArr));
// 11.10.1. Practice Your Skills
//Create an anonymous fucntion and set it equal to a variable.



/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */

let randomFunction = function(str){
    if (typeof str === "number"){
      return str*3;
    } else if(typeof str === "string"){
      return "Arrr!";
    } else{
      return str;
    }
  }
console.log(randomFunction("10"))


/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

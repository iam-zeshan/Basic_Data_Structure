/*
We can remove an items from the Array by using 'pop()' which will remove the element at the end in the array and the 'shift()' and that will remove the item in the beggening in an array.

Task:
We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/

function popShift(arr) {
    let popped; // Change this line
    let shifted; // Change this line
    shifted = arr.shift();
    popped = arr.pop();
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
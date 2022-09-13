/*
'slice()', it is the another JavaScript method that, uses for extraction unlike 'splice()' method, but when we use the method slice() it will return the newly array and untoched the array fromwhere we've extract the items.

Task:
We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

function forecast(arr) {
    // Only change code below this line
    let newArray = arr.slice(2, 4);
    return newArray;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
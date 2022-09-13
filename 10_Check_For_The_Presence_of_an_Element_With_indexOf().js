/*
If we want to find the index number of a specific element in the arrau then, we can use a method called 'indexOf()', which is also the JavaScript built in method.
if the element wasn't present in the array then it will return '-1'.
Task:
indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) < 0)
    {
      return false;
    }else
    {
      return true;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

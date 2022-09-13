/*
If we want to remove the array's element in somewhere between then, we should be using a 'splice()' method, actuallu this method takes 3 arguments, but for now I'm focusing only on 2, the first argument will tell the splice() method from which location the removing element should start and then the second  argument would tell to what location the elements should be removed.
When we romove an items using splice method, then it not just removing the items we want but also make a new array which includes the removed elements.

Task:
We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(4, 4);
arr.shift();

//OR
arr.splice(1, 4);

// Only change code above this line
console.log(arr);
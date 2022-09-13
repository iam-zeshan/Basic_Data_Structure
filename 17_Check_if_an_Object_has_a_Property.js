/*
We can check if the property is present in the Object. We can do this using two ways:
No 1: 'hasOwnProperty()'
No 2: 'in' keyword 

Task:
Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
*/

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if ("Alan" in userObj && "Jeff" in userObj&& "Sarah" in userObj&& "Ryan" in userObj)
    {
      return true;
    }else
    {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
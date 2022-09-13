/*
When we go deeper inside in JavaScript Arrays, I mean when we make nested arrays then we give it a names:
level 1: the outer most []
level 2: [["level One"]]
level 3: [[["Deeper"]]]
level 4: [[[["Deepest"]]]]
level 5: [[[[["Deepest-est"]]]]]

We often need these kind of nested arrays when we dealing with the larg and complex data.

Task:
We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
*/

let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested',
      ['loop', 'shift', 6, 7, 1000, 'method', 'deep',
        ['concat', false, true, 'spread', 'array', 'deeper',
          ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest']
        ]  
      ]
    ],
    // ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];
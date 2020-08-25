// write a function that returns the sum of all the numbers that are either 'even', or 'odd'

const conditionalAdding = function(values, condition) {
  let sum = 0;
  for (let i = 0; len = values.length; i++) {
    sum += values[i];

    if (values[i] % 2 === 0 )
        condition = "even"
    else
        condition = "odd"

        console.log(values, condition);
    }

    return sum;
    
  };
  
//It makes an infinite loop...

  
  // Your code here


console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
console.log(conditionalAdding([], "odd"));
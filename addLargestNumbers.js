const addLargestNumbers = function(data) {
  let larNum = 0;
  let secLarNum = 0;

  larNum = data[0]

  for (i = 0; i < data.length; i++) {
    if (data[i] > secLarNum && data[i] < larNum) {
      secLarNum = data[i];
    } else if (data[i] > larNum && data[i] > secLarNum) {
      larNum = data[i]
    }
    // console.log(larNum, secLarNum);
  }

  
  return larNum + secLarNum

  // Put your solution here
};

console.log(addLargestNumbers([1, 10]));
console.log(addLargestNumbers([1, 2, 3]));
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
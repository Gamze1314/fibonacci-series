function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  let lastTwo = [0, 1];

  for (let i = 0; i < num - 1; ++i) {
    const sum = lastTwo[0] + lastTwo[1];
    lastTwo = [lastTwo[1], sum];
  }

  return lastTwo[1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// num is an array
// first two elements are 0 and 1.

// find the nth element in the sequence. 1st = > 0, 2nd => 1, sum = 1

// every value is the sum of two values preceeding it.

// num array is not empty.
// iterate through the num
// compute sum
// return num[i] element(sum of last two)

// And a written explanation of your solution

// if num is less than 2, then I can iterate through the array and find the sum of last two elements, if nth element sum of two values preceeding it, then i need sum variable to compute the next element and return. I can store two values , where i can pop the 0th element every time i update the sum.

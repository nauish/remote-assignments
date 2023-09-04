/** Constraint:
 * Do not use built-in Math functions or array methods */

function max(numbers) {
  // Your code here, for-loop method preferred
  let currentMaxNumber = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > currentMaxNumber) {
      currentMaxNumber = numbers[index];
    }
  }
  return currentMaxNumber;
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7

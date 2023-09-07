/** Constraint:
 * Do not use built-in Math functions */

function max(numbers) {
  // Your code here, for-loop method preferred
  // Iterate through the array and replace maxNumber if currentNumber is larger than it.
  let currentMaxNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > currentMaxNumber) {
      currentMaxNumber = numbers[i];
    }
  }
  return currentMaxNumber;
}

// Try for of loop for more readability.
function maxForOfLoop(numbers) {
  let currentMaxNumber = 0;
  for (number of numbers) {
    if (number > currentMaxNumber) currentMaxNumber = number;
  }
  return currentMaxNumber;
}

// My attempt to make the function as concise as possible.
function maxReduce(numbers) {
  return numbers.reduce(
    (currentMaxNumber, thisNumber) =>
      thisNumber > currentMaxNumber ? thisNumber : currentMaxNumber,
    0
  );
}

function findPosition(numbers, target) {
  // your code here, for-loop method preferred
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
}

function findPositionReduce(numbers, target) {
  return numbers.reduce((accumulator, currentValue, currentIndex) => {
    return currentValue === target ? currentIndex : accumulator;
  }, -1);
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1

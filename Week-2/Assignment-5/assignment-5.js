function binarySearchPosition(numbers, target) {
  // your code here
  // Store the leftmost and rightmost position
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    // Calculate current middle value, and convert it to an integer
    let currentMiddle = Math.floor((left + right) / 2);
    // If the target is equal to the current middle, return position
    if (target === numbers[currentMiddle]) {
      return currentMiddle;
      // Else if the target is smaller than the current middle,
    } else if (target < numbers[currentMiddle]) {
      // the target might be between position 0 - current middle -1
      right = currentMiddle - 1;
      // Else if the target is larger than the current middle,
    } else if (target > numbers[currentMiddle]) {
      // it might be between current middle position + 1 and the rightmost number
      left = currentMiddle + 1;
    }
  }
  // If the no number left, return -1
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3

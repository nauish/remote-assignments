# Assignment 1: Function and Array

## How I Approached the Problems

### max(numbers)

I initialize a variable to store the max value, and then iterate through the array and compare if the value in the array is bigger than the value currently store in the variable.

This method has the time complexity of O(n) since it's a linear scan through front to end. And since we only store one variable, the space complexity is O(1)

### findPosition(numbers, target)

This problem is similar in that we also need to scan through the numbers to check if any value in the array matches the target and return its position.

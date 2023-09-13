# Two Sum

## How I Approach the Problem

I create an object to store the value and the position of the incoming nums array. Before we store the key value to object, we first calculate the difference between target and the number. If there is already an match in the object, return the position of the number stored in the object and the current item position. If the difference isn't in the object, store the current number as a key, the index number as its value.

## Big O

The time complexity is O(n) since in the worst case we only loop through once. The space complexity is also O(n) since we store an item in the object every time we haven't found the match, in the worst case we would store every item in the array to the object.

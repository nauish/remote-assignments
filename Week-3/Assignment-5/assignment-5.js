function twoSum(nums, target) {
  // your code here

  const numsObject = {}; // For example: {2:0, 7:1} (store the numbers in keys, positions in values)
  for (let i = 0; i < nums.length; i++) {
    /** For each iteration, calculate the difference between the target and the number.
     *  if the difference match a key in the object, return the value that was previously stored */
    const diff = target - nums[i];
    if (diff in numsObject) {
      return [numsObject[diff], i];
    }
    // If previous condition wasn't met, store the new key value pair in the object to be evaluated later.
    numsObject[nums[i]] = i;
  }
}

/** This was my first instinct when trying to solve this,
 *  we use a double for-loop to match two items and see if they add up to target
 *  It's less efficient since in the worst scenario we might find the match in the end, which is n**2
 */
function twoSumN2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/**
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0; // 1, 8, 11,
  let rightSum = 0; // 27, 20, 17, 11 --> 3

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  console.log(rightSum);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};

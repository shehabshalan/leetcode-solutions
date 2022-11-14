/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [nums[0]];
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = result[i] + nums[i + 1];
    result.push(sum);
  }

  return result;
};

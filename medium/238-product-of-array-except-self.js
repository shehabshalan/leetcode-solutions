/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let k = 0; k < nums.length; k++) {
      if (i != k) {
        product *= nums[k];
      }
    }

    result.push(product);
    product = 1;
  }

  return result;
};

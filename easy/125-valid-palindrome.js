/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const lower = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  const reversed = lower.split("").reverse().join("");
  return reversed === lower ? true : false;
};

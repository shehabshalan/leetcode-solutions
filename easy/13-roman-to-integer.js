/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  let prev = 0;
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const stringArray = s.split("");
  for (let i = stringArray.length - 1; i >= 0; i--) {
    curr = dic[stringArray[i]];
    if (curr < prev) {
      total -= curr;
    } else {
      total += curr;
    }

    prev = curr;
  }
  return total;
};

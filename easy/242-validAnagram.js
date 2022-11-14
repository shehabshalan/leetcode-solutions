const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let sArr = s.split("");
  let tArr = t.split("");
  sArr.sort();
  tArr.sort();

  for (let i = 0; i < s.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }

  return true;
};

console.log(isAnagram("aacc", "ccac"));

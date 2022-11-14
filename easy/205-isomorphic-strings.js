/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let obj_s = {};
  let obj_t = {};
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(obj_s).length === 0) {
      obj_s[s[i]] = t[i];
      obj_t[t[i]] = s[i];
    }
    if (obj_s.hasOwnProperty(s[i]) || obj_t.hasOwnProperty(t[i])) {
      if (obj_s[s[i]] !== t[i] || obj_t[t[i]] !== s[i]) {
        return false;
      }
    } else {
      obj_s[s[i]] = t[i];
      obj_t[t[i]] = s[i];
    }
  }

  return true;
};

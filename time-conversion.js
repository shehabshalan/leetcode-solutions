const timeConversion = (s) => {
  let result = "";
  let sArr = s.includes("PM")
    ? s.split("PM")[0].split(":")
    : s.split("AM")[0].split(":");
  const pmMap = new Map([
    ["01", "13"],
    ["02", "14"],
    ["03", "15"],
    ["04", "16"],
    ["05", "17"],
    ["06", "18"],
    ["07", "19"],
    ["08", "20"],
    ["09", "21"],
    ["10", "22"],
    ["11", "23"],
    ["12", "12"],
  ]);

  const amMap = new Map([["12", "00"]]);
  if (s.includes("PM")) {
    sArr[0] = pmMap.get(sArr[0]);
    result = sArr.join(":");
  } else {
    if (sArr[0] === "12") {
      sArr[0] = amMap.get(sArr[0]);
      result = sArr.join(":");
    } else {
      result = sArr.join(":");
    }
  }
  return result;
};

console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("12:01:00AM"));

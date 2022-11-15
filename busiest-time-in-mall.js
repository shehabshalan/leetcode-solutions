const input = [
  [1487799425, 14, 1], // 14
  [1487799425, 4, 0], // 10
  [1487799425, 2, 0], // 8
  [1487800378, 10, 1], // 18 ->
  [1487801478, 18, 0], // 0
  [1487801478, 18, 1], // 18 ->
  [1487901013, 1, 0], // 17
  [1487901211, 7, 1], // 24
  [1487901211, 7, 0], // 17
];

const findBusiestTime = (input) => {
  let maxPeople = 0;
  let timestamp = 0;
  let currentMax = 0;
  let currentTimeStampMx = 0;

  for (let i = 0; i < input.length; i++) {
    const people = input[i][1];
    const time = input[i][0];
    const in_out = input[i][2];
    const nextTimeStamp = i < input.length - 1 ? input[i + 1][0] : input[i][0];
    if (in_out === 0) {
      maxPeople = maxPeople - people;
      timestamp = time;
    } else {
      maxPeople = maxPeople + people;
      timestamp = time;
    }

    if (timestamp !== nextTimeStamp) {
      if (maxPeople > currentMax) {
        currentMax = maxPeople;
        currentTimeStampMx = timestamp;
      }
    }
  }
  return { currentMax, currentTimeStampMx };
};

console.log(findBusiestTime(input));

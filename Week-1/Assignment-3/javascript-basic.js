function countAandB(input) {
  // your code here
  let abCount = 0;
  const criteria = ["a", "b"];
  for (let i = 0; i < input.length; i++) {
    if (criteria.includes(input[i])) {
      abCount += 1;
    }
  }
  return abCount;
}

function toNumber(input) {
  // your code here
  const numberArr = [];
  input.forEach((letter) => {
    numberArr.push(letter.charCodeAt(0) - 96);
  });
  return numberArr;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]

function toNumberObj(input) {
  // I also created a match object to map the letters to numbers to practice getting key values using match().
  const match = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const numberArr = [];
  for (let i = 0; i < input.length; i++) {
    numberArr.push(match[input[i]]);
  }
  return numberArr;
}

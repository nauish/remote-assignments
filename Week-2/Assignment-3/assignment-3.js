function count(input) {
  // your code here
  let countObj = {};
  for (let i = 0; i < input.length; i++) {
    // Store the key and this encounter if not met
    if (input[i] in countObj == false) {
      countObj[input[i]] = 1;
    } else {
      countObj[input[i]] += 1;
    }
  }
  return countObj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
}

let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}

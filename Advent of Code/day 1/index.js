const fs = require("fs");

//Load and format data
var data = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n\n")
  .map((data) => data.split("\n"));

var largest, largest2, largest3;
largest = largest2 = largest3 = 0;

//Loop to find largest value
data.forEach((element) => {
  let count = 0;
  for (let i = 0; i < element.length; i++) {
    count = parseInt(element[i]) + count;
  }
  element = count;
  if (element > largest) {
    largest = element;
  } else if (element < largest && element > largest2) {
    largest2 = element;
  } else if (element < largest2 && element > largest3) {
    largest3 = element;
  }
});
console.log(largest + largest2 + largest3);

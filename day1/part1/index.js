const fs = require("node:fs");

const getSum = (values) => {
  return values
    .map((value) => value.replace(/\D/g, ""))
    .filter((value) => !isNaN(value) && value.length > 0)
    .map((value) => Number(value[0].concat(value[value.length - 1])))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const valuesFromFile = fs
  .readFileSync("input.txt", "utf-8")
  .toString()
  .split("\r\n");

const sum = getSum(valuesFromFile);

console.log(sum);
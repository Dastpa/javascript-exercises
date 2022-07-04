const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const sum = (arr) => {
  if (arr.length === 0) return 0;
	const numTotal = arr.reduce((total, num) => {
    return total + num;
  })
  return numTotal;
};

const multiply = (arr) => {
  if (arr.length === 0) return 0;
  const numTotal = arr.reduce((total, num) => {
    return total * num;
  })
  return numTotal;
};

const power = (a, b) => {
	return a ** b;
};

const factorial = (a) => {
  if (!a || a === 1) return 1;
  let output = a;
  while (a !== 1) {
    output *= (a - 1);
    a--;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

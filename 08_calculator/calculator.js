const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, elem) => total += elem, 0);
};

const multiply = function(array) {
  return array.reduce((multiplies, elem) => multiplies *= elem, 1);
};

const power = function(a, b) {
	let result = 1;
    for (let i = 1; i <= b; i++) {
    result *= a;
    }
	return result;
};

const factorial = function(num) {
	let result = 1;
    for (let i = 1; i <= num; i++) {
       result *= i;
    }
	return result;
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

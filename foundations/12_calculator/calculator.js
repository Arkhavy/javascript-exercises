const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(numberArray) {
	let sum = 0;
	for (let i = 0; i < numberArray.length; i++) {
		sum += numberArray[i];
	}
	return (sum);
};

const multiply = function(numberArray) {
	let product = 1;
	for (let i = 0; i < numberArray.length; i++) {
		product *= numberArray[i];
	}
	return (product);
};

const power = function(number, exponent) {
	let result = number;
	for (let i = 1; i < exponent; i++) {
		result *= number;
	}
	return (result);
};

const factorial = function(number) {
	if (number === 0) {
		return (1);
	}
	for (let i = number - 1; i > 0; i--) {
		number *= i;
	}
	return (number);
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

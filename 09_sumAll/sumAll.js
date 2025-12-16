function checkArguments(first, second) {
	// check non-number and non-array
	if (typeof(first) !== "number" || typeof(second) !== "number") {
		return (true);
	}

	// check non-positive
	if (first < 0 || second < 0) {
		return (true);
	}

	// check non-integer
	if (first !== Math.floor(first) || second !== Math.floor(second)) {
		return (true);
	}
	return (false);
}

const sumAll = function(first, second) {
	if (checkArguments(first, second)) {
		return ("ERROR");
	}
	let min = first < second ? first : second;
	let max = first > second ? first : second;
	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return (sum);
};

// Do not edit below this line
module.exports = sumAll;

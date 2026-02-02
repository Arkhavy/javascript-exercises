const fibonacci = function(numberGiven) {
	const count = parseInt(numberGiven);
	if (count < 0) {
		return ("OOPS");
	}
	if (count == 0) {
		return (0);
	}
	let previous = 0;
	let current = 1;
	let next = 1;
	for (let i = 1; i < count; i++) {
		next = previous + current;
		previous = current;
		current = next;
	}
	return (next);
};

// Do not edit below this line
module.exports = fibonacci;

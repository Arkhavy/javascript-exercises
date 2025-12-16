const removeFromArray = function(array, ...numberToRemove) {
	for (const arg of numberToRemove) {
		for (let i = array.length - 1; i >= 0; i--) {
			if (array[i] === arg) {
				array.splice(i, 1);
			}
		}
	}
	return (array);
};

// Do not edit below this line
module.exports = removeFromArray;

/**
 * TODO :
 * find ?
 * map ?
 * findIndex ?
 * How to use multiple arguments in callback functions -> arguments array or for of loop
 * Syntax of function expression and their use beside the dynamic aspect
 */
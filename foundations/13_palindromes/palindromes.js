const palindromes = function (str) {
	const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";

	const loweredStr = str.toLowerCase();
	const arrayStr = loweredStr.split("");
	const cleanArrayStr = arrayStr.filter((char) => {
		return (alphanum.includes(char));
	});

	
	const newStr = cleanArrayStr.join("");
	const reverseArrayStr = cleanArrayStr.reverse();
	const reverseStr = reverseArrayStr.join("");
	if (newStr === reverseStr) {
		return (true);
	}
	return (false);
};

// Do not edit below this line
module.exports = palindromes;

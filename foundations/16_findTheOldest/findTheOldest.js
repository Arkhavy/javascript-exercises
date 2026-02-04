const findTheOldest = function(people) {
	people = people.map((person) => {
		return ({
			name: person.name,
			age: person.yearOfDeath === undefined
				? new Date().getFullYear() - person.yearOfBirth
				: person.yearOfDeath - person.yearOfBirth,
		})
	});
	const oldestPerson = people.reduce((oldest, current) => {
		return (oldest.age > current.age ? oldest : current);
	});
	return (oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;

const peoples = [
	{ name: 'John', age: 20 },
	{ name: 'Jane', age: 21 },
	{ name: 'Bob', age: 22 },
	{ name: 'Mary', age: 23 },
	{ name: 'Peter', age: 24 },
	{ name: 'Alice', age: 25 },
	{ name: 'Sam', age: 26 },
	{ name: 'Max', age: 27 },
	{ name: 'Kate', age: 28 },
]
Array.prototype.filterImpl = function (callback) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			result.push(this[i])
		}
	}
	return result
}

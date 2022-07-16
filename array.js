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
Array.prototype.findLastImpl = function (callback) {
	let index = this.length - 1
	while (index >= 0) {
		if (callback(this[index])) {
			return this[index]
		}
		index--
	}
	return undefined
}

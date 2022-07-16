## Table of Contents
  - [Array Prototype at](#array-prototype-at)
  - [Array Prototype concat](#array-prototype-concat)
  - [Array Prototype copywithin](#array-prototype-copywithin)
  - [Array Prototype every](#array-prototype-every)
  - [Array Prototype fill](#array-prototype-fill)
  - [Array Prototype filter](#array-prototype-filter)
  - [Array Prototype find](#array-prototype-find)
## Array Prototype at
```
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
Array.prototype.atImpl = function (index) {
	return this[index]
}
const At = (array, index) => {
	return array[index]
}
```
## Array Prototype concat
```
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
Array.prototype.concatImpl = function (arr) {
	const newArr = this.slice()
	newArr.push(...arr)
	return newArr
}
function concat(arrPrv, arr) {
	const newArr = arrPrv
	newArr.push(...arr)
	return newArr
}
```
## Array Prototype copywithin
```
const languages = ['JavaScript[0]', 'Python[1]', 'Ruby[2]', 'Java[3]', 'C++[4]']
function copyWithin(array, target, start, end) {
	let shift = target - start
	if (shift < 0) {
		end = Math.min(end, array.length)
		for (let i = start; i < end; i++) {
			array[i + shift] = array[i]
		}
	} else {
		for (let i = Math.min(end, array.length - shift) - 1; i >= start; i--) {
			array[i + shift] = array[i]
		}
	}
	return array
}
```
## Array Prototype every
```
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
Array.prototype.everyImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (!callback(this[i], i, this)) {
			return false
		}
	}
	return true
}
```
## Array Prototype fill
```
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
Array.prototype.fillImpl = function (value, start, end) {
	start = start || 0
	end = end || this.length
	for (let i = start; i < end; i++) {
		this[i] = value
	}
}
```
## Array Prototype filter
```
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
```
## Array Prototype find
```
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
Array.prototype.findImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			return this[i]
		}
	}
	return undefined
}
```
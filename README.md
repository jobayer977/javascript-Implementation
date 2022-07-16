## Table of Contents
  - [Array Prototype at](#array-prototype-at)
  - [Array Prototype concat](#array-prototype-concat)
  - [Array Prototype copywithin](#array-prototype-copywithin)
  - [Array Prototype every](#array-prototype-every)
  - [Array Prototype fill](#array-prototype-fill)
  - [Array Prototype filter](#array-prototype-filter)
  - [Array Prototype find](#array-prototype-find)
  - [Array Prototype findLast](#array-prototype-findLast)
  - [Array Prototype flat](#array-prototype-flat)
  - [Array Prototype forEach](#array-prototype-forEach)
  - [Array Prototype includes](#array-prototype-includes)
  - [Array Prototype indexOf](#array-prototype-indexOf)
  - [Array Prototype join](#array-prototype-join)
  - [Array Prototype lastIndexOf](#array-prototype-lastIndexOf)
  - [Array Prototype map](#array-prototype-map)
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
## Array Prototype findLast
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

```
## Array Prototype flat
```
const arr1 = [0, 1, 2, [3, 4]]
Array.prototype.flatImpl = function (depth = 1) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		const item = this[i]
		if (Array.isArray(item)) {
			result.push(...item.flatImpl(depth - 1))
		} else {
			result.push(item)
		}
	}
	return result
}

```
## Array Prototype forEach
```
const arr1 = [0, 1, 2, 3, 4]
Array.prototype.forEachImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

```
## Array Prototype includes
```
const arr1 = [0, 1, 2, 3, 4]

Array.prototype.includesImpl = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return true
		}
	}
	return false
}


```
## Array Prototype indexOf
```
const arr1 = [0, 1, 2, 3, 4]

Array.prototype.indexOfImpl = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return i
		}
	}
	return -1
}


```
## Array Prototype join
```
const arr1 = [0, 1, 2, 3, 4]

Array.prototype.joinImpl = function (separator) {
	const arr = this
	let str = ''
	for (let i = 0; i < arr.length; i++) {
		str += arr[i]
		if (i < arr.length - 1) {
			str += separator
		}
	}
	return str
}


```
## Array Prototype lastIndexOf
```
const arr = [0, 1, 2, 3, 4, 2]

Array.prototype.lastIndexOfImpl = function (value) {
	for (let i = this.length - 1; i >= 0; i--) {
		if (this[i] === value) {
			return i
		}
	}
	return -1
}

```
## Array Prototype map
```
const arr = [0, 1, 2, 3, 4, 2]

Array.prototype.mapImpl = function (fn) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i]))
	}
	return result
}

```

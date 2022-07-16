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
Array.prototype.atImpl = function (index) {
	return this[index]
}
```
## Array Prototype concat
```
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
Array.prototype.forEachImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}
```
## Array Prototype includes
```
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
Array.prototype.mapImpl = function (fn) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i]))
	}
	return result
}
```

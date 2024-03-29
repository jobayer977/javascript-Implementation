### These JavaScript methods of arrays have been re-arranged to make them simply explain how actually things are working.

## Table of Contents

- [Array](#array)
  - [Array Prototype at](#array-prototype-at)
  - [Array Prototype concat](#array-prototype-concat)
  - [Array Prototype copywithin](#array-prototype-copywithin)
  - [Array Prototype every](#array-prototype-every)
  - [Array Prototype fill](#array-prototype-fill)
  - [Array Prototype filter](#array-prototype-filter)
  - [Array Prototype find](#array-prototype-find)
  - [Array Prototype findLast](#array-prototype-findlast)
  - [Array Prototype flat](#array-prototype-flat)
  - [Array Prototype forEach](#array-prototype-foreach)
  - [Array Prototype includes](#array-prototype-includes)
  - [Array Prototype indexOf](#array-prototype-indexof)
  - [Array Prototype join](#array-prototype-join)
  - [Array Prototype lastIndexOf](#array-prototype-lastindexof)
  - [Array Prototype map](#array-prototype-map)
  - [Array Prototype pop](#array-prototype-pop)
  - [Array Prototype push](#array-prototype-push)
  - [Array Prototype reduce](#array-prototype-reduce)
  - [Array Prototype reverse](#array-prototype-reverse)
  - [Array Prototype shift](#array-prototype-shift)
  - [Array Prototype slice](#array-prototype-slice)
  - [Array Prototype some](#array-prototype-some)
  - [Array Prototype unshift](#array-prototype-unshift)
  - [Array Prototype unshift](#array-prototype-unshift)
- [Decorators](#decorators)
  - [Debounce](#debounce)
- [Data Structures](#data-structures)
  - [Stack](#Stack)

## Array

### Array Prototype at

```
Array.prototype.atImpl = function (index) {
	return this[index]
}
```

### Array Prototype concat

```
Array.prototype.concatImpl = function (arr) {
	const newArr = this.slice()
	newArr.push(...arr)
	return newArr
}
```

### Array Prototype copywithin

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

### Array Prototype every

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

### Array Prototype fill

```
Array.prototype.fillImpl = function (value, start, end) {
	start = start || 0
	end = end || this.length
	for (let i = start; i < end; i++) {
		this[i] = value
	}
}
```

### Array Prototype filter

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

### Array Prototype find

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

### Array Prototype findLast

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

### Array Prototype flat

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

### Array Prototype forEach

```
Array.prototype.forEachImpl = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}
```

### Array Prototype includes

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

### Array Prototype indexOf

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

### Array Prototype join

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

### Array Prototype lastIndexOf

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

### Array Prototype map

```
Array.prototype.mapImpl = function (fn) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i]))
	}
	return result
}
```

### Array Prototype pop

```
Array.prototype.popImpl = function () {
	const last = this[this.length - 1]
	this.length--
	return last
}
```

### Array Prototype push

```
Array.prototype.pushImpl = function (...args) {
	for (let i = 0; i < args.length; i++) {
		this[this.length] = args[i]
	}
	return this.length
}
```

### Array Prototype reduce

```
Array.prototype.reduceImpl = function (callback, initialValue) {
	let accumulator = initialValue
	for (let i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this)
	}
	return accumulator
}

```

### Array Prototype reverse

```
Array.prototype.reverseImpl = function () {
	let arr = this
	let result = []
	for (let i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i])
	}
	return result
}
```

### Array Prototype shift

```
Array.prototype.shiftImpl = function () {
	if (this.length === 0) {
		return []
	}
	const first = this[0]
	for (let i = 0; i < this.length - 1; i++) {
		this[i] = this[i + 1]
	}
	this.length--
	return first
}
```

### Array Prototype slice

```
Array.prototype.sliceImpl = function (start = 0, end = this.length) {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		if (start <= i && end >= i) {
			arr.push(this[i])
		}
	}
	return arr
}
```

### Array Prototype some

```
Array.prototype.someImpl = function (callback) {
	let passed = false
	for (let i = 0; i < this.length; i++) {
		if (callback && callback(this[i], i, this)) {
			passed = true
			break
		} else {
			passed = false
		}
	}
	return passed
}

```

### Array Prototype unshift

```
Array.prototype.unshiftImpl = function (...args) {
	for (let i = 0; i < args.length; i++) {
		this.splice(i, 0, args[i])
	}
	return this.length
}


```

## Decorators

### Debounce

```
export function debounce(delay: number) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value
		let debounceTimer: any
		descriptor.value = function (...args: any[]) {
			if (debounceTimer) {
				clearTimeout(debounceTimer)
			}
			debounceTimer = setTimeout(() => originalMethod.apply(this, args), delay)
		}
	}
}
class Example {
	@debounce(1000)
	doSomething() {
		console.log("do something")
	}
}
const example = new Example()
example.doSomething()

```

## Data Structures

### Stack

```
class Stack {
	constructor() {
		this.items = []
	}
	push(item) {
		this.items.push(item)
	}
	pop() {
		return this.items.pop()
	}
	peek() {
		return this.items[this.items.length - 1]
	}
	isEmpty() {
		return this.items.length === 0
	}
	clear() {
		this.items = []
	}
}


```

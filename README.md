
## 1. Custom At Function implementation.
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

Array.prototype.customAt = function (index) {
	return this[index]
}
const At = (array, index) => {
	return array[index]
}

```

## 2. Custom Contact Functions implementation.
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
Array.prototype.customConcat = function (arr) {
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
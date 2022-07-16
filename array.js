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
console.log(arr1.flatImpl(2))
